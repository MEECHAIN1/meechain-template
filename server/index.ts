import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Health check endpoint with secrets validation
app.get('/health', (req, res) => {
  try {
    const { checkSecrets } = require('./utils/secrets-checker');
    const secretsCheck = checkSecrets();

    res.json({ 
      status: secretsCheck.ok ? 'healthy' : 'warning',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      secrets: {
        status: secretsCheck.status,
        missing: secretsCheck.missing.length,
        warnings: secretsCheck.warnings.length
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: 'Health check failed'
    });
  }
});

(async () => {
  const httpServer = await registerRoutes(app);
  if (app.get("env") === "development") {
  } else {
    serveStatic(app);
  }

const port = process.env.PORT || 3001; 
 httpServer.listen(port, () => {
  log(`Server listening on port ${port} in ${app.get("env")} mode`);
 });

 if (app.get("env") === "development") {
 } else {
  serveStatic(app);
 }
})();
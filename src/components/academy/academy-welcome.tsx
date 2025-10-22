
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Trophy,
  Target,
  Heart,
  Star
} from 'lucide-react';
import logo from '@/assets/branding/logo.png';

interface AcademyWelcomeProps {
  onStartJourney: () => void;
  onSkip?: () => void;
}

export function AcademyWelcome({ onStartJourney, onSkip }: AcademyWelcomeProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [meeBotEmotion, setMeeBotEmotion] = useState<'happy' | 'waving' | 'excited'>('happy');

  useEffect(() => {
    // Animation sequence for MeeBot
    const interval = setInterval(() => {
      setMeeBotEmotion('waving');
      setShowSparkles(true);
      
      setTimeout(() => {
        setMeeBotEmotion('happy');
        setShowSparkles(false);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    setIsAnimating(true);
    setMeeBotEmotion('excited');
    
    setTimeout(() => {
      onStartJourney();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full space-y-8 text-center">
        
        {/* Progress Indicator */}
        <div className="flex justify-center space-x-3 mb-8">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>

        {/* Main Welcome Card */}
        <Card className="bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 border-cyan-500/30 backdrop-blur-sm overflow-hidden relative">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full -translate-y-6 translate-x-6"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full translate-y-4 -translate-x-4"></div>
          
          {/* Floating sparkles */}
          {showSparkles && (
            <>
              <Sparkles className="absolute top-4 right-8 w-4 h-4 text-yellow-400 animate-bounce" />
              <Sparkles className="absolute top-12 left-12 w-3 h-3 text-cyan-400 animate-pulse" />
              <Sparkles className="absolute bottom-8 right-12 w-5 h-5 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </>
          )}

          <CardContent className="p-8 relative z-10">
            
            {/* MeeBot Avatar with Animation */}
            <div className="relative mb-6">
              <div 
                className={`w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl transition-all duration-500 ${
                  meeBotEmotion === 'excited' ? 'scale-125 animate-bounce' :
                  meeBotEmotion === 'waving' ? 'animate-pulse scale-110' : 
                  'scale-100 hover:scale-105'
                }`}
                style={{
                  filter: meeBotEmotion === 'excited' ? 'brightness(1.3) saturate(1.2)' : 'brightness(1)',
                  boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4)'
                }}
              >
                <img 
                  src={logoUrl} 
                  alt="MeeBot" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              {/* MeeBot emotion indicator */}
              {meeBotEmotion === 'waving' && (
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                  👋
                </div>
              )}
              
              {meeBotEmotion === 'excited' && (
                <div className="absolute -top-2 -right-2 text-2xl animate-spin">
                  ✨
                </div>
              )}
            </div>

            {/* Welcome Messages */}
            <div className="space-y-4 mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Welcome to MeeChain Academy
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  🎓 ยินดีต้อนรับนักสำรวจ!
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  ผมคือ MeeBot ผู้ช่วยที่จะพาคุณไปผจญภัยใน Web3 แบบง่าย ๆ และสนุก! 
                  เราจะเรียนรู้ไปด้วยกันทีละขั้นตอน 🚀
                </p>
              </div>
            </div>

            {/* Features Preview */}
            <div className="bg-slate-700/30 rounded-xl p-4 mb-6 border border-slate-600/30">
              <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                คุณจะได้เรียนรู้:
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Target className="w-3 h-3 text-blue-400" />
                  <span>เชื่อมต่อ Wallet</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Trophy className="w-3 h-3 text-yellow-400" />
                  <span>การใช้โทเค็น</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Star className="w-3 h-3 text-purple-400" />
                  <span>Swap & Bridge</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Heart className="w-3 h-3 text-red-400" />
                  <span>ความปลอดภัย</span>
                </div>
              </div>
            </div>

            {/* MeeBot Speech Bubble */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4 mb-6 relative">
              {/* Speech bubble tail */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l border-t border-cyan-500/30 rotate-45"></div>
              
              <div className="flex items-start gap-3">
                <Bot className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cyan-100 text-sm italic leading-relaxed">
                    "พร้อมแล้วมั้ยล่ะ? เราจะไปลุยโลก Web3 กันแบบไม่เครียด! 
                    ผมจะดูแลคุณทุกขั้นตอน และรับรองว่าจะสนุกแน่นอน! 🎉"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleStartClick}
                disabled={isAnimating}
                className={`w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-4 text-lg transition-all duration-300 ${
                  isAnimating ? 'animate-pulse scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  {isAnimating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>กำลังเตรียมการผจญภัย...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5" />
                      <span>เริ่มการผจญภัย!</span>
                    </>
                  )}
                </div>
              </Button>

              {onSkip && (
                <Button
                  variant="ghost"
                  onClick={onSkip}
                  className="w-full text-gray-400 hover:text-white hover:bg-white/5"
                >
                  ข้ามไปใช้งานเลย
                </Button>
              )}
            </div>

            {/* Rewards Teaser */}
            <div className="mt-6 pt-4 border-t border-slate-600/30">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <Badge variant="outline" className="border-yellow-500/30 text-yellow-300 bg-yellow-500/10">
                  🏆 5 Badges
                </Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-500/10">
                  ⭐ 1000+ EXP
                </Badge>
                <Badge variant="outline" className="border-purple-500/30 text-purple-300 bg-purple-500/10">
                  🎁 Rewards
                </Badge>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                รางวัลพิเศษรอคุณอยู่ที่ปลายทาง!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom hint */}
        <p className="text-gray-500 text-sm">
          ใช้เวลาประมาณ 10-15 นาที • เหมาะสำหรับมือใหม่
        </p>
      </div>
    </div>
  );
}

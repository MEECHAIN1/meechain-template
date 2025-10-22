/**
 * MeeBot TTS (Text-to-Speech) Configuration
 * การตั้งค่าระบบเสียงพูดของ MeeBot
 */

export interface TTSConfig {
  engine: 'browser' | 'google' | 'azure'
  voice: string
  language: string
  pitch: number // 0-2
  rate: number  // 0.1-10
  volume: number // 0-1
}

export const defaultTTSConfig: TTSConfig = {
  engine: 'browser',
  voice: 'th-TH-Standard-A',
  language: 'th-TH',
  pitch: 1.0,
  rate: 1.0,
  volume: 0.8
}

/**
 * Text-to-Speech Service
 */
export class TTSService {
  private config: TTSConfig
  private synthesis: SpeechSynthesis | null = null

  constructor(config: TTSConfig = defaultTTSConfig) {
    this.config = config
    
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synthesis = window.speechSynthesis
    }
  }

  /**
   * พูดข้อความ
   */
  speak(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.synthesis) {
        reject(new Error('Speech synthesis not supported'))
        return
      }

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = this.config.language
      utterance.pitch = this.config.pitch
      utterance.rate = this.config.rate
      utterance.volume = this.config.volume

      utterance.onend = () => resolve()
      utterance.onerror = (event) => reject(event)

      this.synthesis.speak(utterance)
    })
  }

  /**
   * หยุดการพูด
   */
  stop() {
    if (this.synthesis) {
      this.synthesis.cancel()
    }
  }

  /**
   * ตรวจสอบว่ากำลังพูดอยู่หรือไม่
   */
  isSpeaking(): boolean {
    return this.synthesis ? this.synthesis.speaking : false
  }
}

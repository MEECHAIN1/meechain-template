/**
 * MeeBot Voice Trigger System
 * จัดการการเปิดใช้งานเสียงและ voice recognition
 */

export interface VoiceTriggerConfig {
  wakeWord: string
  language: string
  enabled: boolean
}

export class VoiceTrigger {
  private config: VoiceTriggerConfig
  private recognition: any
  private isListening: boolean = false

  constructor(config: VoiceTriggerConfig) {
    this.config = config
  }

  /**
   * เริ่มต้นการฟังคำสั่งเสียง
   */
  start(onTrigger: (transcript: string) => void) {
    if (!this.config.enabled) {
      console.log('Voice trigger is disabled')
      return
    }

    // TODO: ใช้ Web Speech API หรือ external service
    console.log(`Starting voice trigger with wake word: ${this.config.wakeWord}`)
    this.isListening = true

    // Mock implementation
    // ในการใช้งานจริงจะใช้ SpeechRecognition API
  }

  /**
   * หยุดการฟังคำสั่งเสียง
   */
  stop() {
    this.isListening = false
    console.log('Voice trigger stopped')
  }

  /**
   * ตรวจสอบว่ากำลังฟังอยู่หรือไม่
   */
  getStatus(): boolean {
    return this.isListening
  }
}

// Default configuration
export const defaultVoiceConfig: VoiceTriggerConfig = {
  wakeWord: 'Hey MeeBot',
  language: 'th-TH',
  enabled: true
}

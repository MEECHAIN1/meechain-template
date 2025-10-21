import { useState, useEffect } from 'react'

interface BoardProgress {
  boardId: string
  totalTasks: number
  completedTasks: number
  percentage: number
  lastUpdated: Date
}

export function useBoardProgress(boardId: string) {
  const [progress, setProgress] = useState<BoardProgress | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!boardId) return

    // TODO: ดึงข้อมูลจาก Firebase
    const mockProgress: BoardProgress = {
      boardId,
      totalTasks: 10,
      completedTasks: 3,
      percentage: 30,
      lastUpdated: new Date()
    }

    setTimeout(() => {
      setProgress(mockProgress)
      setLoading(false)
    }, 500)
  }, [boardId])

  const updateProgress = async (completedCount: number) => {
    if (!progress) return

    const newProgress = {
      ...progress,
      completedTasks: completedCount,
      percentage: (completedCount / progress.totalTasks) * 100,
      lastUpdated: new Date()
    }

    setProgress(newProgress)
    
    // TODO: บันทึกลง Firebase
    console.log('Updating progress:', newProgress)
  }

  return { progress, loading, updateProgress }
}

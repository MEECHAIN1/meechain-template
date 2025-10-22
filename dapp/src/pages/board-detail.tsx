interface BoardDetailProps {
  boardId: string
}

export default function BoardDetail({ boardId }: BoardDetailProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📋 Board Detail</h1>
      <p>Board ID: {boardId}</p>
      {/* TODO: โหลดข้อมูล Board จาก Firebase */}
      {/* TODO: แสดง TaskList และ ProgressBar */}
      {/* TODO: เปิดใช้งาน MeeBot ให้คำแนะนำ */}
    </div>
  )
}

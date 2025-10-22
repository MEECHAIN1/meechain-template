interface Task {
  id: string
  title: string
  completed: boolean
  description?: string
}

interface TaskListProps {
  tasks: Task[]
  onToggle?: (taskId: string) => void
}

export default function TaskList({ tasks, onToggle }: TaskListProps) {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3>รายการงาน</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id}
            style={{
              padding: '1rem',
              marginBottom: '0.5rem',
              backgroundColor: task.completed ? '#e8f5e9' : '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => onToggle?.(task.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => {}}
                style={{ width: '20px', height: '20px' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontWeight: '500',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#666' : '#000'
                }}>
                  {task.title}
                </div>
                {task.description && (
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>
                    {task.description}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>
          ยังไม่มีงานในรายการ
        </p>
      )}
    </div>
  )
}

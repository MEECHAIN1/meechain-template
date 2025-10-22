/**
 * Board templates for quick start
 * Community-contributed configuration
 */

export interface Task {
  id: string;
  title: string;
  description?: string;
  estimatedTime?: number; // in minutes
  priority?: 'low' | 'medium' | 'high';
}

export interface BoardTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  tasks: Task[];
  tags: string[];
}

/**
 * Pre-defined board templates
 */
export const boardTemplates: BoardTemplate[] = [
  {
    id: 'learning-web3',
    name: 'เรียนรู้ Web3 พื้นฐาน',
    description: 'Board สำหรับผู้เริ่มต้นที่ต้องการเรียนรู้ Web3',
    category: 'learning',
    tags: ['web3', 'blockchain', 'beginner'],
    tasks: [
      {
        id: 'task-1',
        title: 'ติดตั้ง MetaMask',
        description: 'ติดตั้ง MetaMask extension และสร้าง wallet',
        estimatedTime: 10,
        priority: 'high'
      },
      {
        id: 'task-2',
        title: 'เรียนรู้ Blockchain basics',
        description: 'อ่านบทเรียนเกี่ยวกับ blockchain',
        estimatedTime: 30,
        priority: 'high'
      },
      {
        id: 'task-3',
        title: 'ทดลองส่ง transaction',
        description: 'ส่ง test transaction บน testnet',
        estimatedTime: 20,
        priority: 'medium'
      },
      {
        id: 'task-4',
        title: 'สร้าง Smart Contract แรก',
        description: 'เขียน Hello World contract ด้วย Solidity',
        estimatedTime: 45,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'first-contribution',
    name: 'Contributor แรกของคุณ',
    description: 'เริ่มต้นการเป็น contributor ใน MeeChain',
    category: 'contribution',
    tags: ['contributor', 'github', 'beginner'],
    tasks: [
      {
        id: 'task-1',
        title: 'Fork repository',
        description: 'Fork MeeChain template repository',
        estimatedTime: 5,
        priority: 'high'
      },
      {
        id: 'task-2',
        title: 'อ่าน CONTRIBUTING.md',
        description: 'เข้าใจแนวทางการ contribute',
        estimatedTime: 15,
        priority: 'high'
      },
      {
        id: 'task-3',
        title: 'สร้าง module แรก',
        description: 'สร้าง external module ใน external-modules/',
        estimatedTime: 60,
        priority: 'medium'
      },
      {
        id: 'task-4',
        title: 'เขียน tests',
        description: 'เขียน unit tests สำหรับ module',
        estimatedTime: 30,
        priority: 'medium'
      },
      {
        id: 'task-5',
        title: 'ส่ง Pull Request',
        description: 'สร้าง PR และรอการ review',
        estimatedTime: 15,
        priority: 'high'
      }
    ]
  },
  {
    id: 'daily-productivity',
    name: 'ผลิตภาพรายวัน',
    description: 'จัดการงานประจำวันให้เสร็จตามเป้า',
    category: 'productivity',
    tags: ['daily', 'productivity', 'habits'],
    tasks: [
      {
        id: 'task-1',
        title: 'Morning routine',
        description: 'ออกกำลังกาย 30 นาที',
        estimatedTime: 30,
        priority: 'high'
      },
      {
        id: 'task-2',
        title: 'Deep work session 1',
        description: 'งานสำคัญที่ต้องทำให้เสร็จ',
        estimatedTime: 90,
        priority: 'high'
      },
      {
        id: 'task-3',
        title: 'Check emails',
        description: 'ตอบอีเมลที่สำคัญ',
        estimatedTime: 20,
        priority: 'medium'
      },
      {
        id: 'task-4',
        title: 'Deep work session 2',
        description: 'งานโปรเจคหลัก',
        estimatedTime: 90,
        priority: 'high'
      },
      {
        id: 'task-5',
        title: 'Learning time',
        description: 'เรียนรู้สิ่งใหม่ 30 นาที',
        estimatedTime: 30,
        priority: 'low'
      }
    ]
  }
];

/**
 * Get template by ID
 */
export function getTemplateById(id: string): BoardTemplate | undefined {
  return boardTemplates.find(template => template.id === id);
}

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: string): BoardTemplate[] {
  return boardTemplates.filter(template => template.category === category);
}

/**
 * Get templates by tag
 */
export function getTemplatesByTag(tag: string): BoardTemplate[] {
  return boardTemplates.filter(template => template.tags.includes(tag));
}

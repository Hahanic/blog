import Note  from '@/contents/notes/index.vue'
import { NotebookPenIcon } from 'lucide-vue-next'

export const routes = {
  path: 'notes',
  component: Note,
  name: 'notes',
  title: '笔记',
  icon: NotebookPenIcon,
  isSidebarTop: true,
  isConformitiesHidden: true,
  children: [
    {
      path: 'learning1',
      name: 'learning1',
      title: 'learning1',
      component: () => import('@/contents/notes/learning1.vue')
    }
  ]
}
import { type DocumentRoute } from "@/router/interfaces";
import { NotebookPenIcon } from 'lucide-vue-next'

const Note = () => import('@/contents/notes/index.vue')

export const routes: DocumentRoute = {
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
      title: '学习1',
      component: () => import('@/contents/notes/learning1.vue')
    }
  ]
}
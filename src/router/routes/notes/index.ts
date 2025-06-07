import { type DocumentRoute } from "@/router/interfaces";
import { NotebookPenIcon } from 'lucide-vue-next'

const Note = () => import('@/contents/notes/index.vue')

export const routes: DocumentRoute = {
  path: 'notes',
  component: Note,
  name: '笔记',
  title: '笔记',
  icon: NotebookPenIcon,
  children: [
    {
      path: 'learning1',
      name: '学习1',
      title: '学习1',
      component: () => import('@/contents/notes/learning1.vue')
    }
  ]
}
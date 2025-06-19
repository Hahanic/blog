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
      path: 'hight_frequency_event',
      name: '防抖与节流',
      title: '防抖与节流',
      tags: ['前端', 'Javascript'],
      createDate: new Date(2025, 5, 9, 20, 46),
      modifyDate: new Date(2025, 5, 9, 20, 46),
      component: () => import('@/contents/notes/HfrequencyEvent.vue')
    },
    {
      path: 'systematic_learning_of_vite',
      name: '系统学习Vite',
      title: '系统学习Vite',
      tags: ['前端', '打包工具'],
      createDate: new Date(2025, 5, 13, 23, 2),
      modifyDate: new Date(2025, 5, 13, 23, 2),
      component: () => import('@/contents/notes/Vite.vue')
    }
  ]
}
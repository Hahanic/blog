import { type DocumentRoute } from "@/router/interfaces";
import { FolderCodeIcon } from 'lucide-vue-next'

const Project = () => import('@/contents/project/index.vue')

export const routes: DocumentRoute = {
  path: 'project',
  component: Project,
  name: '项目',
  title: '项目',
  icon: FolderCodeIcon,
  children: [
    {
      path: 'full_stack_chat',
      name: '聊天应用',
      title: '聊天应用',
      tags: ['全栈', 'React', 'Typescript'],
      createDate: new Date(2025, 4, 20, 12, 34),
      modifyDate: new Date(2025, 4, 20, 12, 34),
      component: () => import('@/contents/project/FullStackChat.vue')
    }
  ]
}
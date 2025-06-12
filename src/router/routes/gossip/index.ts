import { type DocumentRoute } from "@/router/interfaces";
import { MessageSquareMoreIcon } from 'lucide-vue-next'

const Gossip = () => import('@/contents/gossip/index.vue')

export const routes: DocumentRoute = {
  path: 'gossip',
  component: Gossip,
  name: '杂谈',
  title: '杂谈',
  icon: MessageSquareMoreIcon,
  children: [
    {
      path: 'Utawarerumono',
      name: '传颂之物游玩感想',
      title: '传颂之物游玩感想',
      tags: ['游戏', '视觉小说'],
      createDate: new Date(2025, 5, 1, 20, 46),
      modifyDate: new Date(2025, 5, 1, 20, 46),
      component: () => import('@/contents/gossip/Utawarerumono.vue')
    }
  ]
}
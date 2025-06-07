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
      path: 'gossip1',
      name: '为什么天空这么蓝1',
      title: '杂谈1',
      component: () => import('@/contents/gossip/gossip1.vue')
    }
  ]
}
<template>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :width="width"
        :collapsed="sidebarStore.isCollapsed"
        show-trigger
        @collapse="handleCollapse"
        @expand="handleExpand"
        :native-scrollbar="false"
      >
        <n-menu
          :collapsed="sidebarStore.isCollapsed"
          :collapsed-width="collapsedWidth"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :indent="indent"
        />
      </n-layout-sider>
</template>

<script setup lang="ts">
import { computed, h, type Component } from 'vue'
import { NIcon, type MenuOption } from 'naive-ui'
import { HomeIcon, NotebookPenIcon, MessageSquareMoreIcon, ExternalLinkIcon, BookmarkXIcon } from 'lucide-vue-next'
import { useWindowStore } from '@/stores/window'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { RouterLink } from 'vue-router'

const windowStore = useWindowStore()
const sidebarStore = useSidebarStore()

const handleCollapse = sidebarStore.handleCollapse
const handleExpand = sidebarStore.handleExpand

const collapsedWidth = computed(() => (windowStore.width < 600 ? 0 : 64))//折叠时的宽度
const width = computed(() => (windowStore.width < 600 ? 180 : 240))//展开时的宽度
const indent = computed(() => (windowStore.width < 600 ? 16 : 22))//控制下级菜单向右的缩进距离

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, {to:{path:'/'}}, {default:() => '主页'}),
    key: 'homepage',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '笔记',
    key: 'notes',
    icon: renderIcon(NotebookPenIcon),
    disabled: false,
    children: [
      {
        label: () => h(RouterLink, {to:{path:'/notes/learning1'}}, {default:() => '学习1'}),
        key: 'learning1'
      }
    ]
  },
  {
    label: '杂谈',
    key: 'gossip',
    disabled: false,
    icon: renderIcon(MessageSquareMoreIcon),
    children: [
      {
        label: '维吉尔',
        key: 'V'
      }
    ]
  },
  {
    label: '链接',
    key: 'link',
    icon: renderIcon(ExternalLinkIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(ExternalLinkIcon)

          },
          {
            label: '贾丘',
            key: 'jiaqiu',
            icon: renderIcon(ExternalLinkIcon)

          }
        ]
      },
      {
        label: '林黛玉',
        key: 'daiyu',
        icon: renderIcon(ExternalLinkIcon),

        children: [
          {
            label: '贾惜春',
            key: 'xichun',
            icon: renderIcon(ExternalLinkIcon),
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '家主竞选',
        key: 'food',
        children: [
          {
            label: '仙人',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '贾母',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: '收藏',
    key: 'collect',
    disabled: false,
    icon: renderIcon(BookmarkXIcon),
      children: [
      {
        label: '代表',
        key: '侦探'
      }
    ]
  },
]
</script>

<style scoped></style>
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
import { computed, h, type VNode, type Component } from 'vue' // 导入 Vue 的 h 函数，用于创建 VNode
import type { MenuOption } from 'naive-ui'
import { BookOpenTextIcon, ExternalLinkIcon, MessageCircleIcon } from 'lucide-vue-next'
import { useWindowStore } from '@/stores/window'
import { useSidebarStore } from '@/stores/sidebar.ts'

const windowStore = useWindowStore()
const sidebarStore = useSidebarStore()

const handleCollapse = sidebarStore.handleCollapse
const handleExpand = sidebarStore.handleExpand

const isMobile = computed(() => windowStore.width < 600)
const collapsedWidth = computed(() => (windowStore.width < 600 ? 0 : 64))//折叠时的宽度
const width = computed(() => (windowStore.width < 600 ? 180 : 240))//展开时的宽度
const indent = computed(() => (windowStore.width < 600 ? 16 : 22))//控制下级菜单向右的缩进距离

const renderIcon = (icon: Component): (() => VNode | null) => { // icon 参数是 Vue 组件
  // if(isMobile.value) return () => null
  return () => h(icon)
}

const menuOptions: MenuOption[] = [
  {
    label: '边狱公司',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199',
    icon: renderIcon(ExternalLinkIcon)
  },
  {
    label: '废墟图书馆',
    key: 'lor',
    icon: renderIcon(BookOpenTextIcon),
    disabled: false,
    children: [
      {
        label: '安吉拉',
        key: 'AN'
      }
    ]
  },
  {
    label: '脑叶公司',
    key: 'Lobotomy',
    disabled: false,
    icon: renderIcon(BookOpenTextIcon)
  },
  {
    label: '鸿璐',
    key: 'HongLu',
    icon: renderIcon(MessageCircleIcon),
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
  }
]
</script>

<style scoped></style>
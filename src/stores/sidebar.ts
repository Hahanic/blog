// src/stores/sidebar.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapsed = ref<boolean>(true) // 默认侧边栏是收起的

  const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value
  }

  const handleCollapse = () => {
    isCollapsed.value = true
    console.log('折叠')
  }

  const handleExpand = () => {
    isCollapsed.value = false
    console.log('展开')
  }

  return { isCollapsed, toggleCollapsed, handleCollapse, handleExpand }
})
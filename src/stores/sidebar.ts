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
  }

  const handleExpand = () => {
    isCollapsed.value = false
  }

  return { isCollapsed, toggleCollapsed, handleCollapse, handleExpand }
})
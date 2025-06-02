// src/stores/theme.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { lightTheme, darkTheme } from 'naive-ui' // 导入 Naive UI 的亮色和暗色主题

export const useThemeStore = defineStore('theme', () => {
  const savedTheme = localStorage.getItem('theme')

  const isDarkTheme = ref<boolean>(savedTheme === null ? true : savedTheme === 'true') // 默认使用暗色主题

  // 计算属性，根据 isDarkTheme 返回对应的主题对象
  const theme = computed(() => (isDarkTheme.value ? darkTheme : lightTheme))

  // 切换主题的方法
  const changeTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    localStorage.setItem('theme', String(isDarkTheme.value))
  }

  return { isDarkTheme, theme, changeTheme }
})
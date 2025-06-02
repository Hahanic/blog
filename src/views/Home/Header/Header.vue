<template>
  <header class="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link to="/" class="text-xl font-bold text-gray-800 dark:text-gray-100">
        浮音华章
      </router-link>

      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex space-x-4">
          <router-link to="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">首页</router-link>
          <router-link to="/learning" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">笔记本</router-link>
          <router-link to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">小项目</router-link>
        </nav>

        <n-button quaternary @click="toggleTheme" title="切换主题">
          <template #icon>
            <component :is="themeIcon" />
          </template>
        </n-button>

        <button @click="toggleMobileMenu" class="md:hidden text-gray-600 dark:text-gray-300">
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-100 dark:bg-gray-800 py-2">
      <router-link to="/" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" @click="closeMobileMenu">首页</router-link>
      <router-link to="/learning" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" @click="closeMobileMenu">笔记本</router-link>
      <router-link to="/projects" class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" @click="closeMobileMenu">小项目</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { NButton } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'
import { SunIcon, MoonIcon, MenuIcon } from 'lucide-vue-next' // lucide图标

const themeStore = useThemeStore()

const themeIcon = computed(() => themeStore.isDarkTheme ? MoonIcon : SunIcon)

const toggleTheme = () => {
  themeStore.changeTheme()
}

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* 你可以使用 Tailwind CSS 的 @apply 或者直接在这里写 CSS */
/* .container {
  max-width: 1280px; 示例，Tailwind 已有 container 类
} */
</style>
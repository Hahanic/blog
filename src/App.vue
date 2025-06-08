<template>
<n-config-provider :theme="themeStore.theme" :hljs=hljs>
  <n-message-provider>
    <n-layout style="height: 100vh;">

      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <Header />
      </n-layout-header>
      
      <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
        <Sidebar></Sidebar>
        <n-layout :content-style="MainStyle">
          <n-layout-header>
            <BreadCrumbs />
          </n-layout-header>
          <n-layout :native-scrollbar="false">
            <router-view />
          </n-layout>
        </n-layout>
      </n-layout>

      <n-layout-footer position="absolute" style="bottom: 0" bordered>
        <Footer />
      </n-layout-footer>

    </n-layout>
  </n-message-provider>
</n-config-provider>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, type CSSProperties} from 'vue'
import Header from './views/Home/Header/Header.vue';
import Sidebar from './views/Home/Sidebar/Sidebar.vue';
import Footer from './views/Home/Footer/Footer.vue';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs.vue';
import { useWindowStore } from '@/stores/window'
import { useThemeStore } from '@/stores/theme';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

const windowStore = useWindowStore()
const themeStore = useThemeStore()

onMounted(() => {
  window.addEventListener('resize', windowStore.updateWindow)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', windowStore.updateWindow)
})


//主要样式
const MainStyle: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

</script>

<style>

</style>
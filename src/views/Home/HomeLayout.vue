<template>
<n-config-provider :theme="themeStore.theme">
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px;display: flex; justify-content: space-between;align-items: center; padding: 24px" bordered>
      <div>toggle侧边栏</div>
      <div>不思观望</div>
      <div @click="themeStore.changeTheme">toggle主题</div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <Sidebar></Sidebar>
      <n-layout :content-style="MainStyle">
        <n-layout-header>
          无改变者>定义为恶>心意相悖>梦之终焉>不思观望
        </n-layout-header>
        <n-layout
          :native-scrollbar="false"
        >
          <router-view />
        </n-layout>
      </n-layout>

    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px"
      bordered
    >
      <Footer />
    </n-layout-footer>
  </n-layout>
</n-config-provider>
</template>

<script setup lang="ts">
import { type CSSProperties} from 'vue'
import Sidebar from './Sidebar/Sidebar.vue';
import Footer from './Footer/Footer.vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()

const MainStyle: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

</script>

<style>

</style>
<template>
  <div class="flex justify-between items-center h-full w-full">
    <n-icon size="28"  @click="sidebarStore.toggleCollapsed" class="hover:scale-110 transition cursor-pointer">
        <LucideRotate3d />
    </n-icon>
    <p class="font-mono text-4xl font-extrabold">不思观望</p>
    <n-icon size="28" @click="themeStore.changeTheme" class="hover:scale-110 transition hover:fouc cursor-pointer">
      <Transition name="fade" mode="out-in">
        <SunIcon v-if="themeStore.isDarkTheme === false" class="theme-icon" />
        <MoonIcon v-else class="theme-icon" />
      </Transition>
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { useSidebarStore } from '@/stores/sidebar';
import { LucideRotate3d, MoonIcon, SunIcon } from 'lucide-vue-next';

const sidebarStore = useSidebarStore()
const themeStore = useThemeStore()

</script>

<style scoped>
.theme-icon {
  /* width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  transition: opacity 0.2s ease-in-out; /* 应用过渡效果 */
}

/* Vue Transition 的类 */
.fade-enter-active,
.fade-leave-active {
  /* 统一过渡时间和缓动函数 */
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

/* 进入动画的起始状态：从透明、小尺寸、旋转一圈开始 */
.fade-enter-from {
  opacity: 0;
  transform: rotate(0deg) scale(0.8); /* 从负360度旋转进入 */
}

/* 离开动画的结束状态：旋转一圈并消失 */
.fade-leave-to {
  opacity: 0.3;
  transform: rotate(180deg) scale(0.8); /* 向正360度旋转离开 */
}

/* 进入动画的结束状态 和 离开动画的起始状态：正常状态 */
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>
<template>
  <div class="h-[64px] flex flex-col items-center">
    <p>Copyright © 2025 闭金星</p>
    <!-- <n-icon :size="24" class=" mb-2"><LinkIcon /></n-icon> -->
    <div>
      <n-icon size="34" class="mr-5 cursor-pointer" onclick="window.location.href='https://space.bilibili.com/520238083?spm_id_from=333.1387.0.0'">
        <component :is="bilibili" />
      </n-icon>
      <n-icon size="34" class="cursor-pointer" onclick="window.location.href='https://github.com/Hahanic'">
        <component :is="github" />
      </n-icon>
    </div>

  </div>
</template>

<script setup lang="ts">
// import { LinkIcon } from 'lucide-vue-next';
import bilibili from '@/assets/icons/brand/bilibili.svg'
import github from '@/assets/icons/brand/github.svg'

</script>

<style scoped>
</style>
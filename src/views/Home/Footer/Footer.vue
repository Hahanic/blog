<template>
  <n-flex justify="center" align="center" vertical="true">
    <p class="my-0.5">Copyright © 2024 - 2025 闭金星</p>
    <!-- <n-icon :size="24" class=" mb-2"><LinkIcon /></n-icon> -->
    <div>
      <n-icon size="34" class="mb-2 mr-5 cursor-pointer" onclick="window.location.href='https://space.bilibili.com/520238083?spm_id_from=333.1387.0.0'">
        <component :is="bilibili" />
      </n-icon>
      <n-icon size="34" class="mb-2 cursor-pointer" onclick="window.location.href='https://github.com/Hahanic'">
        <component :is="github" />
      </n-icon>
    </div>

  </n-flex>
</template>

<script setup lang="ts">
// import { LinkIcon } from 'lucide-vue-next';
import bilibili from '@/assets/icons/brand/bilibili.svg'
import github from '@/assets/icons/brand/github.svg'

</script>

<style scoped>
</style>
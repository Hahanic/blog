<template>
  <div class="text-[1rem]">
    <n-text>{{ categoryText }}：<n-time :time="props.date" format="yyyy-MM-dd HH:mm" /></n-text>
  </div>
</template>

<script setup lang="ts">
interface ArticleDateProps {
  category: 'create' | 'modify'
  date: Date
}

const props = defineProps<ArticleDateProps>();

const categoryText = props.category === 'create' ? '创建于' : '修改于';
</script>
<style scoped>
</style>>
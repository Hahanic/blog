<template>
  <div class="flex flex-col gap-4 bg-transparent mx-auto max-w-[900px] pt-12 text-xl">
    <n-flex vertical>
      <n-h1 prefix="bar" class="w-full">
        <n-text type="primary">
          Debounce 和 Throttle
        </n-text>
      </n-h1>
      <n-space class=" text-[14px]">
        <n-text>创建于：2025-06-01</n-text>
        <n-text>修改于：2025-06-08</n-text>
      </n-space>
    </n-flex>
    <n-text>1.两种非常重要的性能优化手段，主要用于处理高频触发的事件</n-text>

    <ArticleCode :code="debonceCode.code" :language="debonceCode.language" />

</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArticleCode from '@/components/Article/ArticleCode.vue';

const debonceCode = ref({code:`
function calculate(a: number, b: number): number {
  return a + b + 23;
}
console.log(calculate(5, 7));
`, language: 'typescript'})


</script>

<style scoped>

</style>>
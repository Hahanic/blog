<template>
  <ArticleContent>
    <h1>快通关了(到时候再说...逃</h1>
  </ArticleContent>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeVars } from 'naive-ui';
import ArticleContent from '@/components/Article/ArticleContent.vue';

const themeVars = useThemeVars()
const decorationColor = computed(() => themeVars.value.primaryColor.substring(0, 7) + '66')

</script>

<style scoped>
.article-1 {
  font-size: 1.4rem;
  border-bottom: 2px dashed v-bind(decorationColor);
  padding-bottom: 0.5em;
}

.article-2 {
  font-size: 1.2rem;
  &:before {
    background-color: v-bind(decorationColor);
  }
}
</style>>
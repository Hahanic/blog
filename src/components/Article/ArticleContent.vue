<template>
  <div class="flex flex-col bg-transparent mx-auto max-w-[900px] py-12 px-5 text-[1.2rem]">
    <n-h1 prefix="bar" class="w-full">
      <n-text type="primary">
        {{ routeData.title }}
      </n-text>
    </n-h1>

    <n-space>
      <ArticleDate v-if="routeData.createDate" category="create" :date="routeData.createDate" />
      <ArticleDate v-if="routeData.modifyDate" category="modify" :date="routeData.modifyDate" />
    </n-space>
    
    <div class=" pt-4">
      <slot></slot>
    </div>

</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeVars } from 'naive-ui';
import ArticleDate from '@/components/Article/ArticleDate.vue';
import { useRoute } from 'vue-router';
import { getRouteData } from '@/utils/getRoutePath';
import { getRouteTree } from '@/utils/getRouteTree';
import { routes } from '@/router/routes';

const themeVars = useThemeVars()
const decorationColor = computed(() => themeVars.value.primaryColor.substring(0, 7) + '66')

const route = useRoute()
const routeData = getRouteData(route.path, getRouteTree(routes))

console.log(routeData)
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
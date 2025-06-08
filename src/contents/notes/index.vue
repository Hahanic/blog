<template>
  <div class="flex flex-col items-center bg-transparent mx-auto max-w-[900px] pt-12">
    <n-h1 prefix="bar" class="w-full">笔记本</n-h1>
    <p class="w-full text-xl pb-3">在这里记录平时学习的东西</p>
    <n-card @click="router.push(article.path)" bordered class="w-full" v-for="article in routeData.children" :key="article.path" :title=article.title hoverable>
      {{ article.path }}
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes';
import { getRouteData } from '@/utils/getRoutePath';
import { getRouteTree } from '@/utils/getRouteTree';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const routeData = getRouteData(route.path, getRouteTree(routes))
</script>

<style scoped>

</style>>
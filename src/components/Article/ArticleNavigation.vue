<template>
  <div class="flex flex-col px-5 mx-auto max-w-[900px] pt-12">
    <n-h1 prefix="bar" class="w-full">{{ props.title }}</n-h1>
    <p class="w-full text-xl pb-3">{{ props.description }}</p>
    <n-card @click="router.push(article.path)" bordered class="w-full" v-for="article in routeData.children" :key="article.path" :title=article.title hoverable>
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

interface ArticleIndex {
  title: string,
  description: string
}

const props = defineProps<ArticleIndex>()

</script>

<style scoped>

</style>>
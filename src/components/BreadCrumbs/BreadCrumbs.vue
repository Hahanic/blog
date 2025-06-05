<template>
  <n-breadcrumb class="p-2">
    <n-breadcrumb-item
      v-for="item in breadcrumbs"
      :key="item.path"
      @click="handleBreadcrumbClick(item.path)"
      class="breadcrumb-item"
    >
      <n-icon :component="item.icon" />
      {{ item.name }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { getRoutePath } from '@/utils/getRoutePath';
import { getRouteTree } from '@/utils/getRouteTree';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { routes } from '@/router/routes'
import { File } from 'lucide-vue-next';

const route = useRoute()
const router = useRouter()
const breadcrumbs = computed(() => {
  return getRoutePath(route.path, getRouteTree(routes)).map((item) => ({
    path: item.path,
    name: item.name,
    icon: item?.icon || File,
  }))
})
console.log(routes)
const handleBreadcrumbClick = (path: string) => {
  router.push(path)
}

</script>

<style scoped>
</style>
<template>
  <div class="flex flex-col gap-4 items-center bg-transparent mx-auto max-w-[900px] pt-24 border-1 text-[1rem]">
    <div class="w-52 h-52 relative">
      <img class="rounded-full" src="/myAvatar.jpg"/>
    </div>
    <p class="text-2xl font-medium">闭金星</p>
    <n-space>
      <n-tag :bordered="false" type="error">
        南京财经大学
      </n-tag>
      <n-tag :bordered="false" type="success">
        前端开发
      </n-tag>
      <n-tag :bordered="false">
        兴趣广泛
      </n-tag>
      <n-tag :bordered="false" type="warning">
        后巷居民
      </n-tag>
      <n-tag :bordered="false" type="info">
        {{ '(' }}
      </n-tag>
    </n-space>
    <div class="w-full px-5">
      <p class="text-[1.4rem] pb-4">知识</p>
      <n-space>
        <n-icon size="24" color="#4FC08D"><vue /></n-icon>
        <n-icon size="24" color="#61DAFB"><react /></n-icon>
        <n-icon size="24" color="#5FA04E"><node /></n-icon>
        <n-icon size="24" color="#3178C6"><typescript /></n-icon>
      </n-space>
    </div>
    <div class="w-full px-5">
      <p class="text-[1.4rem] pb-4">组成</p>
      <n-space>
        <n-tag>月亮计划</n-tag>
        <n-tag>魔法使之夜</n-tag>
        <n-tag>水仙</n-tag>
        <n-tag>传颂之物</n-tag>
        <n-tag>东方Project</n-tag>
        <n-tag>Arcaea</n-tag>
        <n-tag>漫画</n-tag>
      </n-space>
    </div>
    <div class="w-full px-5 pb-12">
      <p class="text-[1.4rem] pb-4">导航</p>
      <n-space>
        <n-card class="cursor-pointer" size="medium" @click="router.push(route.path)" v-for="route in routes.children" :key="route.path">
          {{ route.name + `：${route.children?.length || 0}` }}篇文章
        </n-card>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import vue from '@/assets/icons/brand/vue.svg'
import react from '@/assets/icons/brand/react.svg'
import node from '@/assets/icons/brand/node.svg'
import typescript from '@/assets/icons/brand/typescript.svg'
import { routes } from '@/router/routes'
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(routes)
</script>

<style scoped>

</style>>
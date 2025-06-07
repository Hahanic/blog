<template>
  <RouterView />
  <div v-if="showNoteNavigation" class="flex flex-col items-center bg-transparent mx-auto max-w-[900px] pt-24 border-1">
    gossip 导航页面////
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const showNoteNavigation = computed(() => {
  return route.path === '/gossip';
});
</script>

<style scoped>

</style>>
// src/stores/window.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWindowStore = defineStore('window', () => {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
  const height = ref(typeof window !== 'undefined' ? window.innerHeight : 0)

  function updateWindow() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  // Similar to the mouse store, the event listener for 'resize'
  // would typically be added in App.vue or a global setup.
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('resize', updateWindow)
  // }

  return { width, height, updateWindow }
})
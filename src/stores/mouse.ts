// src/stores/mouse.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMouseStore = defineStore('mouse', () => {
  const x = ref(0)
  const y = ref(0)

  function updateMouse(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  // It's a good practice to add event listeners when the store is initialized
  // or when a component that uses it mounts, and remove them when it unmounts.
  // For a global listener like mouse position, you might consider adding/removing
  // it in App.vue or even main.ts if appropriate.
  // For now, we'll just define the update function.
  // If you want to automatically listen, you could add:
  // if (typeof window !== 'undefined') {
  //   window.addEventListener('mousemove', updateMouse)
  // }
  // And ensure to handle removal, perhaps via a store action or component lifecycle.

  return { x, y, updateMouse }
})
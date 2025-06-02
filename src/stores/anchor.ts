// src/stores/anchor.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface AnchorItem {
  id: number // Changed from string to number to match idCounter logic
  href: string
  title: string
  level: number
}

const idCounter = ref<number>(0) // Unique ID counter for anchors

export const useAnchorStore = defineStore('anchor', () => {
  const anchorList = ref<AnchorItem[]>([])

  function addAnchor(title: string, level: number, hrefOrigin?: string): AnchorItem {
    const id = ++idCounter.value
    const href = hrefOrigin !== undefined ? hrefOrigin : `anchor-${id}` // Ensure href is unique if not provided
    const anchorItem: AnchorItem = { id, href, title, level }
    anchorList.value.push(anchorItem)
    return anchorItem
  }

  function updateAnchor(id: number, title?: string, href?: string): void {
    const anchor = anchorList.value.find((item) => item.id === id)
    if (anchor) {
      if (title !== undefined) anchor.title = title
      if (href !== undefined) anchor.href = href
    }
  }

  function removeAnchor(id: number): void {
    anchorList.value = anchorList.value.filter((item) => item.id !== id)
  }

  // Function to clear all anchors, useful when navigating between articles
  function clearAnchors(): void {
    anchorList.value = []
    idCounter.value = 0 // Reset counter if needed
  }

  return { anchorList, addAnchor, updateAnchor, removeAnchor, clearAnchors }
})
import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', () => {
  const menu = ref([])
  return {
    menu
  }
})

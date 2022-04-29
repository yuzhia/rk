import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      isLoading: false
    }
  },
  getters: {},
  actions: {
    changeIsLoading(flag) {
      this.isLoading = flag
    }
  }
})

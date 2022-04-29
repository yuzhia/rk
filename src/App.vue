<script setup>
import Loading from './components/Loading.vue'
import TabBar from './components/TabBar.vue'
import { computed } from 'vue'
import { useMainStore } from './store'

const mainStore = useMainStore()

const isLoading = computed(() => mainStore.isLoading)
</script>

<template>
  <router-view></router-view>
  <Loading v-show="isLoading"></Loading>
  <tab-bar></tab-bar>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-color: #f6f6f6; */
}
html,
body,
#app {
  height: 100%;
}
</style>

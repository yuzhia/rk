<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)

watchEffect(() => {
  router.getRoutes().map((item, index) => {
    if (item.path === router.currentRoute.value.path) {
      active.value = index - 1
    }
  })
})
</script>

<template>
  <van-tabbar v-model="active" router placeholder>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/chapter" icon="search">章节</van-tabbar-item>
    <van-tabbar-item replace to="/paper" icon="friends-o">真题</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style></style>

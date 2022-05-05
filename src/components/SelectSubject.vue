<script setup>
import subjectApi from '@/api/subjectApi.js'
import { useUserStore } from '../store/modules/user'
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const active = ref(0)
const list = ref([])
const tabTitle = ['初级', '中级', '高级']

const getData = () => {
  subjectApi.list().then(res => {
    list.value = res.data
    console.log(res)
  })
}

// test login
// const userStore = useUserStore()
// const data = { username: '测试', password: '123456' }
// userStore.login(data)

// // test logout
// const clickLogout = () => {
//   userStore.logout(userStore.token)
//   router.push(`/mine?redirect=${route.fullPath}`)
// }

// 监听 watchEffect 里面的属性，初始化就执行一次
watchEffect(() => {
  getData()
})
</script>

<template>
  <van-tabs v-model:active="active" swipeable>
    <van-tab
      v-for="item in list"
      :key="item.id"
      :title="item.name"
      title-style="{'display': none}"
    >
      <van-list>
        <van-cell
          v-for="children in item.children"
          :key="children.id"
          :value="children.name"
          is-link
        />
      </van-list>
    </van-tab>
  </van-tabs>
  <!-- <van-button @click="clickLogout">退出登录</van-button> -->
</template>

<style></style>

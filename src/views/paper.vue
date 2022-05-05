<script setup>
import paperApi from '@/api/paperApi.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref(0)
const list = ref([])
const subjectId = 18

// 跳转路由
const toQuestion = paperId => {
  router.push({
    name: 'question',
    query: { paperId }
  })
}

const getData = id => {
  paperApi.listBySubjectId(id).then(res => {
    list.value = res.data
  })
}

getData(subjectId)

const splitStr = str => {
  return str.substring(0, str.lastIndexOf(' '))
}
</script>

<template>
  <van-nav-bar title="标题" :border="false" />
  <van-tabs v-model:active="active" swipeable :line-height="2" color="#3a9efe">
    <van-tab
      v-for="(value, key) in list"
      :key="key"
      :title="key == 0 ? '综合练习' : key == 1 ? '案例' : '论文'"
    >
      <div
        class="panel-box"
        v-for="item in value"
        :key="item.id"
        @click="toQuestion(item.id)"
      >
        <div class="paper">
          <div class="title-box">
            <span>{{ splitStr(item.name) }}</span>
          </div>
          <div class="paper-record">
            <span>未开始</span>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<style lang="scss">
:root {
  // --van-nav-bar-background-color: #3ca0ea;
  // --van-nav-bar-text-color: #fff;

  // --van-tabs-nav-background-color: #3ca0ea;
  // --van-tab-text-color: #f3f3f3;
  // --van-tab-active-text-color: #fff;
}
.van-tabs__wrap {
  margin-bottom: 10px;
}
.panel-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .paper {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    padding: 10px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 3px gray;
    .title-box {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
    }

    .paper-record {
      width: 70px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: #b1bec0;
      font-size: 12px;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>

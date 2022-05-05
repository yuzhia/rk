<script setup>
import knowledgeApi from '@/api/knowledgeApi.js'
import { ref } from 'vue'

const subjectId = 18
const list = ref([])
const finished = ref(false)

const getChapterData = subjectId => {
  knowledgeApi.listBySubjectId(subjectId).then(res => {
    list.value = res.data
  })
}

getChapterData(subjectId)
</script>

<template>
  <van-list :finished="finished">
    <van-cell v-for="item in list" :key="item.id" :title="item.name" />
  </van-list>
</template>

<style scoped>
.chapter-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.progress {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.van-progress {
  width: 80%;
}
</style>

<script setup>
import chapterApi from '@/api/chapterApi.js'
import { ref } from 'vue'

const activeNames = ref(['1'])
const subjectId = 11
const level1Data = ref([])

const getChapterData = subjectId => {
  chapterApi.listBySubjectId(subjectId).then(res => {
    level1Data.value = res.data
  })
}

getChapterData(subjectId)
</script>

<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item
      v-for="item in level1Data"
      :name="item.id"
      :key="item.id"
      :title="item.name"
      :value="'共 ' + item.sum + ' 题'"
    >
      <div
        style="margin-bottom: 10px"
        v-for="child in item.child"
        :key="child.id"
      >
        <div class="chapter-box">
          <span class="chapter-name">{{ child.name }}</span>
          <span>图标</span>
        </div>
        <div class="progress">
          <van-progress
            :percentage="child.sum === 0 ? 0 : 0 / child.sum"
            :show-pivot="false"
            :stroke-width="6"
            pivot-color="#7232dd"
            color="linear-gradient(to right, #be99ff, #7232dd)"
          />
          <div>0/{{ child.sum }}</div>
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
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

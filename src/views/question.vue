<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { setLocalStorage, getLocalStorage } from '@/utils/localstorage.js'
import quesitonApi from '@/api/question.js'

const route = useRoute()

const { paperId } = route.query
const questionList = ref([])
const answerRecord = ref([])

quesitonApi
  .listByPaperId(paperId)
  .then(res => {
    questionList.value = res.data
    console.log(res)
  })
  .then(() => {
    updateEle()
  })

const userClick = (questionId, correctAnswer, selectedAnswer) => {
  changeStyle(questionId, correctAnswer, selectedAnswer)
  // 存数据
  const aAnswerRecord = {}
  aAnswerRecord.paperId = paperId
  aAnswerRecord.questionId = questionId
  aAnswerRecord.answered = true
  aAnswerRecord.correctAnswer = correctAnswer
  aAnswerRecord.selectedAnswer = selectedAnswer
  answerRecord.value.push(aAnswerRecord)
}

// v-for遍历的数组初始化阶段无值，有值显示元素
const updateEle = () => {
  if (getLocalStorage(paperId)) {
    answerRecord.value = getLocalStorage(paperId)
    if (answerRecord.value) {
      answerRecord.value.forEach(item => {
        changeStyle(item.questionId, item.correctAnswer, item.selectedAnswer)
      })
    }
  }
}

const changeStyle = (questionId, correctAnswer, selectedAnswer) => {
  if (correctAnswer != selectedAnswer) {
    const error = document.getElementsByClassName(
      selectedAnswer + questionId
    )[0]
    error.style.backgroundColor = '#ff6667'
    error.previousElementSibling.style.color = '#fff'
  }
  const correct = document.getElementsByClassName(correctAnswer + questionId)[0]
  correct.style.backgroundColor = '#00af63'
  correct.previousElementSibling.style.color = '#fff'
  // 禁止再次点击
  const optionEle = correct.parentNode.parentNode
  optionEle.style.pointerEvents = 'none'
  // 显示解析
  optionEle.nextSibling.style.display = 'block'
}

watch(
  () => [...answerRecord.value],
  () => {
    setLocalStorage(paperId, answerRecord.value)
  }
)
</script>

<template>
  <van-swipe class="my-swipe" :show-indicators="false" :loop="false">
    <van-swipe-item v-for="item in questionList" :key="item.id">
      <div class="item">
        <div class="option">
          <div class="title" v-html="item.title"></div>
          <div
            class="simple-option"
            v-for="choice in item.choices"
            :key="choice.id"
            @click.prevent="userClick(item.id, item.answer, choice.key)"
          >
            <span class="letter">{{ choice.key }}</span>
            <span class="circle" :class="choice.key + item.id"></span>
            <input
              style="display: none"
              type="radio"
              :name="item.id"
              :value="choice.key"
            />
            <label :for="item.id + choice.key" v-html="choice.content"></label>
          </div>
        </div>
        <div class="analyze">
          <div class="tag">试题解析</div>
          <div v-html="item.parse"></div>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
  <!-- <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">答题卡</van-tabbar-item>
    <van-tabbar-item icon="search">收藏</van-tabbar-item>
    <van-tabbar-item icon="friends-o">交卷</van-tabbar-item>
    <van-tabbar-item icon="setting-o">草稿纸</van-tabbar-item>
  </van-tabbar> -->
</template>

<style lang="scss" scoped>
$letterSize: 32px;

:deep(pre) {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  font-family: Helvetica;
  padding: 10px;
}
.my-swipe {
  height: 100%;
  background-color: white;
}

.item {
  padding: 10px;
  .option {
    margin-bottom: 20px;

    .title {
      margin-bottom: 10px;

      img {
        width: 100% !important;
        height: 100% !important;
      }
    }

    .simple-option {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      position: relative;
      padding: 10px 0;
      align-items: center;

      .letter {
        width: $letterSize;
        height: $letterSize;
        line-height: $letterSize;
        text-align: center;
        flex-shrink: 0;
        z-index: 1;
      }

      .circle {
        width: $letterSize - 2;
        height: $letterSize - 2;
        border: #ddd solid 1px;
        border-radius: 50%;
        position: absolute;
        left: 5;
      }
      label {
        margin-left: 10px;
      }
    }
  }

  .analyze {
    display: none;
  }
}
</style>

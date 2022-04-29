<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <div class="main">
    <div class="question">
      <div class="question_title">
        <p>万元，按β分布，计算出的值为 94.5 万元，则最悲观成本为(35)万元。</p>
      </div>
      <div class="question_options">
        <div class="optionA">
          万元，按β分布，计算出的值为 94.5 万元，则最悲观成本为(35)万元。
        </div>
        <div class="optionB">
          万元，按β分布，计算出的值为 94.5 万元，则最悲观成本为(35)万元。
        </div>
        <div class="optionC">
          万元，按β分布，计算出的值为 94.5 万元，则最悲观成本为(35)万元。
        </div>
        <div class="optionD">
          万元，按β分布，计算出的值为 94.5 万元，则最悲观成本为(35)万元。
        </div>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">答题卡</van-tabbar-item>
      <van-tabbar-item icon="search">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends-o">交卷</van-tabbar-item>
      <van-tabbar-item icon="setting-o">草稿纸</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-radio) {
  margin: 15px 0;
}

@mixin letter($content) {
  font-size: 14px;
  position: relative;
  padding: 10px 0 10px 40px;
  &::before {
    position: absolute;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid #000;
    left: 0;
    top: 15px;
    text-align: center;
    line-height: 23px;
    content: $content;
  }
}
.main {
  padding: 10px 20px;

  .question {
    .question_options {
      .optionA {
        @include letter('A');
      }
      .optionB {
        @include letter('B');
      }
      .optionC {
        @include letter('C');
      }
      .optionD {
        @include letter('D');
      }
    }
  }
}
</style>

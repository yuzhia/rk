<script setup>
import { ref, onMounted } from 'vue'
import SelectSubject from '../components/SelectSubject.vue'
import SmoothSignature from 'smooth-signature'

const canvas = ref(null)

onMounted(() => {
  new SmoothSignature(canvas.value, {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 2,
    minWidth: 2,
    maxWidth: 6,
    color: '#1890ff',
    bgColor: '#efefef'
  })
})
</script>

<template>
  <!-- <SelectSubject></SelectSubject> -->
  <h1>手写板</h1>
  <canvas ref="canvas"></canvas>
</template>

<script lang=ts setup>
/* eslint-disable curly */
const times = ref(0)
const timesEnd = ref(1)
const aniTime = 1
const aniTimeStr = `${aniTime}s`
const animationClass = ref('animation')
function size(idx: number) {
  return `${500 * Math.pow(0.7, idx)}px`
}
const sizeStart = computed(() => size(times.value))
const sizeEnd = computed(() => size(timesEnd.value))
let flag = true
setInterval(() => {
  if (flag) {
    times.value++
    // 如果在动画结束时改变size，会有一个闪烁，因为动画结束需要回到初始/结束状态，而状态同时改变了
    // 因此在动画50%改变状态，重新计算末状态的同时，不影响下次动画
    setTimeout(() => {
      if (times.value !== 5) timesEnd.value++
    }, aniTime * 500)
  } else {
    times.value--
    setTimeout(() => {
      if (times.value !== 0) timesEnd.value--
    }, aniTime * 500)
  }
}, aniTime * 1000)

watch(times, () => {
  if (times.value === 0) {
    animationClass.value = 'animation'
    flag = true
  }
  if (times.value === 5) {
    animationClass.value = 'reveAni'
    flag = false
  }
})
</script>
<template>
  <div class="w-100% h-500px" flex justify-center flex-col>
    <div border justify-self-center :class="animationClass" m-auto />
  </div>
</template>
<style>
.animation {
  animation: toCircle v-bind('aniTimeStr') ease 0s infinite;
}
.reveAni {
  animation: toRect v-bind('aniTimeStr') ease 0s infinite;
  animation-fill-mode: forwards;
}
@keyframes toCircle {
  0% {
    border-radius: 0;
    width: v-bind('sizeStart');
    height: v-bind('sizeStart');
  }
  50% {
    border-radius: 50%;
    width: v-bind('sizeStart');
    height: v-bind('sizeStart');
  }
  100% {
    border-radius: 0;
    width: v-bind('sizeEnd');
    height: v-bind('sizeEnd');
  }
}

@keyframes toRect {
  0% {
    border-radius: 0;
    width: v-bind('sizeEnd');
    height: v-bind('sizeEnd');
  }
  50% {
    border-radius: 50%;
    width: v-bind('sizeStart');
    height: v-bind('sizeStart');
  }
  100% {
    border-radius: 0;
    width: v-bind('sizeStart');
    height: v-bind('sizeStart');
  }
}
</style>

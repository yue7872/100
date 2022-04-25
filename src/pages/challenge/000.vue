<script lang="ts" setup>
/* eslint-disable no-console */
const flag = ref(false)
function createNewRect() {
  flag.value = true
}
function generateRect() {
  const canvas: HTMLCanvasElement = document.querySelector('#myCanvas')!
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
  ctx.lineWidth = 2
  // 画矩形
  let i = 0
  let top: number[] = [0]
  setInterval(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.strokeRect(400, 350, 410, 100)
    if (flag.value) {
      // top 记录点击时最下面方块的位置，每次至少+200
      if (i - top[top.length - 1] < 200)
        top.push(top[top.length - 1] + 200)
      else
        top.push(i)
      flag.value = false
    }
    top.forEach((t) => {
      ctx.strokeRect(300, -200 + i - t, 200, 200)
    })
    // 两次点击间隔超过900，则清空绘图数组
    const filter = top.every((t) => {
      if (i - t > 900)
        return true
      return false
    })
    if (filter) {
      top = []
      i = 0
    }
    i += 10
  }, 30)
}
onMounted(() => {
  generateRect()
})

</script>
<template>
  <div>
    <div
      class="
      w-100%
      h-450px
      flex
      mt-100px
      justify-center
      items-center
    "
      @click="createNewRect()"
    >
      <div border-1>
        <canvas
          id="myCanvas"
          class="
        w-400px
        h-400px
      "
          style="background:  0% 0% / contain rgb(255, 255, 255);"
          width="800"
          height="800"
        />
      </div>
    </div>
  </div>
</template>

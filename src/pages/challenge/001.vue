<script lang=ts setup>
import Matter from 'matter-js'
import { noop } from '@vueuse/shared'
const { Engine, Render, Runner, Bodies, World } = Matter
const f = { add: noop }
const canvas = ref(null)
function generate() {
  // create an engine
  const engine = Engine.create()

  // create a renderer
  const render = Render.create({
    element: canvas.value!,
    engine,
    options: {
    },
  })
  // create two boxes and a ground
  f.add = () => {
    const boxA = Bodies.polygon(Math.random() * 800, 0, Math.random() * 10, Math.random() * 100)
    World.add(engine.world, [boxA])
  }

  f.add()

  const groundA = Bodies.rectangle(Math.random() * 800, 210, 100 + Math.random() * 300, 60, { isStatic: true })
  const groundB = Bodies.rectangle(Math.random() * 800, 600, 100 + Math.random() * 700, 60, { isStatic: true })

  World.add(engine.world, [groundA, groundB])
  Render.run(render)
  Runner.run(engine)
}

onMounted(() => {
  generate()
})
</script>
<template>
  <div id="myCanvas" ref="canvas" mt-100px m-auto w-402px h-302px border-1 @click="f.add" />
</template>
<style>
  #myCanvas canvas{
    background-color: #fff !important;
    width: 400px;
    height: 300px;
  }
</style>

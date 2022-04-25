<script lang=ts setup>
import Matter from 'matter-js'
function generate() {
  const Engine = Matter.Engine
  const Render = Matter.Render
  const Runner = Matter.Runner
  const Bodies = Matter.Bodies
  const Composite = Matter.Composite

  // create an engine
  const engine = Engine.create()

  // create a renderer
  const render = Render.create({
    element: document.querySelector('#myCanvas'),
    engine,
    options: {
    },
  })
  const customWidth = Array.from({ length: 5 }, (i) => { return Math.random() * 800 })
  // create two boxes and a ground
  const boxA = Bodies.rectangle(customWidth[0], 200, 80, 80)
  const boxB = Bodies.rectangle(customWidth[1], 50, 80, 80)
  const boxC = Bodies.rectangle(customWidth[2], 50, 100, 100)
  const groundA = Bodies.rectangle(customWidth[3], 210, 100 + Math.random() * 300, 60, { isStatic: true })
  const groundB = Bodies.rectangle(customWidth[4], 600, 100 + Math.random() * 700, 60, { isStatic: true })

  // add all of the bodies to the world
  Composite.add(engine.world, [boxA, boxB, boxC, groundA, groundB])

  // run the renderer
  Render.run(render)

  // create runner
  const runner = Runner.create()

  // run the engine
  Runner.run(runner, engine)
}
onMounted(() => {
  generate()
})
function hanlder() {
  document.querySelector('#myCanvas')!.children[0].remove()
  generate()
}
</script>
<template>
  <div id="myCanvas" m-auto w-802px h-602px border-1 @click="hanlder()" />
</template>
<style>
  #myCanvas canvas{
    background-color: #fff !important;
  }
</style>

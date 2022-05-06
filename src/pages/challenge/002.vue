<script lang=ts setup>
import type { Ref } from '@vue/reactivity'
const dragable: Ref = ref(false)
const offset = reactive({ x: 0, y: 0 })
const startPoint = reactive({ x: 0, y: 0 })
function dragStart(e: MouseEvent) {
  dragable.value = true
  startPoint.x = e.clientX - offset.x
  startPoint.y = e.clientY - offset.y
}
function dragBox(e: MouseEvent) {
  if (dragable.value) {
    offset.x = Math.min(
      Math.max(e.clientX - startPoint.x, 0),
      window.innerWidth - 400,
    )
    offset.y = Math.min(
      Math.max(e.clientY - startPoint.y, 0),
      window.innerHeight - 400,
    )

    if (offset.x < 0) offset.x = 0
    if (offset.x > window.innerWidth) offset.x = window.innerWidth
    if (offset.y < 0) offset.y = 0
    if (offset.y < 0) offset.y = 0
  }
}
function dragEnd(e: MouseEvent) {
  dragable.value = false
}
</script>
<template>
  <div>
    <div
      w-400px
      h-400px
      border
      absolute
      top-0
      left-0
      bg-transparent
      overflow-hidden
      :style="{ top: offset.y + 'px', left: offset.x + 'px' }"
      @mousedown="dragStart"
      @mouseup="dragEnd"
      @mousemove="dragBox"
    >
      <div
        text-left
        px-5
        w-100vw
        h-100vh
        absolute
        :style="{ top: -offset.y + 'px', left: -offset.x + 'px' }"
      >
        <article font-mono>
          <p font-bold text-xl>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed hendrerit nunc, sed varius turpis. In sit amet risus sit amet
            lectus cursus cursus vitae a lorem. Aenean imperdiet, ante sed
            molestie facilisis, sem dolor sodales velit, et placerat nisl urna
            et felis. Pellentesque urna nisi, malesuada et nulla in, finibus
            dictum ante. Duis in rutrum tortor. Nam ac nulla metus. Fusce
            elementum felis dui, quis tincidunt urna rhoncus eget. Curabitur
            vitae augue odio. Suspendisse vel dui ligula. Maecenas pretium
            sagittis velit vel consectetur.
          </p>
          <p>
            Nulla malesuada eros in egestas placerat. Duis ullamcorper ex quis
            enim dapibus, vel laoreet lectus consequat. Sed a neque non nibh
            viverra accumsan nec a neque. Donec lobortis leo at ex efficitur
            vestibulum. Nam egestas risus sed velit vestibulum, nec ultrices
            nisi porta. Nulla dignissim tristique felis vel mattis. Curabitur
            pellentesque ex et ex finibus placerat. Aliquam rutrum eget nibh sed
            tempor. Phasellus commodo elementum tempus. Nam interdum ligula nec
            enim tristique, at fringilla tellus venenatis. Morbi dignissim
            vestibulum nisi, quis blandit diam rutrum at. Vestibulum sed risus
            vitae ex iaculis posuere in et neque. Duis convallis nulla ut metus
            tempus convallis. Mauris sed lectus ac dui rutrum bibendum vitae non
            metus. Quisque at fringilla leo. Donec viverra feugiat quam.
          </p>
          <p>
            Cras a dolor nulla. Mauris et odio dapibus, sagittis nisi
            pellentesque, semper lorem. Nunc dictum elit nec dapibus faucibus.
            Nunc efficitur ligula lorem, nec vulputate diam porttitor at. Etiam
            euismod tincidunt dolor vitae commodo. Cras mattis magna vitae quam
            consequat consequat. Vestibulum malesuada, dolor sed venenatis
            interdum, nisl velit feugiat risus, nec tristique risus magna eget
            enim. Sed efficitur luctus pulvinar. Etiam eget malesuada dolor.
            Cras finibus eget lorem eu cursus. Sed libero urna, tincidunt
            vestibulum ultricies sed, eleifend et enim.
          </p>
          <p>
            Pellentesque ex nibh, hendrerit sed metus nec, fermentum commodo
            lacus. In hac habitasse platea dictumst. Nam fermentum tempor
            lacinia. Etiam tincidunt diam et vestibulum fringilla. Ut tempor
            nibh in leo convallis luctus. Proin ac tincidunt eros. Vestibulum ut
            porta leo. Duis blandit hendrerit ullamcorper. Ut pretium, nunc et
            suscipit gravida, nunc augue suscipit purus, a mattis ex turpis in
            nulla. Morbi gravida, dui ac efficitur egestas, ex augue eleifend
            ex, ac ultricies metus neque in justo. Sed ut mi ut est eleifend
            blandit ut egestas magna. Morbi sed nulla sit amet mi pulvinar
            pretium sed non urna. Proin quis dolor ac est ultricies dapibus.
          </p>
          <p text-xl text-black>
            Pellentesque ex nibh, hendrerit sed metus nec, fermentum commodo
            lacus. In hac habitasse platea dictumst. Nam fermentum tempor
            lacinia. Etiam tincidunt diam et vestibulum fringilla. Ut tempor
            nibh in leo convallis luctus. Proin ac tincidunt eros. Vestibulum ut
            porta leo. Duis blandit hendrerit ullamcorper. Ut pretium, nunc et
            suscipit gravida, nunc augue suscipit purus, a mattis ex turpis in
            nulla. Morbi gravida, dui ac efficitur egestas, ex augue eleifend
            ex, ac ultricies metus neque in justo. Sed ut mi ut est eleifend
            blandit ut egestas magna. Morbi sed nulla sit amet mi pulvinar
            pretium sed non urna. Proin quis dolor ac est ultricies dapibus.
          </p>
          <p>
            Pellentesque ex nibh, hendrerit sed metus nec, fermentum commodo
            lacus. In hac habitasse platea dictumst. Nam fermentum tempor
            lacinia. Etiam tincidunt diam et vestibulum fringilla. Ut tempor
            nibh in leo convallis luctus. Proin ac tincidunt eros. Vestibulum ut
            porta leo. Duis blandit hendrerit ullamcorper. Ut pretium, nunc et
            suscipit gravida, nunc augue suscipit purus, a mattis ex turpis in
            nulla. Morbi gravida, dui ac efficitur egestas, ex augue eleifend
            ex, ac ultricies metus neque in justo. Sed ut mi ut est eleifend
            blandit ut egestas magna. Morbi sed nulla sit amet mi pulvinar
            pretium sed non urna. Proin quis dolor ac est ultricies dapibus.
          </p>
          <p text-xl>
            Pellentesque ex nibh, hendrerit sed metus nec, fermentum commodo
            lacus. In hac habitasse platea dictumst. Nam fermentum tempor
            lacinia. Etiam tincidunt diam et vestibulum fringilla. Ut tempor
            nibh in leo convallis luctus. Proin ac tincidunt eros. Vestibulum ut
            porta leo. Duis blandit hendrerit ullamcorper. Ut pretium, nunc et
            suscipit gravida, nunc augue suscipit purus, a mattis ex turpis in
            nulla. Morbi gravida, dui ac efficitur egestas, ex augue eleifend
            ex, ac ultricies metus neque in justo. Sed ut mi ut est eleifend
            blandit ut egestas magna. Morbi sed nulla sit amet mi pulvinar
            pretium sed non urna. Proin quis dolor ac est ultricies dapibus.
          </p>
          <p>
            Pellentesque ex nibh, hendrerit sed metus nec, fermentum commodo
            lacus. In hac habitasse platea dictumst. Nam fermentum tempor
            lacinia. Etiam tincidunt diam et vestibulum fringilla. Ut tempor
            nibh in leo convallis luctus. Proin ac tincidunt eros. Vestibulum ut
            porta leo. Duis blandit hendrerit ullamcorper. Ut pretium, nunc et
            suscipit gravida, nunc augue suscipit purus, a mattis ex turpis in
            nulla. Morbi gravida, dui ac efficitur egestas, ex augue eleifend
            ex, ac ultricies metus neque in justo. Sed ut mi ut est eleifend
            blandit ut egestas magna. Morbi sed nulla sit amet mi pulvinar
            pretium sed non urna. Proin quis dolor ac est ultricies dapibus.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>
<style>
p {
  text-indent: 2em;
  margin-top: 10px;
  user-select: none;
}
</style>

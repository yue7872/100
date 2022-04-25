<script setup lang="ts">
import { info } from '../info/title'
const countArr = computed(() => {
  return Array.from({ length: info.length }, (_, idx) => idx.toString().padStart(3, '0'))
})
</script>

<template>
  <div w-500px flex flex-wrap m-auto>
    <a
      v-for="(count,idx) in countArr"
      :key="idx"
      :href="`./challenge/${count}.vue`"
      flex-1
      class="min-w-1/3"
    >
      <span>{{ count }}</span>
      {{ info[idx].title }}
    </a>
  </div>
</template>

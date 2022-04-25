<script setup lang="ts">
import { info } from '../info/title'
const countArr = computed(() => {
  return Array.from({ length: info.length }, (_, idx) => idx.toString().padStart(3, '0'))
})
</script>

<template>
  <div w-500px m-auto grid grid-cols-3 gap-2>
    <a
      v-for="(count,idx) in countArr"
      :key="idx"
      :href="`./challenge/${count}`"
      class="min-w-1/3 opacity-60 hover:opacity-100 font-mono text-left"
    >
      <span opacity-30 mt-10>{{ count }}</span>
      {{ info[idx].title }}
    </a>
  </div>
</template>

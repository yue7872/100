<script setup lang="ts">
const countArr = Array.from({ length: 100 }, (_, idx) => idx.toString().padStart(3, '0'))
</script>

<template>
  <div w-500px flex flex-wrap m-auto>
    <a
      v-for="i
        in countArr"
      :key="i"
      :href="`./challenge/${i}.vue`"
      class="w-1/3"
    >
      <span>{{ i }}</span>
      {{ i }}
    </a>
  </div>
</template>

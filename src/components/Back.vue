<script setup lang="ts">
import routes from '~pages'
import { getNum } from '~/utils/getNum'
let link: boolean
if (routes[getNum() + 1])
  link = true
</script>
<template>
  <a href="/" :class="`${link ? 'i-carbon-arrow-left' : ''}`" fixed left-5 top-5>{{ link }}</a>
</template>

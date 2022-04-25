<script setup lang="ts">
import { getChallengeDay } from '~/utils/getChallengeDay'
import { getTitle } from '~/utils/getTitle'
</script>
<template>
  <div>
    <div fixed bottom-5 right-5>
      {{ getChallengeDay() }}
    </div>
    <div fixed bottom-5 left-5 opacity-60 hover:opacity-100 font-mono>
      <span opacity-30 mr-2>{{ getTitle().pathNo }}</span>
      <span>{{ getTitle().title }}</span>
    </div>
  </div>
</template>

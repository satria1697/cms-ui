<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex justify-between bg-primary text-white px-2.5 py-3.5">
      <span>Company Name</span>
      <span>Hi User</span>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>

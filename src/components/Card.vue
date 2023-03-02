<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-lg">
    <figure><img :src="`/assets/${imageUrl}`" :alt="title" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </div>
</template>

<style scoped></style>

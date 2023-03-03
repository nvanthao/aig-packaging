<script setup>
import Card from './Card.vue';
</script>

<template>
  <div class="divider"></div>
  <div class="mx-auto max-w-lg text-center m-4">
    <h2 id="products" class="text-3xl font-bold sm:text-4xl">Our products</h2>
  </div>
  <div class="m-4 flex flex-col flex-wrap md:flex-row gap-4 justify-center">
    <Card title="Powder packing" imageUrl="powder_packing.jpeg" />
    <Card title="Sauce packing" imageUrl="sauce_packing.jpeg" />
    <Card title="Nut packing" imageUrl="nuts_packing.jpeg" />
    <Card title="Candy packing" imageUrl="candy_packing.jpeg" />
    <Card title="Liquid packing" imageUrl="liquid_packing.jpeg" />
    <Card title="Food packaging" imageUrl="food_packing.jpeg" />
  </div>
</template>

<style scoped></style>

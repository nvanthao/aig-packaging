<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'
import AboutUs from './components/AboutUs.vue'
import Footer from './components/Footer.vue'
import Map from './components/Map.vue'
</script>

<template>
  <div class="font-sans flex flex-col min-h-screen overflow-hidden bg-secondary-50">
    <NavBar />

    <main class="flex-grow">
      <Hero />
      <Products />
      <AboutUs />
      <Map />
    </main>

    <Footer />

  </div>
</template>

<style scoped></style>

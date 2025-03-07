<script setup>
import { onMounted, ref } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  // Trigger animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <section id="home" class="relative h-[80vh] overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('../assets/hero.jpeg')] brightness-75 transition-all duration-2000" 
         :class="{'scale-105': !isLoaded, 'scale-100': isLoaded}"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-secondary-900/70 to-secondary-800/40"></div>
    
    <div class="container-custom relative h-full flex items-center">
      <div class="max-w-2xl">
        <h1 class="text-white mb-6 leading-tight">
          <span class="block" :class="{'slide-in-left': isLoaded}">Premium</span>
          <span class="text-primary-400 block delay-200" :class="{'slide-in-left': isLoaded}">Packaging Solutions</span>
          <span class="block delay-400" :class="{'slide-in-left': isLoaded}">For Your Business</span>
        </h1>
        
        <p class="text-white text-xl mb-8 font-light delay-600" :class="{'fade-in': isLoaded}">
          Specialized in sachet packing and food packaging services with quality and reliability
        </p>
        
        <div class="flex flex-wrap gap-4 delay-800" :class="{'slide-up': isLoaded}">
          <a href="#products" class="btn-primary pulse">
            Explore Our Services
          </a>
          <a href="#contact" class="border-2 border-white text-white hover:bg-white hover:text-secondary-800 font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg;
}
</style>

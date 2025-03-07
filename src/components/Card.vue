<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  }
});

const isHovered = ref(false);
</script>

<template>
  <div 
    class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full hover-lift"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative overflow-hidden h-64">
      <img 
        :src="`./assets/${imageUrl}`" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500"
        :class="{'scale-110': isHovered}"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      <!-- Overlay icon that appears on hover -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-primary-600/80 w-12 h-12 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-serif font-bold text-secondary-800 mb-3 transition-colors duration-300 group-hover:text-primary-600">{{ title }}</h3>
      
      <p class="text-secondary-600 mb-4 flex-grow">{{ description }}</p>
      
      <a href="#contact" class="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
        Learn more
        <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Card flip animation - uncomment if you want 3D effect
.card-container {
  perspective: 1000px;
}

.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-container:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
*/
</style>

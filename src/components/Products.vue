<script setup>
import Card from './Card.vue';
import { ref, onMounted } from 'vue';

const categories = ref([
  { 
    title: "Powder Packing", 
    imageUrl: "powder_packing.jpeg",
    description: "Precision packaging for powders including spices, supplements, and dry ingredients."
  },
  { 
    title: "Sauce Packing", 
    imageUrl: "sauce_packing.jpeg",
    description: "Custom sachets for sauces, condiments, and dressings with leak-proof sealing."
  },
  { 
    title: "Nut Packaging", 
    imageUrl: "nuts_packing.jpeg",
    description: "Preserve freshness with our specialized packaging solutions for nuts and dry snacks."
  },
  { 
    title: "Candy Packaging", 
    imageUrl: "candy_packing.jpeg",
    description: "Attractive and functional packaging solutions for candies and confectioneries."
  },
  { 
    title: "Liquid Packaging", 
    imageUrl: "liquid_packing.jpeg",
    description: "Secure packaging for liquid products with various volume and sealing options."
  },
  { 
    title: "Food Packaging", 
    imageUrl: "food_packing.jpeg",
    description: "Food-grade packaging solutions that maintain freshness and extend shelf life."
  }
]);

// For scroll animations
const productsSection = ref(null);
const isVisible = ref(false);

onMounted(() => {
  // Use Intersection Observer to detect when section is in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (productsSection.value) {
    observer.observe(productsSection.value);
  }
});
</script>

<template>
  <section id="products" ref="productsSection" class="bg-white py-16 md:py-24 overflow-hidden">
    <div class="container-custom">
      <div class="text-center mb-16" :class="{'slide-up': isVisible}">
        <h2 class="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Packaging Solutions</h2>
        <p class="max-w-2xl mx-auto text-secondary-600">
          Discover our comprehensive range of packaging solutions tailored to meet the specific needs of various products and industries.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(category, index) in categories" 
          :key="index"
          :class="{'slide-up': isVisible, [`delay-${(index+1)*100}`]: true}"
        >
          <Card 
            :title="category.title" 
            :imageUrl="category.imageUrl"
            :description="category.description" 
          />
        </div>
      </div>
      
      <div class="text-center mt-16" :class="{'fade-in delay-700': isVisible}">
        <a href="#contact" class="btn-primary hover-lift">Request Custom Solution</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply font-serif font-bold text-3xl md:text-4xl text-secondary-800 mb-8 relative pb-4;
}

.section-title:after {
  content: '';
  @apply absolute bottom-0 w-16 h-1 bg-primary-500;
}
</style>

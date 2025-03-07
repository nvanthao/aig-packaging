<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300', 
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  ]">
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center z-10">
        <img src="../assets/logo.png" alt="AIG Packaging" class="w-auto h-16">
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <a href="#home" class="nav-link">Home</a>
        <a href="#products" class="nav-link">Products</a>
        <a href="#about-us" class="nav-link">About Us</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="tel:0280050815" class="btn-primary ml-4">Get a quote</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden z-10 text-secondary-800 focus:outline-none"
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            v-if="!mobileMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      <!-- Mobile Menu -->
      <div 
        id="mobile-menu"
        v-show="mobileMenuOpen" 
        class="fixed inset-0 bg-white lg:hidden flex flex-col items-center justify-center space-y-8 text-center"
      >
        <a href="#home" class="nav-link-mobile" @click="mobileMenuOpen = false">Home</a>
        <a href="#products" class="nav-link-mobile" @click="mobileMenuOpen = false">Products</a>
        <a href="#about-us" class="nav-link-mobile" @click="mobileMenuOpen = false">About Us</a>
        <a href="#contact" class="nav-link-mobile" @click="mobileMenuOpen = false">Contact</a>
        <a href="tel:0280050815" class="btn-primary mt-4" @click="mobileMenuOpen = false">Get a quote</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply font-medium text-lg relative;
  color: v-bind('isScrolled ? "rgb(30 41 59)" : "white"');
}

.nav-link::after {
  content: '';
  @apply absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.nav-link-mobile {
  @apply text-secondary-800 text-xl font-medium hover:text-primary-600 transition-colors duration-300;
}

.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg;
}
</style>

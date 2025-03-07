<script setup>
const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: 'Home', url: '#home' },
  { name: 'Products', url: '#products' },
  { name: 'About Us', url: '#about-us' },
  { name: 'Contact', url: '#contact' },
];

const services = [
  { name: 'Powder Packaging', url: '#products' },
  { name: 'Sauce Packaging', url: '#products' },
  { name: 'Nut Packaging', url: '#products' },
  { name: 'Candy Packaging', url: '#products' },
  { name: 'Liquid Packaging', url: '#products' },
  { name: 'Food Packaging', url: '#products' },
];

const socialMedia = [
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/people/AIG-Packaging/100090378390443/',
    icon: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z'
  },
  { 
    name: 'Instagram', 
    url: '#',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  },
];
</script>

<template>
  <footer class="bg-secondary-900 text-white pt-16 pb-6">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Company Info -->
        <div>
          <h4 class="text-lg font-serif font-bold mb-6 text-white">AIG Packaging</h4>
          <p class="mb-4 text-secondary-300">
            Specialized in making various packaging solutions for different products, providing high-quality service and reliability.
          </p>
          <div class="space-y-2">
            <p><a href="tel:0280050815" class="text-primary-400 hover:text-primary-300 transition-colors duration-300">Phone: 0280050815</a></p>
            <p><a href="mailto:aigpackaging0103@gmail.com" class="text-primary-400 hover:text-primary-300 transition-colors duration-300">Email: aigpackaging0103@gmail.com</a></p>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.url" 
                class="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-serif font-bold mb-6 text-white">Our Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <a 
                :href="service.url" 
                class="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-serif font-bold mb-6 text-white">Stay Connected</h4>
          <p class="mb-4 text-secondary-300">Follow us on social media to stay updated with our latest packaging solutions and industry news.</p>
          
          <div class="flex space-x-4 mt-4">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-secondary-800 text-primary-400 hover:text-primary-300 hover:bg-secondary-700 transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center social-icon"
              :title="social.name"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path :d="social.icon"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright Bar -->
      <div class="pt-6 border-t border-secondary-800 text-center text-secondary-400 text-sm">
        <p>&copy; {{ currentYear }} AIG Packaging. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container-custom {
  @apply container mx-auto px-4 max-w-7xl;
}

/* Subtle footer link animations */
a {
  position: relative;
  transition: all 0.3s ease;
}

a:hover {
  transform: translateX(3px);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2) rotate(5deg);
}
</style>

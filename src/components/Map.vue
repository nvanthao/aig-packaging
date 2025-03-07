<script setup>
import { ref, onMounted } from 'vue';

const contactInfo = ref({
  address: 'Unit 3/52 Riverside Rd, Chipping Norton NSW 2170',
  email: 'aigpackaging0103@gmail.com',
  phone: '0280050815',
  hours: 'Monday-Friday: 8AM-5PM'
});

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  service: ''
});

const services = ref([
  'Powder Packaging',
  'Sauce Packaging',
  'Nut Packaging',
  'Candy Packaging',
  'Liquid Packaging',
  'Food Packaging',
  'Other'
]);

// Show success message
const showSuccess = ref(false);

const submitForm = () => {
  // Here you would normally handle the form submission
  // For now we'll just reset the form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  };
  
  // Show success message
  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};

// Animation on scroll
const contactSection = ref(null);
const formVisible = ref(false);
const infoVisible = ref(false);

onMounted(() => {
  // Observer for the form section
  const formObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        formVisible.value = true;
        formObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observer for the info section
  const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        infoVisible.value = true;
        infoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Need a small delay to ensure refs are available
  setTimeout(() => {
    const formEl = document.querySelector('#contact-form');
    const infoEl = document.querySelector('#contact-info');
    
    if (formEl) formObserver.observe(formEl);
    if (infoEl) infoObserver.observe(infoEl);
  }, 100);
});
</script>

<template>
  <section id="contact" ref="contactSection" class="py-16 md:py-24 bg-white overflow-hidden">
    <div class="container-custom">
      <div class="text-center mb-16 slide-up">
        <h2 class="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Contact Us</h2>
        <p class="max-w-2xl mx-auto text-secondary-600">
          Have questions about our packaging solutions? Reach out to our team for personalized assistance.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div id="contact-form" class="bg-secondary-50 p-8 rounded-lg shadow-md relative overflow-hidden" :class="{'slide-in-left': formVisible}">
          <h3 class="text-2xl font-serif font-bold mb-6 text-secondary-800">Send Us a Message</h3>
          
          <!-- Success Message -->
          <div 
            v-if="showSuccess" 
            class="absolute inset-0 bg-primary-600/95 flex items-center justify-center p-6 transform transition-transform duration-500"
            :class="{'translate-y-0': showSuccess, 'translate-y-full': !showSuccess}"
          >
            <div class="text-center text-white">
              <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="text-xl font-bold mb-2">Message Sent!</h4>
              <p>Thank you for contacting us. We'll get back to you shortly.</p>
            </div>
          </div>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="transform transition-all duration-300 hover:-translate-y-1">
                <label for="name" class="block text-sm font-medium text-secondary-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  class="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                  required
                >
              </div>
              
              <div class="transform transition-all duration-300 hover:-translate-y-1">
                <label for="email" class="block text-sm font-medium text-secondary-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                  required
                >
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="transform transition-all duration-300 hover:-translate-y-1">
                <label for="phone" class="block text-sm font-medium text-secondary-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone" 
                  class="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                >
              </div>
              
              <div class="transform transition-all duration-300 hover:-translate-y-1">
                <label for="service" class="block text-sm font-medium text-secondary-700 mb-1">Service Interested In</label>
                <select 
                  id="service" 
                  v-model="formData.service" 
                  class="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                >
                  <option value="" disabled selected>Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
                </select>
              </div>
            </div>
            
            <div class="transform transition-all duration-300 hover:-translate-y-1">
              <label for="message" class="block text-sm font-medium text-secondary-700 mb-1">Your Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="4" 
                class="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full pulse">Send Message</button>
          </form>
        </div>
        
        <!-- Map and Contact Info -->
        <div id="contact-info" class="flex flex-col h-full" :class="{'slide-in-right': infoVisible}">
          <div class="bg-white rounded-lg shadow-md overflow-hidden h-64 lg:h-72 hover-lift transition-all duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6621.809721231153!2d150.9655718499141!3d-33.917848110084456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bf6fbc3599e5%3A0xfc9ae8879384baaf!2sAIG%20Packaging!5e0!3m2!1sen!2sau!4v1677798561547!5m2!1sen!2sau"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div class="bg-secondary-800 text-white p-8 rounded-lg shadow-md mt-6 flex-grow transform transition-all duration-500 hover:shadow-xl">
            <h3 class="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            
            <ul class="space-y-4">
              <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <svg class="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{{ contactInfo.address }}</span>
              </li>
              
              <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <svg class="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:aigpackaging0103@gmail.com" class="hover:text-primary-300 transition-colors duration-300">
                  {{ contactInfo.email }}
                </a>
              </li>
              
              <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <svg class="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:0280050815" class="hover:text-primary-300 transition-colors duration-300">
                  {{ contactInfo.phone }}
                </a>
              </li>
              
              <li class="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <svg class="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ contactInfo.hours }}</span>
              </li>
            </ul>
          </div>
        </div>
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

.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1;
}
</style>
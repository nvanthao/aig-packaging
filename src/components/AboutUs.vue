<script setup>
import { ref, onMounted } from 'vue';

const stats = ref([
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '99%', label: 'Customer Satisfaction' }
]);

const features = ref([
  {
    title: 'Custom Packaging Solutions',
    description: 'Tailored packaging options designed specifically for your product needs.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Quality Materials',
    description: 'Food-grade, eco-friendly materials that ensure product safety and freshness.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Efficient Production',
    description: 'State-of-the-art equipment and streamlined processes for quick turnaround times.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Reliable Service',
    description: 'Consistent quality and dependable delivery schedules you can count on.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]);

// Animation on scroll
const aboutSection = ref(null);
const aboutTextVisible = ref(false);
const statsVisible = ref(false);
const featuresVisible = ref(false);

onMounted(() => {
  // Observer for the about text section
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutTextVisible.value = true;
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observer for the stats section
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsVisible.value = true;
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observer for the features section
  const featuresObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        featuresVisible.value = true;
        featuresObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Need a small delay to ensure refs are available
  setTimeout(() => {
    const aboutTextEl = document.querySelector('#about-text');
    const statsEl = document.querySelector('#about-stats');
    const featuresEl = document.querySelector('#about-features');
    
    if (aboutTextEl) textObserver.observe(aboutTextEl);
    if (statsEl) statsObserver.observe(statsEl);
    if (featuresEl) featuresObserver.observe(featuresEl);
  }, 100);
});

// Animate the counter for stats
const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
</script>

<template>
  <section id="about-us" ref="aboutSection" class="py-16 md:py-24 bg-secondary-50 overflow-hidden">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div id="about-text">
          <div :class="{'slide-in-left': aboutTextVisible}">
            <h2 class="section-title">About AIG Packaging</h2>
            
            <p class="mb-6 text-lg">
              AIG Packaging is a premier provider of specialized packaging solutions with a focus on quality and innovation. 
              We excel in creating various sachets for liquids, powders, nuts, sauces, and more, while also supplying a comprehensive 
              range of food containers, plates, cups, and packaging materials.
            </p>
          </div>
          
          <p class="mb-6 delay-200" :class="{'fade-in': aboutTextVisible}">
            With our commitment to excellence and customer satisfaction, we've established ourselves as a trusted partner for 
            businesses seeking reliable packaging solutions. Our dedicated team combines industry expertise with cutting-edge 
            technology to deliver products that meet the highest standards of quality and safety.
          </p>
          
          <div class="mt-8 delay-400" :class="{'slide-up': aboutTextVisible}">
            <a href="#contact" class="btn-primary">Contact Us Today</a>
          </div>
        </div>
        
        <div id="about-stats" class="grid grid-cols-2 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover-lift"
            :class="{'zoom-in': statsVisible, [`delay-${(index+1)*200}`]: true}"
          >
            <div class="text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-secondary-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
      
      <div class="mt-20" id="about-features">
        <h3 class="text-2xl font-serif font-bold text-center mb-12" :class="{'slide-up': featuresVisible}">Why Choose AIG Packaging?</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover-lift"
            :class="{'slide-up': featuresVisible, [`delay-${(index+1)*150}`]: true}"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600 transform transition-transform duration-500 hover:rotate-12">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"></path>
              </svg>
            </div>
            
            <h4 class="text-lg font-serif font-bold text-secondary-800 mb-2">{{ feature.title }}</h4>
            <p class="text-secondary-600">{{ feature.description }}</p>
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
  @apply absolute bottom-0 left-0 w-16 h-1 bg-primary-500;
}

/* Hover effect for stats cards */
@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(14, 165, 233, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
  }
}

.hover-pulse:hover {
  animation: pulse-border 2s infinite;
}
</style>

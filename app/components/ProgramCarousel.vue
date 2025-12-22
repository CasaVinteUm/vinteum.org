<script setup lang="ts">
import { ref } from 'vue'
import {useI18n} from "vue-i18n";
import programBdlImage from '~/assets/images/bdl.jpg'
import programFellowshipImage from '~/assets/images/fellowship.jpg'
import programMasteringImage from '~/assets/images/mastering.jpg'

const { t } = useI18n();

interface Program {
  title: string
  description: ComputedRef<string>
  image: string
  link: string
}

const programs = ref<Program[]>([
  {
    title: 'Bitcoin Dev Launchpad',
    description: computed(() => t('program.bdl-description')),
    image: programBdlImage,
    link: '#'
  },
  {
    title: 'Fellowship Program',
    description: computed(() => t('program.fellowship-description')),
    image: programFellowshipImage,
    link: '#'
  },
  {
    title: 'Mastering Seminars',
    description: computed(() => t('program.mastering-description')),
    image: programMasteringImage,
    link: '#'
  }
])

const currentIndex = ref(0)

const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % programs.value.length
}

const goToPrev = () => {
  currentIndex.value = currentIndex.value === 0 ? programs.value.length - 1 : currentIndex.value - 1
}

const getCardClass = (index: number) => {
  const totalCards = programs.value.length
  const position = (index - currentIndex.value + totalCards) % totalCards

  if (position === 0) return 'carousel-card-center'
  if (position === 1) return 'carousel-card-right'
  if (position === totalCards - 1) return 'carousel-card-left'
  return 'carousel-card-hidden'
}
</script>

<template>
  <div class="carousel-section">
    <img src="~/assets/images/bg2.svg" alt="" class="carousel-background">

    <div class="navigation-controls mt-20">
      <button
        class="nav-button"
        aria-label="Previous program"
        @click="goToPrev"
      >
        <Icon name="heroicons:chevron-left-20-solid" class="size-6" />
      </button>
      <button
        class="nav-button"
        aria-label="Next program"
        @click="goToNext"
      >
        <Icon name="heroicons:chevron-right-20-solid" class="size-6" />
      </button>
    </div>

    <div class="carousel-container relative">
      <div class="carousel-wrapper">
        <div
          v-for="(program, index) in programs"
          :key="index"
          :class="getCardClass(index)"
          class="carousel-card"
        >
          <img :src="program.image" :alt="program.title" class="card-image" />
          <div class="card-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">{{ program.title }}</h3>
            <p class="card-description">{{ program.description }}</p>
            <a :href="program.link" class="card-link">{{ $t('program.learn-more') }} →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-section {
  position: relative;
  width: 100%;
  padding-bottom: 20px;
}

.carousel-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: top center;
  z-index: 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  min-height: 550px;
  overflow: visible;
  padding: 0 60px;
  z-index: 1;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.carousel-card {
  position: absolute;
  width: 420px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.carousel-card-center {
  transform: translateX(0) scale(1);
  opacity: 1;
  z-index: 10;
}

.carousel-card-left {
  transform: translateX(-480px) scale(0.9);
  opacity: 0.7;
  z-index: 5;
}

.carousel-card-right {
  transform: translateX(480px) scale(0.9);
  opacity: 0.7;
  z-index: 5;
}

.carousel-card-hidden {
  transform: translateX(0) scale(0.5);
  opacity: 0;
  z-index: 0;
  pointer-events: none;
}

.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
  z-index: 2;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 3;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  font-family: 'SK Concretica', sans-serif;
}

.card-description {
  font-size: 14px;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: 16px;
  font-family: 'Poppins', serif;
}

.card-link {
  display: inline-block;
  color: #91FFAE;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  font-family: 'Poppins', serif;
}

.card-link:hover {
  color: #a8ffbf;
}

.navigation-controls {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 0 60px;
  z-index: 1;
}

.nav-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(27, 50, 35, 0.8);
  border: 2px solid rgba(145, 255, 174, 0.3);
  color: #91FFAE;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.nav-button:hover {
  background: rgba(27, 50, 35, 1);
  border-color: #91FFAE;
  transform: scale(1.1);
}

@media (max-width: 1200px) {
  .carousel-card {
    width: 320px;
  }

  .carousel-card-left {
    transform: translateX(-340px) scale(0.85);
  }

  .carousel-card-right {
    transform: translateX(340px) scale(0.85);
  }
}

@media (max-width: 768px) {
  .carousel-card {
    width: 90%;
    max-width: 350px;
  }

  .carousel-card-left,
  .carousel-card-right {
    transform: scale(0.9);
    opacity: 0;
  }

  .navigation-controls {
    padding: 0 20px;
  }

  .nav-button {
    width: 40px;
    height: 40px;
  }
}
</style>

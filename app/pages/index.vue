<script setup lang="ts">
import TheContainer from "~/components/TheContainer.vue";

const { locale: currentLocale } = useI18n()
const isEnglish = computed(() => currentLocale.value === 'en')
</script>

<template>
  <div>
    <div id="hero" class="relative isolate overflow-hidden pt-14 h-100 sm:h-180">
      <img src="~/assets/images/bg1.svg" alt="" class="absolute inset-0 -z-10 size-full object-cover object-top opacity-50" />
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl py-18 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1
              :class="{ 'sm:text-6xl': isEnglish, 'sm:text-5xl': !isEnglish }"
              class="text-2xl uppercase">{{ $t('home.title') }}</h1>
            <p class="mt-2 text-xs text-gray-200 sm:text-xl">{{ $t('home.subtitle') }}</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="btn-green rounded-md px-4 py-2 text-sm font-bold shadow-xs">{{ $t('home.get-in-touch') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-container>
      <p class="mt-8 text-xs sm:text-xl text-justify">{{ $t('home.about') }}</p>
    </the-container>
  </div>
</template>

<style scoped>
#hero h1 {
  font-family: 'SK Concretica', sans-serif;
}

#hero p, #hero a {
  font-family: 'Poppins', serif;
}

.btn-green {
  background-color: #91FFAE;
  color: #172719;
}
</style>

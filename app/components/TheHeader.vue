<script setup lang="ts">
import LanguageSettings from "~/components/header/LanguageSettings.vue"
</script>

<template>
  <header class="w-full absolute inset-x-0 top-0 z-50">
    <div class="container mx-auto py-8 sm:py-12 px-5">
      <div class="flex items-center justify-between">
        <nav>Menu</nav>
        <div>
          <img src="~/assets/images/vinteum.svg" alt="Vinteum" class="h-5 sm:h-8 w-auto">
        </div>
        <language-settings />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>

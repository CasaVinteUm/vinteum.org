<script setup lang="ts">
import LanguageSettings from "~/components/header/LanguageSettings.vue"
import TheLogo from '~/components/header/TheLogo.vue'
</script>

<template>
  <header class="w-full absolute inset-x-0 top-0 z-50">
    <div class="container mx-auto py-8 sm:py-12 px-5">
      <div class="flex items-center justify-between">
        <nav>Menu</nav>
        <div>
          <the-logo/>
        </div>
        <language-settings />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>

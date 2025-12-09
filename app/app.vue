<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <the-header/>
    <NuxtPage/>
    <the-footer/>
  </NuxtLayout>
</template>

<style scoped>
#hero h1 {
  font-family: 'SK Concretica', sans-serif;
}

#hero p, #hero a {
  font-family: 'Poppins', serif;
}
</style>

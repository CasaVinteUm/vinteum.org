<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
</script>

<template>
  <div>
    <the-header/>
    <NuxtPage/>
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

<script setup lang="ts">
const { locales, setLocale, locale: currentLocale } = useI18n()

const LANGUAGES = locales.value.map(locale => locale.code)

function isCurrentLanguage(language: typeof LANGUAGES[number]) {
  return language === currentLocale.value
}

</script>

<template>
  <div>
    <template v-for="language in LANGUAGES" :key="language">
      <button
        :class="{ 'text-green-400 font-bold': isCurrentLanguage(language) }"
        class="uppercase p-2 mx-1 cursor-pointer"
        @click.prevent="() => setLocale(language)"
      >{{ language }}</button>
      <span class="last:hidden">|</span>
    </template>
  </div>
</template>

<style scoped>
</style>

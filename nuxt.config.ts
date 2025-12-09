import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxt/icon'
  ],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'br', language: 'pt-BR', file: 'br.json' },
    ],
    defaultLocale: 'en',
  }
})
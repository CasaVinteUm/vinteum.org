<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { useI18n } from 'vue-i18n'

const { t } = useI18n();

const isOpen = ref(false)

interface MenuItem {
  name: ComputedRef<string>;
  to?: string
  children?: MenuItem[]
  isOpen?: boolean
}

const menuItems = reactive<MenuItem[]>([
  { name: computed(() => t('menu.home')), to: '/' },
  { name: computed(() => t('menu.about')), to: '/about' },
  { name: computed(() => t('menu.supporters')), to: '/supporters' },
  {
    name: computed(() => t('menu.programs')),
    children: [
      { name: computed(() => t('menu.mastering-seminars')), to: '/programs/mastering-seminars' },
      { name: computed(() => t('menu.bitcoin-dev-launchpad')), to: '/programs/bitcoin-dev-launchpad' },
      { name: computed(() => t('menu.fellowship')), to: '/programs/fellowship' },
      { name: computed(() => t('menu.grants')), to: '/programs/grants' },
    ],
    isOpen: false,
  },
  { name: computed(() => t('menu.blog')), to: '/blog' },
  { name: computed(() => t('menu.contact')), to: '/contact' },
  { name: computed(() => t('menu.donate')), to: '/donate' },
])

function closeModal() {
  isOpen.value = false
  menuItems.forEach(menuItem => {
    if (menuItem.isOpen) {
      menuItem.isOpen = false
    }
  })
}

function openModal() {
  isOpen.value = true
}

function handleClick(menuItem: MenuItem) {
  if (menuItem.children?.length) {
    menuItem.isOpen = !menuItem.isOpen
  }
}
</script>

<template>
  <nav>
    <button class="cursor-pointer mx-1" @click="openModal">
      Menu
    </button>
  </nav>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-100" @close="closeModal">

      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

      <div class="fixed inset-0 w-screen">
        <div class="fixed inset-0 min-h-full">

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full h-full bg-black/30 backdrop-blur-xl p-8 shadow-2xl overflow-y-auto"
            >
              <DialogTitle class="text-white mb-10">
                <button
                  class="cursor-pointer text-sm px-4 py-2 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:border-white"
                  @click="closeModal"
                >✕ {{ $t('menu.close') }}</button>
              </DialogTitle>

              <div class="space-y-6 text-4xl md:hidden">
                <div
                  v-for="menuItem in menuItems"
                  :key="menuItem.name"
                  class="space-y-6"
                >
                  <button
                    class="block text-left text-gray-400 hover:text-white w-full"
                    :class="{ 'text-white underline': menuItem.isOpen }"
                    @click.prevent="handleClick(menuItem)"
                  >
                    {{ menuItem.name }}
                  </button>

                  <Transition
                    enter-active-class="transition duration-300"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-200"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-2"
                  >
                    <div
                      v-if="menuItem.children && menuItem.isOpen"
                      class="pl-6 space-y-5 text-gray-400 text-3xl"
                    >
                      <button
                        v-for="submenuItem in menuItem.children"
                        :key="submenuItem.name"
                        class="block text-left"
                      >
                        {{ submenuItem.name }}
                      </button>
                    </div>
                  </Transition>
                </div>

              </div>

              <div class="hidden md:flex gap-4 text-3xl mt-20">

                <div class="w-[260px] space-y-6">
                  <button
                    v-for="menuItem in menuItems"
                    :key="menuItem.name"
                    :class="{ 'text-white': menuItem.isOpen }"
                    class="cursor-pointer block text-left w-full text-gray-400 hover:text-white"
                    @click.prevent="handleClick(menuItem)"
                  >
                    <span v-if="menuItem.children">
                      <span :class="{ 'underline': menuItem.isOpen }">{{ menuItem.name }}</span> &gt;
                    </span>
                    <span v-else>
                      {{ menuItem.name }}
                    </span>
                  </button>
                </div>

                <div class="flex-1">
                  <Transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 translate-x-6"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 translate-x-6"
                  >
                    <div
                      v-if="menuItems.find(i => i.children && i.isOpen)"
                      class="space-y-4 text-gray-400"
                    >
                      <button
                        v-for="submenuItem in menuItems.find(i => i.children && i.isOpen)?.children"
                        :key="submenuItem.name"
                        class="cursor-pointer block hover:text-white"
                      >
                        {{ submenuItem.name }}
                      </button>
                    </div>
                  </Transition>
                </div>

              </div>

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
* {
  font-family: "Space Mono", sans-serif;
  font-weight: 400;
}
</style>

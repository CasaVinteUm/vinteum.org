<script setup lang="ts">
var currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="mt-10">
    <div class="mx-auto max-w-7xl px-6 pt-1 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">

        <div id="newsletter" class="my-10 xl:mt-0 p-10 rounded-2xl border border-green-300">
          <h3 class="text-xl/6 font-semibold text-white">{{ $t('footer.newsletter-title') }}</h3>
          <p class="mt-2 text-sm/6 text-gray-400">{{ $t('footer.newsletter-subtitle') }}</p>
          <form class="mt-6 sm:flex sm:max-w-md">
            <input id="email-address" type="email" name="email-address" required :placeholder="$t('footer.newsletter-input-placeholder')" autocomplete="email" class="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-300 sm:w-64 sm:text-sm/6 xl:w-full">
            <div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
              <button type="submit" class="cursor-pointer flex w-full items-center justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-400">&gt;</button>
            </div>
          </form>
        </div>

<!--        <div class="grid grid-cols-2 gap-8 xl:col-span-2">-->
<!--          <div class="md:grid md:grid-cols-2 md:gap-8">-->
<!--            <div>-->
<!--              <h3 class="text-sm/6 font-semibold text-green-400">Navigate</h3>-->
<!--              <ul role="list" class="mt-6 space-y-4">-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Marketing</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Analytics</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Automation</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Commerce</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Insights</a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="mt-10 md:mt-0">-->
<!--              <h3 class="text-sm/6 font-semibold text-white">Support</h3>-->
<!--              <ul role="list" class="mt-6 space-y-4">-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Submit ticket</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Documentation</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Guides</a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="md:grid md:grid-cols-2 md:gap-8">-->
<!--            <div>-->
<!--              <h3 class="text-sm/6 font-semibold text-white">Company</h3>-->
<!--              <ul role="list" class="mt-6 space-y-4">-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">About</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Blog</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Jobs</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Press</a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="mt-10 md:mt-0">-->
<!--              <h3 class="text-sm/6 font-semibold text-white">Legal</h3>-->
<!--              <ul role="list" class="mt-6 space-y-4">-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Terms of service</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">Privacy policy</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="#" class="text-sm/6 text-gray-400 hover:text-white">License</a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
        <div class="flex gap-x-6 md:order-2 text-3xl">
          <a href="https://x.com/Vinteum_org" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="hugeicons:twitter" />
          </a>
          <a href="https://www.linkedin.com/company/vinteum-org/posts/?feedView=all" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="hugeicons:linkedin-02" />
          </a>
          <a href="https://discord.gg/vinteum" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="hugeicons:discord" />
          </a>
          <a href="https://www.instagram.com/vinteum_org/" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="hugeicons:instagram" />
          </a>
          <a href="https://github.com/vinteumorg" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="hugeicons:github" />
          </a>
          <a href="https://nostr.com/npub13s0kzccx2g7pnwwt5mjuwttl3m74t9qxyr6q7f9978e98tyjrw3qvx5g70" target="_blank" class="text-gray-400 hover:text-white">
            <Icon name="game-icons:ostrich" />
          </a>
        </div>
        <p class="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">&copy; {{ currentYear }} Vinteum. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #122818;
}

#newsletter {
  background-color: #1d462b;
}
</style>

<!--<template>
  <div class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
    <div class="">
      <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center md:h-max">
        <div class="flex items-center justify-between">
          <router-link to="/" class="">
            <img src="@/assets/Tristan_dark.svg" class="px-4 py-1 dark:hidden" alt="logo">
            <img src="@/assets/Tristan_light.svg" class="px-4 py-1" alt="logo">
          </router-link>
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" name="button" class="text-[#DA5759]" aria-label="open menu">
              <p class="hidden">-</p>
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
            </button>
          </div>
        </div>
          <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col h-full mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 gap-3 text-[#333333] dark:text-[#FFFFFF]">
            <router-link to="/" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Présentation</router-link>
            <li><a class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded" href="/#stages">Stages</a></li>
            <router-link to="/projects" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Projets</router-link>
            <router-link to="/veilles" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Blog</router-link>
            <li><a class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded" href="/#contact">Contact</a></li>
          </ul>
      </nav>
    </div>
  </div>
</template>-->

<template>
<header class="p-4 fixed inset-x-0 z-20 md:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] max-w-screen-lg mx-auto">
  <div class="flex items-center justify-between h-16 mx-auto sm:px-6 lg:px-8">
    <div class="flex items-center">
      <button type="button" class="p-2 sm:mr-4 lg:hidden">
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <router-link to="/" class="">
        <img src="@/assets/Tristan_dark.svg" class="px-4 py-1 dark:hidden" alt="logo">
        <img src="@/assets/Tristan_light.svg" class="px-4 py-1" alt="logo">
      </router-link>
    </div>

    <div class="flex items-center space-x-10">
      <nav class="hidden lg:uppercase lg:text-white lg:tracking-wide lg:font-semi-bold lg:text-xs lg:space-x-4 lg:flex">
        <a href="#" class="block h-16 leading-[4rem] border-transparent hover:text-[#DA5759] tracking-widest">Présentation</a>
        <a href="#" class="block h-16 leading-[4rem] border-transparent hover:text-[#DA5759] tracking-widest">Stages</a>
        <a href="#" class="block h-16 leading-[4rem] border-transparent hover:text-[#DA5759] tracking-widest">Projets</a>
        <a href="#" class="block h-16 leading-[4rem] border-transparent hover:text-[#DA5759] tracking-widest">Blog</a>
        <a href="#" class="block h-16 leading-[4rem] border-transparent hover:text-[#DA5759] tracking-widest">Contact</a>
      </nav>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      showMenu: false,
    };
  },
};
</script>

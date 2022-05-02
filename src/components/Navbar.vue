<template>
<header class="fixed inset-x-0 top-0 shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] bg-white rounded-b-xl">
  <div class="flex h-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="flex items-center space-x-14 mx-auto">
      <router-link to="/" class="">
        <img src="@/assets/Tristan_dark.svg" class="px-4 py-1" alt="logo">
      </router-link>
      <button type="button" class="p-2 sm:ml-0 md:hidden">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div class="flex items-center mx-auto space-x-10">
      <nav class="hidden lg:text-white lg:tracking-wide lg:font-bold lg:space-x-8 lg:flex">
        <a href="#presentation" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]">Présentation</a>
        <a href="#stages" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]">Stages</a>
        <a href="#projects" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]">Projets</a>
        <a href="#blog" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]">Blog</a>
        <a href="#contact" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]">Contact</a>
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

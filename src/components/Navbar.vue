<template>
<header class="fixed inset-x-0 top-0 shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] bg-white rounded-b-xl z-10">
  <div class="flex h-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="flex items-center space-x-14 mx-auto">
      <router-link to="/" class="">
        <img src="@/assets/Tristan_dark.svg" class="px-4 py-1" alt="logo">
      </router-link>
    </div>
    <button type="button" @click="openNav = !openNav" class="p-2 sm:ml-0 sm:hidden">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
    <div v-if="openNav" class="flex flex-col fixed z-30 inset-0 md:hidden bg-white">
      <div class="flex flex-row h-16 max-w-screen-xl">
        <div class="flex items-center space-x-14 mx-auto">
          <router-link to="/" class="">
            <img src="@/assets/Tristan_dark.svg" @click="openNav = !openNav" class="px-4 py-1" alt="logo">
          </router-link>
        </div>
        <!-- <button type="button" @click="openNav = !openNav" class="p-2 mr-auto md:hidden">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button> -->
      </div>
      <div v-if="openNav" class="md:hidden my-auto">
        <ul class="flex flex-col gap-4 justify-center mx-auto items-center h-full text-2xl">
          <li><a @click="openNav = !openNav" href="#presentation" class="block h-16 leading-[4rem] text-[#333333] hover:text-[#DA5759]">Présentation</a></li>
          <!-- <li><a @click="openNav = !openNav" href="#presentation" class="block h-16 leading-[4rem] border-transparent text-[#333333] hover:text-[#DA5759]"><div class="bg-red-400 h-10 top-5">test</div></a></li> -->
          <li><a @click="openNav = !openNav" href="#stages" class="block h-16 leading-[4rem] text-[#333333] hover:text-[#DA5759]">Stages</a></li>
          <li><a @click="openNav = !openNav" href="#projects" class="block h-16 leading-[4rem] text-[#333333] hover:text-[#DA5759]">Projets</a></li>
          <li><a @click="openNav = !openNav" href="#blog" class="block h-16 leading-[4rem] text-[#333333] hover:text-[#DA5759]">Blog</a></li>
          <li><a @click="openNav = !openNav" href="#contact" class="block h-16 leading-[4rem] text-[#333333] hover:text-[#DA5759]">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="flex items-center mx-auto space-x-10">
      <nav class="hidden lg:text-white lg:tracking-wide lg:font-bold lg:space-x-8 lg:flex">
        <div class="hover:bg-[#DA5759] hover:h-12 hover:w-full hover:rounded-b-md hover:transition hover:duration-400"><a href="#presentation" class="block h-16 leading-[4rem] text-[#333333]">Présentation</a></div>
        <div class="hover:bg-[#DA5759] hover:h-12 hover:w-full hover:rounded-b-md hover:transition hover:duration-400"><a href="#stages" class="block h-16 leading-[4rem] text-[#333333]">Stages</a></div>
        <div class="hover:bg-[#DA5759] hover:h-12 hover:w-full hover:rounded-b-md hover:transition hover:duration-400"><a href="#projects" class="block h-16 leading-[4rem] text-[#333333]">Projets</a></div>
        <div class="hover:bg-[#DA5759] hover:h-12 hover:w-full hover:rounded-b-md hover:transition hover:duration-400"><a href="#blog" class="block h-16 leading-[4rem] text-[#333333]">Blog</a></div>
        <div class="hover:bg-[#DA5759] hover:h-12 hover:w-full hover:rounded-b-md hover:transition hover:duration-400"><a href="#contact" class="block h-16 leading-[4rem] text-[#333333]">Contact</a></div>
      </nav>
    </div>
  </div>
</header>
</template>

<script>
import feather from 'feather-icons';

export default {
  data() {
    return {
      openNav: false,
    };
  },
  mounted() {
    feather.replace();
  },
};
</script>

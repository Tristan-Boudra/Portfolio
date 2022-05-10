<template>
  <!-- <div class="rounded-lg shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.3)] transition duration-500 hover:ease-in-out h-full">
    <section class="">
      <div class="flex flex-col p-6">
        <h1 class="text-2xl font-bold p-2 mb-5">{{ data.name }}</h1>
        <img class="mx-auto w-9/12 h-auto rounded-lg mb-5 shadow-[0_5px_25px_-3px_rgba(0,0,0,0.2)] transition duration-500 hover:ease-in-out hover:scale-110" v-if="this.data.img" :src="require(`@/assets/${data.img}.webp`)" alt="image projetcs">
        <p class="mx-auto p-2 mb-6">{{ data.description }}</p>
        <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3">
          <li class="py-1 px-3 text-white text-sm rounded-md transition duration-500 hover:scale-110" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
        </ul>
        <p class="mx-auto p-2">{{ data.context }}</p>
        <div class="flex flex-row flex-wrap mx-auto p-3">
          <div class="mt-5 p-1" v-for="allLink in data.links" v-bind:key="allLink">
            <a class="bg-amber-500 p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto" :href="allLink.link">{{ allLink.linkName }}</a>
          </div>
        </div>
      </div>
    </section>
  </div> -->
    <div class="w-10 h-10 rounded-full bg-amber-500"></div>
    <div class="rounded-lg shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] h-full max-w-screen-lg mx-auto p-3">
      <div class="flex flex-col">
        <h3>Titre</h3>
        <div class="flex flex-row">
          <i data-feather="arrow-right" class="stroke-[#333333] hover:stroke-amber-500"></i>
          <p>description</p>
        </div>
        <div class="flex flex-row">
          <i data-feather="arrow-right" class="stroke-[#333333] hover:stroke-amber-500"></i>
          <p>projet personnel</p>
        </div>
      </div>
      <div class="mx-auto w-96 h-px bg-[#333333] rounded-lg"></div>
      <div class="flex flex-row gap-6">
        <div>
          <p>techno</p>
          <ul class="flex flex-row">
            <li>html</li>
            <li>html</li>
          </ul>
        </div>
        <div>
          <p>liens</p>
          <ul class="flex flex-row">
            <li>github</li>
            <li>site</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import feather from 'feather-icons';

feather.replace();
export default {
  props: ['data'],
};
</script>

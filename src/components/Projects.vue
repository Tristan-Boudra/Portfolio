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
    <div class="w-16 h-16 rounded-full ml-10 shadow-[0_15px_25px_0px_rgba(0,0,0,0.2)] top-5" :style="'background-color: #' + data.color">
      <div class="h-auto mt-10">
        <p class="font-bold text-2xl">{{ data.initiale }}</p>
      </div>
    </div>
    <div class="rounded-lg shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] h-full max-w-screen-lg mx-auto p-5">
      <div class="flex flex-col">
        <h3 class="font-bold ml-0 text-2xl">{{ data.name }}</h3>
        <div class="flex flex-row gap-2">
          <i data-feather="align-center" class="stroke-[#333333] hover:stroke-amber-500 my-auto"></i>
          <p class="my-5 w-full">{{ data.description }}</p>
        </div>
        <div class="flex flex-row gap-2">
          <i data-feather="flag" class="stroke-[#333333] hover:stroke-amber-500 my-auto"></i>
          <p class="my-2">{{ data.context }}</p>
        </div>
      </div>
      <div class="py-10">
        <div class="mx-auto w-72 h-px bg-[#333333] rounded-lg"></div>
      </div>
      <div class="flex flex-row gap-6 mx-auto justify-around">
        <div class="w-3/5">
          <p class="font-semibold">Technologies utilisées</p>
          <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3 w-auto">
            <li class="py-1 px-3 text-white text-sm rounded-md transition duration-500 hover:scale-110 w-auto p-2" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="w-2/5">
          <p class="font-semibold">Liens</p>
          <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3 w-auto">
            <li class="py-1 px-3 text-[#333333] bg-amber-500 font-bold text-sm rounded-md transition duration-500 hover:scale-110 w-auto p-2" v-for="allLink in data.links" v-bind:key="allLink"><a :href="allLink.link">{{ allLink.linkName }}</a></li>
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

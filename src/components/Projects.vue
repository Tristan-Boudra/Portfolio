<template>
  <div class="static rounded-lg shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.2)] transition duration-500 hover:ease-in-out h-full max-w-screen-lg mx-auto px-5 py-4">
    <div class="absolute ml-3 md:ml-2 -mt-14 md:-mt-11">
      <div class="rounded-full w-14 h-14 md:h-16 md:w-16 flex shadow-[0_15px_25px_0px_rgba(0,0,0,0.2)]" :style="'background-color: #' + data.color + ';'">
        <p class="font-bold text-2xl rounded-full w-20 my-auto">{{ data.initiale }}</p>
      </div>
    </div>
    <div class="flex flex-col px-4">
      <h3 class="font-bold ml-0 text-2xl">{{ data.name }}</h3>
      <div class="flex flex-row gap-5">
        <i data-feather="align-left" class="stroke-[#333333] hover:stroke-amber-500 my-auto"></i>
        <p class="my-5 w-full text-left">{{ data.description }}</p>
      </div>
      <div class="flex flex-row gap-5">
        <i data-feather="pen-tool" class="stroke-[#333333] hover:stroke-amber-500 my-auto"></i>
        <p class="my-2 text-sm">{{ data.context }}</p>
      </div>
    </div>
    <div class="py-10">
      <div class="mx-auto w-72 h-px bg-[#333333] rounded-lg"></div>
    </div>
    <div class="flex flex-row gap-6 mx-auto justify-around">
      <div class="w-3/5">
        <p class="font-semibold">Technologies utilisées</p>
        <ul class="flex gap-2 flex-wrap mx-auto justify-center mt-3 w-auto">
          <li class="py-1 px-3 text-white text-sm rounded-md transition duration-500 hover:scale-110 w-auto p-2" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color + '; color: #' + ContrastedColor(tech.color) + '; '">{{ tech.name }}</li>
        </ul>
      </div>
      <div class="w-2/5">
        <p class="font-semibold">Liens</p>
        <ul class="flex gap-2 flex-wrap mx-auto justify-center mt-3 w-auto">
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
  methods: {
    ContrastedColor(hexcolorParam) {
      // If a leading # is provided, remove it
      let hexcolor = hexcolorParam;
      if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolorParam.slice(1);
      }
      // Convert to RGB value
      const r = parseInt(hexcolor.substr(0, 2), 16);
      const g = parseInt(hexcolor.substr(2, 2), 16);
      const b = parseInt(hexcolor.substr(4, 2), 16);
      // Get YIQ ratio
      const yiq = ((r * 350) + (g * 587) + (b * 114)) / 1000;
      // Check contrast
      return (yiq >= 128) ? '000' : 'fff';
    },
  },
};
</script>

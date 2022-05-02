<template>
  <div class="border border-black rounded-lg">
    <section class="">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold p-2 mb-5">{{ data.name }}</h1>
        <img class="mx-auto w-6/12 rounded-lg mb-5 border border-[#333333]" v-if="this.data.img" :src="require(`@/assets/${data.img}.png`)" alt="image projetcs">
        <p class="mx-auto p-2 mb-6">{{ data.description }}</p>
        <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3">
          <li class="py-1 px-3 text-white text-sm rounded-md" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
        </ul>
        <p class="mx-auto p-2">{{ data.context }}</p>
        <div class="flex flex-row space-x-2 flex-wrap mx-auto p-3">
          <div class="mt-5" v-for="allLink in data.links" v-bind:key="allLink">
            <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto" :href="allLink.link">{{ allLink.linkName }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

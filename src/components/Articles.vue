<template>
  <div class="rounded-3xl shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.3)] transition duration-500 hover:ease-in-out h-full">
    <div class="flex flex-col md:flex-row">
      <div class="h-full my-auto md:w-2/5">
        <img class="rounded-3xl shadow-[0_5px_25px_-3px_rgba(0,0,0,0.2)] object-fill" v-if="this.data.image" :src="require(`@/assets/${data.image}.webp`)" alt="Image article bog Boudra Tristan">
      </div>
      <section class="p-5 px-10 md:w-3/5">
        <div class="flex flex-col">
          <div class="text-left">
            <h1 class="text-2xl font-bold mb-2 text-amber-600">{{ data.titre }}</h1>
            <p class="mx-auto mb-2">{{ data.description }}</p>
            <ul class="flex gap-2 flex-wrap mx-auto">
              <li class="py-1 px-3 bg-amber-100 text-xs rounded-md transition duration-500 hover:scale-110" v-for="allCategorie in data.categorie" v-bind:key="allCategorie" :style="'background-color: #' + allCategorie.color + '; color: #' + ContrastedColor(allCategorie.color) + ';'">{{ allCategorie.name }}</li>
            </ul>
            <div class="flex flex-row">
              <p class="mx-auto p-2 ml-0">Publier le: {{ data.date }}</p>
              <p class="mx-auto p-2 ml-0">Auteur: {{ data.auteur }}</p>
            </div>
            <div class="mt-2 text-center md:text-left">
              <router-link class="py-1 px-3 bg-[#333333] text-white rounded-md m-auto" :to="{ name: data.pathName, params: { name: data.pathName }}">Voir l'article</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

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

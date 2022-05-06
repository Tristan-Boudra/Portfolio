<template>
  <div class="rounded-lg shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.3)] transition duration-500 hover:ease-in-out h-full">
    <img class="mx-auto w-auto rounded-lg mb-5 shadow-[0_5px_25px_-3px_rgba(0,0,0,0.2)] object-fill" v-if="this.data.image" :src="require(`@/assets/${data.image}.png`)" alt="image stages">
    <section class="p-5">
      <div class="flex flex-col">
        <div class="p-3 text-left">
          <h1 class="text-2xl font-bold p-2 mb-5">{{ data.titre }}</h1>
          <p class="mx-auto p-2 mb-6">{{ data.description }}</p>
          <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3">
            <li class="py-1 px-3 bg-gray-200 text-xs rounded-md transition duration-500 hover:scale-110" v-for="allCategorie in data.categorie" v-bind:key="allCategorie">{{ allCategorie.name }}</li>
          </ul>
          <div class="flex flex-row">
            <p class="mx-auto p-2">Publier le: {{ data.date }}</p>
            <p class="mx-auto p-2">Auteur: {{ data.auteur }}</p>
          </div>
        </div>
        <div class="flex flex-row space-x-2 flex-wrap mx-auto p-3">
          <div class="mt-5" v-for="allLink in data.links" v-bind:key="allLink">
            <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto" :href="allLink.link">{{ allLink.name }}</a>
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

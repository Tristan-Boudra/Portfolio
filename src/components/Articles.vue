<template>
  <div class="rounded-3xl shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_25px_-3px_rgba(0,0,0,0.3)] transition duration-500 hover:ease-in-out h-full">
    <img class="mx-auto w-auto rounded-t-3xl mb-5 shadow-[0_5px_25px_-3px_rgba(0,0,0,0.2)] object-fill" v-if="this.data.image" :src="require(`@/assets/${data.image}.webp`)" alt="image stages">
    <section class="p-5">
      <div class="flex flex-col">
        <div class="p-3 text-left">
          <h1 class="text-2xl font-bold p-2 mb-5" v-for="allLink in data.links" v-bind:key="allLink"><a :href="allLink.link" class="hover:text-[#DA5759]">{{ data.titre }}</a></h1>
          <p class="mx-auto p-2 mb-6">{{ data.description }}</p>
          <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3">
            <li class="py-1 px-3 bg-amber-50 text-xs rounded-md transition duration-500 hover:scale-110" v-for="allCategorie in data.categorie" v-bind:key="allCategorie">{{ allCategorie.name }}</li>
          </ul>
          <div class="flex flex-row">
            <p class="mx-auto p-2">Publier le: {{ data.date }}</p>
            <p class="mx-auto p-2">Auteur: {{ data.auteur }}</p>
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

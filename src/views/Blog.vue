<template>
  <div class="w-full">
    <Navbar/>
    <section class="mx-auto mt-16">
      <div class="bg-amber-50">
        <div class="max-w-screen-lg mx-auto">
          <h1 class="font-bold text-2xl md:text-4xl p-5">Blog</h1>
          <div class="grid md:grid-cols-2">
            <div class="text-left py-10 px-5">
              <p class="mt-3">Vous retrouverez tous les articles concernant le <span class="font-semibold">développement web</span>.</p>
              <p class="mt-3">Tu y retrouveras des articles complets sur divers sujets.</p>
              <p class="mt-3">Le contenu des articles sont fait pour qu'un public large puissent les lires</p>
              <p class="font-semibold mt-3">Codeur, Développeur, Programmeur, bonne lecture !</p>
            </div>
            <div class="">
              <img src="@/assets/Articles.svg" alt="image illustration article" class="w-72 mx-auto">
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-8 mx-auto justify-center py-16">
        <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
        <h2 class="font-bold text-xl md:text-3xl">Articles</h2>
        <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
      </div>
      <p>Acun article n'est pour le moment disponible</p>
      <div class="grid md:grid-cols-2 gap-16 p-10">
        <div v-for="row in Articles" v-bind:key="row">
          <Articles :data="row"/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Articles from '@/components/Articles.vue';

export default {
  components: {
    Navbar,
    Footer,
    Articles,
  },
  computed: {
    Articles() {
      const allArticles = this.$store.state.blog;
      return allArticles;
    },
  },
};
</script>

<template>
  <div class="w-full">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto">
      <h1 class="mt-20">Blog</h1>
        <div class="grid md:grid-cols-2 gap-16">
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

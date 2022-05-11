<template>
  <div class="w-full">
    <Navbar/>
    <section id="presentation" class="max-w-screen-lg mx-auto min-h-screen">
      <div class="mt-20 w-full grid md:grid-cols-2 md:p-10 md:mt-28 py-auto">
        <div class="flex-col pt-10">
          <div class="gap-4 mx-auto p-1 sm:pl-0 text-[#333333]">
            <div class="text-7xl font-black md:text-left pb-10 animate-move-bg bg-gradient-to-r from-red-400 via-yellow-500 to-red-400 bg-[length:400%] bg-clip-text text-transparent">Boudra<br>Tristan</div>
            <div class="p-5 md:pl-0 mt-10 mx-auto md:text-left"><span class="text-xl">Hello</span>👋<br>Je suis actuellement étudiant en Bachelor Développeur web et mobile à MyDigitalSchool à Lyon.</div>
            <div class="mt-10 px-5 flex flex-wrap gap-8 sm:mx-auto justify-center mx-auto md:justify-start text-[#333333]">
              <button class="bg-amber-500 p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest transition duration-600"><a class="bg-transparent" href="/#debut">Commencer</a></button>
              <a class="border-2 border-[#333333] hover:border-amber-500 p-3 rounded-lg font-bold text-center tracking-widest text-[#333333] flex py-auto h-14" href="/#projects">
                <p class="pr-2">Voir mes projets</p>
                <i data-feather="arrow-right" class="stroke-[#333333] hover:stroke-amber-500"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-col md:order-0">
          <img class="m-auto rounded-3xl mt-24 w-56 sm:w-72 h-auto md:w-80 lg:w-96" src="@/assets/Tristan.webp" alt="Image de profile">
        </div>
      </div>
      <div class="mt-20 mb-16">
        <a href="/#debut" class="block w-32 m-auto">
          <img :src="'/files/arrows_down.gif'" alt="gif illustration blog" class="w-36 h-auto mx-auto">
        </a>
      </div>
    </section>
    <section id="debut" class="mx-auto bg-amber-50">
      <div class="flex text-[#FFFFFF] gap-4 flex-col md:flex-row md:p-5 max-w-screen-lg mx-auto py-16">
        <div class="flex flex-col text-[#333333]">
          <div class="flex-row text-left w-30 mx-auto p-10 lg:pl-0">
            Titulaire d'un BTS SIO option SLAM, je suis actuellement en troisième année de Bachelor Développeur web et mobile à MydigitalSchool à Lyon. Je réalise cette formation en alternance au sein de l'entreprise ... en tant que ...<br>
            Avec mes projets de cours, personnels, ainsi que mes stages, j’ai pu apprendre:</div>
          <ul class="flex flex-row flex-wrap gap-2 mx-auto space-x-4 p-3 justify-center">
            <li class="py-1 px-3 text-white text-sm rounded-md h-auto w-auto transition duration-500 hover:scale-110" v-for="tech in this.langages.techno" v-bind:key="tech" :style="'background-color: #' + tech.color + '; color: #' + ContrastedColor(tech.color) + ';'">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="p-2">
          <div class="flex-col">
          <div class="flex flex-row space-x-14 justify-center mt-5 text-[#333333]">
            <div class="flex-row text-7xl">+6
              <div class="text-base">Projets</div>
            </div>
            <div class="flex-row text-7xl">+2
              <div class="text-base">Expériences</div>
            </div>
          </div>
            <div class="flex flex-row gap-8 justify-center text-[#333333]">
              <button class="bg-[#333333] p-2 rounded-lg text-[#FFFFFF] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/CV.pdf" download="CV.pdf">CV</a></button>
              <button class="bg-[#333333] p-2 rounded-lg text-[#FFFFFF] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/Certification_Anssi.pdf" download="Certification_Anssi.pdf">Certification ANSSI</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto px-5 py-16 mt-20 grid gap-12 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Mes projets</h2>
        <div class="grid md:grid-cols-2 gap-16 mt-10">
          <div v-for="row in Projects" v-bind:key="row">
            <Projects :data="row"/>
          </div>
        </div>
      </div>
    </section>
    <section id="stages" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto px-10 py-16 mt-20 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Stage</h2>
        <p class="p-5 w-auto mx-auto mt-10">Durant mon BTS SIO, j'ai eu l'opportunité de réaliser 2 stages différents, pour une durer totale de 10 semaines.</p>
        <div class="grid md:grid-cols-2 gap-8 mt-20">
          <div v-for="row in Stages" v-bind:key="row">
            <Stages :data="row"/>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="mx-auto bg-amber-50">
      <div class="mx-auto p-10 py-16 grid gap-12 text-[#333333] max-w-screen-lg">
        <h2 class="text-3xl font-bold text-center mx-auto">Blog</h2>
        <div class="grid md:grid-cols-2">
          <p class="text-left p-3">J'ai décidé de créer un blog afin de partager mes connaissances ainsi que mes compétences afin que vous et moi puissions progresser ensemble et ainsi en apprendre davantage sur l'univers du <span class="font-semibold">développement web.</span><br>
            Vous y trouverez toutes sortes de sujets autant divers et variétés. En partant du début de la <span class="font-semibold">conception</span> d'un site web, des conseils pendant le <span class="font-semibold">développement</span> puis dans la finalisation d'un site et de la <span class="font-semibold">mise en production.</span></p>
          <div class="">
            <img src="@/assets/blog.svg" alt="image illustration blog" class="w-72 h-auto mx-auto">
          </div>
        </div>
        <router-link to="/blog" class="bg-[#333333] p-2 rounded-lg text-[#FFFFFF] font-bold text-center w-auto h-auto tracking-widest mx-auto">Voir les articles</router-link>
      </div>
    </section>
    <section id="contact" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto px-3 py-16 grid gap-12 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Me contacter</h2>
        <Contact/>
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import Stages from '@/components/Stages.vue';
import feather from 'feather-icons';
import '@/assets/tailwind.css';

feather.replace();
export default {
  props: ['data'],
  components: {
    Navbar,
    Footer,
    Projects,
    Contact,
    Stages,
  },
  name: 'Technologie',
  data() {
    return {
      langages: '',
    };
  },
  computed: {
    Projects() {
      const allProjects = this.$store.state.projects;
      return allProjects;
    },
    Stages() {
      const allStages = this.$store.state.stages;
      return allStages;
    },
  },
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
      // const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      const yiq = ((r * 350) + (g * 587) + (b * 114)) / 1000;
      // Check contrast
      return (yiq >= 128) ? '000' : 'fff';
    },
    Technologie() {
      const langage = this.$store.state.langages;
      langage.forEach((langages) => {
        this.langages = langages;
      });
    },
  },
  mounted() {
    this.Technologie();
  },
};
</script>

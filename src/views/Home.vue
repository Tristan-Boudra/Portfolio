<template>
  <div class="w-full">
    <Navbar/>
    <section id="presentation" class="max-w-screen-lg mx-auto">
      <div class="mt-20 w-full py-16 grid md:grid-cols-2 md:p-10 md:py-0 md:mt-28">
        <div class="flex-col pt-10">
          <div class="gap-4 mx-auto p-1 sm:pl-0 text-[#333333]">
            <!-- <div class="w-full text-7xl pb-10 font-black md:text-left">Boudra<br>Tristan</div> -->
            <div class="text-7xl font-black md:text-left pb-10 animate-move-bg bg-gradient-to-r from-red-400 via-yellow-500 to-red-400 bg-[length:400%] bg-clip-text text-transparent">Boudra<br>Tristan</div>
            <div class="p-5 md:pl-0 mt-10 mx-auto md:text-left"><span class="text-xl">Hello</span>👋<br>Je suis actuellement étudiant en Bachelor Développeur web et mobile à MyDigitalSchool à Lyon.</div>
            <div class="mt-10 flex flex-wrap gap-8 sm:mx-auto justify-center space-x-6 mx-auto md:justify-start text-[#333333]">
              <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest transition duration-600"><a class="bg-transparent" href="/#presentation">Commencer</a></button>
              <router-link class="border-2 border-[#333333] p-3 rounded-lg font-bold text-center h-full tracking-widest flex-row text-[#333333] flex flex-cols py-auto" to="/projects">
                <p class="pr-2">Voir mes projets</p>
                <i data-feather="arrow-right" class="stroke-[#333333]"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex-col md:order-0 pt-28 md:pt-0">
          <img class="m-auto rounded-3xl mt-24 w-56 md:w-72 lg:w-96" src="@/assets/Tristan.png" alt="Image de profile">
        </div>
      </div>
      <div class="flex text-[#FFFFFF] gap-4 mt-28 flex-col md:flex-row md:p-5">
        <div class="flex flex-col text-[#333333]">
          <div class="flex-row text-left w-30 mx-auto p-10 lg:pl-0">
            Titulaire d'un BTS SIO option SLAM, je suis actuellement en troisième année de Bachelor Développeur web et mobile à MydigitalSchool à Lyon. Je réalise cette formation en alternance au sein de l'entreprise ... en tant que ...<br>
            Avec mes projets de cours, personnels, ainsi que mes stages, j’ai pu apprendre:</div>
          <ul class="flex flex-row flex-wrap gap-2 mx-auto space-x-4 p-3 justify-center">
            <li class="py-1 px-3 text-white text-sm rounded-md h-auto w-auto" v-for="tech in this.langages.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
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
              <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/CV.pdf" download="CV.pdf">CV</a></button>
              <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/Certification_Anssi.pdf" download="Certification_Anssi.pdf">Certification ANSSI</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="stages" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto px-10 py-16 mt-20 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Stage</h2>
        <p class="p-5 w-auto mx-auto mt-10">Durant le BTS SIO, nous devons effectuer 2 stages en entreprise pour une durée totale de 10 semaines permettant de valider notre BTS.</p>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="row in Stages" v-bind:key="row">
            <Stages :data="row"/>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto px-10 py-16 mt-20 grid gap-12 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Mes projets</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="row in Projects" v-bind:key="row">
            <Projects :data="row"/>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class="max-w-screen-lg mx-auto bg-white">
      <div class="max-w-screen-lg mx-auto p-10 py-16 grid gap-12 text-[#333333]">
        <h2 class="text-3xl font-bold text-center mx-auto">Blog</h2>
        <p class="text-left p-6">J'ai décidé de créer un blog afin de partager mes connaissances ainsi que mes compétences afin que vous et moi puissions progresser ensemble et ainsi en apprendre davantage sur l'univers du développement web.<br>
          Vous y trouverez toutes sortes de sujets autant divers et variétés. En partant du début de la conception d'un site web, des conseils pendant le développement puis dans la finalisation d'un site et de la mise en production.</p>
          <router-link to="/blog" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-auto h-auto tracking-widest mx-auto">Voir le blog</router-link>
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
    Technologie() {
      const langage = this.$store.state.langages;
      langage.forEach((langages) => {
        this.langages = langages;
      });
    },
  },
  mounted() {
    this.Technologie();
    feather.replace();
  },
};
</script>

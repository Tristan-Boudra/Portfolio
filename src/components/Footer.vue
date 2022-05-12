<template>
  <div class="w-full mt-10">
    <footer class="p-5 bg-amber-50">
      <div class="mx-auto max-w-screen-lg ">
        <div class="flex space-x-8 mx-auto justify-center">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
            <img src="@/assets/Tristan_dark.svg" class="px-4 py-1 w-auto h-auto" alt="logo">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
        </div>
        <div class="flex flex-row justify-center flex-wrap p-5">
          <div class="p-5 w-96">
            <h3 class="text-lg hover:text-amber-500 font-semibold">Me contacter</h3>
            <ul class="flex flex-row mx-auto flex-wrap gap-4 justify-center p-4">
              <li><i data-feather="linkedin" class="stroke-[#333333] hover:stroke-amber-500 cursor-pointer"></i></li>
              <li><i data-feather="twitter" class="stroke-[#333333] hover:stroke-amber-500 cursor-pointer"></i></li>
              <li><a href="/#contact"><i data-feather="mail" class="stroke-[#333333] hover:stroke-amber-500"></i></a></li>
            </ul>
          </div>
          <div class="p-5 w-96">
            <h3 class="text-lg hover:text-amber-500 font-semibold">Sections</h3>
            <ul class="grid md:grid-cols-2 w-52 gap-5 m-auto p-5">
              <li><a href="/" class="">Présentation</a></li>
              <li><a href="/#projects">Projets</a></li>
              <li><a href="/#stages">Stages</a></li>
              <li><a href="/#blog">Blog</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <p class="text-[#333333]">© Boudra Tristan {{ copyrightDate }} | <a href="/mentionsLegales" class="hover:text-amber-500 hover:font-bold">Mentions Légales</a> | Tous droits réservés</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      copyrightDate: new Date().getFullYear(),
    };
  },
};
</script>

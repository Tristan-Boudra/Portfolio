<template>
  <Navbar/>
  <div class="w-full">
    <section id="presentation" class="max-w-screen-lg mx-auto min-h-screen">
      <div class="mt-20 w-full md:p-10 md:mt-28 py-auto text-left">
        <h1 class="text-3xl font-bold text-amber-600 text-center mb-10">Comment créer un CV professionnel</h1>
        <p class="mb-5">On est tous déjà passés par là, qu’on soit jeune ou moins jeune et que l’on cherche un stage, une alternance ou un emploi, tu es (presque) obligé de rédiger un CV. C’est là que les choses se compliquent. Si tu n’as jamais réalisé de CV et/ou que tu as peux d’expérience alors cette étape peut-être un calvaire. C’est pourquoi aujourd’hui je vais te donner tous les tips afin de réussir un CV qui va te démarquer des autres candidats.</p>
        <h2 class="text-xl font-bold mb-5">Voici quelques chiffres clés:</h2>
        <ul class="mb-5">
          <li class="mb-5"> - Le temps moyen que passe un recruteur sur un CV est de <span class="font-bold">34,5 secondes</span>. Cela veut donc dire que tu vas devoir <span class="font-bold">optimiser</span> au maximum tes informations afin que le recruteur puisse les lire sans les chercher. <br><span class="font-semibold">Source:</span><a class="hover:text-amber-600 italic" href="https://fr.statista.com/infographie/17968/statistiques-consultation-candidatures-emploi-par-les-recruteurs/"> lien</a></li>
          <li>- <span class="font-bold">84%</span> des candidats réalisent un <span class="font-bold">CV impersonnel</span>. Vous allez me dire: c’est quoi un CV impersonnel ? Et bien c’est un CV où l’on ne retrouve par-exemple pas le nom du responsable à qui l’on envoie. Plus généralement, c’est un CV que l’on envoie à plusieurs entreprises sans en changer son contenu. <br><span class="font-semibold">Source:</span><a class="hover:text-amber-600 italic" href="https://devskiller.com/fr/statistiques-sur-lemploi-2020/#resume-statistics"> lien</a></li>
        </ul>
        <p class="mb-5">Après avoir vu quelques statistiques sur les CV, nous allons maintenant nous pencher sur comment réaliser un bon CV. Voici un CV interactif, c'est-à-dire que chaque partie comporte des informations importantes à prendre en compte. Vous pouvez cliquer sur les parties pour avoir davantage d’informations.</p>
        <div class="max-w-screen-md bg-amber-100 mx-auto rounded-lg">
          <div class="flex flex-cols">
            <div class="w-2/5">
              <div class="bg-amber-900 rounded-full w-16 md:w-20 md:h-20 h-16 mb-3 ml-10"></div>
              <div class="p-2 ml-3">
                <h3 class="mb-3 font-bold text-xl">Boudra Tristan</h3>
                <p class="text-sm">Je recherche à partir de septembre 2022, une alternance en tant que  développement front-end</p>
              </div>
              <div class="p-2 ml-3">
                <h2 class="mb-3 font-bold text-xl">Qui suis-je</h2>
                <p class="text-sm">Décrivez en quelques lignes vos compétences clés pour le poste et vos objectifs de carrière. Vous pouvez les mettre en forme à l’aide de puces ou les laisser sous forme de texte plein.</p>
              </div>
              <div class="p-2 ml-3">
                <h2 class="mb-3 font-bold text-xl">Contact</h2>
                <ul>
                  <li><i data-feather="phone" class="stroke-[#333333]"></i><p class="text-sm">01.02.03.04.05</p></li>
                  <li><i data-feather="mail" class="stroke-[#333333]"></i><p class="text-sm">mail@gmail.com</p></li>
                  <li><i data-feather="at-sign" class="stroke-[#333333]"></i><p class="text-sm">www.adresse.com</p></li>
                  <li><i data-feather="map-pin" class="stroke-[#333333]"></i><p class="text-sm">10 avenue des champs</p></li>
                  <li><i data-feather="linkedin" class="stroke-[#333333]"></i><p class="text-sm">adresse LinkedIn</p></li>
                </ul>
              </div>
              <div class="p-2 ml-3">
                <h2 class="mb-3 font-bold text-xl">Langues</h2>
                <ul class="text-sm">
                  <li>Anglais - B1 Niveaux techniques</li>
                  <li>Espagnol - A2</li>
                </ul>
              </div>
              <div class="p-2 ml-3">
                <h2 class="mb-3 font-bold text-xl">Centres d'intêrets</h2>
                <ul class="text-sm">
                  <li>Cyclisme</li>
                  <li>Nouvelles technologies</li>
                  <li>Gastronomie</li>
                </ul>
              </div>
            </div>
            <div class="w-3/5">
              <div>r</div>
            </div>
          </div>
        </div>
        <h2 class="text-xl font-bold mb-5">Petit bonus</h2>
        <p>Voici quelques informations en vrac que vous devez utilisez pour rédiger un bon CV:</p>
        <ul>
          <li>- Format PDF.</li>
          <li>- 1 page maximum.</li>
          <li>- Antichronologique.</li>
          <li>- Utiliser un vérificateur d’orthographe (<a class="italic" href="https://www.reverso.net/orthographe/correcteur-francais/">lien</a>).</li>
          <li>- Ne négligez pas vos expériences (stage, bénévolat).</li>
          <li>- Etre factuel, précis et concis.</li>
          <li>- Personnaliser votre CV à l’entreprise auquel vous postulez (ajouter leur logo, adapter la charte graphique de votre CV au couleur du logo de l’entreprise).</li>
          <li>- Personnaliser le titre en fonction du poste souhaité.</li>
        </ul>
      </div>
    </section>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import feather from 'feather-icons';
import '@/assets/tailwind.css';

feather.replace();
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>

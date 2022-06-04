<template>
  <Navbar/>
  <div class="w-full">
    <section id="presentation" class="max-w-screen-lg mx-auto min-h-screen p-5">
      <div class="mt-20 w-full md:p-10 md:mt-28 py-auto text-left">
        <h1 class="text-3xl font-bold text-amber-600 text-center mb-10">Comment créer un CV professionnel</h1>
        <p class="mb-5">On est tous déjà passés par là, qu’on soit jeune ou moins jeune et que l’on cherche un stage, une alternance ou un emploi, tu es (presque) obligé de rédiger un CV. C’est là que les choses se compliquent. Si tu n’as jamais réalisé de CV et/ou que tu as peux d’expérience alors cette étape peut-être un calvaire. C’est pourquoi aujourd’hui je vais te donner tous les tips afin de réussir un CV qui va te démarquer des autres candidats.</p>
        <h2 class="text-xl font-bold mb-5">Voici quelques chiffres clés:</h2>
        <ul class="mb-5">
          <li class="mb-5"> - Le temps moyen que passe un recruteur sur un CV est de <span class="font-bold">34,5 secondes</span>. Cela veut donc dire que tu vas devoir <span class="font-bold">optimiser</span> au maximum tes informations afin que le recruteur puisse les lire sans les chercher. <br><span class="font-semibold">Source:</span><a class="hover:text-amber-600 italic" href="https://fr.statista.com/infographie/17968/statistiques-consultation-candidatures-emploi-par-les-recruteurs/"> lien</a></li>
          <li>- <span class="font-bold">84%</span> des candidats réalisent un <span class="font-bold">CV impersonnel</span>. Vous allez me dire: c’est quoi un CV impersonnel ? Et bien c’est un CV où l’on ne retrouve par-exemple pas le nom du responsable à qui l’on envoie. Plus généralement, c’est un CV que l’on envoie à plusieurs entreprises sans en changer son contenu. <br><span class="font-semibold">Source:</span><a class="hover:text-amber-600 italic" href="https://devskiller.com/fr/statistiques-sur-lemploi-2020/#resume-statistics"> lien</a></li>
        </ul>
        <p class="mb-5">Après avoir vu quelques statistiques sur les CV, nous allons maintenant nous pencher sur comment réaliser un bon CV. Voici un CV interactif, c'est-à-dire que chaque partie comporte des informations importantes à prendre en compte. Vous pouvez cliquer sur les parties pour avoir davantage d’informations.</p>
        <div class="max-w-screen-md mx-auto rounded-lg border border-black my-14">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 mx-auto p-2 bg-[#172E47] text-white">
              <div class="bg-[#E8A900] rounded-full w-16 md:w-20 md:h-20 h-16 mb-3 mx-auto"></div>
              <div class="p-5 md:ml-3">
                <h3 class="mb-3 font-bold text-xl">Boudra Tristan</h3>
                <p class="text-sm">Je recherche à partir de septembre 2022, une alternance en tant que  développement front-end</p>
              </div>
              <div class="p-5 md:ml-3">
                <h2 class="mb-3 font-bold text-xl">Qui suis-je</h2>
                <p class="text-sm">Décrivez en quelques lignes vos compétences clés pour le poste et vos objectifs de carrière. Vous pouvez les mettre en forme à l’aide de puces ou les laisser sous forme de texte plein.</p>
              </div>
              <div class="p-5 md:ml-3">
                <h2 class="mb-3 font-bold text-xl">Contact</h2>
                <ul>
                  <li><i data-feather="phone"></i><p class="text-sm">01.02.03.04.05</p></li>
                  <li><i data-feather="mail"></i><p class="text-sm">mail@gmail.com</p></li>
                  <li><i data-feather="at-sign"></i><p class="text-sm">www.adresse.com</p></li>
                  <li><i data-feather="map-pin"></i><p class="text-sm">10 avenue des champs</p></li>
                  <li><i data-feather="linkedin"></i><p class="text-sm">adresse LinkedIn</p></li>
                </ul>
              </div>
              <div class="p-5 md:ml-3">
                <h2 class="mb-3 font-bold text-xl">Langues</h2>
                <ul class="text-sm">
                  <li>Anglais - B1 Niveaux techniques</li>
                  <li>Espagnol - A2</li>
                </ul>
              </div>
              <div class="p-5 md:ml-3">
                <h2 class="mb-3 font-bold text-xl">Centres d'intêrets</h2>
                <ul class="text-sm">
                  <li>Cyclisme</li>
                  <li>Nouvelles technologies</li>
                  <li>Gastronomie</li>
                </ul>
              </div>
            </div>
            <div class="md:w-3/5">
            <div class="p-5">
              <h2 class="mb-3 font-bold text-xl text-[#E8A900]">Expériences professionnelles</h2>
              <div class="text-sm p-2 flex flex-row">
                <div class="bg-[#E8A900] rounded-full w-32 md:w-40 md:h-20 h-12 mb-3 mt-5"></div>
                <p class="ml-3">09/2022 - 06/2023 Nom du poste <br> Nom de la société <br> Description des fonctions que vous avez occupées, décrivez également vos missions et résultats obtenus.</p>
              </div>
              <div class="text-sm p-2 flex flex-row">
                <div class="bg-[#E8A900] rounded-full w-32 md:w-40 md:h-20 h-12 mb-3 mt-5"></div>
                <p class="ml-3">09/2020 - 06/2022 Nom du poste <br> Nom de la société <br> Description des fonctions que vous avez occupées, décrivez également vos missions et résultats obtenus.</p>
              </div>
              <div class="text-sm p-2 flex flex-row">
                <div class="bg-[#E8A900] rounded-full w-32 md:w-40 md:h-20 h-12 mb-3 mt-5"></div>
                <p class="ml-3">09/2022 - 06/2023 Nom du poste <br> Nom de la société <br> Description des fonctions que vous avez occupées, décrivez également vos missions et résultats obtenus.</p>
              </div>
              <div class="text-sm p-2 flex flex-row">
                <div class="bg-[#E8A900] rounded-full w-32 md:w-40 md:h-20 h-12 mb-3 mt-5"></div>
                <p class="ml-3">09/2022 - 06/2023 Nom du poste <br> Nom de la société <br> Description des fonctions que vous avez occupées, décrivez également vos missions et résultats obtenus.</p>
              </div>
            </div>
            <div class="p-5">
              <h2 class="mb-3 font-bold text-xl text-[#E8A900]">Formation</h2>
              <p class="ml-3 text-sm mb-3">2022 - 2023 Intitulé de la formation <br> Nom de l'école <br> Description de la formation en 2-3 lignes</p>
              <p class="ml-3 text-sm">2020 - 2022 Intitulé de la formation <br> Nom de l'école <br> Description de la formation en 2-3 lignes</p>
            </div>
            <div class="p-5">
              <h2 class="mb-3 font-bold text-xl text-[#E8A900]">Compétences</h2>
              <div class="flex flex-row">
                <div class="flex flex-row">
                  <div class="p-3 ml-10">
                    <ul>
                      <li>VueJs</li>
                      <li>Angular</li>
                      <li>PHP</li>
                      <li>MySql</li>
                    </ul>
                  </div>
                  <div class="p-3 ml-10">
                    <ul>
                      <li>Dynamique</li>
                      <li>Autonome</li>
                      <li>Créatif</li>
                      <li>Ponctuel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 class="text-xl font-bold my-5">Nom, prénom, intitulé de l’offre:</h2>
            <p>Tout d’abord vous devez indiquer votre nom et prénom. Sur de nombreux CV on retrouve souvent ses informations avec une taille de texte importante, or ce n'est pas la chose la plus importante que vous devez faire ressortir. Optez donc pour une taille moyenne. Puis en dessous, mettez un texte avec l’intitulé exact au poste que vous recherchez, par-exemple: [...] Je recherche à partir de septembre 2022, une alternance en tant que  développement front-end. [...]</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Photo de profil:</h2>
            <p>Vous allez devoir mettre une photo de vous. Se n’est pas forcément obligatoire mais fortement recommandé. En effet, mettre une photo sur son CV peut être discriminatoire envers cette personne/communauté c’est pour cela que certaines personnes ne veulent pas en mettre. Il y a aussi la question de la timidité qui peut entrer en jeu. Pour ces derniers essayer de vaincre cette timidité en vous disant que cela peut vous ouvrir les portes du job que vous rêvez, alors ne vous fermez pas les portes d'entrée de jeu.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Qui suis-je:</h2>
            <p>Cette étape peut être optionnelle si vous êtes déjà un petit peut présenter dans l’intitulé de l’offre. Si vous voulez vous présenter, il va falloir que vous réalisiez une phrase d’accroche qui marquera le recruteur afin de vous démarquer des autres candidats. Vous y indiquerez également plus d’informations sur la recherche d’alternance, le rythme à laquel vous effectuerez ainsi que les dates à laquel vous commencerez. </p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Contact:</h2>
            <p>Vous indiquerez les différentes façons qu’ont les recruteurs pour vous recontacter. Attention toutefois de ne pas trop donnez vos informations personnelles, vous aurez besoin d'indiquer a minima: numéro de téléphone, mail, lien vers un portfolio/Github, votre adresse postale (optionnelle), lien vers Linkedin (si vous en avez pas créez-vous en un car c’est le principal moyen qu’ont les recruteurs pour voir vos compétences). Vous pouvez rajouter en dessous si vous avez le permis B et/ou véhiculé si c’est le cas.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Langues:</h2>
            <p>Liste des langues que vous maitrisez avec le niveau (approximatif) de celle-ci.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Centres d’intérêts:</h2>
            <p>Dans cette partie c’est l’endroit où vous allez parler de vous et de ce que vous aimez faire en dehors de votre temps de travail /scolaire. Parler de vos passions, des sports que vous aimez pratiquer, des hobbies, de la cuisine, de la musique etc.…  laissez libre votre imagination sans toutefois vous inventer une vie.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Expériences professionnelles:</h2>
            <p>En ce qui concerne vos expériences professionnelles,  vous allez devoir qu'elles soient antichronologiques, c’est-à-dire que l’expérience la plus récente doit être en haut et plus on descend dans votre CV plus les dates sont anciennes. Dans une expérience vous allez devoir indiquer la période à laquelle vous avez été en poste, le nom du poste. Ne dénigrez pas un poste, c’est-à-dire que si vous avez effectué un stage en tant que développeur front-end, vous allez marquer uniquement développeur Front-End, c’est ensuite dans la description que vous allez ne renseigner que c’était un stage. Vous indiquerez également dans la description les missions effectuées ainsi que les résultats obtenus, puis énumérez-les.Ensuite, c’est optionnel, mais vous pouvez rajouter le logo de l’entreprise auquel vous avez travaillé.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Formations:</h2>
            <p>Les formations devront être du même style que les expériences professionnelles, c’est-à-dire, antichronologique, le nom de la formation, la période à laquelle vous avez fréquenté l’école, puis en 2-3 lignes vous décrivez votre formation.  Vous commencerez le listing de vos formations à partir de l'obtention du baccalauréat ou de son équivalence.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold my-5">Compétences:</h2>
            <p>Dans la rubrique des compétences, vous listerez l’ensemble des compétences techniques que vous maîtrisez par-exemple: HTML, CSS, JavaScript, PHP etc… N’hésitez pas à indiquer des compétences tierces que vous avez apprises seule en autodidacte, cela peut être un plus face aux autres candidats. Évitez de mettre des jauges aux compétences que vous maîtrisez, listez les justes.</p>
          </div>
        </div>
        <div class="mt-12">
          <h2 class="text-xl font-bold my-5">Petit bonus:</h2>
          <p>Voici quelques informations en vrac que vous devez utilisez pour rédiger un bon CV:</p>
          <ul>
            <li>- Format PDF.</li>
            <li>- 1 page maximum.</li>
            <li>- Antichronologique.</li>
            <li>- Utiliser un vérificateur d’orthographe (<a class="italic" href="https://www.reverso.net/orthographe/correcteur-francais/">reverso</a>).</li>
            <li>- Ne négligez pas vos expériences (stage, bénévolat).</li>
            <li>- Etre factuel, précis et concis.</li>
            <li>- Personnaliser votre CV à l’entreprise auquel vous postulez (ajouter leur logo, adapter la charte graphique de votre CV au couleur du logo de l’entreprise).</li>
            <li>- Personnaliser le titre en fonction du poste souhaité.</li>
          </ul>
        </div>
      </div>
    </section>
    <ArticlesRecents/>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ArticlesRecents from '@/components/ArticlesRecents.vue';
import feather from 'feather-icons';
import '@/assets/tailwind.css';

feather.replace();
export default {
  components: {
    Navbar,
    Footer,
    ArticlesRecents,
  },
  data() {
    return {
    };
  },
};
</script>

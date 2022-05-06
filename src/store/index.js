import { createStore } from 'vuex';

export default createStore({
  state: {
    langages: [
      {
        pathName: 'Prog',
        techno: [
          {
            name: 'HTML',
            color: '9f3519',
          },
          {
            name: 'CSS',
            color: '2147d7',
          },
          {
            name: 'JavaScript',
            color: '6b5700',
          },
          {
            name: 'PHP',
            color: '434aa1',
          },
          {
            name: 'MySql',
            color: '775113',
          },
          {
            name: 'TailwindCSS',
            color: '005f89',
          },
          {
            name: 'VueJs',
            color: '27642e',
          },
          {
            name: 'C#',
            color: '4A1163',
          },
          {
            name: 'Wordpress',
            color: '265f79',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
          {
            name: 'WooCommerce',
            color: '6c459c',
          },
        ],
      },
    ],
    stages: [
      {
        id: 1,
        name: 'Les Jardins de Brogieux',
        img: 'jardins_brogieux',
        description: 'Stage de 1ère année de BTS SIO, j ai réaliser l ajout de contenu sur leur site web et les réseaux sociaux. Je me suis occuper également de créer une application afin de rendre les visites plus attrayante.',
        context: 'Stage professionel',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Publisher',
            color: '077064',
          },
        ],
        links: [
          {
            linkName: 'Website',
            link: 'https://www.les-jardins-de-brogieux.fr/',
          },
          {
            linkName: 'SurveyMonkey',
            link: 'https://fr.surveymonkey.com/r/NB95QCZ',
          },
          {
            linkName: 'Facebook',
            link: 'https://m.facebook.com/jardinsdebrogieux/',
          },
        ],
      },
      {
        id: 2,
        name: 'Web At Heart',
        img: 'web-at-heart',
        description: 'Stage de 2ème année de BTS SIO, j ai réaliser le design et le développement de sites vitrines et de e-commerce.',
        context: 'Stage professionel',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
        ],
        links: [
          {
            linkName: 'Kathekon',
            link: 'https://www.projet-kathekon.com/',
          },
          {
            linkName: 'VmAutomation',
            link: 'https://www.vm-automation.com/',
          },
        ],
      },
    ],
    projects: [
      {
        id: 1,
        name: 'Portfolio',
        img: 'home',
        description: 'Dans ce portfolio vous retrouverez l ensemble des mes réalisations.',
        context: 'Projet personnel',
        techno: [
          {
            name: 'HTML',
            color: '9f3519',
          },
          {
            name: 'TailwindCSS',
            color: '005f89',
          },
          {
            name: 'VueJs',
            color: '27642e',
          },
        ],
        links: [
          {
            linkName: 'Portfolio',
            link: 'https://boudra-tristan.fr/',
          },
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/Portfolio',
          },
        ],
      },
      {
        id: 2,
        name: 'Covoit',
        img: 'covoit',
        description: 'Il s’agit d’un projet consistant à réaliser une web app de covoiturage adapté au mobile et au PC; le but: définir un point de départ et d arrivée et choisir les autres utilisateurs que l’on veut prendre sur notre passage ou inversement et trouver un conducteur pour aller la on l’on souhaite.',
        context: 'Projet de cours',
        techno: [
          {
            name: 'HTML',
            color: '9f3519',
          },
          {
            name: 'TailwindCSS',
            color: '005f89',
          },
          {
            name: 'VueJs',
            color: '27642e',
          },
          {
            name: 'PHP',
            color: '434aa1',
          },
          {
            name: 'MySql',
            color: '775113',
          },
          {
            name: 'JavaScript',
            color: '6b5700',
          },
        ],
        links: [
          {
            linkName: 'Covoit',
            link: 'https://covoit.erwan-decoster.com/',
          },
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/Covoit',
          },
        ],
      },
      {
        id: 3,
        name: 'CovoitAdmin',
        img: 'CovoitAdmin',
        description: 'Il s’agit d’un projet consistant à réaliser une application en C# avec l’aide de WPF, permettant de changer toutes les informations de mon application Covoit.',
        context: 'Projet de cours',
        techno: [
          {
            name: 'C#',
            color: '4A1163',
          },
          {
            name: 'MySql',
            color: '775113',
          },
        ],
        links: [
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/CovoitAdmin',
          },
        ],
      },
      {
        id: 4,
        name: 'Kathekon',
        img: 'kathekon',
        description: 'L entreprise Kathekon est spécialiser dans le conseil en RSE (Responsabilité Societale de l entreprise). De ce faite, le site est en adéquation avec les valeurs que veulent faire véhiculer les responsables de Kathekon.',
        context: 'Projet profesionnel',
        techno: [
          {
            name: 'Oxygen',
            color: '281E75',
          },
          {
            name: 'Wordpress',
            color: '265f79',
          },
        ],
        links: [
          {
            linkName: 'Kathekon',
            link: 'https://www.projet-kathekon.com/',
          },
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/Kathekon',
          },
        ],
      },
      {
        id: 5,
        name: 'Vm-Automation',
        img: 'vmAutomaton',
        description: 'Le projet VM-Automation doit répondre aux différentes exigences du client notamment que le site web doit être représentatif de son activité industriel',
        context: 'Projet Profesionnel',
        techno: [
          {
            name: 'Oxygen',
            color: '281E75',
          },
          {
            name: 'Wordpress',
            color: '265f79',
          },
        ],
        links: [
          {
            linkName: 'Vm-Automation',
            link: 'https://www.vm-automation.com/',
          },
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/VM-Automation',
          },
        ],
      },
    ],
    blog: [
      {
        id: 0,
        titre: 'testTitre',
        description: 'testdescription',
        image: 'cookie',
        date: '05 mai 2022',
        auteur: 'tristan',
        categorie: [
          {
            id: 0,
            name: 'categorie1',
          },
          {
            id: 1,
            name: 'categorie2',
          },
        ],
        links: [
          {
            name: 'titrelien',
            link: 'lien',
          },
        ],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

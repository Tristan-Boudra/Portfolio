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
        description: 'Portfolio permettant de regrouper tous mes projets personnels et professionel, ainsi qu\'une partie blog.',
        context: 'Projet personnel',
        color: 'FF5655',
        initiale: 'P',
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
        description: 'Application de covoiturage permettant de rejoindre ou de créer un voyage partout en France.',
        context: 'Projet de cours',
        color: 'A9DD8E',
        initiale: 'C',
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
        description: 'Gestion administrative des utilisateurs, véhicules, motorisations de l\'application Covoit.',
        context: 'Projet de cours',
        color: '30A4A7',
        initiale: 'C',
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
        description: 'Site vitrine pour une entreprise spécialisé dans le conseil en RSE.',
        context: 'Projet profesionnel',
        color: 'F0CF50',
        initiale: 'K',
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
        img: 'vmAutomation',
        description: 'Site vitrine pour une entreprise spécialisé dans la maintenance industrielle.',
        context: 'Projet Profesionnel',
        color: '7083BA',
        initiale: 'V',
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
      // {
      //   id: 0,
      //   titre: '',
      //   description: '',
      //   image: '',
      //   date: '',
      //   auteur: '',
      //   categorie: [
      //     {
      //       id: 0,
      //       name: '',
      //     },
      //   ],
      //   links: [
      //     {
      //       name: '',
      //       link: '',
      //     },
      //   ],
      // },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

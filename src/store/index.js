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
            color: '264BDD',
          },
          {
            name: 'TailwindCSS',
            color: '005f89',
          },
          {
            name: 'JavaScript',
            color: 'EFD81D',
          },
          {
            name: 'VueJs',
            color: '3EB27F',
          },
          {
            name: 'Angular',
            color: 'D6002F',
          },
          {
            name: 'TypeScript',
            color: '2F74C0',
          },
          {
            name: 'PHP',
            color: '7377AD',
          },
          {
            name: 'MySql',
            color: 'DD8901',
          },
          {
            name: 'C#',
            color: '66027C',
          },
          {
            name: 'Wordpress',
            color: '166D92',
          },
          {
            name: 'Oxygen',
            color: '301C8B',
          },
          {
            name: 'WooCommerce',
            color: '7B51AD',
          },
        ],
      },
    ],
    stages: [
      {
        id: 0,
        name: 'Web At Heart',
        img: 'web-at-heart',
        description: 'Stage de 2ème année de BTS SIO, j ai réaliser le design et le développement de sites vitrines et de e-commerce.',
        date: 'Janvier 2022',
        color: 'F23D4F',
        initiale: 'W',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '301C8B',
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
      {
        id: 1,
        name: 'Les Jardins de Brogieux',
        img: 'jardins_brogieux',
        description: 'Stage de 1ère année de BTS SIO, j\'ai réaliser l\'ajout de contenu sur le site, réseaux sociaux. Je me suis occuper également de créer une application afin de rendre les visites plus attrayante.',
        date: 'Juin 2021',
        color: '6C7B21',
        initiale: 'J',
        techno: [
          {
            name: 'Wordpress',
            color: '166D92',
          },
          {
            name: 'Publisher',
            color: '017174',
          },
        ],
        links: [
          {
            linkName: 'Jardins Brogieux',
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
    ],
    projects: [
      {
        id: 1,
        name: 'Portfolio',
        img: 'home',
        description: 'Portfolio permettant de regrouper tous mes projets personnels et professionel, ainsi qu\'une partie blog.',
        date: 'Avril 2022',
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
            color: '3EB27F',
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
        date: 'Mars - Avril 2022',
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
            color: '3EB27F',
          },
          {
            name: 'JavaScript',
            color: 'EFD81D',
          },
          {
            name: 'PHP',
            color: '7377AD',
          },
          {
            name: 'MySql',
            color: 'DD8901',
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
        date: 'Mars - Avril 2022',
        color: '30A4A7',
        initiale: 'C',
        techno: [
          {
            name: 'C#',
            color: '66027C',
          },
          {
            name: 'MySql',
            color: 'DD8901',
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
        date: 'Janvier 2022',
        color: 'F0CF50',
        initiale: 'K',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '301C8B',
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
        date: 'Janvier 2022',
        color: '7083BA',
        initiale: 'V',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '301C8B',
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
      {
        id: 6,
        name: 'Portfolio',
        img: 'premierPortfolio',
        description: 'Tout premier portfolio avec l\'ensemble des mes compétences',
        date: 'Octobre 2021',
        color: '001845',
        initiale: 'P',
        techno: [
          {
            name: 'HTML',
            color: '9f3519',
          },
          {
            name: 'CSS',
            color: '264BDD',
          },
          {
            name: 'JavaScript',
            color: 'EFD81D',
          },
        ],
        links: [
          {
            linkName: 'GitHub',
            link: 'https://github.com/Tristan-Boudra/Portfolio-BTS-SIO',
          },
        ],
      },
    ],
    blog: [
      {
        id: 0,
        titre: 'Comment créer un CV professionnel',
        description: 'Aujourd’hui je vais te donner tous les tips afin de réussir un CV qui va te démarquer de tous les autres autres candidats.',
        image: 'article_cv',
        date: '03/06/2022',
        auteur: 'Boudra Tristan',
        pathName: 'Cv',
        categorie: [
          {
            id: 0,
            name: 'CV',
            color: 'FED81D',
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

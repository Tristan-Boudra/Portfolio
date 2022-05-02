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
    realisation: [
      {
        id: 0,
        name: 'Portfolio',
        pathName: 'portfolio',
        type: 'Projet professionel',
        techno: [
          {
            name: 'VueJs',
            color: '27642e',
          },
          {
            name: 'TailwindCSS',
            color: '005f89',
          },
          {
            name: 'JavaScript',
            color: '6b5700',
          },
          {
            name: 'HTML',
            color: '9f3519',
          },
        ],
        shortDesc: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années. ',
        website: 'https://boudra-tristan.fr/',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/Portfolio',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: 'https://boudra-tristan.fr/',
          },
        ],
        img: 'home',
        projectOrigine: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectObjectif: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectDescription: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années. Il me permet également de présenter l\'ensemble de mes compétences acquis et de les présenter d\'une façon plus créative.',
      },
      {
        id: 1,
        name: 'Covoit',
        pathName: 'covoit',
        type: 'Projet de cours',
        techno: [
          {
            name: 'HTML',
            color: '9f3519',
          },
          {
            name: 'VueJs',
            color: '27642e',
          },
          {
            name: 'tailwindcss',
            color: '005f89',
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
        shortDesc: 'Application de covoiturage permettant de créer ou de rejoindre un voyage.',
        githubLinks: [
          {
            linkName: 'Github Front',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
          {
            linkName: 'Github Back',
            link: 'https://github.com/Tristan-Boudra/CovoitBackEnd',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: 'http://covoit.erwan-decoster.com/',
          },
        ],
        img: 'covoit',
        projectOrigine: 'Après avoir réfléchi sur ce que l’on voulait faire, nous avons opté de partir sur la création d’une application déjà existante qui est Blablacar. Notre application a pour but d’être gratuite pour tous les utilisateurs. Ceci a pour effet de toucher une plus grande partie de la population en optant pour ce modèle économique.',
        projectObjectif: 'Créer une application ayant une excellente accessibilité pour toutes les tranches d’âge de la population. Créer des fonctionnalités et une interface ergonomique. Avoir une application simple d’utilisation.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une web app de covoiturage adapté au mobile et au PC; le but: définir un point de départ et d\'arrivée et choisir les autres utilisateurs que l’on veut prendre sur notre passage ou inversement et trouver un conducteur pour aller la on l’on souhaite.',
        fonctionalitesConducteur: [
          {
            title: 'Fonctionnalitées:',
          },
          {
            for: 'Conducteur',
          },
          {
            name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.',
          },
          {
            name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.',
          },
          {
            name: 'Visualiser les personnes acceptées dans son trajet, où est-ce qu’il doit le récupérer, les étapes intermédiaire',
          },
          {
            name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.',
          },
          {
            name: 'Choix du véhicule pour le voyage, ainsi que de la motorisation.',
          },
        ],
        fonctionalitesPassager: [
          {
            for: 'Passager',
          },
          {
            name: 'Rejoindre un voyage.',
          },
          {
            name: 'Voir l\'ensemble des voyages.',
          },
          {
            name: 'Voir toutes ces informations relatives à son compte: nom, prénom, téléphone.',
          },
          {
            name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.',
          },
          {
            name: 'Il recherche un conducteur pour faire son trajet, indique le point de départ et d’arrivée ainsi que l’horaire à laquel il part, à ce moment les trajets qui ont le même point d\'arrivée lui sont proposés.',
          },
          {
            name: 'Programmer un départ.',
          },
        ],
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit?node-id=0%3A1',
      },
      {
        id: 2,
        name: 'CovoitAdmin',
        pathName: 'covoit_admin',
        type: 'Projet de cours',
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
        shortDesc: 'Partie administration de l\'application Covoit permettant de modifier, supprimer, ajouter un utilisateur, voyage, véhicules.',
        website: '',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/CovoitAdmin',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '',
          },
        ],
        img: 'CovoitAdmin',
        projectOrigine: 'Le but de mon application est un système d’administration de mon projet web. Elle permettra de faire suite aux demandes des utilisateurs pour modifier des informations personnelles.',
        projectObjectif: 'C’est de pouvoir accéder à toute une partie administration qui permet de modifier les motorisations, réinitialiser les mots de passe, informations personnelles.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une application en C# avec l’aide de WPF, permettant de changer toutes les informations de mon application Covoit.',
        maquetteWebsite: 'Figma',
      },
      {
        id: 3,
        name: 'Kathekon',
        pathName: 'kathekon',
        type: 'Projet professionnel',
        techno: [
          {
            name: 'Wordpress',
            color: '265f79',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
        ],
        mission: [
          {
            description: 'J\'ai commencer par créer une page de blog qui leur permettait de rajouter des articles en fonction de l\'actualité.',
            img: 'blog',
          },
          {
            description: 'Ensuite j\'ai mis en place un carousel permettant à Kathekon de montrer aux clients toutes les entreprises qui ont travailler avec eux.',
            img: 'carousel_reference',
          },
          {
            description: 'Sur une autre page, j\'ai détailler toutes les entreprises qui ont travailler avec Kathekon avec les missions réalisées.',
            img: 'ecole_mine',
          },
          {
            description: 'Création du footer où l\'on retrouve toutes les informations pour contacter les responsable de Kathekon ainsi que leur réseaux sociaux.',
            img: 'footer',
          },
          {
            description: 'Finalisation des headers avec l\'achat des photos qui étaient sous licence.',
            img: 'header',
          },
          {
            description: 'Finalisation du site avec l\'ensemble des textes après plusieurs modifications.',
            img: 'ADN',
          },
          {
            title: 'Missions réalisées:',
          },
        ],
        shortDesc: 'Site web pour une entreprise spécialisé dans le RSE',
        website: 'https://www.projet-kathekon.com/',
        websiteLinks: [
          {
            linkName: 'Website',
            link: 'https://www.projet-kathekon.com/',
          },
        ],
        img: 'kathekon',
        projectOrigine: 'Création d’un site web pour un client spécialisé dans la démarche RSE',
        projectDescription: 'L\'entreprise Kathekon est spécialiser dans le conseil en RSE (Responsabilité Societale de l\'entreprise). De ce faite, le site est en adéquation avec les valeurs que veulent faire véhiculer les responsables de Kathekon.',
      },
      {
        id: 4,
        name: 'Vm-Automation',
        pathName: 'vm_automation',
        type: 'Projet professionnel',
        techno: [
          {
            name: 'Wordpress',
            color: '265f79',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
        ],
        mission: [
          {
            description: 'J\'ai commencer par créer des cards avec toutes les entreprises où il est déjà intervenu. C\'est card sont réaliser uniquement en HTML & CSS.',
            img: 'vignette',
          },
          {
            description: 'Création de toutes les pages pour chaque entreprise où il est intervenu, un explicatif des tâches réaliser.',
            img: 'taches',
          },
          {
            description: 'Création du footer où l\'on retrouve toutes les informations de contact.',
            img: 'footerVM',
          },
          {
            description: 'Ajout de vignette montrant l\'ensemble de ses compétences et savoir faire.',
            img: 'vmautomation1',
          },
          {
            description: 'Ajout d\'un slider représentant les entreprises avec qui il a travailler.',
            img: 'vmautomaiton2',
          },
          {
            title: 'Missions réalisées:',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: 'https://www.vm-automation.com/',
          },
        ],
        shortDesc: 'Site web pour une entreprise spécialisé en instrumentation, régulation et automatisation de procédés industriels',
        website: 'https://www.vm-automation.com/',
        img: 'vmAutomaton',
        projectOrigine: 'Création d’un site web pour un client spécialisé en instrumentation, régulation et automatisation de procédés industriels',
        projectDescription: 'Le projet VM-Automation doit répondre aux différentes exigences du client notamment que le site web doit être représentatif de son activité industriel',
      },
      {
        id: 5,
        name: 'Portfolio BTS SIO',
        pathName: 'portfolio_bts_sio',
        type: 'Projet de cours',
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
        ],
        shortDesc: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        website: 'https://boudra-tristan.fr/',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/Portfolio-BTS-SIO',
          },
        ],
        img: 'portfolioBTSSio',
        projectOrigine: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectObjectif: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectDescription: 'Ce portfolio est une première version de ce portfolio actuelle. Après avoir progresser et appris de nouvelle compétences, j\'ai décider d\'abandonner celui-là au profit du portfolio sur lequel vous êtes actuellement.',
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

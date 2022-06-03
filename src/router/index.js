import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blog from '../views/Blog.vue';
import MentionsLegales from '../views/MentionsLegales.vue';
import Cv from '../views/Articles/Cv.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'MentionsLegales',
      transition: 'slide-right',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects',
      transition: 'slide-right',
    },
  },
  {
    path: '/mentionsLegales',
    name: 'MentionsLegales',
    component: MentionsLegales,
    meta: {
      title: 'MentionsLegales',
      transition: 'slide-left',
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog',
      transition: 'slide-left',
    },
  },
  {
    path: '/cv',
    name: 'Cv',
    component: Cv,
    meta: {
      title: 'Cv',
      transition: 'slide-left',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.afterEach(() => {
  document.title = 'Boudra Tristan';
});

export default router;

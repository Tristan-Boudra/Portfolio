import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blog from '../views/Blog.vue';
import MentionsLegales from '../views/MentionsLegales.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/mentionsLegales',
    name: 'MentionsLegales',
    component: MentionsLegales,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
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

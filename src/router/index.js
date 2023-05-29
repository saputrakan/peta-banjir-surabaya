import { createRouter, createWebHashHistory } from 'vue-router';
import MapView from '../views/MapView.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/map',
    name: 'map',
    component: MapView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

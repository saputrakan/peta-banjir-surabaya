import { createRouter, createWebHashHistory } from 'vue-router';
import MapView from '../views/MapView.vue';
import HomeView from '../views/HomeView.vue';

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

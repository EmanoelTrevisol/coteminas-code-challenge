import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes as productRoutes } from './modules/product';

Vue.use(VueRouter);

const routes = [...productRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

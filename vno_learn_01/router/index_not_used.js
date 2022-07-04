import VueRouter from 'https://unpkg.com/vue-router@4.0.5/dist/vue-router.global.js'
//import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import Test from '../components/Test.vue';

    const routes = [{
      path: '/',
      name: 'Home',
      component: Home
      // uncomment below to use lazy loading - also, remove import statement for this component at top of file.
      // component: () => import('../components/Home.vue')
    },{
      path: '/test',
      name: 'Test',
      component: Test
      // uncomment below to use lazy loading - also, remove import statement for this component at top of file.
      // component: () => import('../components/Test.vue')
    },];

    const router = VueRouter.createRouter({
      // ask if user wants to "Use history mode for router? (Requires proper server setup for index fallback in production)"
      // https://next.router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

      history: createWebHistory(),
      routes
    });

    export default router;
    
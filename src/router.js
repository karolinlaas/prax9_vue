import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import loomadVarjupaigas from './views/loomadVarjupaigas.vue';
import kadunudLoom from './views/kadunudLoom.vue';
import toetaMeid from './views/toetaMeid.vue';
import varjupaigast from './views/varjupaigast.vue';
import kontakt from './views/kontakt.vue';
import foundCats from './views/foundCats.vue';
import foundDogs from './views/foundDogs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loomadVarjupaigas',
      name: 'loomadVarjupaigas',
      component: loomadVarjupaigas,
    },
    {
      path: '/kadunudLoom',
      name: 'kadunudLoom',
      component: kadunudLoom,
    },
    {
      path: '/toetaMeid',
      name: 'toetaMeid',
      component: toetaMeid,
    },
    {
      path: '/varjupaigast',
      name: 'varjupaigast',
      component: varjupaigast,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: kontakt,
    },
    {
      path: '/foundCats',
      name: 'foundCats',
      component: foundCats,
    },
    {
      path: '/foundDogs',
      name: 'foundDogs',
      component: foundDogs,
    },
  ],
});

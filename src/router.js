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
import foundRabbits from './views/foundRabbits.vue';
import lostCats from './views/lostCats.vue';
import lostDogs from './views/lostDogs.vue';
import lostRabbits from './views/lostRabbits.vue';
import cat from './views/cat.vue';
import dog from './views/dog.vue';
import rabbit from './views/rabbit.vue';
import lostCatProfile from './views/lostCatProfile.vue';
import lostDogProfile from './views/lostDogProfile.vue';
import lostRabbitProfile from './views/lostRabbitProfile.vue';

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
    {
      path: '/foundRabbits',
      name: 'foundRabbits',
      component: foundRabbits,
    },
    {
      path: '/lostCats',
      name: 'lostCats',
      component: lostCats,
    },
    {
      path: '/lostDogs',
      name: 'lostDogs',
      component: lostDogs,
    },
    {
      path: '/lostRabbits',
      name: 'lostRabbits',
      component: lostRabbits,
    },
    {
      path: '/cat',
      name: 'cat',
      component: cat,
    },
		{
      path: '/dog',
      name: 'dog',
      component: dog,
    },
		{
      path: '/rabbit',
      name: 'rabbit',
      component: rabbit,
    },
		{
      path: '/lostCatProfile',
      name: 'lostCatProfile',
      component: lostCatProfile,
    },
		{
      path: '/lostDogProfile',
      name: 'lostDogProfile',
      component: lostDogProfile,
    },
		{
      path: '/lostRabbitProfile',
      name: 'lostRabbitProfile',
      component: lostRabbitProfile,
    },
  ],
});

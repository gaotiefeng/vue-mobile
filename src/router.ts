import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
		{
		  path: '/user',
		  name: 'user',
		  component: () => import('./views/user/user.vue'),
		},
		{
		  path: '/',
		  name: 'index',
		  component: () => import('./views/index.vue'),
		},
  ],
});

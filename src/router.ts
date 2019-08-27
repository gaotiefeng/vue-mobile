import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
		{
		path: '/user/login',
		name: 'userLogin',
		component: () => import('./views/user/user.vue'),
		},
		{
		path: '/user',
		name: 'user',
		component: () => import('./views/user/userInfo.vue'),
		},
		{
		path: '/',
		name: 'index',
		component: () => import('./views/index.vue'),
		},
		{
		path: '/article/list',
		name: 'article',
		component: () => import('./views/article/list.vue'),
		},
  ],
});

import { createWebHistory, createRouter  } from 'vue-router';

import Home from '@/pages/Home.vue';
import Info from '@/pages/Info.vue';

const history = createWebHistory();
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/info',
		component: Info,
	},
];
const router = createRouter({ history, routes });

export default router;

import { createWebHistory, createRouter  } from 'vue-router';

import Home from '@/pages/Home.vue';
import Settings from '@/pages/Settings.vue';

const history = createWebHistory();
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/settings',
		component: Settings,
	},
];
const router = createRouter({ history, routes });

export default router;

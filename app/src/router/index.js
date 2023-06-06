import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {
			top: 0,
			left: 0,
			behavior: 'smooth',
		}
	},
})

export default router

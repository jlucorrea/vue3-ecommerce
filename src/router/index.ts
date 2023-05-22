import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/categories/:category',
			name: 'category',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('@/views/CartView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue')
		}
	]
})

export default router
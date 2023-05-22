import { defineStore } from 'pinia';
import type { Product } from '@/model/types';

export const useProductStore = defineStore('products', {
	state: () => ({
		order: 'price' as string,
		category: null as string | null,
		products: [] as Product[],
		loading: true
	}),
	getters: {
		getProducts(state) {
			let products = null;
			
			if (state.category) {
				products = state.products.filter(p => p.category === state.category);
			} else {
				products = state.products;
			}

			if (state.order === '') {
				return products;
			}

			if (state.order === 'price') {
				return products.sort((a, b) => a.price - b.price);
			}

			if (state.order === 'priceDesc') {
				return products.sort((a, b) => b.price - a.price);
			}

			if (state.order === 'name') {
				return products.sort((a, b) => a.title.localeCompare(b.title));
			}

			if (state.order === 'nameDesc') {
				return products.sort((a, b) => b.title.localeCompare(a.title));
			}
		}
	},
	actions: {
		selectCategory(category: string) {
			this.category = category;
		},
		orderByPrice() {
			this.order = 'price';
		},
		orderByPriceDesc() {
			this.order = 'priceDesc';
		},
		orderByName() {
			this.order = 'name';
		},
		orderByNameDesc() {
			this.order = 'nameDesc';
		},
		async fetchProducts() {
			try {
				const response = await fetch('https://fakestoreapi.com/products');
				const data = await response.json();
				this.products = data;
				this.loading = false;
			} catch (error) {
				console.log(error);
			}
		}
	}
});

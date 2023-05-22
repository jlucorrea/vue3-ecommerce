import { defineStore } from 'pinia';
import type { Category } from '@/model/types';

export const useCategoriesStore = defineStore('categories', {
	state: () => ({
		arrayList: [] as string[],
		categories: [] as Category[],
		loading: true
	}),
	actions: {
		assignCategories() {
			this.categories = this.arrayList.map((item, index) => ({
				id: index + 1,
				name: item,
			}));
		},
		async getCategories(){
			try {
				const response = await fetch('https://fakestoreapi.com/products/categories')
				const data = await response.json()
				this.arrayList = data;
				this.loading = false;
				this.assignCategories();
				
			} catch (error) {
				console.log(error)
			}
		}
	}
});
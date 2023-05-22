<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useCategoriesStore } from '@/stores/categories';

const router = useRouter();
const useCategory = useCategoriesStore();
const categories = computed(() => useCategory.categories);
const loading = computed(() => useCategory.loading);

onMounted(() => {
	useCategory.getCategories();
});

const goToCategory = (category: string) => {
	router.push({
		name: 'category',
		params: { category: category }
	})
}

const clearCategory = () => {
	router.push({
		name: 'home'
	})
}

</script>

<template>
	<v-list-subheader>Categorias</v-list-subheader>
	<v-list-item @click="clearCategory()" :active="$route.name === 'home'" link>
		<v-list-item-title>Todas</v-list-item-title>
	</v-list-item>
	<v-progress-linear v-if="loading" color="primary" indeterminate></v-progress-linear>
	<v-list-item class="" v-else v-for="category in categories" @click="goToCategory(category.name)" :key="category.id" :active="$route.name === 'category' && $route.params.category === category.name" link>
		<v-list-item-title class="text-capitalize text-body-2">
			{{ category.name }}
		</v-list-item-title>
	</v-list-item>
</template>
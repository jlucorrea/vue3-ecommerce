<script setup lang="ts">
import { computed, onMounted } from 'vue';
import ProductCard from './ProductCard.vue'
import { useProductStore } from '@/stores/products';

const useProducts = useProductStore();
const products = computed(() => useProducts.getProducts);
const loading = computed(() => useProducts.loading);

onMounted(async () => {
	await useProducts.fetchProducts();
});

</script>
<template>
	<div v-if="loading" class="d-flex justify-center align-center h-100">
		<v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
	</div>
	
	<v-row v-else>
		<v-col v-for="product in products" :key="product.id" cols="12" xs="6" sm="6" md="4" lg="3">
			<ProductCard :product="product" />
		</v-col>
	</v-row>
</template>
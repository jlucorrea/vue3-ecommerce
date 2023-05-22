<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/products';
const { orderByPrice, orderByPriceDesc, orderByName, orderByNameDesc } = useProductStore();

const order = computed(() => useProductStore().order);

</script>

<template>
	<v-list-subheader>Ordena Por: </v-list-subheader>
	<v-list-item link @click="orderByPrice" :active="order === 'price'">
		<v-list-item-title class=" text-body-2">
			Precio (Menor)
		</v-list-item-title>
	</v-list-item>
	<v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">
		<v-list-item-title class=" text-body-2">
			Precio (Mayor)
		</v-list-item-title>
	</v-list-item>
	<v-list-item link @click="orderByName" :active="order === 'name'">
		<v-list-item-title class=" text-body-2">
			Nonbre (A - Z)
		</v-list-item-title>
	</v-list-item>
	<v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
		<v-list-item-title class=" text-body-2">
			Nonbre (Z - A)
		</v-list-item-title>
	</v-list-item>
</template>
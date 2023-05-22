<script setup lang="ts">
import CategoryOptions from './options/CategoryOptions.vue';
import OrderOptionsVue from './options/OrderOptions.vue';
</script>

<template>
	<v-sheet rounded="lg">
		<v-list rounded="lg" class="card-content">
			<CategoryOptions />

			<v-divider class="my-2"></v-divider>
			
			<OrderOptionsVue />
		</v-list>
	</v-sheet>
</template>
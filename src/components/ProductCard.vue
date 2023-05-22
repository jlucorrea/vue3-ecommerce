<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue';
import type { Product } from '@/model/types';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
	props: {
		product: {
			type: Object as PropType<Product>,
			required: true
		}
	},
	setup(props) {
		const cartStore = useCartStore();
		const show = ref(false);
		const onAddButtonClick = () => {
			cartStore.addProduct(props.product);
		}

		return { show, onAddButtonClick }
	}
});
</script>
	
<template>
	<v-card class="card-content">
		<v-img :src="product.image" height="200px" cover>
			<v-btn icon class="add-button mt-2 ml-2 cart-button" @click="onAddButtonClick">
				<v-icon>mdi-cart-plus</v-icon>
			</v-btn>
		</v-img>
		<v-card-title class="text-body-1">{{ product.title }}</v-card-title>
		<v-card-text>
			<v-chip>S/ {{ product.price }}</v-chip>
		</v-card-text>
		<v-card-actions>
			<v-btn color="orange-lighten-2" variant="text" class="text-capitalize">
				Ver mas
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn><br>
		</v-card-actions>
		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>
				<v-card-text class="text-justify">
					{{ product.description }}
				</v-card-text>
			</div>
		</v-expand-transition>

	</v-card>
</template>
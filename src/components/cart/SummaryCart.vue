<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
	setup() {
		const useCart = useCartStore();
		return {
			useCart
		}
	}
})
</script>

<template>
	<v-card class="mt-4 card-content">
		<v-card-title>Resumen de la compra</v-card-title>
		<v-card-text>
			<p>Total a pagar: S/ {{ useCart.totalAmout.toFixed(2) }}</p>
			<v-btn class="mt-5" color="success" :href="useCart.whatsappLink" target="_blank">
				Realizar pedido
			</v-btn>
		</v-card-text>
	</v-card>
</template>
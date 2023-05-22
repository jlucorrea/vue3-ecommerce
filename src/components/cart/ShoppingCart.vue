<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart'
import ShoppingCartItem from '@/components/cart/ShopppingCartItem.vue'

const details = computed(() => useCartStore().details);
</script>

<template>
	<v-card class="mt-4 card-content">
		<v-card-title>
			Producto agregados al carrito
		</v-card-title>
		<v-card-text>
			<v-table v-if="details.length > 0">
				<thead>
					<tr>
						<td></td>
						<td>Nombre</td>
						<td class="text-center"> Cantidad </td>
						<td>Precio</td>
						<td class="text-center">SubTotal</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					<shopping-cart-item v-for="detail in details" :key="detail.product.id" :detail="detail" />
				</tbody>
			</v-table>
			<p v-else>
				Aun no has agregado productos a tu carrito de compras.
				Da <RouterLink to="/">clic aquí</RouterLink> para ir a la seccion de productos
			</p>
		</v-card-text>
	</v-card>
</template>
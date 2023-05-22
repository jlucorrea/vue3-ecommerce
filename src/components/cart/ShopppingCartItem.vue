<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { useCartStore } from '@/stores/cart'
import type { CartDetail } from '@/model/types';

export default defineComponent({
	props: {
		detail: {
			type: Object as PropType<CartDetail>,
			required: true
		}
	},
	setup() {
		const { increment, decrement, deleteProduct } = useCartStore();
		return { increment, decrement, deleteProduct }
	}
})
</script>
<template>
	<tr>
		<td>
			<v-avatar size="40px">
				<img :src="detail.product.image">
			</v-avatar>
		</td>
		<td>{{ detail.product.title }}</td>
		<td class="text-center" width="150">
			<v-btn icon="mdi-minus" size="x-small" @click="decrement(detail.product.id)" />
			{{ detail.quantity }}
			<v-btn icon="mdi-plus" size="x-small" @click="increment(detail.product.id)" />
		</td>
		<td>
			S/ {{ detail.product.price }}
		</td>
		<td class="text-center">
			S/ {{ detail.product.price * detail.quantity }}
		</td>
		<td>
			<v-btn icon="mdi-delete" size="x-small" color="red" @click="deleteProduct(detail.product.id)" />
		</td>
	</tr>
</template>
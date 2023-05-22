<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from '@/components/ProductList.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import { useProductStore } from '@/stores/products';

const categoryRouteParam = (categoryNameParam: string | string[]) => {
	const useProducts = useProductStore();
	const category = Array.isArray(categoryNameParam) ? categoryNameParam[0] : categoryNameParam;
	useProducts.selectCategory(category)
}

export default defineComponent({
	components: { ProductList, LeftMenu },

	beforeRouteEnter(to) {
		categoryRouteParam(to.params.category);
	},
	beforeRouteUpdate(to) {
		categoryRouteParam(to.params.category);
	}
})

</script>

<template>
	<v-row>
		<v-col cols="12" sm="3" md="3" lg="2">
			<LeftMenu />
		</v-col>
		<v-col cols="12" sm="9" md="9" lg="10">
			<ProductList />
		</v-col>
	</v-row>
</template>
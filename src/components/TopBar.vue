<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart';

const itemCount = useCartStore();
const itemCounter = computed(() => itemCount.cartItemCount);

</script>

<template>
	<v-app-bar class="navbar-color" flat>
		<v-container class="fill-height d-flex align-center">
			<v-avatar class="me-10 ms-4" color="grey-darken-1" size="32">
				<v-img src="/logo.png"></v-img>
			</v-avatar>

			<RouterLink to="/" custom v-slot="{ navigate }">
				<v-btn :active="$route.name === 'home' || $route.name  === 'category'" variant="text" @click="navigate">
					<v-icon icon="mdi-home" class="mr-sm-2"/>
					<span class="d-none d-sm-flex">Home</span>
				</v-btn>
			</RouterLink>
			<RouterLink to="/cart" custom v-slot="{ navigate }">
				<v-badge :content="itemCounter" :model-value="itemCounter > 0" color="success">
					<v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
						<v-icon icon="mdi-cart-variant" class="mr-sm-2"/>
						<span class="d-none d-sm-flex">Cart</span>
					</v-btn>
				</v-badge>
			</RouterLink>
			<RouterLink to="/about" custom v-slot="{ navigate }">
				<v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
					<v-icon icon="mdi-information" class="mr-sm-2"/>
					<span class="d-none d-sm-flex">Abaout</span>
				</v-btn>
			</RouterLink>
		</v-container>
	</v-app-bar>
</template>
<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<template>
	<v-app id="inspire">
		<TopBar />
		<v-main class="content-body">
			<v-container>
				<RouterView />
			</v-container>
		</v-main>
	</v-app>
</template>

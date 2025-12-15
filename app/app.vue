<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
	nextTick(() => {
		const activeElement = document.activeElement;
		if (activeElement instanceof HTMLElement && activeElement.closest('[aria-hidden="true"]')) {
			activeElement.blur();
		}
	});
});
</script>

<template>
	<UApp>
		<AppHeader />
		<UMain>
			<NuxtLoadingIndicator />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UMain>
		<USeparator type="dashed" class="h-px" />
		<AppFooter v-if="!route.path.startsWith('/core-rules')" />
	</UApp>
</template>

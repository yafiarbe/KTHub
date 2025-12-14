<script setup lang="ts">
onMounted(() => {
	nextTick(() => {
		const activeElement = document.activeElement;
		if (activeElement && activeElement.closest('[aria-hidden="true"]')) {
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
		<USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />
		<AppFooter />
	</UApp>
</template>

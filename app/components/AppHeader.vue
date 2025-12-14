<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: "Основные правила",
		to: "/core-rules",
		active: route.path.startsWith("/core-rules"),
	},
	{
		label: "Другие правила",
		to: "/other-rules",
		active: route.path.startsWith("/other-rules"),
	},
	{
		label: "Блог",
		to: "/blog",
		active: route.path.startsWith("/blog"),
	},
]);
</script>

<template>
	<UHeader title="KTHub">
		<UNavigationMenu :items="items" class="uppercase" />

		<template #right>
			<UColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>
	</UHeader>
</template>

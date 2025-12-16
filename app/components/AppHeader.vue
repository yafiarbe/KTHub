<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: "Основные правила".toUpperCase(),
		to: "/core-rules",
		active: route.path.startsWith("/core-rules"),
	},
	{
		label: "Другие правила".toUpperCase(),
		to: "/other-rules",
		active: route.path.startsWith("/other-rules"),
	},
	{
		label: "Инструменты".toUpperCase(),
		active: route.path.startsWith("/tools"),
		children: [
			{ label: "Ростеры".toUpperCase(), to: "/tools/rosters" },
			{ label: "Трекер".toUpperCase(), to: "/tools/tracker" },
		],
	},
	{
		label: "Блог".toUpperCase(),
		to: "/blog",
		active: route.path.startsWith("/blog"),
	},
]);
</script>

<template>
	<UHeader title="KTHub">
		<UNavigationMenu :items="items" class="uppercase heading-font" />

		<template #right>
			<UColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5 heading-font" />
		</template>
	</UHeader>
</template>

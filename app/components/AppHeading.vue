<script setup lang="ts">
interface Props {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	subtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
	level: 2,
	subtitle: "",
});

// Счётчики для генерации уникальных id по слагу
const slugCounts = ((globalThis as any).__app_heading_slug_counts ||= new Map<string, number>());

import { onBeforeUnmount } from "vue";

const headingId = ref<string | null>(null);

function makeSlug(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^\w\u0400-\u04FF-]+/g, "")
		.replace(/--+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "");
}

if (props.subtitle) {
	// Генерируем уникальный id на этапе установки компонента
	const base = makeSlug(props.subtitle);
	const prev = slugCounts.get(base) || 0;
	const next = prev + 1;
	slugCounts.set(base, next);
	headingId.value = next === 1 ? base : `${base}-${next}`;

	// при размонтировании можно уменьшить счётчик (необязательно, но аккуратно)
	onBeforeUnmount(() => {
		const cur = slugCounts.get(base) || 0;
		if (cur <= 1) slugCounts.delete(base);
		else slugCounts.set(base, cur - 1);
	});
}

const tag = computed(() => `h${props.level}`);
</script>

<template>
	<component :is="tag" :id="headingId || undefined" class="uppercase">
		<slot />
		<span v-if="subtitle" class="text-xs text-zinc-500"> ({{ subtitle }})</span>
	</component>
</template>

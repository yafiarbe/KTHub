<script setup lang="ts">
import { computed, onBeforeUnmount } from "vue";

type Variant = "default" | "primary" | "muted";
type Align = "left" | "center" | "right";

interface Props {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	subtitle?: string;
	id?: string; // явный id, если нужен
	slugSource?: string; // текст для slug, если subtitle нет
	variant?: Variant;
	align?: Align;
	uppercase?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	level: 2,
	subtitle: "",
	slugSource: "",
	variant: "default",
	align: "left",
	uppercase: true,
});

const slugCounts = ((globalThis as any).__app_heading_slug_counts ||= new Map<string, number>());
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

if (!props.id) {
	const baseText = props.subtitle || props.slugSource;
	if (baseText) {
		const base = makeSlug(baseText);
		const prev = slugCounts.get(base) || 0;
		const next = prev + 1;
		slugCounts.set(base, next);
		headingId.value = next === 1 ? base : `${base}-${next}`;

		onBeforeUnmount(() => {
			const cur = slugCounts.get(base) || 0;
			if (cur <= 1) slugCounts.delete(base);
			else slugCounts.set(base, cur - 1);
		});
	}
}

const tag = computed(() => `h${props.level}`);

const variantClasses: Record<Variant, string> = {
	default: "text-zinc-900 dark:text-zinc-100",
	primary: "text-primary",
	muted: "text-zinc-500",
};

const alignClasses: Record<Align, string> = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
};

const baseClass = computed(() => [props.uppercase ? "uppercase" : "", variantClasses[props.variant], alignClasses[props.align]]);
</script>

<template>
	<component :is="tag" :id="props.id || headingId || undefined" :class="[baseClass, $attrs.class]" v-bind="{ ...$attrs, class: undefined }" class="heading-font">
		<slot />
		<span v-if="subtitle" class="text-xs text-zinc-500"> ({{ subtitle }})</span>
	</component>
</template>

<script setup lang="ts">
interface Props {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	subtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
	level: 2,
	subtitle: "",
});

const headingId = computed(() => {
	if (props.subtitle) {
		return slugify(props.subtitle);
	}
	return "";
});

function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-") // Заменить пробелы на -
		.replace(/[^\w\u0400-\u04FF-]+/g, "") // Удалить все кроме букв, цифр, кириллицы и -
		.replace(/--+/g, "-") // Заменить множественные - на один -
		.replace(/^-+/, "") // Удалить - в начале
		.replace(/-+$/, ""); // Удалить - в конце
}

const tag = computed(() => `h${props.level}`);
</script>

<template>
	<component :is="tag" :id="headingId || undefined" class="uppercase">
		<slot />
		<span v-if="subtitle" class="text-xs text-zinc-500"> ({{ subtitle }})</span>
	</component>
</template>

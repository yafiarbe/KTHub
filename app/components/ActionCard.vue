<script setup lang="ts">
interface Props {
	title: string;
	subtitle?: string;
	ap?: number;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	effects?: string[];
	conditions?: string[];
}

const props = withDefaults(defineProps<Props>(), {
	subtitle: "",
	ap: 1,
	level: 4,
	effects: () => [],
	conditions: () => [],
});

const tag = computed(() => `h${props.level}`);

// Используем computed для стабильной реактивности и избежания проблем гидратации
const effectsList = computed(() => props.effects.filter((e) => e && e.trim() !== ""));
const conditionsList = computed(() => props.conditions.filter((c) => c && c.trim() !== ""));
const hasEffects = computed(() => effectsList.value.length > 0);
const hasConditions = computed(() => conditionsList.value.length > 0);

function slugify(text: string): string {
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

const headingId = computed(() => (props.subtitle ? slugify(props.subtitle) : ""));
</script>

<template>
	<div class="bg-zinc-200 dark:bg-zinc-800 border-2 border-primary not-prose">
		<div class="bg-primary text-white p-2 flex items-center justify-between">
			<component :is="tag" :id="headingId || undefined" class="m-0 p-0 font-bold uppercase">
				{{ title }}
				<span v-if="subtitle" class="text-xs font-normal opacity-80"> ({{ subtitle }})</span>
			</component>
			<span class="font-bold">{{ ap }}AP</span>
		</div>
		<div v-if="hasEffects || hasConditions" class="p-2 flex flex-col gap-6">
			<!-- Эффекты -->
			<template v-if="hasEffects">
				<div v-for="(effect, index) in effectsList" :key="`effect-${index}`" class="flex gap-2">
					<Icon name="material-symbols:arrow-back-2" class="mt-1 shrink-0 rotate-180 text-green-500" />
					<div class="m-0 action-content" v-html="effect" />
				</div>
			</template>

			<!-- Условия -->
			<template v-if="hasConditions">
				<div v-for="(condition, index) in conditionsList" :key="`condition-${index}`" class="flex gap-2">
					<Icon name="f7:rhombus-fill" class="mt-1 shrink-0 text-red-500" />
					<div class="m-0 action-content" v-html="condition" />
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped>
.action-content :deep(p) {
	margin: 0;
}

.action-content :deep(p + p) {
	margin-top: 0.5rem;
}
</style>

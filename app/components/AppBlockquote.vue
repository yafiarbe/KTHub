<script setup lang="ts">
type Variant = "note" | "info" | "warning";
type Align = "left" | "center";

const props = withDefaults(
	defineProps<{
		cite?: string;
		variant?: Variant;
		align?: Align;
		tight?: boolean;
	}>(),
	{
		cite: "",
		variant: "note",
		align: "left",
		tight: false,
	}
);

const variantClasses: Record<Variant, string> = {
	note: "border-primary/0 text-primary/70",
	info: "border-sky-500/70 bg-sky-50/70 dark:bg-sky-900/30",
	warning: "border-amber-500/80 bg-amber-50/70 dark:bg-amber-900/30",
};

const alignClasses: Record<Align, string> = {
	left: "text-left",
	center: "text-center",
};
</script>

<template>
	<blockquote :cite="cite" class="author-note prose border-l-2 rounded-md px-4 py-3 text-[18px]" :class="[variantClasses[props.variant], alignClasses[props.align], props.tight ? 'space-y-1' : 'space-y-2']">
		<p class="m-0">
			<slot />
		</p>
	</blockquote>
</template>

<style scoped></style>

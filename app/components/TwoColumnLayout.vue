<script setup lang="ts">
interface Props {
	leftWidth?: string;
	rightWidth?: string;
	reverseOnMobile?: boolean;
}

withDefaults(defineProps<Props>(), {
	leftWidth: "1fr",
	rightWidth: "4fr",
	reverseOnMobile: true,
});
</script>

<template>
	<div class="grid grid-cols-1 gap-4 my-6" :style="{ '--left-width': leftWidth, '--right-width': rightWidth }">
		<!-- Левая колонка (комментарии) - на мобильных снизу (если reverseOnMobile), на десктопе слева -->
		<aside
			class="prose prose-sm dark:prose-invert max-w-none prose-blockquote:border-primary prose-blockquote:font-extralight prose-blockquote:italic prose-blockquote:text-primary lg:order-1!"
			:class="reverseOnMobile ? 'order-2' : 'order-1'"
		>
			<slot name="left" />
		</aside>

		<!-- Вертикальный разделитель -->
		<USeparator orientation="vertical" color="primary" class="hidden lg:block lg:order-2!" />

		<!-- Правая колонка (основной контент) - на мобильных сверху (если reverseOnMobile), на десктопе справа -->
		<div class="prose dark:prose-invert max-w-none prose-li:marker:text-primary lg:order-3!" :class="reverseOnMobile ? 'order-1' : 'order-2'">
			<slot name="right" />
		</div>
	</div>
</template>

<style scoped>
@media (min-width: 1024px) {
	div.grid {
		grid-template-columns: var(--left-width) auto var(--right-width);
	}
}
</style>

<!-- 
			<TwoColumnLayout>
				<template #left>
					<blockquote>
						
					</blockquote>
				</template>

				<template #right>

				</template>
			</TwoColumnLayout>
-->

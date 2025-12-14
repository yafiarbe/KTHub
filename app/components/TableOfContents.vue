<script setup lang="ts">
import type { TocItem } from "~/composables/useTableOfContents";

interface Props {
	items: readonly TocItem[];
	activeId: string;
}

defineProps<Props>();
const emit = defineEmits<{
	navigate: [id: string];
}>();

const isOpen = ref(false);

function handleNavigate(id: string) {
	emit("navigate", id);
	isOpen.value = false;
}

function getIndentClass(level: number) {
	switch (level) {
		case 1:
			return "font-bold";
		case 2:
			return "pl-2";
		case 3:
			return "pl-4 text-sm";
		case 4:
			return "pl-6 text-xs";
		case 5:
			return "pl-8 text-xs";
		default:
			return "";
	}
}

// Закрытие по клику вне компонента и по Escape
const tocRef = ref<HTMLElement | null>(null);

onClickOutside(tocRef, () => {
	isOpen.value = false;
});

onKeyStroke("Escape", () => {
	isOpen.value = false;
});
</script>

<template>
	<div ref="tocRef" class="fixed bottom-6 right-6 z-50">
		<!-- Выпадающий список разделов -->
		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0 translate-y-4 scale-95"
			enter-to-class="opacity-100 translate-y-0 scale-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100 translate-y-0 scale-100"
			leave-to-class="opacity-0 translate-y-4 scale-95"
		>
			<div v-if="isOpen" class="absolute bottom-16 right-0 w-72 max-h-[60vh] overflow-y-auto overscroll-contain rounded-lg bg-elevated border border-default shadow-xl">
				<div class="sticky top-0 bg-elevated border-b border-default px-4 py-3">
					<h3 class="font-semibold text-sm text-default">Содержание</h3>
				</div>

				<nav class="p-2">
					<ul class="space-y-1">
						<li v-for="item in items" :key="item.id">
							<button
								class="w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-accented"
								:class="[getIndentClass(item.level), activeId === item.id ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-muted hover:text-default']"
								@click="handleNavigate(item.id)"
							>
								{{ item.text }}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</Transition>

		<!-- FAB кнопка -->
		<button
			class="rounded-full shadow-lg bg-primary text-white flex items-center justify-center size-12 md:size-16 hover:bg-primary/90 transition-colors"
			aria-label="Открыть содержание"
			@click="isOpen = !isOpen"
		>
			<Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:list-bullet'" class="size-6 md:size-8" />
		</button>
	</div>
</template>

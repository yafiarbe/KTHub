<script setup lang="ts">
import type { TocItem } from "~/composables/useTableOfContents";

interface Props {
	items: readonly TocItem[];
	activeId: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
	navigate: [id: string];
}>();

const isOpen = ref(false);
const search = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
const keyboardMode = ref(false);

const filteredItems = computed(() => {
	const q = search.value.trim().toLowerCase();
	if (!q) return props.items;
	return props.items.filter((i) => (i.text || "").toLowerCase().includes(q) || (i.subtitle || "").toLowerCase().includes(q));
});

function onInputFocus() {
	// if mobile width, switch menu to top to avoid virtual keyboard
	if (typeof window !== "undefined" && window.innerWidth <= 768) {
		keyboardMode.value = true;
	}
}

function onInputBlur() {
	// small timeout to allow click on result before switching back
	setTimeout(() => {
		keyboardMode.value = false;
	}, 50);
}

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

// Сбрасываем поиск при закрытии меню
watch(isOpen, (open) => {
	if (!open) {
		search.value = "";
		keyboardMode.value = false;
	}
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
			<div
				v-if="isOpen"
				:class="[
					keyboardMode ? 'fixed top-6 left-4 right-4 w-[calc(100vw-2rem)] z-50' : 'absolute bottom-16 right-0 w-72',
					'h-[60vh] overflow-y-auto overscroll-contain rounded-lg bg-elevated border border-default shadow-xl',
				]"
			>
				<div class="sticky top-0 bg-elevated border-b border-default px-4 py-3 z-10">
					<h3 class="font-semibold text-sm text-default">Содержание</h3>
					<div class="mt-3">
						<div class="flex items-center gap-2">
							<Icon name="heroicons:magnifying-glass" class="size-4 text-muted" />
							<input
								ref="inputRef"
								v-model="search"
								type="search"
								placeholder="Поиск по содержанию"
								class="w-full rounded-md px-3 py-2 bg-elevated border-2 border-primary/20 text-sm placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
								@focus="onInputFocus"
								@blur="onInputBlur"
							/>
						</div>
					</div>
				</div>

				<nav class="p-2">
					<!-- search moved to sticky header -->

					<ul class="space-y-1 px-1">
						<li v-for="item in filteredItems" :key="item.id">
							<button
								class="w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-accented"
								:class="[getIndentClass(item.level), props.activeId === item.id ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-muted hover:text-default']"
								@click="handleNavigate(item.id)"
							>
								<div class="flex flex-col">
									<span class="leading-tight">{{ item.text }}</span>
									<span v-if="item.subtitle" class="text-xs text-muted opacity-50 mt-0.5">({{ item.subtitle }})</span>
								</div>
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

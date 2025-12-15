<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { TocItem } from "~/composables/useTableOfContents";

/* =====================
   Props / Emits
===================== */
interface Props {
	items: readonly TocItem[];
	activeId: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
	navigate: [id: string];
}>();

/* =====================
   State
===================== */
const isOpen = ref(false);
const search = ref("");
const keyboardMode = ref(false);
const isMobile = ref(false);
const viewportHeight = ref<number>(0);

const tocRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

/* =====================
   Constants
===================== */
const MOBILE_BREAKPOINT = 768;
const HEADER_HEIGHT = 63.2; // px — height of header / safe area offset
const MIN_PANEL_HEIGHT = 120;
const SEARCH_DEBOUNCE_MS = 300;
const KEYBOARD_BLUR_DELAY = 150;
const SCROLL_DEBOUNCE_MS = 80;

/* =====================
   Utils
===================== */
function updateIsMobile() {
	if (typeof window === "undefined") return;
	isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT;
}

function updateVh() {
	if (typeof window === "undefined") return;

	let vh: number;

	if (window.visualViewport) {
		vh = window.visualViewport.height;
	} else {
		vh = window.innerHeight;
	}

	viewportHeight.value = vh;
	document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
}

/* =====================
   Filtering (with debounce)
===================== */
const searchQuery = ref("");

const debouncedUpdateSearch = useDebounceFn((value: string) => {
	searchQuery.value = value;
}, SEARCH_DEBOUNCE_MS);

watch(search, (newValue) => {
	debouncedUpdateSearch(newValue);
});

const filteredItems = computed(() => {
	const q = searchQuery.value.trim().toLowerCase();
	if (!q) return props.items;

	return props.items.filter((item) => {
		const text = (item.text ?? "").toLowerCase();
		const subtitle = (item.subtitle ?? "").toLowerCase();
		return text.includes(q) || subtitle.includes(q);
	});
});

/* =====================
   Keyboard handling
===================== */
function onInputFocus() {
	keyboardMode.value = isMobile.value;
}

function onInputBlur() {
	setTimeout(() => {
		keyboardMode.value = false;
	}, KEYBOARD_BLUR_DELAY);
}

/* =====================
   Navigation
===================== */
function handleNavigate(id: string) {
	emit("navigate", id);
	isOpen.value = false;
}

/* =====================
   Indent classes
===================== */
function getIndentClass(level: number) {
	const classes = [
		"font-bold", // h1
		"pl-2", // h2
		"pl-4 text-sm", // h3
		"pl-6 text-xs", // h4
		"pl-8 text-xs", // h5
	];

	const idx = Math.min(Math.max(level, 1), classes.length) - 1;
	return classes[idx];
}

/* =====================
   Panel style
===================== */
const panelStyle = computed(() => {
	if (!isOpen.value) return {};

	// Mobile: panel height = viewport height - header offset
	if (isMobile.value) {
		const vh = viewportHeight.value || (typeof window !== "undefined" ? window.innerHeight : 0);
		const heightPx = Math.max(MIN_PANEL_HEIGHT, vh - HEADER_HEIGHT);
		return { height: `${heightPx}px` };
	}

	// Desktop
	return { height: "60vh" };
});

/* =====================
   Scroll to active item
===================== */
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

async function scrollToActive(id: string, smooth = false) {
	try {
		await nextTick();

		const container = tocRef.value;
		if (!container) {
			console.warn("[TOC] Container ref not found");
			return;
		}

		const el = container.querySelector(`[data-toc-id="${id}"]`) as HTMLElement | null;
		if (!el) {
			console.warn(`[TOC] Element with id "${id}" not found`);
			return;
		}

		el.scrollIntoView({
			block: "center",
			behavior: smooth ? "smooth" : "auto",
		});
	} catch (err) {
		console.error("[TOC] Failed to scroll to active item:", err);
	}
}

watch(isOpen, async (open) => {
	if (!open) {
		search.value = "";
		searchQuery.value = "";
		keyboardMode.value = false;
		return;
	}

	// Ждём, пока DOM обновится после открытия панели
	await nextTick();
	await nextTick(); // Двойной nextTick для гарантии

	if (props.activeId) {
		await scrollToActive(props.activeId);
	}
});

watch(
	() => props.activeId,
	(id) => {
		if (!isOpen.value || !id) return;

		if (scrollTimeout) {
			clearTimeout(scrollTimeout);
		}

		scrollTimeout = setTimeout(() => {
			scrollToActive(id, true);
			scrollTimeout = null;
		}, SCROLL_DEBOUNCE_MS);
	}
);

/* =====================
   Outside / Escape
===================== */
onClickOutside(tocRef, () => {
	if (isOpen.value) {
		isOpen.value = false;
	}
});

onKeyStroke("Escape", () => {
	if (isOpen.value) {
		isOpen.value = false;
	}
});

/* =====================
   Lifecycle
===================== */
let cleanupResize: (() => void) | null = null;

onMounted(() => {
	updateIsMobile();
	updateVh();

	const resizeHandler = () => {
		updateIsMobile();
		updateVh();
	};

	window.addEventListener("resize", resizeHandler);
	window.addEventListener("orientationchange", resizeHandler);

	if (window.visualViewport) {
		window.visualViewport.addEventListener("resize", updateVh);
		window.visualViewport.addEventListener("scroll", updateVh);
	}

	cleanupResize = () => {
		window.removeEventListener("resize", resizeHandler);
		window.removeEventListener("orientationchange", resizeHandler);

		if (window.visualViewport) {
			window.visualViewport.removeEventListener("resize", updateVh);
			window.visualViewport.removeEventListener("scroll", updateVh);
		}
	};
});

onUnmounted(() => {
	cleanupResize?.();

	if (scrollTimeout) {
		clearTimeout(scrollTimeout);
		scrollTimeout = null;
	}
});
</script>

<template>
	<div ref="tocRef" class="fixed bottom-6 right-6">
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
				class="fixed right-0 md:right-6 bottom-0 md:bottom-1/12 w-4/6 md:w-80 z-50 rounded-tl-2xl rounded-bl-2xl md: rounded-2xl toc-panel overflow-y-auto overscroll-contain bg-zinc-800 border-l-6 md:border-r-6 border-primary shadow-xl"
				:style="panelStyle"
			>
				<div class="sticky top-0 bg-zinc-800 border-b border-default px-4 py-3 z-10">
					<h3 class="font-semibold text-sm text-default">Содержание</h3>
					<div class="mt-3 flex items-center gap-2">
						<Icon name="heroicons:magnifying-glass" class="size-4 text-muted" />
						<input
							ref="inputRef"
							v-model="search"
							type="search"
							placeholder="Поиск по содержанию"
							class="w-full rounded-sm px-3 py-2 bg-zinc-900/20 border-2 border-primary/20 text-sm placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
							@focus="onInputFocus"
							@blur="onInputBlur"
						/>
					</div>
				</div>

				<nav class="p-2">
					<ul v-if="filteredItems.length > 0" class="space-y-1 px-1">
						<li v-for="item in filteredItems" :key="item.id">
							<button
								:data-toc-id="item.id"
								class="w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-accented"
								:class="[getIndentClass(item.level), props.activeId === item.id ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-muted hover:text-default']"
								@click="handleNavigate(item.id)"
							>
								<div class="flex flex-col">
									<span class="leading-tight">{{ item.text }}</span>
									<span v-if="item.subtitle" class="text-xs text-muted opacity-50 mt-0.5"> ({{ item.subtitle }}) </span>
								</div>
							</button>
						</li>
					</ul>
					<div v-else class="px-4 py-8 text-center text-muted text-sm">Ничего не найдено</div>
				</nav>
			</div>
		</Transition>

		<button
			class="fixed bottom-6 right-6 rounded-full shadow-lg bg-primary text-white flex items-center justify-center size-12 md:size-16 hover:bg-primary/90 transition-colors z-50"
			:aria-label="isOpen ? 'Закрыть содержание' : 'Открыть содержание'"
			:aria-expanded="isOpen"
			@click="isOpen = !isOpen"
		>
			<Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:list-bullet'" class="size-6 md:size-8" />
		</button>
	</div>
</template>

<style scoped>
.toc-panel {
	scrollbar-width: thin;
	scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
	transition:
		height 200ms ease,
		transform 150ms ease;
}

.toc-panel::-webkit-scrollbar {
	width: 6px;
}

.toc-panel::-webkit-scrollbar-thumb {
	background-color: rgba(255, 255, 255, 0.28);
	border-radius: 9999px;
}
</style>

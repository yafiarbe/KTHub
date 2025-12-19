<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
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
const searchQuery = ref("");

const debouncedUpdateSearch = useDebounceFn((value: string) => {
	searchQuery.value = value;
}, 250);

watch(search, (val) => debouncedUpdateSearch(val));

const filteredItems = computed(() => {
	const q = searchQuery.value.trim().toLowerCase();
	if (!q) return props.items;
	return props.items.filter((item) => {
		const text = (item.text ?? "").toLowerCase();
		const subtitle = (item.subtitle ?? "").toLowerCase();
		return text.includes(q) || subtitle.includes(q);
	});
});

function handleNavigate(id: string) {
	emit("navigate", id);
	isOpen.value = false;
}

function getIndentClass(level: number) {
	const classes = ["font-semibold", "pl-2", "pl-4 text-sm", "pl-6 text-xs", "pl-8 text-xs"];
	const idx = Math.min(Math.max(level, 1), classes.length) - 1;
	return classes[idx];
}
</script>

<template>
	<div class="fixed bottom-6 right-6 z-50">
		<UTooltip :text="isOpen ? 'Закрыть содержание' : 'Открыть содержание'" placement="left">
			<UButton
				:icon="isOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-list-bullet-20-solid'"
				color="primary"
				variant="solid"
				size="lg"
				class="rounded-full shadow-xl"
				aria-label="Toggle table of contents"
				@click="isOpen = !isOpen"
			/>
		</UTooltip>

		<USlideover v-model:open="isOpen" side="right" title="Содержание" class="max-w-md" :ui="{ body: 'p-2 flex flex-col h-full' }">
			<template #header="{ close }">
				<div class="flex items-center justify-between w-full">
					<div>
						<p class="text-xs text-muted">Навигация по странице</p>
						<h3 class="text-lg font-semibold">Содержание</h3>
					</div>
					<UButton icon="i-heroicons-x-mark-20-solid" variant="ghost" color="neutral" aria-label="Закрыть" @click="close" />
				</div>
			</template>

			<template #body>
				<div class="flex flex-col gap-3 h-full overflow-hidden">
					<UInput v-model="search" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Поиск по заголовкам" color="primary" variant="outline" />

					<UCard :ui="{ body: 'p-0 overflow-hidden flex flex-col', root: 'flex-1 flex flex-col overflow-hidden' }" class="border border-primary/20 flex-1 overflow-hidden">
						<template #header>
							<div class="flex items-center justify-between">
								<span class="text-sm text-muted">Разделы</span>
								<UBadge variant="soft" color="primary" size="xs">{{ filteredItems.length }}</UBadge>
							</div>
						</template>

						<div class="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/50">
							<ul v-if="filteredItems.length" class="divide-y divide-border">
								<li v-for="item in filteredItems" :key="item.id" class="bg-transparent">
									<UButton
										:data-toc-id="item.id"
										variant="ghost"
										color="primary"
										class="w-full justify-start rounded-none py-3 px-4"
										:class="[getIndentClass(item.level), props.activeId === item.id ? 'bg-primary/10 text-primary font-semibold' : 'text-muted hover:text-primary']"
										@click="handleNavigate(item.id)"
									>
										<div class="flex flex-col items-start gap-0.5">
											<span class="leading-tight">{{ item.text }}</span>
											<span v-if="item.subtitle" class="text-xs text-muted">{{ item.subtitle }}</span>
										</div>
									</UButton>
								</li>
							</ul>
							<div v-else class="p-6 text-center text-sm text-muted">Ничего не найдено</div>
						</div>
					</UCard>
				</div>
			</template>
		</USlideover>
	</div>
</template>

<script setup lang="ts">
interface BlogPost {
	title: string;
	description: string;
	icon: string;
	category: string;
	to?: string;
	date?: string;
	soon?: boolean;
}

const categories = [
	{ key: "all", label: "Все статьи", icon: "mdi:view-grid" },
	{ key: "beginner", label: "Для новичков", icon: "mdi:school" },
	{ key: "painting", label: "Покраска", icon: "mdi:palette" },
	{ key: "hobby", label: "Хобби", icon: "mdi:puzzle" },
	{ key: "tactics", label: "Тактика", icon: "mdi:chess-knight" },
];

const selectedCategory = ref("all");

const posts: BlogPost[] = [
	{
		title: "С чего начать в Kill Team?",
		description: "Полное руководство для новичков: что купить, как собрать первую команду и сыграть первую игру.",
		icon: "mdi:rocket-launch",
		category: "beginner",
		to: "/blog/getting-started",
		soon: true,
	},
	{
		title: "Выбор первой ударной команды",
		description: "Обзор стартовых команд и советы по выбору фракции для начинающих игроков.",
		icon: "mdi:account-group",
		category: "beginner",
		to: "/blog/choosing-first-team",
		soon: true,
	},
	{
		title: "Базовая покраска миниатюр",
		description: "Пошаговое руководство по покраске для тех, кто никогда не держал кисть в руках.",
		icon: "mdi:brush",
		category: "painting",
		to: "/blog/basic-painting",
		soon: true,
	},
	{
		title: "Техники покраски: драйбраш",
		description: "Освойте технику сухой кисти для быстрой и эффектной покраски моделей.",
		icon: "mdi:auto-fix",
		category: "painting",
		to: "/blog/drybrushing",
		soon: true,
	},
	{
		title: "Создание баз для миниатюр",
		description: "Идеи и техники для оформления подставок ваших оперативников.",
		icon: "mdi:texture-box",
		category: "hobby",
		to: "/blog/basing",
		soon: true,
	},
	{
		title: "Сборка миниатюр: советы",
		description: "Инструменты, клей, обработка литников — всё, что нужно знать о сборке.",
		icon: "mdi:hammer-screwdriver",
		category: "hobby",
		to: "/blog/assembly-tips",
		soon: true,
	},
	{
		title: "Тактика для начинающих",
		description: "Основные принципы позиционирования, использования укрытий и активации оперативников.",
		icon: "mdi:strategy",
		category: "tactics",
		to: "/blog/tactics-basics",
		soon: true,
	},
	{
		title: "Работа с укрытиями",
		description: "Как эффективно использовать ландшафт и укрытия для победы.",
		icon: "mdi:shield-home",
		category: "tactics",
		to: "/blog/cover-tactics",
		soon: true,
	},
];

const filteredPosts = computed(() => {
	if (selectedCategory.value === "all") {
		return posts;
	}
	return posts.filter((post) => post.category === selectedCategory.value);
});

function getCategoryLabel(key: string): string {
	return categories.find((c) => c.key === key)?.label || key;
}

function getCategoryColor(key: string): string {
	const colors: Record<string, string> = {
		beginner: "success",
		painting: "info",
		hobby: "warning",
		tactics: "error",
	};
	return colors[key] || "neutral";
}
</script>

<template>
	<UContainer>
		<article class="prose dark:prose-invert min-w-full py-10">
			<AppHeading :level="1" subtitle="Blog">Блог</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />

			<p class="text-lg">Статьи о хобби Kill Team: руководства для новичков, уроки по покраске миниатюр, советы по сборке и тактические разборы.</p>

			<!-- Фильтр по категориям -->
			<div class="not-prose flex flex-wrap gap-2 mt-6 mb-8">
				<UButton
					v-for="category in categories"
					:key="category.key"
					:color="selectedCategory === category.key ? 'primary' : 'neutral'"
					:variant="selectedCategory === category.key ? 'solid' : 'ghost'"
					@click="selectedCategory = category.key"
				>
					<Icon :name="category.icon" class="mr-1" />
					{{ category.label }}
				</UButton>
			</div>

			<!-- Список статей -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
				<UCard v-for="post in filteredPosts" :key="post.title" class="hover:ring-2 hover:ring-primary transition-all duration-200" :class="{ 'opacity-60': post.soon }">
					<template #header>
						<div class="flex items-start gap-3">
							<div class="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
								<Icon :name="post.icon" size="24" />
							</div>
							<div class="flex-1">
								<h3 class="font-bold text-lg m-0 leading-tight">{{ post.title }}</h3>
								<div class="flex items-center gap-2 mt-1">
									<UBadge :color="getCategoryColor(post.category)" variant="subtle" size="xs">
										{{ getCategoryLabel(post.category) }}
									</UBadge>
									<span v-if="post.date" class="text-xs text-gray-500">{{ post.date }}</span>
								</div>
							</div>
						</div>
					</template>

					<p class="text-sm text-gray-600 dark:text-gray-300 m-0">
						{{ post.description }}
					</p>

					<template #footer>
						<div class="flex justify-between items-center">
							<UBadge v-if="post.soon" color="warning" variant="soft">
								<Icon name="mdi:clock-outline" class="mr-1" />
								Скоро
							</UBadge>

							<UButton v-if="!post.soon" :to="post.to" color="primary" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="ml-auto"> Читать </UButton>
							<UButton v-else color="neutral" variant="ghost" disabled class="ml-auto"> В разработке </UButton>
						</div>
					</template>
				</UCard>
			</div>

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!-- Призыв к действию -->
			<div class="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 mt-8 not-prose">
				<div class="flex items-start gap-4">
					<Icon name="mdi:pencil-outline" size="32" class="text-primary shrink-0 mt-1" />
					<div>
						<h4 class="font-bold text-lg mb-2">Хотите написать статью?</h4>
						<p class="text-gray-600 dark:text-gray-300 mb-0">
							Если у вас есть опыт, которым вы хотели бы поделиться с сообществом Kill Team, свяжитесь с нами! Мы рады публиковать материалы от участников комьюнити.
						</p>
					</div>
				</div>
			</div>
		</article>
	</UContainer>
</template>

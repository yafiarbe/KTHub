<script setup lang="ts">
interface SectionItem {
	title: string;
	badge?: string;
	summary: string;
	translation: {
		href: string;
		updated: string;
		size?: string;
		status?: string;
	};
}

interface Section {
	label: string;
	short: string;
	description: string;
	icon?: string;
	items: SectionItem[];
}

const sections: Section[] = [
	{
		label: "Mission Packs",
		short: "Сценарии и форматы матчей",
		description: "Актуальные подборки миссий и правила для разных типов столов. Уточни с соперником, какой пакет используете перед игрой.",
		icon: "solar:route-linear",
		items: [
			{
				title: "Critical Operations 2024",
				badge: "Matched Play",
				summary: "Основной турнирный пакет с картами, целями и вторичками.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2024" },
			},
			{
				title: "Critical Operations 2025",
				badge: "Matched Play",
				summary: "Основной турнирный пакет с обновлёнными картами целей и вторичками.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2025" },
			},
			{
				title: "Into the Dark / Close Quarters",
				badge: "Альтернативный формат",
				summary: "Правила для замкнутых пространств и тесных коридоров.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2024" },
			},
		],
	},
	{
		label: "Team Rules",
		short: "Сборка и ограничения ростера",
		description: "Напоминание о том, что стоит согласовать по составу команд, прокси и обновлениям перед матчем.",
		icon: "solar:users-group-two-rounded-outline",
		items: [
			{
				title: "Canoptek Circle",
				badge: "Перевод",
				summary: "Киллтим некронских каноптек-конструктов под управлением Криптека, играющая от контроля поля и усилений через обелиски.",
				translation: { href: "/translations/canoptek-circle", updated: "17.12.2025" },
			},
			{
				title: "Hierotek Circle",
				badge: "Перевод",
				summary: "Полный перевод листов данных и тактик.",
				translation: { href: "/translations/hierotek-circle", updated: "17.12.2025" },
			},
			{
				title: "Nemesis Claw",
				badge: "Перевод",
				summary:
					"Киллтим безжалостных космодесантников, известных своей жестокостью и мастерством боя как ближнего, так и дальнего боя. Они используют смертоносные тактики, комбинируя скрытность, быструю агрессию и психологическое давление на противника, чтобы доминировать на поле боя.",
				translation: { href: "/translations/nemesis-claw", updated: "17.12.2025" },
			},
		],
	},
	{
		label: "Key",
		short: "Готовые PDF и шпаргалки",
		description: "Прямые ссылки на базовые документы, чтобы не искать их по чатам.",
		icon: "solar:download-minimalistic-outline",
		items: [
			{
				title: "Core Rules PDF",
				badge: "Обязательное",
				summary: "Базовые правила Kill Team в актуальной редакции.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2025" },
			},
			{
				title: "Latest FAQ & Errata",
				badge: "Обновления",
				summary: "Правки баланса и ответы на частые вопросы по командам и миссиям.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2025" },
			},
			{
				title: "Маркерная памятка",
				badge: "Хэндхаут",
				summary: "Список базовых жетонов, статусов и условий для новичков.",
				translation: { href: "/downloads/kill-team", updated: "01.01.2025" },
			},
		],
	},
];
</script>

<template>
	<UContainer fluid>
		<AppHeading :level="1" subtitle="Other Rules" class="prose">Остальные правила</AppHeading>
		<USeparator color="primary" type="solid" size="lg" />

		<div class="py-10 space-y-10 w-full">
			<section
				class="bg-linear-to-br from-zinc-100 via-white to-primary-50/60 dark:from-zinc-900 dark:via-black dark:to-primary-900/20 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 shadow-lg"
			>
				<div class="space-y-3 max-w-3xl">
					<p class="text-sm font-semibold text-primary tracking-wide uppercase">Справочник</p>
					<h2 class="text-3xl md:text-4xl font-bold heading-font">Остальные правила</h2>
					<p class="text-zinc-600 dark:text-zinc-300">
						Собрали вспомогательные правила и материалы в одном месте. Выбирай нужный блок, раскрывай детали и переходи к загрузке актуальных документов.
					</p>
				</div>
			</section>

			<UAccordion
				:items="sections"
				multiple
				color="primary"
				variant="soft"
				size="lg"
				class="w-full"
				:ui="{
					root: 'flex flex-col gap-4 overflow-hidden',
					item: 'bg-transparent rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-none w-full transition overflow-hidden',
					header: 'w-full overflow-hidden',
					trigger: 'flex px-4 py-3 bg-zinc-50/70 dark:bg-zinc-900/60 transition shadow-sm hover:-translate-y-0.5 hover:shadow-md w-full overflow-hidden',
					leadingIcon: 'hidden',
					trailingIcon: 'hidden',
					label: 'w-full',
				}"
			>
				<template #default="{ item, open }">
					<div class="flex items-center justify-between w-full">
						<div class="flex items-center gap-4">
							<Icon v-if="item.icon" :name="item.icon" class="w-6 h-6 text-primary" />
							<div>
								<p class="heading-font font-semibold uppercase text-base">{{ item.label }}</p>
								<p class="text-sm text-zinc-500 dark:text-zinc-400">{{ item.short }}</p>
							</div>
						</div>
						<Icon :name="open ? 'heroicons-solid:chevron-up' : 'heroicons-solid:chevron-down'" class="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
					</div>
				</template>

				<template #body="{ item }">
					<div class="pt-2 pb-6 px-4 space-y-4 w-full">
						<p class="text-sm text-zinc-600 dark:text-zinc-300">{{ item.description }}</p>

						<div class="grid gap-4 md:grid-cols-2 auto-rows-fr">
							<NuxtLink v-for="entry in item.items" :key="entry.title" :to="entry.translation.href" :external="entry.translation.href.startsWith('http')" class="block h-full">
								<UCard
									class="h-full cursor-pointer flex flex-col transition hover:-translate-y-1 hover:shadow-xl"
									:ui="{
										root: 'h-full flex flex-col border border-zinc-200 dark:border-zinc-800 ring-1 ring-transparent hover:ring-primary/60 hover:border-primary/40 transition-all',
										body: 'flex flex-col h-full gap-4 p-4 sm:p-6',
									}"
								>
									<div class="flex flex-col h-full gap-4">
										<div class="flex flex-col gap-4 flex-1">
											<div class="flex items-start gap-4">
												<div class="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
													<Icon name="i-heroicons-book-open-20-solid" class="w-7 h-7 text-primary" />
												</div>
												<div class="flex-1 space-y-1">
													<h3 class="text-lg font-semibold heading-font">{{ entry.title }}</h3>
													<p class="text-sm text-zinc-500 dark:text-zinc-400">{{ entry.summary }}</p>
												</div>
												<UBadge v-if="entry.badge" color="primary" variant="subtle" size="xs" class="shrink-0">{{ entry.badge }}</UBadge>
											</div>
										</div>

										<div class="flex items-center gap-3 justify-end">
											<div
												class="flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-100 dark:bg-amber-900/40 dark:text-amber-200 rounded-md px-3 py-2 border border-amber-200 dark:border-amber-800"
											>
												<Icon name="i-heroicons-sparkles-20-solid" class="w-4 h-4" />
												<span>{{ entry.translation.status || "Обновлено" }}</span>
												<span class="ml-auto">{{ entry.translation.updated }}</span>
											</div>
										</div>
									</div>
								</UCard>
							</NuxtLink>
						</div>
					</div>
				</template>
			</UAccordion>
		</div>
	</UContainer>
</template>

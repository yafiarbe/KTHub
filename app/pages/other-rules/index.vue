<script setup lang="ts">
interface RuleItem {
	title: string;
	subtitle: string;
	description: string;
	icon: string;
	to?: string;
	external?: boolean;
	soon?: boolean;
}

const rules: RuleItem[] = [
	{
		title: "Правила оружия",
		subtitle: "Weapon Rules",
		description: "Дополнительные правила оружия при попаданиях.",
		icon: "mdi:sword-cross",
		to: "/other-rules/weapon-rules",
		soon: true,
	},
	{
		title: "Облегчённые правила",
		subtitle: "Lite Rules",
		description: "Упрощённая версия правил для быстрых игр и новичков.",
		icon: "mdi:feather",
		to: "/other-rules/lite",
		soon: true,
	},
	{
		title: "Универсальный эквип",
		subtitle: "Universal Equipment",
		description: "Список универсального снаряжения, доступного всем командам убийц.",
		icon: "mdi:bag-personal",
		to: "/other-rules/universal-equipment",
		soon: true,
	},
	{
		title: "Критические операции",
		subtitle: "Critical Operations",
		description: "Специальные миссии и критические задания для продвинутых игроков.",
		icon: "mdi:target-account",
		to: "/other-rules/critical-ops",
		soon: true,
	},
];
</script>

<template>
	<UContainer>
		<article class="prose dark:prose-invert min-w-full py-10">
			<AppHeading :level="1" subtitle="Other Rules">Другие правила</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />

			<p class="text-lg">В этом разделе собраны переводы дополнительных правил для Kill Team. Выберите интересующий вас раздел, чтобы перейти к его содержимому.</p>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mt-8">
				<UCard v-for="rule in rules" :key="rule.title" class="hover:ring-2 hover:ring-primary transition-all duration-200" :class="{ 'opacity-60': rule.soon }">
					<template #header>
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-lg bg-primary/10 text-primary">
								<Icon :name="rule.icon" size="28" />
							</div>
							<div>
								<h3 class="font-bold text-lg m-0">{{ rule.title }}</h3>
								<span class="text-xs text-gray-500 dark:text-gray-400">{{ rule.subtitle }}</span>
							</div>
						</div>
					</template>

					<p class="text-sm text-gray-600 dark:text-gray-300">
						{{ rule.description }}
					</p>

					<template #footer>
						<div class="flex justify-between items-center">
							<UBadge v-if="rule.soon" color="warning" variant="soft">
								<Icon name="mdi:clock-outline" class="mr-1" />
								Скоро
							</UBadge>
							<UBadge v-else color="success" variant="soft">
								<Icon name="mdi:check" class="mr-1" />
								Доступно
							</UBadge>

							<UButton v-if="!rule.soon" :to="rule.to" :external="rule.external" color="primary" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid"> Читать </UButton>
							<UButton v-else color="neutral" variant="ghost" disabled> В разработке </UButton>
						</div>
					</template>
				</UCard>
			</div>

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<div class="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 mt-8">
				<div class="flex items-start gap-4">
					<Icon name="mdi:information-outline" size="32" class="text-primary shrink-0 mt-1" />
					<div>
						<h4 class="font-bold text-lg mb-2">Хотите предложить перевод?</h4>
						<p class="text-gray-600 dark:text-gray-300 mb-0">
							Если вы хотите помочь с переводом или заметили ошибку в существующих переводах, свяжитесь с нами через GitHub или другие каналы связи.
						</p>
					</div>
				</div>
			</div>
		</article>
	</UContainer>
</template>

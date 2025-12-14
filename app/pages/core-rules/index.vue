<script setup lang="ts">
const { items, activeId, scrollTo } = useTableOfContents();
</script>

<template>
	<UContainer>
		<article
			class="prose dark:prose-invert min-w-full prose-blockquote:border-primary prose-li:marker:text-primary prose-blockquote:font-extralight prose-blockquote:italic prose-blockquote:text-primary prose-h1:uppercase prose-h1:mt-4"
		>
			<!-- ОСНОВНЫЕ ПРАВИЛА -->
			<AppHeading :level="1" subtitle="Core Rules">Основные правила</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />
			<p>
				<strong>Warhammer 40,000: Kill Team</strong> &mdash; тактическая игра в жанре скирмиша. Ударные команды из оперативников вступают в жестокие перестрелки и ближние бои, где требуется
				тщательное планирование перемещений, использование укрытий и захват ключевых целей.
			</p>

			<!-- Двухколоночный лейаут: комментарии слева, контент справа -->
			<TwoColumnLayout :reverse-on-mobile="false">
				<template #left>
					<blockquote>
						<p>В основных правилах встречаются примечания дизайнеров, подобные этому, которые дают дополнительный контекст и пояснения.</p>
					</blockquote>
					<blockquote>
						<p>
							Некоторые термины могут быть незнакомы. Они объясняются в разделе «Ключевые принципы» в алфавитном порядке, а в разделе «INDEX» есть удобный поиск правил. Не зацикливайтесь
							на них сразу — продолжайте читать, чтобы понять общий ход игры.
						</p>
					</blockquote>
				</template>

				<template #right>
					<p>Для игры в Kill Team вам понадобится:</p>
					<ul>
						<li>Команда убийц &mdash; набор миниатюр Citadel (оперативников) для каждого игрока.</li>
						<li>
							Правила для них (доступны бесплатно на английском языке на официальном сайте
							<a href="https://www.warhammer-community.com/en-gb/downloads/kill-team/" target="_blank">warhammer-community.com</a> ).
						</li>
						<li>Измерительное устройство в дюймах.</li>
						<li>Минимум 10 шестигранных кубиков (D6).</li>
						<li>Жетоны и маркеры.</li>
						<li>Зона боя &mdash; игровое поле и элементы ландшафта.</li>
						<li>Набор миссий.</li>
					</ul>
					<p>
						Каждая игра следует определённой последовательности, которая описывает, как настроить игровое поле, подготовить ударную команду и добиться победы. Для наборов миссий из этой
						книги последовательность дана на стр. 110, в других наборах она представлена отдельно.
					</p>
					<p>
						Основной этап игры &mdash; битва, где оперативники сражаются, а вы стремитесь к победе. Битва состоит из нескольких ходов игры, каждый из которых включает фазу стратегии и фазу
						боя. Их нужно выполнять в строгом порядке, после чего ход завершается, и начинается следующий. Повторяйте этот процесс, пока битва не закончится, как указано в наборе миссий.
					</p>
					<p>
						<strong>ПОВТОРЯТЬ ДО ОКОНЧАНИЯ БИТВЫ:</strong>
					</p>
					<ul>
						<li>НАЧАЛО ХОДА</li>
						<li>ФАЗА СТРАТЕГИИ</li>
						<li>ФАЗА БОЯ</li>
						<li>ЗАВЕРШЕНИЕ ХОДА</li>
					</ul>
				</template>
			</TwoColumnLayout>
			<!-- ОСНОВНЫЕ ПРАВИЛА /-->

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!-- ФАЗА СТРАТЕГИИ -->
			<AppHeading :level="2" subtitle="Strategy Phase">Фаза стратегии</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />
			<TwoColumnLayout>
				<template #left>
					<blockquote>
						В некоторых наборах миссий инициатива определяется при подготовке битвы. Игрок с инициативой решает порядок разрешения правил, которые происходят одновременно до начала битвы.
					</blockquote>
				</template>

				<template #right>
					<AppHeading :level="3" subtitle="Initiative">1. Инициатива</AppHeading>

					<ul>
						<li>
							Игрок с инициативой активирует первым в ходе игры и решает порядок разрешения правил, которые происходят одновременно. В первом ходе инициатива определяется
							последовательностью игры из набора миссий. В последующих ходах игроки проводят жеребьёвку, и победитель решает, кто получает инициативу. Если жеребьёвка заканчивается
							ничьей, игрок, не имевший инициативу в предыдущем ходе, решает, кто её получит (это имеет приоритет над жеребьёвкой и ничьей).
						</li>
					</ul>
				</template>
			</TwoColumnLayout>

			<div class="flex justify-center text-primary">
				<Icon name="iwwa:arrow-down" size="64" />
			</div>

			<TwoColumnLayout>
				<template #left>
					<blockquote>CP — ценный ресурс для активации дополнительных правил, называемых хитростями.</blockquote>

					<blockquote>Жетон приказа светлой стороной вверх показывает, что оперативник в готовности.</blockquote>

					<div class="flex justify-center">
						<NuxtPicture src="/images/core-rules/tokens.png" format="webp" />
					</div>
				</template>
				<template #right>
					<AppHeading :level="3" subtitle="Ready">2. Готовность</AppHeading>
					<ul>
						<li>Каждый игрок получает 1 командное очко (CP). В каждом ходе после первого, игрок без инициативы получает 2 CP. Неизрасходованные CP сохраняются.</li>
						<li>Каждый игрок приводит в готовность всех своих оперативников.</li>
					</ul>
				</template>
			</TwoColumnLayout>

			<div class="flex justify-center text-primary">
				<Icon name="iwwa:arrow-down" size="64" />
			</div>

			<TwoColumnLayout>
				<template #right>
					<AppHeading :level="3" subtitle="Gambit">3. Манёвр</AppHeading>
					<ul>
						<li>
							Начиная с игрока с инициативой, игроки по очереди либо используют стратегический манёвр, либо пасуют. Процесс повторяется, пока оба игрока не пасуют подряд. Стратегические
							хитрости &mdash; наиболее распространённый тип стратегического манёвра. Каждый стратегический манёвр можно использовать только один раз за ход.
						</li>
					</ul>
				</template>
			</TwoColumnLayout>
			<!-- ФАЗА СТРАТЕГИИ /-->

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!-- ФАЗА БОЯ -->
			<AppHeading :level="2" subtitle="Firefight Phase">Фаза боя</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />
			<p>
				Игрок с инициативой активирует одного готового дружеского оперативника. После завершения активации противник активирует одного из своих готовых оперативников. Игроки повторяют этот
				процесс, чередуя активации, пока все оперативники одного игрока не станут истощёнными. В этом случае игрок может выполнять контратаки между оставшимися активациями противника. Когда
				все оперативники истощены, фаза боя заканчивается.
			</p>
			<AppHeading :level="3" class="mb-8 uppercase">Последовательность активации дружественного оперативника:</AppHeading>
			<div class="flex flex-col gap-4 text-xs sm:text-sm lg:text-base">
				<div class="flex justify-center items-center">
					<div class="dark:bg-black bg-zinc-200 border border-primary py-2 px-4 lg:py-3 lg:px-6 w-5/12 uppercase font-bold flex items-center justify-self-start">1. Определение приказа</div>
					<div class="w-2/12 flex justify-center items-center"><Icon name="iwwa:arrow-down" class="rotate-270 text-primary" size="32" /></div>
					<div class="dark:bg-black bg-zinc-200 border border-primary py-2 px-4 lg:py-3 lg:px-6 w-5/12 uppercase font-bold flex items-center justify-self-start">2. Выполнение действий</div>
				</div>
				<div class="flex justify-center items-center">
					<div class="w-5/12 flex justify-center items-center"><Icon name="iwwa:arrow-down" class="rotate-180 text-primary" size="32" /></div>
					<div class="w-2/12 flex justify-center items-center"><p class="text-center text-[10px] sm:text-xs">повторять до истощения всех оперативников</p></div>
					<div class="w-5/12 flex justify-center items-center"><Icon name="iwwa:arrow-down" class="text-primary" size="32" /></div>
				</div>
				<div class="flex justify-center items-center">
					<div class="bg-amber-500 dark:bg-amber-800 border border-primary py-2 px-4 lg:py-3 lg:px-6 w-5/12 uppercase font-bold flex items-center justify-self-start">
						Активация следующего игрока
					</div>
					<div class="w-2/12 flex justify-center items-center"><Icon name="iwwa:arrow-down" class="text-primary rotate-90" size="32" /></div>
					<div class="dark:bg-black bg-zinc-200 border border-primary py-2 px-4 lg:py-3 lg:px-6 w-5/12 uppercase font-bold flex items-center justify-self-start">3. ИСТОЩЕНИЕ</div>
				</div>

				<div class="flex justify-center items-center">
					<div class="w-5/12 flex justify-center items-center"><Icon name="iwwa:arrow-down" class="text-primary rotate-180" size="32" /></div>
					<div class="w-2/12 flex justify-center items-center" />
					<div class="w-5/12 flex justify-center items-center" />
				</div>

				<div class="flex justify-center items-center">
					<div class="dark:bg-black bg-zinc-200 border border-primary py-2 px-4 lg:py-3 lg:px-6 w-5/12 uppercase font-bold flex flex-col justify-center gap-2 lg:gap-4">
						<span class="lowercase font-normal text-[8px] sm:text-[10px] lg:text-xs">* Если все ваши оперативники истощены, а у соперника нет, выполните: </span>Контратака
					</div>
					<div class="w-2/12 flex justify-center items-center" />
					<div class="w-5/12 flex justify-center items-center" />
				</div>
			</div>

			<AppHeading :level="3" subtitle="Determine order">1. Определение приказа</AppHeading>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>Правильный выбор приказа для оперативников — ключ к успеху. После нескольких игр вы лучше поймёте, когда использовать приказ «В бой», а когда — «В укрытие».</p>
					</blockquote>
				</template>

				<template #right>
					<ul>
						<li>Выберите приказ оперативника (&laquo;В бой&raquo; или &laquo;В укрытие&raquo;). Этот приказ сохраняется до следующей активации оперативника.</li>
					</ul>
					<div class="flex flex-row w-full items-center gap-4 mb-2">
						<div class="w-16 min-w-16 shrink-0">
							<NuxtPicture src="/images/core-rules/Engage.png" format="webp" />
						</div>
						<p class="flex-1"><strong>В БОЙ:</strong> Оперативник может выполнять действия как обычно и может «Контратаковать».</p>
					</div>
					<div class="flex flex-row w-full items-center gap-4">
						<div class="w-16 min-w-16 shrink-0">
							<NuxtPicture src="/images/core-rules/Conceal.png" format="webp" />
						</div>
						<p class="flex-1">
							<strong>В УКРЫТИЕ:</strong> Оперативник не может выполнять действия «Стрельба» и «Натиск» и не может «Контратаковать». Однако он не является допустимой целью, пока
							находится в укрытии.
						</p>
					</div>
				</template>
			</TwoColumnLayout>

			<div class="flex justify-center text-primary">
				<Icon name="iwwa:arrow-down" size="64" />
			</div>

			<AppHeading :level="3" subtitle="Perform actions">2. Выполнение действий</AppHeading>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>
							Оперативник с APL 2 может выполнить действия «Перемещение» (1 AP) и «Стрельба» (1 AP), в сумме 2 AP, но не может выполнить «Отход» (2 AP) и «Стрельба» (1 AP), так как это 3
							AP.
						</p>
					</blockquote>
				</template>

				<template #right>
					<ul>
						<li>
							<p>Оперативник выполняет действия. Во время выполнения он считается активным оперативником.</p>
						</li>
						<li>
							<p>
								Каждое действие стоит очки действий (AP), и вы не можете потратить больше AP за активацию, чем имеющийся лимит очков действий оперативника (APL, см. карточки данных).
								Оперативник не может выполнять одно и то же действие более одного раза за активацию &mdash; это называется ограничением действий. Некоторые редкие правила могут
								изменять стоимость действий. Независимо от изменений, минимальная стоимость действия всегда 0 AP. Это имеет приоритет над всеми изменениями AP.
							</p>
						</li>
						<li><p>Не нужно объявлять все действия оперативника при активации. Оперативник может выполнить одно действие, после чего вы можете выбрать следующее, оценив результат.</p></li>
						<li>
							<p>
								Если действие объявлено или начато, но его невозможно завершить, оно отменяется. Вернитесь к состоянию игры до начала действия. Например, если оперативник начал
								перемещение, но не может его завершить, верните его на исходную позицию; действие не выполнено, и AP не потрачены.
							</p>
						</li>
					</ul>
				</template>
			</TwoColumnLayout>

			<div class="flex justify-center text-primary">
				<Icon name="iwwa:arrow-down" size="64" />
			</div>

			<AppHeading :level="3" subtitle="Expended">3. Истощение</AppHeading>

			<TwoColumnLayout>
				<template #left>
					<blockquote><p>Жетон приказа тёмной стороной вверх показывает, что оперативник истощён.</p></blockquote>
					<div class="flex justify-center max-h-24 items-center">
						<NuxtPicture src="/images/core-rules/tokens.png" format="webp" class="h-fit" />
					</div>
					<blockquote><p>Все ваши оперативники истощены, а у противника — нет? —> КОНТРАТАКА</p></blockquote>
					<blockquote><p>Контратака — это не активация, а её замена. Это важно: например, ограничения действий не применяются.</p></blockquote>
				</template>

				<template #right>
					<ul>
						<li>
							<p>После завершения активации оперативник становится истощённым. Истощённый оперативник не находится в готовности.</p>
						</li>
					</ul>
					<div class="border border-primary px-6 m-6 bg-zinc-100 dark:bg-zinc-800">
						<AppHeading :level="4" subtitle="Сounteract">Контратака</AppHeading>
						<p>
							Когда вы должны активировать готового дружественного оперативника, но все ваши оперативники истощены, а у противника остались готовые оперативники, вы можете выбрать
							истощенного дружественного оперативника с приказом «В бой» для выполнения действия стоимостью 1AP (кроме действия «Охрана») бесплатно. Каждый оперативник может
							контратаковать только один раз за ход. Такой оперативник не может двигаться более чем на 2 дюйма или должен быть размещен полностью в пределах 2 дюймов, если он был удален
							и размещен заново, во время контратаки (это не изменение характеристики «Движение» и имеет приоритет над всеми другими правилами). Контратака необязательна, так что вы
							можете выбрать не выполнять ее. В любом случае после этого активируйте одного из оперативников противника.
						</p>
					</div>
				</template>
			</TwoColumnLayout>

			<!-- ФАЗА БОЯ /-->

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!-- ДЕЙСТВИЯ -->
			<AppHeading :level="2" subtitle="Actions">Действия</AppHeading>
			<USeparator color="primary" type="solid" size="lg" />

			<p>
				Действия имеют эффекты ( <Icon name="material-symbols:arrow-back-2" class="rotate-180 text-green-500 align-middle" /> ) и условия (
				<Icon name="f7:rhombus-fill" class="text-red-500 align-middle" /> ). — это эффекты, которые должны быть выполнены, чтобы оперативник мог совершить действие. — условия, которые должны
				быть соблюдены для оперативника во время выполнения действия.
			</p>
			<p><Icon name="material-symbols:arrow-back-2" class="rotate-180 text-green-500 align-middle" /> — это эффекты, которые должны быть выполнены, чтобы оперативник мог совершить действие.</p>
			<p><Icon name="f7:rhombus-fill" class="text-red-500 align-middle" />— условия, которые должны быть соблюдены для оперативника во время выполнения действия.</p>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>Если оперативник выполняет свободное действие вне своей активации, это не мешает ему выполнить это действие во время активации, и наоборот.</p>
					</blockquote>
				</template>

				<template #right>
					<p>Существует четыре типа действий: универсальные, уникальные, миссионные и свободные:</p>

					<ul>
						<li>
							<p><strong>Универсальные действия</strong> — наиболее распространённые, их могут выполнять все оперативники, если не указано иное.</p>
						</li>
						<li>
							<p><strong>Уникальные действия</strong> — более редкие, указаны в правилах вашей ударной команды. Их могут выполнять только определённые оперативники.</p>
						</li>
						<li>
							<p><strong>Миссионные действия</strong> — зависят от миссии или зоны боя. Если они есть, они указаны в наборе миссий, правилах зоны боя или выбранном снаряжении.</p>
						</li>
						<li>
							<p><strong>Свободные действия</strong> — можно выполнять только по указанию других правил, при этом:</p>

							<ul class="list-[circle]">
								<li>Условия действия должны быть выполнены.</li>
								<li>Действие не требует дополнительных AP.</li>
								<li>
									Оперативник считается выполнившим действие для всех других правил. Например, если он выполнил действие во время активации, он не сможет выполнить его снова в этой
									активации.
								</li>
							</ul>
						</li>
					</ul>
				</template>
			</TwoColumnLayout>

			<AppHeading :level="3" subtitle="Universal actions">Универсальные действия</AppHeading>
			<TwoColumnLayout>
				<template #left>
					<div class="flex flex-col justify-between h-full">
						<blockquote><p>Перемещение с шагом позволяет добиться большей точности и четкости.</p></blockquote>
						<blockquote><p>Перемещения выполняются в прямолинейных отрезках, а не по кривым вокруг углов.</p></blockquote>
						<blockquote><p>Эти движения выполняются с шагом по прямой, а не по дуге за углом.</p></blockquote>
					</div>
				</template>

				<template #right>
					<ActionCard
						title="Перемещение"
						subtitle="Reposition"
						:level="4"
						:ap="1"
						:effects="[
							'<p>Переместите активного оперативника на расстояние до его характеристики <em>&laquo;Движение&raquo;</em> в место, где он может быть размещён. Перемещение выполняется в одном или нескольких прямолинейных отрезках, при этом отрезки всегда округляются вверх до ближайшего дюйма.</p>',
							'<p>Оперативник не может войти в зону контроля вражеского оперативника, если там нет других дружеских оперативников. Если же хотя бы один дружеский оперативник уже находится в зоне контроля этого врага, оперативник может войти в неё, но не может там остаться после завершения перемещения.</p>',
						]"
						:conditions="[
							'Оперативник не может выполнять это действие, находясь в зоне контроля вражеского оперативника или в той же активации, в которой он выполнил действие «Отступление» или «Натиск».',
						]"
					/>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
						<figure class="m-0 flex flex-col items-center">
							<NuxtPicture src="/images/core-rules/move1.jpg" format="webp" />
							<figcaption class="text-sm text-center mt-2">
								Оперативник с характеристикой «Движение» 6 дюймов сначала перемещается на 2 дюйма, чтобы обойти угол стены, затем перемещается на 4 дюйма — оставшееся значение
								характеристики «Движение».
							</figcaption>
						</figure>
						<figure class="m-0 flex flex-col items-center">
							<NuxtPicture src="/images/core-rules/move2.jpg" format="webp" />
							<figcaption class="text-sm text-center mt-2">
								Оперативник сначала перемещается на 0,5 дюйма, чтобы обойти угол стены, но, так как отрезки округляются вверх, это считается 1 дюймом. Затем он перемещается на 2,75
								дюйма, но это округляется до 3 дюймов. В общей сложности он переместился на 4 дюйма.
							</figcaption>
						</figure>
					</div>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>Поскольку оперативники не могут выполнять одно и то же действие дважды за активацию, <strong>&laquo;Рывок&raquo;</strong> позволяет оперативникам перемещаться дальше.</p>
					</blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Рывок"
						subtitle="Dash"
						:ap="1"
						:effects="[
							'<p>То же, что действие <strong>&laquo;Перемещение&raquo;</strong>, но вместо характеристики <em>Движение</em> оперативник может переместиться только на 3 дюйма. Кроме того, он не может лазать во время этого перемещения, но может падать или прыгать.</p>',
						]"
						:conditions="[
							'<p>Оперативник не может выполнять это действие, находясь в зоне контроля вражеского оперативника или в той же активации, в которой он выполнил действие <strong>&laquo;Натиск&raquo;</strong>.</p>',
						]"
					/>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>
							Если оперативник активируется в зоне контроля вражеского оперативника, действие <strong>&laquo;Отступление&raquo;</strong> позволяет отступить. Оно стоит 2AP, поэтому
							большинство оперативников не смогут выполнить другие действия в этой активации.
						</p>
					</blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Отступление"
						subtitle="Fall back"
						:ap="2"
						:effects="[
							'<p>То же, что действие <strong>&laquo;Перемещение&raquo;</strong>, но оперативник может перемещаться в зоне контроля вражеского оперативника, но не может завершить перемещение там.</p>',
						]"
						:conditions="[
							'<p>Оперативник не может выполнять это действие, если в его зоне контроля нет вражеского оперативника. Он не может выполнять это действие в той же активации, в которой выполнил действия <strong>&laquo;Перемещение&raquo;</strong> или <strong>&laquo;Натиск&raquo;</strong>.</p>',
						]"
					/>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>
							Действие <strong>&laquo;Натиск&raquo;</strong> позволяет оперативникам эффективно атаковать врагов, но, поскольку для этого требуется приказ <em>&laquo;В бой&raquo;</em>,
							они становятся уязвимыми для вражеской стрельбы позже.
						</p>
					</blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Натиск"
						subtitle="Charge"
						:ap="1"
						:effects="[
							'<p>То же, что действие <strong>&laquo;Перемещение&raquo;</strong>, но оперативник может переместиться на дополнительные 2 дюйма.</p>',
							'<p>Он может переместиться и должен завершить перемещение в зоне контроля вражеского оперативника. Если он перемещается в зону контроля вражеского оперативника, в которой нет других дружеских оперативников, он не может покинуть эту зону контроля.</p>',
						]"
						:conditions="[
							'<p>Оперативник не может выполнять это действие, если у него приказ <em>&laquo;В укрытие&raquo;</em>, если он уже находится в зоне контроля вражеского оперативника или в той же активации, в которой он выполнил действия <strong>&laquo;Перемещение&raquo;</strong>, <strong>&laquo;Рывок&raquo;</strong> или <strong>&laquo;Отступление&raquo;</strong>.</p>',
						]"
					/>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>Если есть маркеры, на которые можно выполнить действие <strong>&laquo;Поднять маркер&raquo;</strong>, это будет указано в другом месте, например, в наборе миссий.</p>
					</blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Поднять маркер"
						subtitle="Pick up marker"
						:ap="1"
						:effects="[
							'<p>Уберите маркер, который контролирует активный оперативник и на который можно выполнить действие <strong>&laquo;Поднять маркер&raquo;</strong>. Теперь оперативник несёт, оспаривает и контролирует этот маркер.</p>',
						]"
						:conditions="['<p>Оперативник не может выполнять это действие, находясь в зоне контроля вражеского оперативника или неся другой маркер.</p>']"
					/>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote><p>Как указано выше, если оперативник несёт маркеры, это будет указано в другом месте.</p></blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Установить маркер"
						subtitle="Place marker"
						:ap="1"
						:effects="[
							'<p>Разместите маркер, который несёт активный оперативник, в пределах его зоны контроля.</p>',
							'<p>Если оперативник, несущий маркер, выведен из строя, он должен выполнить это действие перед удалением из зоны боя, но делает это за 0 AP. Это имеет приоритет над всеми правилами, которые препятствуют выполнению действия.</p>',
						]"
						:conditions="[
							'<p>Оперативник не может выполнять это действие в той же активации, в которой он уже выполнил действие <strong>&laquo;Поднять маркер&raquo;</strong> (если только он не выведен из строя).</p>',
						]"
					/>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<div class="flex flex-col justify-between h-full">
						<blockquote>
							<p>
								Неудивительно, что Kill Team может быть очень смертоносной игрой, поэтому, если вы часто теряете оперативников из-за вражеской стрельбы, попробуйте играть более
								оборонительно, размещая оперативников в укрытиях с приказом <em>&laquo;В укрытие&raquo;</em>.
							</p>
						</blockquote>

						<blockquote>
							<p>
								В редких случаях вы можете быть одновременно атакующим и защищающимся, например, при стрельбе по дружескому оперативнику из-за правила оружия &laquo;Взрыв&raquo;. В
								этом случае вы бросаете кубики атаки и защиты (а не ваш противник).
							</p>
						</blockquote>
						<blockquote>
							<p>
								Заслонение означает, что стрельба по вражескому оперативнику через крупные препятствия менее эффективна. Однако это игнорируется, когда оперативники находятся очень
								близко к&nbsp;таким препятствиям &mdash; представьте, что они высовываются из-за углов или стреляют через окна.
							</p>
						</blockquote>
						<blockquote>
							<p>
								Помните, что укрытие в этом шаге обычно применяется к оперативникам с приказом &laquo;В бой&raquo;, так как приказ &laquo;В укрытие&raquo; уже предотвратил бы их выбор
								в качестве допустимой цели.
							</p>
						</blockquote>
						<blockquote>
							<p>
								Некоторые оружия стреляют несколько раз за одно действие, например, с правилами &laquo;Взрыв&raquo; или &laquo;Поток&raquo;. Поэтому оперативники не удаляются, пока всё
								действие не будет разрешено.
							</p>
						</blockquote>
					</div>
				</template>

				<template #right>
					<ActionCard
						title="Стрельба"
						subtitle="Shoot"
						:ap="1"
						:effects="[
							'<p>Выполните стрельбу активным оперативником, следуя приведённой ниже последовательности. Активный оперативник &mdash; атакующий. Игрок выбранного вражеского оперативника &mdash; защищающийся.</p>',
						]"
						:conditions="[
							'<p>Оперативник не может выполнять это действие, если у него приказ <em>&laquo;В укрытие&raquo;</em> или если он находится в зоне контроля вражеского оперативника.</p>',
						]"
					/>

					<AppHeading :level="5" subtitle="select weapon" class="mt-7">1. Выбор оружия</AppHeading>
					<p>Атакующий выбирает одно дальнобойное оружие, которое есть у оперативника, и собирает кубики атаки &mdash; количество D6, равное характеристике <em>Атака</em> оружия.</p>

					<AppHeading :level="5" subtitle="select valid target" class="mt-7">2. Выбор допустимой цели</AppHeading>
					<p>Атакующий выбирает вражеского оперативника, который является допустимой целью и в зоне контроля которого нет дружеских оперативников.</p>
					<ul class="list-none p-0 flex flex-col gap-4">
						<li class="flex items-center gap-4">
							<div class="w-20 md:w-24 shrink-0">
								<NuxtPicture src="/images/core-rules/engage_2_sides.png" format="webp" class="w-full h-auto" />
							</div>
							<p class="m-0 flex-1">Если у предполагаемой цели приказ &laquo;В бой&raquo;, она является допустимой целью, если видима для активного оперативника.</p>
						</li>
						<li class="flex items-center gap-4">
							<div class="w-20 md:w-24 shrink-0">
								<NuxtPicture src="/images/core-rules/conceal_2_sides.png" format="webp" class="w-full h-auto" />
							</div>
							<p class="m-0 flex-1">
								Если у предполагаемой цели приказ &laquo;В укрытие&raquo;, она является допустимой целью, если видима для активного оперативника и не находится в укрытии.
							</p>
						</li>
					</ul>
					<p>
						Оперативник видим, если активный оперативник может его видеть. Оперативник находится в укрытии, если в его зоне контроля есть препятствующий ландшафт. Однако он не может быть в
						укрытии, находясь в пределах 2 дюймов от активного оперативника.
					</p>
					<p>
						Оперативник не может одновременно находиться в укрытии и быть заслонённым от одной и той же особенности ландшафта. Если это возможно, защитник должен выбрать одно из них
						(укрытие или заслонение) для этой последовательности, когда его оперативник выбран в качестве допустимой цели.
					</p>

					<AppHeading :level="5" subtitle="roll range attack dice" class="mt-7">3. Бросок кубиков атаки</AppHeading>
					<p>
						Атакующий бросает кубики атаки. Каждый результат, равный или превышающий характеристику <em>Попадание</em> оружия, считается успехом и сохраняется. Каждый результат ниже
						&mdash; провал и отбрасывается. Каждый результат 6 &mdash; всегда критический успех. Каждый другой успех &mdash; обычный успех. Каждый результат 1 &mdash; всегда провал.
					</p>
					<p>Если цель заслонена:</p>
					<ul>
						<li>Атакующий должен отбросить один успех по своему выбору вместо того, чтобы сохранить его.</li>
						<li>Все критические успехи атакующего сохраняются как обычные успехи и не могут быть изменены на критические успехи (это имеет приоритет над всеми другими правилами).</li>
					</ul>
					<p>
						Оперативник заслонён, если между ним и атакующим есть препятствующий тяжёлый ландшафт. Однако он не может быть заслонён тяжёлым ландшафтом, который находится в пределах 1 дюйма
						от любого из оперативников.
					</p>
					<AppHeading :level="5" subtitle="roll defence dice" class="mt-7">4. Бросок кубиков защиты</AppHeading>
					<p>
						Защищающийся собирает три кубика защиты. Если цель находится в укрытии, она может сохранить один обычный успех без броска &mdash; это называется спасброском за укрытие.
						Остальные кубики она бросает.
					</p>
					<p>
						Каждый результат, равный или превышающий характеристику <em>Спасбросок</em> цели, считается успехом и сохраняется. Каждый результат ниже &mdash; провал и отбрасывается. Каждый
						результат 6 &mdash; всегда критический успех. Каждый другой успех &mdash; обычный успех. Каждый результат 1 &mdash; всегда провал.
					</p>

					<AppHeading :level="5" subtitle="resolve defence dice" class="mt-7">5. Распределение кубиков защиты</AppHeading>
					<p>Защищающийся распределяет все свои успешные кубики защиты для блокировки успешных кубиков атаки.</p>
					<ul>
						<li>Обычный успех может блокировать обычный успех.</li>
						<li>Два обычных успеха могут блокировать критический успех.</li>
						<li>Критический успех может блокировать обычный успех или критический успех.</li>
					</ul>
					<AppHeading :level="5" subtitle="resolve range attack dice" class="mt-7">6. Распределение кубиков атаки</AppHeading>

					<p>Все успешные не заблокированные кубики атаки наносят урон цели.</p>
					<ul>
						<li>Обычный успех наносит урон, равный характеристике &laquo;Обычный урон&raquo; оружия.</li>
						<li>Критический успех наносит урон, равный характеристике &laquo;Критический урон&raquo; оружия.</li>
					</ul>
					<p>Все оперативники, которые были выведены из строя, удаляются после того, как активный оперативник завершит действие.</p>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>В отличие от стрельбы, рукопашный бой &mdash; это жестокая схватка с обоюдными ударами. Внимательно выбирайте, с кем вступать в бой, так как противник будет отвечать.</p>
					</blockquote>
					<blockquote>
						<p>Если в правилах сказано, что оперативник не может наносить ответные удары, то по нему всё равно можно вести бой, но он не может собирать или разыгрывать кубики атаки.</p>
					</blockquote>
				</template>

				<template #right>
					<ActionCard
						title="Рукопашный бой"
						subtitle="Fight"
						:ap="1"
						:effects="[
							'<p>Выполните рукопашный бой активным оперативником, следуя приведённой ниже последовательности. Игрок активного оперативника &mdash; атакующий. Игрок выбранного вражеского оперативника &mdash; защищающийся.</p>',
						]"
						:conditions="['<p>Оперативник не может выполнять это действие, если в его зоне контроля нет вражеского оперативника.</p>']"
					/>

					<AppHeading :level="5" subtitle="select enemy operative">1. Выбор вражеского оперативника</AppHeading>
					<p>Атакующий выбирает вражеского оперативника в зоне контроля активного оперативника для боя. Этот вражеский оперативник будет отвечать в этом действии.</p>
					<blockquote class="opacity-50">
						<p>
							Разница между тем, когда оперативник сражается и когда он отвечает, важна. Сражающийся оперативник — это активный оперативник, а отвечающий — выбранный вражеский
							оперативник.
						</p>
					</blockquote>
					<AppHeading :level="5" subtitle="select weapons">2. Выбор оружия</AppHeading>
					<p>Оба игрока выбирают одно оружие ближнего боя для своих оперативников и собирают кубики атаки — количество D6, равное характеристике «Атака» оружия.</p>
					<AppHeading :level="5" subtitle="roll melee attack dice">3. Бросок кубиков атаки</AppHeading>
					<p>
						Оба игрока одновременно бросают кубики атаки. Каждый результат, равный или превышающий характеристику &laquo;Попадание&raquo; оружия, считается успехом и сохраняется. Каждый
						результат ниже &mdash; провал и отбрасывается. Каждый результат 6 &mdash; всегда критический успех. Каждый другой успех &mdash; обычный успех. Каждый результат 1 &mdash; всегда
						провал.
					</p>
					<p>
						Если дружескому оперативнику помогают, его характеристика &laquo;Попадание&raquo; для оружия ближнего боя улучшается на 1 за каждого помощника. Для помощи дружеский оперативник
						должен находиться в зоне контроля вражеского оперативника, участвующего в бою, и не находиться в зоне контроля другого вражеского оперативника.
					</p>
					<blockquote class="opacity-50">
						<p>Если правило указывает, что оперативник не может отвечать, его всё равно можно атаковать, но для него нельзя собирать или разрешать кубики атаки.</p>
					</blockquote>
					<blockquote class="opacity-50">
						<p>
							Наличие нескольких дружеских оперативников в зоне контроля вражеского оперативника не позволяет им всем сражаться одновременно, но помощь увеличивает вероятность успешных
							кубиков атаки.
						</p>
					</blockquote>
					<AppHeading :level="5" subtitle="resolve melee attack dice">4. Распределение кубиков атаки</AppHeading>
					<p>
						Начиная с атакующего, игроки по очереди распределяют один из своих успешных не заблокированных кубиков атаки. Этот процесс повторяется, пока один из игроков не распределит все
						свои кубики (в этом случае противник распределяет все свои оставшиеся кубики) или оперативник в бою не будет выведен из строя (см. &laquo;Урон&raquo;). При распределении
						кубика, игрок должен либо нанести удар, либо блокировать.
					</p>
					<p>При нанесении удара наносится урон вражескому оперативнику, после чего кубик отбрасывается:</p>
					<ul>
						<li>Обычный успех наносит урон, равный характеристике &laquo;Обычный урон&raquo; оружия.</li>
						<li>Критический успех наносит урон, равный характеристике &laquo;Критический урон&raquo; оружия.</li>
					</ul>
					<p>При блокировке, кубик используется для блокировки одного из не распределённых успехов противника:</p>
					<ul>
						<li>Обычный успех может блокировать обычный успех.</li>
						<li>Критический успех может блокировать обычный успех или критический успех.</li>
					</ul>
					<blockquote class="opacity-50">
						<p>Нанесение удара сразу наносит урон, так что это может быть эффективным способом нанесения урона.</p>
					</blockquote>
					<blockquote class="opacity-50">
						<p>Блокировка не останавливает уже нанесённый удар, она предотвращает разрешение ещё не использованного успеха.</p>
					</blockquote>
					<blockquote class="opacity-50">
						<p>Вы можете блокировать, даже если у противника не осталось неразрешённых успехов. Это полезно, если вы пока не хотите наносить урон вражескому оперативнику.</p>
					</blockquote>
				</template>
			</TwoColumnLayout>

			<!-- ДЕЙСТВИЯ /-->

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!--  -->

			<AppHeading :level="2" subtitle="Key Principles">Ключевые принципы</AppHeading>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>

				<template #right>
					<AppHeading :level="3" subtitle="Bases">Базы</AppHeading>
					<p>
						Все оперативники размещены на базах. База является важной частью миниатюры с точки зрения правил, особенно для измерения расстояний. Размер базы каждого оперативника указан в
						его карточке данных. Боковые стороны разных баз могут касаться друг друга, но база не может быть размещена на другой базе. Дружественные оперативники могут проходить сквозь
						других дружественных оперативников (через их базу и миниатюру), но не сквозь вражеских оперативников. Базы не могут проходить сквозь ландшафт или находиться за краем зоны боя.
					</p>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote>
						<p>Представьте зону контроля как область взаимодействия оперативника с объектами, находящимися поблизости.</p>
					</blockquote>
				</template>

				<template #right>
					<AppHeading :level="3" subtitle="Control Range">Зона контроля</AppHeading>
					<p>
						Многие правила связаны с зоной контроля, например, перемещение, рукопашный бой и использование укрытий. Объект находится в пределах зоны контроля оперативника, если он видим
						для этого оперативника и находится в пределах 1 дюйма от него.
					</p>
					<p>
						Зона контроля между оперативниками является взаимной, поэтому оперативники находятся в зоне контроля друг друга, если один из них видим для другого и находится в пределах 1
						дюйма от него.
					</p>
					<figure class="m-0 flex flex-col lg:flex-row items-center justify-center lg:gap-5">
						<div class="w-full lg:w-1/2 shrink-0">
							<NuxtPicture src="/images/core-rules/control_range.jpg" format="webp" class="w-full h-auto" />
						</div>
						<figcaption class="text-sm mt-2 lg:mt-0 flex-1">
							<p>Оперативники A и B находятся в зоне контроля друг друга.</p>
							<p>Ландшафт находится в зоне контроля как оперативника B, так и оперативника C.</p>
							<p>Из-за ландшафта оперативник B невидим для оперативника C, и наоборот, поэтому они не находятся в зоне контроля друг друга.</p>
						</figcaption>
					</figure>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right>
					<AppHeading :level="3" subtitle="Cover">Укрытие</AppHeading>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right>
					<AppHeading :level="3" subtitle="Damage">Урон</AppHeading>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right>
					<AppHeading :level="4" subtitle="Injured">Тяжёлое ранение</AppHeading>
				</template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Datacards">Карточки данных</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Dice">Кубики</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Distances">Расстояния</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Equipment">Снаряжение</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Intervening">Препятствие</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Keywords">Ключевые слова</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Killzone Floor">Пол зоны боя</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Markers">Маркеры</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Obscured">Заслонение</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Operatives">Оперативники</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Orders">Приказы</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Ploys">Хитрости</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="4" subtitle="Command re-roll">Командный переброс</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Precedence">Приоритет</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Roll-off">Жеребьёвка</AppHeading></template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Tokens">Жетоны</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right><AppHeading :level="3" subtitle="Valid Target">Допустимая цель</AppHeading> </template>
			</TwoColumnLayout>

			<TwoColumnLayout>
				<template #left>
					<blockquote></blockquote>
				</template>
				<template #right> <AppHeading :level="3" subtitle="Visible">Видимость</AppHeading></template>
			</TwoColumnLayout>

			<!--  -->

			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />

			<!--  -->

			<AppHeading :level="2" subtitle="Killzones">Зоны боя</AppHeading>
			<AppHeading :level="3" subtitle="Terrain and Movement">Ландшафт и передвижение</AppHeading>
			<AppHeading :level="4" subtitle="Climbing">Взобраться</AppHeading>
			<AppHeading :level="4" subtitle="Dropping">Спуститься</AppHeading>
			<AppHeading :level="4" subtitle="Jumping">Прыгнуть</AppHeading>
			<AppHeading :level="3" subtitle="Terrain Types">Типы ландшафта</AppHeading>
			<AppHeading :level="4" subtitle="Heavy">Тяжёлый</AppHeading>
			<AppHeading :level="4" subtitle="Light">Лёгкий</AppHeading>
			<AppHeading :level="4" subtitle="Blocking">Блокирующий</AppHeading>
			<AppHeading :level="4" subtitle="Vantage">Высота</AppHeading>
			<AppHeading :level="4" subtitle="Accessible">Проходимый</AppHeading>
			<AppHeading :level="4" subtitle="Insignificant">Незначительный</AppHeading>
			<AppHeading :level="4" subtitle="Exposed">Открытый</AppHeading>

			<!--  -->
			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />
			<!--  -->
			<AppHeading :level="3" subtitle="Killzone: Volkus">Зона боя: Волкус</AppHeading>
			<!--  -->
			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />
			<!--  -->
			<AppHeading :level="3" subtitle="Killzone: Gallowdark">Зона боя: Галлоударк</AppHeading>
			<!--  -->
			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />
			<!--  -->
			<AppHeading :level="3" subtitle="Killzone: Bheta-Decima">Зона боя: Бета-Десима</AppHeading>
			<!--  -->
			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />
			<AppHeading :level="3" subtitle="Killzone: Tomb World">Зона боя: Мир Гробниц</AppHeading>
			<!--  -->
			<USeparator color="zinc" type="dotted" class="opacity-30 mt-12" />
			<!--  -->
			<AppHeading :level="3" subtitle="Setting Up Killzones">Подготовка Killzone</AppHeading>
		</article>
		<TableOfContents :items="items" :active-id="activeId" @navigate="scrollTo" />
	</UContainer>
</template>

<style scoped></style>

<!-- 
arcticons:eksi-sozluk
arcticons:shield


material-symbols:circle
ri:triangle-fill


material-symbols:arrow-back-2
f7:rhombus-fill
  -->

<!-- 

<ActionCard
					title=""
					subtitle=""
					:ap="1"
					:effects="['']"
					:conditions="['']"
					/>

-->

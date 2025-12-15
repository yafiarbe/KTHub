<template>
	<UContainer>
		<div class="flex flex-col gap-6 py-10 items-center">
			<h1>Привет — добро пожаловать!</h1>
			<p>Меня зовут Женя. Это сайт с фанатскими переводами правил настольной игры Kill Team — пока он в разработке, но я активно работаю над расширением функционала.</p>

			<UCard class="mt-6">
				<template #header>
					<h2>Что сейчас есть</h2>
				</template>
				<p>Здесь вы найдёте удобную страницу с основными правилами — переводы и пояснения, чтобы проще понять, как играть.</p>
				<NuxtLink to="/core-rules" class="inline-block px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-lg transition"
					>Ознакомиться с базовыми правилами</NuxtLink
				>
			</UCard>

			<UCard class="mt-6">
				<template #header>
					<h2>Чем вы можете помочь</h2>
				</template>
				<ul>
					<li>Потестируйте, пожалуйста, страницу с правилами — особенно удобство чтения и понятность.</li>
					<li>Если найдёте ошибки в переводе, опечатки или технические проблемы — напишите мне в Telegram.</li>
				</ul>
			</UCard>

			<UCard class="mt-6">
				<template #header>
					<h2>Связаться</h2>
				</template>
				<p>Telegram: <a href="https://t.me/yafiarbe" target="_blank" rel="noopener noreferrer">@yafiarbe</a></p>
				<p>Буду рад любому фидбеку — спасибо, что помогаете сделать сайт лучше!</p>
			</UCard>
		</div>
	</UContainer>
</template>

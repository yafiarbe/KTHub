// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "@nuxt/image", "@vueuse/nuxt"],
	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},
	ui: {
		theme: {
			colors: ["primary", "secondary", "zinc", "info", "success", "warning", "error"],
		},
	},
	image: {
		provider: "ipx",
		quality: 80,
		format: ["webp"],
	},
	ssr: false,
	fonts: {
		families: [
			/* Заголовок */
			{ name: "Cinzel", provider: "google", weights: [500, 700] },
			/* Основной текст */
			{ name: "Source Sans 3", provider: "google", weights: [400, 500, 600] },
			/* Примечания авторов */
			{ name: "EB Garamond", provider: "google", weights: [400, 500, 600] },
			{ name: "IBM Plex Serif", provider: "google", weights: [400, 500, 600] },
			{ name: "Cormorant Garamond", provider: "google", weights: [400, 500, 600] },
		],
	},
	app: {
		// baseURL: "/KTHub/",
	},
});

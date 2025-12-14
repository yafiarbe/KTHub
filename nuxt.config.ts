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
		provider: "ipxStatic",
		quality: 80,
		format: ["webp"],
	},
	ssr: false,
	// app: {
	// 	baseURL: "/KTHub/", // Replace REPO_NAME with your GitHub repository name, or '/' if it's a user/org pages repo
	// },
});

export default defineAppConfig({
	ui: {
		colors: {
			primary: "orange",
			zinc: "zinc",
		},

		main: {
			base: "min-h-[calc(100vh-var(--ui-header-height)-81px)] flex",
		},
		footer: {
			slots: {
				root: "min-h-20 flex items-center justify-center",
			},
		},

		// === Сворачиваемый (Collapsible) элемент для переключения видимости его содержимого. ===
		collapsible: {
			slots: {
				root: "",
				content: "",
			},
		},
		// container: {
		// 	base: "",
		// },
	},
	icon: {
		mode: "css",
		cssLayer: "base",
	},
});

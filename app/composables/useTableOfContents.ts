export interface TocItem {
	id: string;
	text: string;
	level: number;
}

export interface UseTableOfContentsOptions {
	/** CSS селектор для поиска заголовков */
	selector?: string;
	/** Контейнер для поиска (по умолчанию document) */
	container?: Ref<HTMLElement | null>;
	/** Отступ сверху для Intersection Observer (в пикселях) */
	rootMargin?: number;
}

export function useTableOfContents(options: UseTableOfContentsOptions = {}) {
	const { selector = "h1[id], h2[id], h3[id], h4[id], h5[id]", container = ref(null), rootMargin = 100 } = options;

	const items = ref<TocItem[]>([]);
	const activeId = ref<string>("");

	let observer: IntersectionObserver | null = null;

	/**
	 * Собирает все заголовки с id со страницы
	 */
	function collectHeadings() {
		const root = container.value || document;
		const headings = root.querySelectorAll(selector);

		items.value = Array.from(headings).map((heading) => ({
			id: heading.id,
			text: heading.textContent?.replace(/\s*\([^)]*\)\s*$/, "").trim() || "",
			level: parseInt(heading.tagName.charAt(1), 10),
		}));
	}

	/**
	 * Запускает Intersection Observer для отслеживания активного раздела
	 */
	function startObserver() {
		if (observer) {
			observer.disconnect();
		}

		const visibleHeadings = new Map<string, IntersectionObserverEntry>();

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleHeadings.set(entry.target.id, entry);
					} else {
						visibleHeadings.delete(entry.target.id);
					}
				});

				// Выбираем самый верхний видимый заголовок
				if (visibleHeadings.size > 0) {
					let topMost: IntersectionObserverEntry | null = null;

					visibleHeadings.forEach((entry) => {
						if (!topMost || entry.boundingClientRect.top < topMost.boundingClientRect.top) {
							topMost = entry;
						}
					});

					if (topMost) {
						activeId.value = (topMost as IntersectionObserverEntry).target.id;
					}
				}
			},
			{
				rootMargin: `-${rootMargin}px 0px -66% 0px`,
				threshold: 0,
			}
		);

		const root = container.value || document;
		const headings = root.querySelectorAll(selector);
		headings.forEach((heading) => observer!.observe(heading));
	}

	/**
	 * Прокручивает к указанному заголовку
	 */
	function scrollTo(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			activeId.value = id;
		}
	}

	/**
	 * Инициализация: сбор заголовков + запуск observer
	 */
	function init() {
		collectHeadings();
		startObserver();
	}

	/**
	 * Очистка observer
	 */
	function destroy() {
		if (observer) {
			observer.disconnect();
			observer = null;
		}
	}

	onMounted(() => {
		// Небольшая задержка для уверенности, что DOM готов
		nextTick(() => {
			init();
		});
	});

	onUnmounted(() => {
		destroy();
	});

	return {
		items: readonly(items),
		activeId: readonly(activeId),
		scrollTo,
		refresh: init,
	};
}

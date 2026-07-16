import type { ActionReturn } from 'svelte/action';

export const hideScrollbar = (node: HTMLElement, enabled: boolean): ActionReturn<boolean> => {
	if (enabled) {
		document.body.style.overflow = 'hidden';
	}

	return {
		update(enabled) {
			if (enabled) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		},
		destroy() {
			document.body.style.overflow = 'auto';
		}
	};
};

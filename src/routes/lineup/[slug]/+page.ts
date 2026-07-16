import type { LineupArtist } from '$lib/types';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const artist = await getMarkdownFile(slug);

	if (!artist || (!artist.metadata.published && import.meta.env.PROD)) {
		redirect(307, '/lineup');
	}

	return { artist };
};

async function getMarkdownFile(
	slug: string
): Promise<{ metadata: LineupArtist; content: Component } | null> {
	try {
		const file = await import(`../../../lineup/${slug}.md`);

		if (!file || (!('metadata' in file) && !('default' in file))) {
			return null;
		}

		const metadata = { ...(file.metadata as LineupArtist), slug };
		const content = file.default as Component;

		return { metadata, content };
	} catch (error) {
		console.error(error);
		return null;
	}
}

import type { LineupArtist } from './types';

export async function getLineup() {
	const lineup: LineupArtist[] = [];

	const paths = import.meta.glob('/src/lineup/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<LineupArtist, 'slug'>;
			const artist = { ...metadata, slug } satisfies LineupArtist;
			if (artist.published || import.meta.env.DEV) {
				lineup.push(artist);
			}
		}
	}

	lineup.sort((a, b) => sortAlphabetically(a.title, b.title));

	return lineup;
}

export const importLinupImages = () =>
	import.meta.glob(
		'/src/lineup/images/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true,
				w: '400'
			}
		}
	);

export const UNKNOWN_IMAGE_MODULE = '/src/lib/assets/unknown.png';

function sortAlphabetically(a: string, b: string) {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
	return 0;
}

import { getCollection } from "astro:content";

/** All works in display order. Drafts are only included in dev. */
export async function getWorks() {
	const works = await getCollection(
		"works",
		({ data }) => import.meta.env.DEV || !data.draft,
	);
	return works.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Path inside public/media/ for a work's file. Accepts the full "/media/..."
 * paths Pages CMS writes, or a bare file name in public/media/works/<id>/.
 */
export const workMedia = (id: string, file: string) =>
	file.startsWith("/media/") ? file.slice("/media/".length) : `works/${id}/${file}`;

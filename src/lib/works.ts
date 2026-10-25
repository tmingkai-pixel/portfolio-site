import { getCollection } from "astro:content";

/** Every work, drafts included, in display order. Each one gets a page. */
export async function getAllWorks() {
	const works = await getCollection("works");
	return works.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Works shown in lists (Works page, home gallery, next/previous links).
 * Drafts are hidden on the live site but listed in dev so they're easy to find.
 */
export async function getWorks() {
	const works = await getAllWorks();
	return works.filter(({ data }) => import.meta.env.DEV || !data.draft);
}

/**
 * Path inside public/media/ for a work's file. Accepts the full "/media/..."
 * paths Pages CMS writes, or a bare file name in public/media/works/<id>/.
 */
export const workMedia = (id: string, file: string) =>
	file.startsWith("/media/") ? file.slice("/media/".length) : `works/${id}/${file}`;

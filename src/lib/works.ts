import { getCollection } from "astro:content";

/** All works in display order. Drafts are only included in dev. */
export async function getWorks() {
	const works = await getCollection(
		"works",
		({ data }) => import.meta.env.DEV || !data.draft,
	);
	return works.sort((a, b) => a.data.order - b.data.order);
}

/** Path inside public/media/ for a file belonging to a work */
export const workMedia = (id: string, file: string) => `works/${id}/${file}`;

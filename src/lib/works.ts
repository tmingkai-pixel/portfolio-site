import { getCollection } from "astro:content";
import worksOrder from "../data/works-order.json";

/**
 * Display order comes from src/data/works-order.json, which Pages CMS edits
 * as a drag-to-reorder list ("Works order"). Entries may be full paths
 * ("src/content/works/strapmod.md") or bare ids ("strapmod"). If a project
 * appears twice, its first position wins; projects not in the list go at the
 * end, alphabetically, so nothing ever disappears.
 */
const position = new Map<string, number>();
for (const entry of worksOrder.works ?? []) {
	const id = String(entry).split("/").pop()!.replace(/\.md$/, "");
	if (!position.has(id)) position.set(id, position.size);
}

/** Every work, drafts included, in display order. Each one gets a page. */
export async function getAllWorks() {
	const works = await getCollection("works");
	return works.sort(
		(a, b) =>
			(position.get(a.id) ?? Infinity) - (position.get(b.id) ?? Infinity) ||
			a.data.title.localeCompare(b.data.title),
	);
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

/** Path inside public/media/ for a "/media/..." path from a content file */
export const mediaPath = (file: string) => file.replace(/^\/?media\//, "");

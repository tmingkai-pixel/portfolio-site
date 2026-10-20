import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { categories } from "./lib/categories";

const works = defineCollection({
	// Files starting with "_" are ignored
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/works" }),
	schema: z.object({
		title: z.string(),
		/** Position in lists, lowest first */
		order: z.number(),
		category: z.enum(categories),
		/** One or two sentences for the home page gallery and link previews */
		summary: z.string(),
		role: z.string(),
		date: z.string(),
		doneUnder: z.string().optional(),
		/** File in public/media/works/<file name>/ (image or .mp4) */
		cover: z.string().default("cover.jpg"),
		/** Files in public/media/works/<file name>/, shown in a grid */
		gallery: z.array(z.string()).default([]),
		/** Drafts show up in `npm run dev` but not on the live site */
		draft: z.boolean().default(false),
	}),
});

export const collections = { works };

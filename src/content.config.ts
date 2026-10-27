import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { categories } from "./lib/categories";

const works = defineCollection({
	// Files starting with "_" are ignored
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/works" }),
	schema: z.object({
		title: z.string(),
		/** Short label shown next to the title in the Selected Works list, e.g. "Product" */
		type: z.string().nullish(),
		category: z.enum(categories),
		/** One or two sentences for the home page gallery and link previews */
		summary: z.string(),
		role: z.string(),
		date: z.string(),
		doneUnder: z.string().optional(),
		/** Shown as "Project type" instead of the category, e.g. "Internal Company Project" */
		projectType: z.string().optional(),
		/** "/media/..." path (or a bare file name in public/media/works/<file name>/) */
		cover: z.string().default("cover.jpg"),
		/** Describes the cover image for people using screen readers */
		coverAlt: z.string().nullish(),
		/** Same path format as cover, shown in a grid */
		gallery: z.array(z.string()).default([]),
		/**
		 * Standard template, story layout: groups with a heading, an optional
		 * one-line intro, and rows laid out as full / pair / trio. When present it
		 * replaces `gallery` (which stays as the simple masonry fallback).
		 */
		story: z
			.array(
				z.object({
					heading: z.string(),
					intro: z.string().nullish(),
					rows: z
						.array(
							z.object({
								layout: z.enum(["full", "pair", "trio"]).default("pair"),
								images: z
									.array(
										z.object({
											src: z.string(),
											alt: z.string().nullish(),
											caption: z.string().nullish(),
										}),
									)
									.nullish()
									.transform((v) => (v ?? []).filter((img) => img.src)),
							}),
						)
						.nullish()
						.transform((v) => v ?? []),
				}),
			)
			.nullish()
			.transform((v) => v ?? []),
		/** Videos (from cover/gallery) with a soundtrack: they get a "Sound on" button */
		sound: z.array(z.string()).default([]),
		/**
		 * Page layout: "standard" (cover + one gallery) or "tabs" (cover + a tab
		 * per piece, each with its own photos/videos — e.g. One Thing A Day)
		 */
		template: z.enum(["standard", "tabs"]).default("standard"),
		/** Pieces shown as tabs when template is "tabs" */
		pieces: z
			.array(
				z.object({
					title: z.string(),
					caption: z.string().nullish(),
					/** Same path format as cover */
					media: z.array(z.string()).nullish().transform((v) => v ?? []),
				}),
			)
			.nullish()
			.transform((v) => v ?? []),
		/** Drafts get a page (a private preview link) but aren't listed on the live site */
		draft: z.boolean().default(false),
	}),
});

export const collections = { works };

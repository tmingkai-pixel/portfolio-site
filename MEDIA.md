# Where to put photos and videos

Drop files into `public/media/` using these exact names. Until a file exists,
the site shows a grey box labelled with the path it's waiting for.

## Home page
- `public/media/home/hero-1.mp4`, `hero-2.mp4` — the two showreel clips
  (to add or remove clips, edit `heroSlides` in `src/pages/index.astro`)

## About page
- `public/media/about/portrait.jpg` — your photo on the navy card (portrait shape, about 9:10)

## Works (one folder per project, named after its file in src/content/works/)
- `public/media/works/<project>/cover.jpg` — thumbnail and main image
- any other photos/videos in the same folder, listed in the project's `gallery:` line
  (the `cover:` line picks which file is the thumbnail)

Tips: export photos as JPG around 2000px on the long edge, and keep videos
short, muted and under ~10 MB so pages load quickly.

## Adding a 3D printing project
Copy `src/content/works/_template.md`, rename it without the underscore, fill it in,
and delete `draft: true` when it's ready.

## Editing without code (Pages CMS)
1. Make a free GitHub account and accept the invite to this repo.
2. Go to https://app.pagescms.org, sign in with GitHub, and open **portfolio-site**.
3. Click **Works** to edit a project, or **Add an entry** for a new one.
4. Use the Cover/Gallery buttons to upload photos. Upload into that project's
   folder under `works/` (make a new folder for a new project).
5. Click **Save**. The live site updates about a minute later.

Every save is recorded on GitHub, so any mistake can be undone.

### Editing the Home and About pages
- **Home page** (Pages CMS sidebar): headline, byline, hero slideshow videos and
  the bio paragraphs. Put *asterisks* around words to show them in white.
- **About page**: portrait, name, intro, contact email, LinkedIn, skills,
  education and work experience. Drag items to reorder them.

### Changing the order of projects
Click **Works order** in the Pages CMS sidebar, drag projects up or down, and
**Save**. This sets the order on the Works page and the home page gallery.
A new project you haven't placed yet appears at the end automatically.

### Templates
Each project has a **Template** setting:
- **Standard** (or empty): one photo grid, filled from **Gallery**.
- **Tabs**: a row of tabs, one per piece, each with its own photos/videos and an
  optional caption, filled from **Pieces**. Visitors can also link to a single
  piece, e.g. `…/works/one-thing-a-day/#candies`. One Thing A Day uses this.

To add a piece: open the project, scroll to **Pieces**, click **Add an entry**,
give it a tab name, upload its photos, and save. Drag pieces to reorder tabs.

### Previewing a new project before it's public
Tick **Draft** and save. The project won't be listed anywhere on the site, but
its page is built so you can check it at
`https://tmingkai-pixel.github.io/portfolio-site/works/<file name>/`
(the file name is the title in lowercase with dashes, e.g. `desk-organiser`).
It shows a "Draft preview" banner and is hidden from search engines.
When you're happy, untick **Draft** and save to publish it.

Edits to projects that are already published go live as soon as you save.

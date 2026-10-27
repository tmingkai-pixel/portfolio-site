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

### The site layout
Every page has the menu on the left (tagline, About / Instagram / LinkedIn,
Contact Me, Selected Works). **All** (the home page) shows a collage of every
project's photos. Opening a project slides in its info column; its photos fill
the right-hand columns.

- **Works → Projects → Type**: the short word shown next to each project in the
  Selected Works list (e.g. Product, Exhibit).
- **About page**: tagline (top of the menu on every page), bio paragraphs,
  About photos (the image columns on the About page), Instagram link (blank =
  hidden), plus experience, education and skills.

### Changing the order of projects
Click **Works → Order** in the Pages CMS sidebar, drag projects up or down, and
**Save**. This sets the order on the Works page and the home page gallery.
A new project you haven't placed yet appears at the end automatically.

### Templates
Every project page has the title and text **pinned on the left** (In short,
details, About the project, previous/next) and the **photos on the right**,
two across on a dot grid. Each project's **Template** setting picks how the
photos are organised:
- **Standard** (or empty):
  - If **Story gallery** is filled in, photos are shown in groups, each with a
    heading, a one-line intro, and rows of 1 (Full), 2 (Pair) or 3 (Trio)
    photos, each with a caption and a description (alt text). The PAPPY
    Freedom Table uses this.
  - Otherwise the plain **Gallery** is used: landscape photos go full width,
    portrait photos pair up.
- **Tabs**: the left side gets a **Pieces** box listing each piece; clicking
  one shows its photos on the right, with its title and text under the first
  photo. The page opens on the first piece, and **All** shows everything.
  Visitors can link to a single piece, e.g. `…/works/one-thing-a-day/#004-painted-kettle`.
  One Thing A Day and 3D Printing use this.

To add a piece: open the project, scroll to **Pieces**, click **Add an entry**,
give it a name, a sentence of text, upload its photos/videos, and save. Drag
pieces to reorder them.

Photos open full screen when clicked (arrow keys to move, Esc to close).

### Previewing a new project before it's public
Tick **Draft** and save. The project won't be listed anywhere on the site, but
its page is built so you can check it at
`https://tmingkai-pixel.github.io/portfolio-site/works/<file name>/`
(the file name is the title in lowercase with dashes, e.g. `desk-organiser`).
It shows a "Draft preview" banner and is hidden from search engines.
When you're happy, untick **Draft** and save to publish it.

Edits to projects that are already published go live as soon as you save.

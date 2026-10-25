# Where to put photos and videos

Drop files into `public/media/` using these exact names. Until a file exists,
the site shows a grey box labelled with the path it's waiting for.

## Home page
- `public/media/home/hero-1.mp4`, `hero-2.mp4` — the two showreel clips
  (to add or remove clips, edit `heroSlides` in `src/pages/index.astro`)

## Works (one folder per project, named after its file in src/content/works/)
- `public/media/works/<project>/cover.jpg` — thumbnail and main image
- any other photos/videos in the same folder, listed in the project's `gallery:` line
  (the `cover:` line picks which file is the thumbnail)

Tips: export photos as JPG around 2000px on the long edge, and keep videos
short, muted and under ~10 MB so pages load quickly.

## Adding a 3D printing project
Copy `src/content/works/_template.md`, rename it without the underscore, fill it in,
and delete `draft: true`. Drafts appear in `npm run dev` but not on the live site.

## Editing without code (Pages CMS)
1. Make a free GitHub account and accept the invite to this repo.
2. Go to https://app.pagescms.org, sign in with GitHub, and open **portfolio-site**.
3. Click **Works** to edit a project, or **Add an entry** for a new one.
4. Use the Cover/Gallery buttons to upload photos. Upload into that project's
   folder under `works/` (make a new folder for a new project).
5. Click **Save**. The live site updates about a minute later.

Every save is recorded on GitHub, so any mistake can be undone.

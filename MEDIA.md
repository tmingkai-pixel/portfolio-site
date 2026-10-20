# Where to put photos and videos

Drop files into `public/media/` using these exact names. Until a file exists,
the site shows a grey box labelled with the path it's waiting for.

## Home page
- `public/media/home/hero-1.mp4`, `hero-2.mp4` — the two showreel clips
  (to add or remove clips, edit `heroSlides` in `src/pages/index.astro`)

## Works (one folder per project, named after its file in src/content/works/)
- `public/media/works/<project>/cover.jpg` — thumbnail and main image
  (One Thing A Day uses `cover.mp4` instead)
- `public/media/works/<project>/01.jpg`, `02.jpg`, … — gallery photos
  (the list of gallery files is in each project's `gallery:` line)

Tips: export photos as JPG around 2000px on the long edge, and keep videos
short, muted and under ~10 MB so pages load quickly.

## Adding a 3D printing project
Copy `src/content/works/example-3d-print.md`, rename it, fill it in, and delete
`draft: true`. Drafts appear in `npm run dev` but not on the live site.

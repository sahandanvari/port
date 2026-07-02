# Case study media

Drop screenshots and short demo videos here. Paths are referenced from `src/content/case-studies/*.ts`.

## Folder layout

```
public/work/
  {slug}/
    hero.jpg              # homepage work row (optional)
    hero-demo.mp4         # homepage autoplay loop (optional)
    hero-demo-poster.jpg  # poster + reduced-motion fallback
    {section}-{n}.webp    # inline section images
    {section}-{n}.mp4     # inline section videos
```

## Section images (inside a case study)

In any `sections[].images[]` entry:

```ts
{
  label: "Theme studio — live token randomizer",
  aspect: "wide",
  src: "/work/aurora/theme-studio-poster.jpg",
  videoSrc: "/work/aurora/theme-studio-demo.mp4",
  fit: "contain",
  alt: "Aurora theme studio randomizing colors and radius",
}
```

- **`src`** — screenshot, or poster when `videoSrc` is set
- **`videoSrc`** — 10–20s MP4, muted loop, autoplay (see `CaseStudyMedia`)
- **`fit: "contain"`** — better for UI captures; default is `cover`

## Homepage hero (work list)

On the case study object:

```ts
heroMedia: {
  src: "/work/aurora/hero-poster.jpg",
  videoSrc: "/work/aurora/hero-demo.mp4",
  alt: "Aurora reference site with theme switcher",
  fit: "cover",
},
```

## Video export tips

- **Format:** MP4 (H.264), no audio (or muted)
- **Length:** 10–20 seconds, one idea per clip
- **Size:** aim for under 4 MB
- **Poster:** export first frame as JPG/WebP for `src`

```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -an -movflags +faststart output.mp4
```

## Placeholders

Until files exist, the site shows labeled `[Add screenshot]` or `[Add video + poster]` frames — no broken images.

# Portfolio

Personal portfolio built with [Astro](https://astro.build), Tailwind CSS v4 and [Sitepins](https://sitepins.com) CMS support.

Live site: https://mehedi-sharif.github.io/ray.github.io/

## Development

```bash
npm install
npm run dev      # http://localhost:4321/ray.github.io/
npm run build    # static output in dist/
```

## Editing content

| What | Where |
| --- | --- |
| Homepage sections (hero, about, experience, stats, education, skills, contact) | `src/content/homepage/-index.md` |
| Projects | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Site settings, social links, header button | `src/config/config.json` |
| Menu | `src/config/menu.json` |
| Images | `public/images/` (reference as `/images/...`) |

Every homepage section has an `enable` flag. Content can also be edited visually in Sitepins (see `.sitepins/`).

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
If you move to a custom domain or a `<username>.github.io` repo, update `site` and `base` in `astro.config.mjs`.

## Credits

Layout based on the free [Villo](https://www.framer.com/marketplace/templates/villo/) Framer template by CocoBasic, used under Framer's Limited Commercial License for personal use.

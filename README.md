# Portfolio

Personal portfolio built with [Astro](https://astro.build), Tailwind CSS v4 and [Sitepins](https://sitepins.com) CMS support.

Live site: https://rayhossain.com

## Development

```bash
npm install
npm run dev      # http://localhost:4321/
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

Hosted on **GitHub Pages** with the custom domain **rayhossain.com** (DNS managed in Cloudflare).
Every push to `main` (including edits made in Sitepins) builds and deploys via `.github/workflows/deploy.yml`.
`public/CNAME` keeps the custom domain attached after each deploy.

Cloudflare DNS records:

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mehedi-sharif.github.io |

## Credits

Layout based on the free [Villo](https://www.framer.com/marketplace/templates/villo/) Framer template by CocoBasic, used under Framer's Limited Commercial License for personal use.

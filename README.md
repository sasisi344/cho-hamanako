# cho-hamanako
釣！浜名湖のAstro Blog。WordPressからの移行手順もメモしていく。

---

![Astro Sphere Lighthouse Score](_astrosphere.jpg)

Astro Sphere is a static, minimalist, lightweight, lightning fast portfolio and blog theme based on my personal website.

It is primarily Astro, Tailwind and Typescript, with a very small amount of SolidJS for stateful components.

## 🚀 Deploy your own

[![Deploy with Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere)  [![Deploy with Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere)

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)
- ✅ Searchable content (posts and projects)
- ✅ Code Blocks - copy to clipboard

## 💯 Lighthouse score
![Astro Sphere Lighthouse Score](_lighthouse.png)

## 🕊️ Lightweight
All pages under 100kb (including fonts)

## ⚡︎ Fast
Rendered in ~40ms on localhost

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🛠️ Technical Specifications

### 🗺️ Sitemap & SEO
- **Base URL**: `https://cho-hamanako.info/`
- **Sitemap Index**: [sitemap-index.xml](https://cho-hamanako.info/sitemap-index.xml)
- **Integration**: Uses `@astrojs/sitemap` to automatically generate SEO-compliant XML sitemaps during the build process.
- **Robots configuration**: Linked in `public/robots.txt` for crawler discovery.
- **LLM Support**: Includes `public/llms.txt` to help AI crawlers understand site structure.

### 🚀 Deployment Workflow (GitHub Actions)
- **Auto Deploy**: Triggered on every `push` to the `main` branch.
- **Scheduled Update**: Automatically runs on the **1st of every month at 09:00 JST** to update the "Monthly Featured Points" on the top page.
- **Full Automation**: The pipeline automatically extracts 301 redirect settings from Markdown frontmatter (`wpSlug`) and generates the `.htaccess` file before each build.
- **FTP Sync**: Synchronizes the `./dist/` directory to the production server at `cho-hamanako.info/public_html/`.

## 🗺️ Roadmap

A few features I plan to implement
- ⬜ Article Pages - Table of Contents
- ⬜ Article Pages - Share on social media

## ✨ Acknowledgement

Theme inspired by [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.io/) and [Hayden Bleasel](https://www.haydenbleasel.com/)

## 🏛️ License

MIT

# 1.0.1 Update

Added ability to run dev and preview on local network.
added npm run dev:network
added npm run preview:network

Added slightly more particle density in both light and dark mode.

Added subtle dark mode star and meteor animations.

Removed eslint config

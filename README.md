# Rupin Munjal — Portfolio

A modern, animated personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Motion** (Framer Motion).

🔗 **Live site:** [rupinmunjal.com](https://rupinmunjal.tech)

---

## ✨ Features

- **Animated hero** — staggered text reveal, floating decorative blobs, wave emoji animation
- **Glass morphism UI** — frosted-glass cards with hover lift effects throughout the site
- **Dynamic sections** — Hero, About, Skills, Projects, Experience, Contact
- **Skills matrix** — 36 skills across 6 categories (Programming, Web Dev, Cloud & DevOps, AI/ML, Databases, Tools & APIs) with icon chips and hover spring animations
- **Project showcase** — 4 projects with image cards, overlay CTAs, and staggered entrance animations
- **Timeline experience** — alternating left/right layout with a gradient timeline bar
- **Theme support** — `next-themes` wired up for dark/light mode switching
- **Responsive** — mobile-first, works across all breakpoints
- **Custom scrollbar** — gradient-styled Webkit scrollbar
- **SEO-ready** — `next/font` for optimized font loading, `Metadata` API for meta tags

---

## 🛠 Tech Stack

| Category | Stack |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Icons | lucide-react |
| Fonts | `next/font` — Ovo + Outfit |
| Theme | next-themes |
| Language | TypeScript |
| Linting | ESLint + eslint-config-next |

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, Navbar, metadata
│   ├── page.tsx            # Home page assembling all sections
│   └── globals.css         # Tailwind imports + custom CSS vars, animations, utilities
├── components/
│   ├── Hero.tsx            # Landing hero with animated text and CTAs
│   ├── About.tsx           # Bio, profile image, education/projects/volunteering cards
│   ├── Skills.tsx          # Skill categories with icon chips
│   ├── Projects.tsx        # Project grid with images and link buttons
│   ├── Experience.tsx      # Timeline-based work history
│   ├── Contact.tsx         # Contact CTA with email, GitHub, LinkedIn links
│   ├── Navbar.tsx          # Sticky nav with theme toggle
│   └── ui/
│       ├── buttons.tsx     # SolidButton, OutlineButton
│       ├── icons.tsx       # Custom SVG icon components (GitHub, LinkedIn)
│       └── project-buttons.tsx  # GitHub/live link buttons for project cards
├── data/
│   └── portfolio.ts        # All portfolio data (bio, skills, projects, experience)
└── public/
    └── assets/
        └── images/         # Project screenshots, profile photo, decorative assets
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 📝 Customizing the Portfolio

All content lives in `data/portfolio.ts`. Edit that file to update:

- **Personal info** — name, title, bio, email, education, volunteering
- **Social links** — GitHub and LinkedIn URLs
- **Skills** — categories, names, and icons (add new entries to the `skillIcons` map in `Skills.tsx` for custom icons)
- **Projects** — title, description, image path (`public/assets/projects/project-{id}.png`), GitHub/live URLs
- **Experience** — role, company, dates, bullet descriptions

### Adding a project image

Place the image at:
```
public/assets/projects/project-{id}.png
```
Image dimensions: ~1200×900px for best quality.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#ffffff` |
| Foreground | `#1a1a1a` |
| Surface | `rgba(255,255,255,0.85)` (glass) |
| Border | `#e8e8e8` |
| Muted | `#f7f7f7` |
| Muted foreground | `#555555` |
| Radius | `0.75rem` |
| Primary font | Ovo |
| Secondary font | Outfit |

Custom CSS animations: `fadeInUp`, `fadeIn`, `float`, `floatSlow`

---

## 👤 Author

**Rupin Munjal**  
Software Developer · Toronto, ON  
[GitHub](https://github.com/rupinmunjal) · [LinkedIn](https://linkedin.com/in/rupinmunjal) · [Email](mailto:rupinmunjal05@gmail.com)
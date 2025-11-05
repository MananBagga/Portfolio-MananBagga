# 🚀 Manan Bagga - Portfolio

> A dark, futuristic, performance-first portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**🌐 Live:** [mananbagga.dev](https://mananbagga.dev)  
**📧 Contact:** mananbagga0310@gmail.com  
**💼 LinkedIn:** [manan-bagga](https://www.linkedin.com/in/manan-bagga-893189247/)

## 🚀 Features

- **Dark Futuristic Design** - Neon gradients, glass morphism, and stunning visual effects
- **Performance-First** - Optimized for speed with Vite and modern React patterns
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **SEO Optimized** - Complete meta tags for better search engine visibility
- **Smooth Animations** - Framer Motion-ready with custom animation utilities
- **Accessible** - WCAG compliant with proper semantic HTML
- **Type-Safe** - Built with TypeScript for better developer experience

## 🎨 Design System

The portfolio features a comprehensive design system with:

- **Primary Gradient:** Neon cyan (#0ff6ff) → Violet (#7b61ff)
- **Background:** Near-black (#0b0f14) with radial gradient overlays
- **Custom Utilities:** Glass morphism, neon borders, glow effects
- **Typography:** Inter (body), Space Grotesk (headings)
- **Motion Presets:** Fast (150ms), Medium (300ms), Slow (500ms)

See [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) for complete design system documentation.

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI framework with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Vite 7** - Lightning-fast build tool

### Future Enhancements

- **Three.js** - 3D graphics and WebGL effects
- **Framer Motion** - Advanced animations
- **React Router DOM** - Client-side routing
- **React Three Fiber** - React renderer for Three.js

### Code Quality

- **ESLint 9** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MananBagga/manan-portfolio.git
cd manan-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
manan-portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Experience.tsx  # Experience & achievements
│   │   └── Contact.tsx     # Contact section
│   ├── App.tsx             # Main application
│   ├── main.tsx            # Entry point
│   └── style.css           # Global styles + design tokens
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
├── DESIGN_TOKENS.md        # Design system documentation
└── README.md               # You are here
```

## 📜 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint on all files                  |
| `npm run format`  | Format code with Prettier                |

## 🎯 Sections

1. **Hero** - Introduction with animated background and CTA buttons
2. **Skills** - Tech stack organized by category (Languages, Frontend, Backend, Tools)
3. **Projects** - Featured projects with descriptions and tech stacks
4. **Experience** - Professional experience and key achievements
5. **Contact** - Contact information and social links

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Create production build
npm run build

# The dist/ folder is ready to deploy
```

## 🔧 Customization

1. **Personal Info** - Update contact details in `src/components/Contact.tsx`
2. **Projects** - Add/modify projects in `src/components/Projects.tsx`
3. **Skills** - Update tech stack in `src/components/Skills.tsx`
4. **Colors** - Modify design tokens in `tailwind.config.js`
5. **SEO** - Update meta tags in `index.html`

## 🎨 Design Tokens

All design tokens are centralized for easy customization:

- **Colors:** `tailwind.config.js`
- **Motion:** CSS variables in `src/style.css`
- **Typography:** Font families and sizes in Tailwind config
- **Utilities:** Custom classes in `src/style.css`

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 📬 Contact

- **Email:** mananbagga0310@gmail.com
- **Phone:** +91 9784227907
- **GitHub:** [@MananBagga](https://github.com/MananBagga)
- **LinkedIn:** [manan-bagga](https://www.linkedin.com/in/manan-bagga-893189247/)

---

Built with ❤️ using React, Vite, and Tailwind CSS

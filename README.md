# Manan Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with PostCSS
- **3D Graphics:** Three.js with React Three Fiber and Drei
- **Animations:** Framer Motion and Lottie React
- **UI Components:** Headless UI
- **Routing:** React Router DOM
- **Data Fetching:** SWR
- **Code Quality:** ESLint, Prettier
- **Git Hooks:** Husky with lint-staged

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
manan-portfolio/
├── public/           # Static assets
├── src/
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Application entry point
│   └── style.css    # Global styles with Tailwind directives
├── .husky/          # Git hooks
├── .eslintrc.cjs    # ESLint configuration
├── .prettierrc      # Prettier configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Development

The project uses pre-commit hooks to ensure code quality:

- ESLint checks for code quality
- Prettier formats the code
- lint-staged runs these checks on staged files only

## License

MIT

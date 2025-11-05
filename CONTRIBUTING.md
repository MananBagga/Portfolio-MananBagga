# Contributing Guide

Thank you for considering contributing to this portfolio project! This guide will help you get started.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

---

## 🤝 Code of Conduct

This project follows a simple code of conduct:

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **Git** for version control

### Installation

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/manan-portfolio.git
   cd manan-portfolio
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create environment file**

   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open browser**
   ```
   http://localhost:5173
   ```

---

## 🔄 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### Creating a Branch

```bash
# Feature
git checkout -b feature/add-blog-section

# Bug fix
git checkout -b fix/navigation-mobile

# Documentation
git checkout -b docs/update-readme
```

---

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type
- Use `type` for simple types, `interface` for objects

```typescript
// Good
interface ProjectProps {
  title: string
  description: string
  tech: string[]
}

// Avoid
const project: any = { ... }
```

### React

- Use functional components with hooks
- Follow the component structure:

  ```typescript
  // 1. Imports
  import { useState } from 'react'

  // 2. Types/Interfaces
  interface Props { ... }

  // 3. Component
  export default function Component({ props }: Props) {
    // 4. Hooks
    const [state, setState] = useState()

    // 5. Handlers
    const handleClick = () => { ... }

    // 6. JSX
    return (...)
  }
  ```

### Styling

- Use Tailwind CSS utility classes
- Follow the design system in `DESIGN_TOKENS.md`
- Use custom CSS only when necessary
- Maintain neon color scheme:
  - Cyan: `#0ff6ff`
  - Violet: `#7b61ff`
  - Mint: `#00ffd5`

### File Naming

- Components: `PascalCase.tsx` (e.g., `ProjectCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `analytics.ts`)
- Constants: `UPPER_CASE.ts` (e.g., `CONSTANTS.ts`)

---

## 💬 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(projects): add filter by technology
fix(navigation): resolve mobile menu closing issue
docs(readme): update installation instructions
style(contact): improve form field spacing
refactor(hero): extract WebGL logic to custom hook
perf(images): add lazy loading for project screenshots
test(skills): add unit tests for SkillsRadial component
chore(deps): upgrade react to 19.0.0
```

### Best Practices

- ✅ Use present tense ("add feature" not "added feature")
- ✅ Keep subject line under 50 characters
- ✅ Capitalize first letter
- ✅ No period at the end
- ✅ Body explains "what" and "why" (not "how")

---

## 🔀 Pull Request Process

### Before Creating PR

1. **Update your branch**

   ```bash
   git fetch origin
   git rebase origin/develop
   ```

2. **Run checks**

   ```bash
   npm run lint
   npm run format
   npm run build
   npm run test
   ```

3. **Test locally**
   - [ ] Check all features work
   - [ ] Test responsive design
   - [ ] Verify accessibility
   - [ ] Run Lighthouse audit

### Creating the PR

1. **Push your branch**

   ```bash
   git push origin feature/your-feature
   ```

2. **Create PR on GitHub**
   - Use a descriptive title
   - Fill out the PR template
   - Link related issues
   - Add screenshots/videos if UI changes

3. **PR Template**

   ```markdown
   ## Description

   Brief description of changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing

   - [ ] Tested locally
   - [ ] Added unit tests
   - [ ] Lighthouse score checked

   ## Screenshots

   (if applicable)

   ## Checklist

   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   - [ ] No new warnings
   ```

### Review Process

- At least one approval required
- All CI checks must pass
- No merge conflicts
- Lighthouse scores meet targets

---

## 🧪 Testing

### Running Tests

```bash
# All tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard title="Test Project" {...props} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})
```

### Test Coverage Goals

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

---

## 🎨 Design System

Follow the design tokens in `DESIGN_TOKENS.md`:

- **Colors**: Use CSS variables or Tailwind classes
- **Typography**: Inter (body), Space Grotesk (headings)
- **Spacing**: Follow 4px grid (0.25rem increments)
- **Animations**: Use Framer Motion with custom easing

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 💡 Tips

- **Small commits**: Make focused, atomic commits
- **Ask questions**: Open an issue if unsure
- **Be patient**: Reviews take time
- **Have fun**: Enjoy coding!

---

## 📬 Questions?

Open an issue or reach out:

- **Email**: mananbagga0310@gmail.com
- **LinkedIn**: [manan-bagga](https://www.linkedin.com/in/manan-bagga-893189247/)
- **GitHub**: [@MananBagga](https://github.com/MananBagga)

---

Thank you for contributing! 🎉

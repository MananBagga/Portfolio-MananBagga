# Design System Documentation

A comprehensive guide to the design tokens and styling system for the Manan Portfolio.

## 🎨 Color System

### Base Colors

```css
--color-dark: #0b0f14 /* Primary background */ --color-dark-lighter: #151b23
  /* Secondary background */;
```

### Neon Accent Colors

```css
--color-neon-cyan: #0ff6ff /* Primary accent */ --color-neon-violet: #7b61ff
  /* Secondary accent */ --color-neon-mint: #00ffd5 /* Tertiary accent */;
```

### Usage in Tailwind

```jsx
// Background colors
bg - dark // #0b0f14
bg - dark - lighter // #151b23

// Neon colors
text - neon - cyan // #0ff6ff
text - neon - violet // #7b61ff
text - neon - mint // #00ffd5
bg - neon - cyan // #0ff6ff with opacity variants (e.g., bg-neon-cyan/10)
```

## 🌈 Gradients

### Primary Gradient (Cyan → Violet)

```jsx
<div className="bg-gradient-primary">
  // linear-gradient(135deg, #0ff6ff 0%, #7b61ff 100%)
</div>
```

### Text Gradients

```jsx
<h1 className="text-gradient">Gradient Text</h1>
<h2 className="text-gradient-mint">Mint Gradient</h2>
```

### Radial Gradients

```jsx
<div className="bg-gradient-radial from-neon-cyan/20 to-transparent" />
<div className="bg-gradient-radial-top from-neon-violet/20 to-transparent" />
```

## ✨ Glass Morphism

### Glass Utilities

```jsx
// Light glass effect
<div className="glass">
  // background: rgba(15, 27, 35, 0.6)
  // backdrop-filter: blur(12px)
  // border: 1px solid rgba(15, 246, 255, 0.1)
</div>

// Strong glass effect
<div className="glass-strong">
  // background: rgba(15, 27, 35, 0.8)
  // backdrop-filter: blur(16px)
  // border: 1px solid rgba(15, 246, 255, 0.2)
</div>
```

### Glass Components

```jsx
<div className="card-glass">Card with glass effect</div>
<div className="card-neon">Card with neon border</div>
```

## 💫 Neon Effects

### Neon Borders

```jsx
<div className="neon-border">Cyan neon border</div>
<div className="neon-border-violet">Violet neon border</div>
```

### Neon Shadows

```jsx
shadow - neon - sm // Small neon glow
shadow - neon - md // Medium neon glow
shadow - neon - lg // Large neon glow
shadow - neon - violet // Violet glow
shadow - neon - mint // Mint glow
```

### Glow Effects

```jsx
<div className="glow-cyan">Cyan glow</div>
<div className="glow-violet">Violet glow</div>
<div className="glow-mint">Mint glow</div>
```

## 🔤 Typography

### Font Families

```jsx
font - sans // Inter (body text)
font - display // Space Grotesk (headings)
font - mono // JetBrains Mono (code)
```

### Display Sizes

```jsx
text - display - xl // 5rem (80px)
text - display - lg // 4rem (64px)
text - display - md // 3rem (48px)
text - display - sm // 2.25rem (36px)
```

### Heading Classes

All headings use `font-display` by default:

```jsx
h1 // text-5xl lg:text-6xl
h2 // text-4xl lg:text-5xl
h3 // text-3xl lg:text-4xl
```

## ⚡ Motion System

### CSS Variables

```css
--motion-fast: 150ms --motion-medium: 300ms --motion-slow: 500ms
  --motion-ease: cubic-bezier(0.4, 0, 0.2, 1)
  --motion-ease-out: cubic-bezier(0, 0, 0.2, 1)
  --motion-ease-in: cubic-bezier(0.4, 0, 1, 1)
  --motion-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Transition Utilities

```jsx
<div className="transition-fast">Fast transition (150ms)</div>
<div className="transition-medium">Medium transition (300ms)</div>
<div className="transition-slow">Slow transition (500ms)</div>
```

### Animations

```jsx
animate-glow-pulse      // Pulsing glow effect
animate-float           // Floating up and down
animate-gradient-shift  // Gradient position shift
animate-fade-in         // Fade in
animate-slide-up        // Slide up with fade
animate-scale-in        // Scale in with fade
```

### Animation Delays

```jsx
animate - delay - 100 // 100ms delay
animate - delay - 200 // 200ms delay
animate - delay - 300 // 300ms delay
animate - delay - 500 // 500ms delay
```

## 🎯 Component Classes

### Buttons

```jsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-ghost">Ghost Button</button>
```

### Cards

```jsx
<div className="card-glass">Glass card</div>
<div className="card-neon">Neon bordered card</div>
```

### Containers

```jsx
<div className="section-container">
  // max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24
</div>
```

## 🔲 Background Patterns

### Grid Patterns

```jsx
<div className="grid-dots">Dot grid pattern</div>
<div className="grid-lines">Line grid pattern</div>
```

### Texture

```jsx
<div className="bg-texture-grain">Subtle noise texture</div>
```

## 📐 Layout Tokens

### Z-Index Layers

```css
--z-base: 0 --z-dropdown: 100 --z-sticky: 200 --z-fixed: 300 --z-modal: 400
  --z-popover: 500 --z-tooltip: 600;
```

### Spacing

Based on `--space-unit: 0.25rem` (4px)
Uses Tailwind's default spacing scale (multiples of 0.25rem)

## 🎨 Usage Examples

### Hero Section

```jsx
<div className="section-container">
  <h1 className="font-display text-6xl mb-6 animate-slide-up">
    <span className="text-gradient">Your Name</span>
  </h1>
  <p className="text-xl text-gray-300 mb-12 animate-slide-up animate-delay-100">
    Your tagline here
  </p>
  <button className="btn-primary">Get Started</button>
</div>
```

### Feature Card

```jsx
<div className="card-glass hover:border-neon-cyan/30 transition-medium">
  <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 shadow-neon-lg" />
  <h3 className="text-xl font-display mb-2 text-gradient">Feature Title</h3>
  <p className="text-gray-400 text-sm">Feature description</p>
</div>
```

### Interactive Element

```jsx
<div className="card-neon group cursor-pointer">
  <div className="group-hover:scale-110 transition-transform">Content here</div>
</div>
```

## 🔧 Customization

All design tokens are defined in:

- `tailwind.config.js` - Tailwind theme extensions
- `src/style.css` - CSS variables and custom utilities

To customize:

1. Update color values in `tailwind.config.js`
2. Modify motion presets in CSS variables
3. Add custom utilities in the Tailwind plugin

# QA Testing Checklist

## 🎯 Pre-Deployment Checklist

### ⌨️ Keyboard Navigation

- [ ] Tab through all interactive elements (buttons, links, form inputs)
- [ ] Verify visible focus indicators (neon glow) on all elements
- [ ] Test Skip to main content link
- [ ] Navigate menu with arrow keys (if applicable)
- [ ] Submit contact form using Enter key
- [ ] Close modals with Escape key
- [ ] Verify no keyboard traps

### 📱 Mobile Responsiveness

#### iPhone 12 (390x844)

- [ ] Hero section displays correctly
- [ ] Navigation hamburger menu works
- [ ] All text is readable (no overflow)
- [ ] Buttons are touch-friendly (min 44x44px)
- [ ] Project cards flip/expand properly
- [ ] Contact form is usable
- [ ] Footer displays correctly

#### Pixel 4 (393x851)

- [ ] Same checks as iPhone 12
- [ ] Verify landscape orientation

#### Tablet (768x1024)

- [ ] Grid layouts adjust properly
- [ ] Navigation switches to desktop view
- [ ] Skills radial displays correctly

### 🎨 Visual & Animation

#### Reduced Motion

- [ ] Set `prefers-reduced-motion: reduce` in browser
- [ ] Verify animations are disabled/simplified
- [ ] Check page is still functional without animations
- [ ] Test smooth scrolling behavior

#### Dark Mode

- [ ] Verify color contrast meets WCAG AA (4.5:1)
- [ ] Check neon effects don't cause eye strain
- [ ] Test readability of all text

### 🌐 WebGL & 3D

#### WebGL Support

- [ ] Test on WebGL-enabled browser (Chrome/Firefox/Safari)
- [ ] Verify 3D mesh renders correctly
- [ ] Check particle system animates smoothly
- [ ] Test mouse interaction with 3D elements

#### Fallback

- [ ] Disable WebGL in browser (chrome://flags)
- [ ] Verify SVG fallback displays
- [ ] Check page remains functional
- [ ] Ensure no console errors

### 🚀 Performance

#### Lighthouse Audit

- [ ] Run Lighthouse in Chrome DevTools
- [ ] Performance: Target 90+
- [ ] Accessibility: Target 100
- [ ] Best Practices: Target 95+
- [ ] SEO: Target 100

#### Core Web Vitals

- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

#### Loading Performance

- [ ] Test on 3G network (Chrome DevTools throttling)
- [ ] Verify lazy loading works for WebGL
- [ ] Check images load progressively
- [ ] Test with cache disabled

### 📧 Contact Form

#### Functionality

- [ ] Fill out all fields correctly → Success message
- [ ] Submit empty form → Validation errors
- [ ] Submit invalid email → Email validation error
- [ ] Test honeypot field (bot detection)
- [ ] Verify success message auto-dismisses after 5s

#### Spam Protection

- [ ] Test with filled honeypot field → Should fail
- [ ] Rapid submissions → Should handle gracefully

#### Alternative Contact Methods

- [ ] Click email link → Opens mail client
- [ ] Click phone link → Opens dialer
- [ ] Click LinkedIn → Opens in new tab
- [ ] Click GitHub → Opens in new tab

### 🔍 SEO

#### Meta Tags

- [ ] Verify title in browser tab
- [ ] Check meta description in view-source
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card with Twitter Card Validator

#### Structured Data

- [ ] Validate JSON-LD with Google Rich Results Test
- [ ] Verify Person schema
- [ ] Verify WebSite schema

#### Files

- [ ] Access /robots.txt → Should load
- [ ] Access /sitemap.xml → Should load
- [ ] Verify canonical URL in view-source

### ♿ Accessibility

#### Screen Reader

- [ ] Test with NVDA/JAWS/VoiceOver
- [ ] Verify all images have alt text
- [ ] Check heading hierarchy (h1 → h2 → h3)
- [ ] Test ARIA labels on interactive elements

#### Color Contrast

- [ ] Use browser extension (WAVE, axe DevTools)
- [ ] Check all text passes WCAG AA
- [ ] Verify focus indicators are visible

### 🌍 Cross-Browser Testing

#### Desktop

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile

- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet

### 🔗 Links & Navigation

#### Internal Links

- [ ] Click all section navigation links
- [ ] Test smooth scroll to sections
- [ ] Verify logo returns to top

#### External Links

- [ ] GitHub link opens in new tab
- [ ] LinkedIn link opens in new tab
- [ ] All external links have rel="noopener noreferrer"

### 📊 Analytics & Monitoring

#### Analytics

- [ ] Verify GA tracking code loads (if enabled)
- [ ] Test event tracking (button clicks)
- [ ] Check page view tracking

#### Error Monitoring

- [ ] Trigger intentional error → Should log to Sentry
- [ ] Check console for errors
- [ ] Verify error boundaries work

---

## 🐛 Known Issues

Document any known issues here:

- [ ] Issue description → Tracked in #123

---

## ✅ Sign-off

- [ ] All critical checks pass
- [ ] No blocking bugs
- [ ] Performance metrics meet targets
- [ ] Accessibility score 100
- [ ] Ready for deployment

**Tested by:** ********\_********  
**Date:** ********\_********  
**Browser/Device:** ********\_********  
**Notes:** ********\_********

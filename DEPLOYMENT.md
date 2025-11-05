# 🚀 Deployment Guide

Complete guide to deploy your portfolio to Vercel with CI/CD, analytics, and monitoring.

---

## 📋 Prerequisites

- [x] GitHub account
- [x] Vercel account (sign up at [vercel.com](https://vercel.com))
- [x] Formspree account (optional, for contact form)
- [x] Google Analytics account (optional)
- [x] Sentry account (optional, for error monitoring)

---

## 🎯 Quick Deploy (5 minutes)

### 1. **Push to GitHub**

```bash
# If not already initialized
git remote add origin https://github.com/YOUR_USERNAME/manan-portfolio.git
git push -u origin main
```

### 2. **Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite
5. Click **"Deploy"**

✅ **Done!** Your site is live at `https://your-project.vercel.app`

---

## ⚙️ Environment Variables

### Required

**VITE_FORMSPREE_ID**

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID (format: `YOUR_FORM_ID`)
5. Add to Vercel:
   ```
   VITE_FORMSPREE_ID=YOUR_FORM_ID
   ```

### Optional (Analytics)

**Google Analytics**

```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

**Plausible Analytics** (Privacy-friendly alternative)

```env
VITE_PLAUSIBLE_DOMAIN=mananbagga.dev
```

### Optional (Error Monitoring)

**Sentry**

1. Go to [sentry.io](https://sentry.io)
2. Create a project
3. Get your DSN
4. Install package: `npm install @sentry/react`
5. Add to Vercel:
   ```env
   VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
   VITE_SENTRY_ENVIRONMENT=production
   VITE_ENABLE_ERROR_TRACKING=true
   ```

---

## 🔧 Vercel Configuration

### Setting Environment Variables

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - **Name**: `VITE_FORMSPREE_ID`
   - **Value**: Your Formspree ID
   - **Environment**: Production, Preview, Development
4. Click **Save**

### Custom Domain Setup

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `mananbagga.dev`)
3. Follow DNS instructions:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. Wait for DNS propagation (up to 48 hours)

---

## 🤖 GitHub Actions CI/CD

Your project includes automated CI/CD in `.github/workflows/ci.yml`:

### What Gets Tested

✅ **Linting** - ESLint checks  
✅ **Formatting** - Prettier checks  
✅ **Build** - Vite production build  
✅ **Tests** - Jest/Vitest unit tests  
✅ **Lighthouse** - Performance audit on PRs

### Setting Up Secrets

1. Go to GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Add secrets:
   ```
   VITE_FORMSPREE_ID=YOUR_FORM_ID
   ```

### Branch Protection

1. **Settings** → **Branches**
2. Add rule for `main`:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - Select: `lint`, `build`, `test`

---

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property → Get tracking ID

2. **Add to Vercel**

   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   VITE_ENABLE_ANALYTICS=true
   ```

3. **Test**
   ```bash
   npm run build
   npm run preview
   # Open browser console → Check for gtag calls
   ```

### Plausible Analytics (Recommended - Privacy-first)

1. **Sign up at** [plausible.io](https://plausible.io)
2. Add your domain
3. **Add to Vercel**
   ```env
   VITE_PLAUSIBLE_DOMAIN=mananbagga.dev
   ```

**No cookie consent needed!** ✨

---

## 🐛 Error Monitoring with Sentry

### 1. Install Sentry

```bash
npm install @sentry/react
```

### 2. Configure

Add to `src/main.tsx`:

```typescript
import { initSentry } from './utils/sentry'

// Initialize Sentry
initSentry()

// Rest of your app...
```

### 3. Test

Trigger an error in development:

```typescript
throw new Error('Test error')
```

Check Sentry dashboard for the error report.

---

## 🔍 Monitoring & Uptime

### Vercel Analytics (Built-in)

- **Automatic** - No setup needed
- View in Vercel dashboard → Analytics
- Shows: Page views, visitors, top pages

### UptimeRobot (Free)

1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Add new monitor:
   - Type: HTTP(s)
   - URL: `https://mananbagga.dev`
   - Interval: 5 minutes
3. Get alerts via email/SMS when site is down

---

## 🧪 Testing Before Deploy

### Local Production Build

```bash
# Build
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173
```

### Lighthouse Audit

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:4173 --view
```

**Target Scores:**

- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

---

## 📱 Preview Deployments

Every PR gets a preview URL automatically:

1. Create a branch: `git checkout -b feature/new-feature`
2. Push: `git push origin feature/new-feature`
3. Create PR on GitHub
4. Vercel comments with preview URL
5. Test on preview before merging

---

## 🔄 Update Workflow

### Making Changes

```bash
# 1. Create branch
git checkout -b fix/button-color

# 2. Make changes
# ... edit files ...

# 3. Test locally
npm run dev

# 4. Commit
git add .
git commit -m "fix: update button color"

# 5. Push
git push origin fix/button-color

# 6. Create PR on GitHub
# 7. CI runs automatically
# 8. Merge to main
# 9. Auto-deploys to production
```

---

## 🎯 Post-Deployment Checklist

### After First Deploy

- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test WebGL/3D features
- [ ] Run Lighthouse audit
- [ ] Set up custom domain
- [ ] Configure analytics
- [ ] Test error monitoring
- [ ] Set up uptime monitoring

### SEO Setup

- [ ] Submit to Google Search Console
- [ ] Submit sitemap: `https://mananbagga.dev/sitemap.xml`
- [ ] Verify structured data with Rich Results Test
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card with Card Validator

---

## 🚨 Troubleshooting

### Build Fails

**Error**: `Module not found`

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error**: `Out of memory`

```bash
# Increase Node memory
NODE_OPTIONS="--max_old_space_size=4096" npm run build
```

### Environment Variables Not Working

1. Check spelling (case-sensitive)
2. Must start with `VITE_`
3. Redeploy after adding variables
4. Check in build logs: `Environment Variables`

### 404 on Refresh

✅ **Already configured** in `vercel.json`:

```json
"rewrites": [
  { "source": "/(.*)", "destination": "/index.html" }
]
```

---

## 📈 Performance Optimization

### Image Optimization

```bash
# Install sharp for better image processing
npm install sharp
```

### Code Splitting

Already configured with dynamic imports:

```typescript
const WebGLCanvas = lazy(() => import('./WebGLHero/WebGLCanvas'))
```

### Caching Headers

Already configured in `vercel.json`:

```json
"headers": [{
  "source": "/assets/(.*)",
  "headers": [{
    "key": "Cache-Control",
    "value": "public, max-age=31536000, immutable"
  }]
}]
```

---

## 🎓 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Google Analytics Setup](https://support.google.com/analytics)
- [Sentry React Guide](https://docs.sentry.io/platforms/javascript/guides/react/)

---

## 💡 Pro Tips

1. **Use Preview Deployments** - Test before production
2. **Monitor Performance** - Check Vercel Analytics weekly
3. **Keep Dependencies Updated** - `npm outdated`
4. **Backup Regularly** - Git commits are your backup
5. **Test on Real Devices** - Use Vercel preview URLs
6. **Monitor Error Rates** - Check Sentry dashboard
7. **Optimize Images** - Use WebP/AVIF formats
8. **Enable Gzip** - Already configured in Vercel

---

## 🆘 Need Help?

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Discussions**: Create an issue
- **Email**: mananbagga0310@gmail.com

---

**Happy Deploying! 🚀**

# Pre-Deployment Checklist

Use this checklist to ensure your portfolio is ready for deployment.

## Content Review

- [ ] **Hero Section**
  - [ ] Name is updated
  - [ ] Professional title/tagline is correct
  - [ ] Call-to-action button text is appropriate
  - [ ] Hero image/background is set (if applicable)

- [ ] **About Section**
  - [ ] Bio/background text is updated
  - [ ] Professional photo added (if desired)
  - [ ] Work experience entries are current
  - [ ] Timeline dates are accurate

- [ ] **Skills Section**
  - [ ] All skill categories are relevant
  - [ ] Skills are listed correctly
  - [ ] No placeholder text remains

- [ ] **Projects Section**
  - [ ] All 6 project cards have:
    - [ ] Project title
    - [ ] Description (2-3 sentences)
    - [ ] Project image (in `public/images/`)
    - [ ] Technology tags
    - [ ] Project URL/link
    - [ ] (Optional) GitHub repository link
  - [ ] Images are optimized (<500KB each)
  - [ ] Image paths match file names exactly

- [ ] **Contact Section**
  - [ ] Email address is correct
  - [ ] Phone number is correct (or removed)
  - [ ] Location is accurate (or removed)
  - [ ] Form validation works
  - [ ] Success/error messages are appropriate

- [ ] **Footer**
  - [ ] Social media links are all correct
  - [ ] Links open in new tabs
  - [ ] No dead links
  - [ ] Copyright year is current

## Configuration

- [ ] **Environment Variables**
  - [ ] `NEXT_PUBLIC_FORMSPREE_ID` is set (if using contact form)
  - [ ] `.env.local` file is created (for local testing)
  - [ ] Environment variable is NOT committed to GitHub

- [ ] **Next.js Configuration**
  - [ ] `next.config.mjs` has `output: 'export'`
  - [ ] `images.unoptimized` is true
  - [ ] `trailingSlash` is true

- [ ] **Page Metadata**
  - [ ] Site title is updated in `app/layout.tsx`
  - [ ] Meta description is appropriate
  - [ ] Favicon is set (optional)
  - [ ] OG image is set (optional)

## Design & UX

- [ ] **Responsive Design**
  - [ ] Test on mobile (< 640px)
  - [ ] Test on tablet (640px - 1024px)
  - [ ] Test on desktop (> 1024px)
  - [ ] Navigation works on mobile
  - [ ] Images scale appropriately
  - [ ] Text is readable on all sizes
  - [ ] No horizontal scrolling

- [ ] **Animations**
  - [ ] Animations work smoothly
  - [ ] No animation stutters or lag
  - [ ] Mobile performance is acceptable
  - [ ] Animations don't interfere with usability

- [ ] **Color & Contrast**
  - [ ] Text is readable against backgrounds
  - [ ] Links are clearly distinguished
  - [ ] Buttons are visually distinct
  - [ ] No color-blind accessibility issues

- [ ] **Typography**
  - [ ] Fonts load correctly
  - [ ] Text sizes are appropriate
  - [ ] Line heights are readable
  - [ ] No overlapping text

## Functionality

- [ ] **Navigation**
  - [ ] All navigation links work
  - [ ] Smooth scrolling works
  - [ ] Active section highlighting works
  - [ ] Mobile menu opens/closes correctly
  - [ ] Menu closes when item is clicked

- [ ] **Links**
  - [ ] All external links open in new tab
  - [ ] Email link opens email client
  - [ ] Phone link works on mobile
  - [ ] Project links are correct
  - [ ] GitHub links are correct (if applicable)

- [ ] **Contact Form**
  - [ ] Form validates required fields
  - [ ] Email validation works
  - [ ] Form submission works
  - [ ] Success message appears
  - [ ] Form clears after submission
  - [ ] Error handling works

- [ ] **Images**
  - [ ] All images load
  - [ ] Images are in `public/images/`
  - [ ] Image paths are case-sensitive correct
  - [ ] No broken image icons
  - [ ] Image quality is acceptable

## Performance

- [ ] **Page Speed**
  - [ ] First Contentful Paint < 1.5s
  - [ ] Largest Contentful Paint < 2.5s
  - [ ] Cumulative Layout Shift < 0.1
  - [ ] Use [PageSpeed Insights](https://pagespeed.web.dev)

- [ ] **Build**
  - [ ] Local build succeeds: `npm run build`
  - [ ] Build time is reasonable (< 30s)
  - [ ] No build errors in console
  - [ ] `out/` directory is generated

- [ ] **Optimization**
  - [ ] Images are compressed
  - [ ] Project images < 500KB
  - [ ] No unused dependencies
  - [ ] Unused CSS is purged

## Accessibility

- [ ] **Semantic HTML**
  - [ ] Page uses `<main>` tag
  - [ ] Headings are hierarchical (h1, h2, h3)
  - [ ] Form labels are associated with inputs
  - [ ] Images have alt text (or marked decorative)

- [ ] **Keyboard Navigation**
  - [ ] Tab through all interactive elements
  - [ ] Focus indicators are visible
  - [ ] Can submit form with keyboard only
  - [ ] Can open/close mobile menu with keyboard

- [ ] **Screen Reader**
  - [ ] Page structure makes sense with screen reader
  - [ ] Button purposes are clear
  - [ ] Form fields have labels
  - [ ] Images have descriptive alt text

- [ ] **Color Contrast**
  - [ ] Text contrast ratio >= 4.5:1 (WCAG AA)
  - [ ] Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

- [ ] **Mobile**
  - [ ] Touch targets are >= 44px
  - [ ] Clickable areas are not too close
  - [ ] Viewport meta tag is correct

## Browser Compatibility

- [ ] **Desktop Browsers**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)

- [ ] **Mobile Browsers**
  - [ ] Chrome Mobile
  - [ ] Safari Mobile (iOS)
  - [ ] Samsung Internet

## Security

- [ ] **Code**
  - [ ] No hardcoded API keys
  - [ ] Environment variables used for secrets
  - [ ] No console.log debug statements
  - [ ] No vulnerabilities: `npm audit`

- [ ] **Dependencies**
  - [ ] All dependencies are necessary
  - [ ] No outdated packages: `npm outdated`
  - [ ] `package-lock.json` is committed

- [ ] **Contact Form**
  - [ ] Formspree endpoint is correct
  - [ ] No sensitive data exposed
  - [ ] CORS is properly configured

## Git & GitHub

- [ ] **Repository**
  - [ ] All changes are committed
  - [ ] `.gitignore` is properly configured
  - [ ] No sensitive files committed
  - [ ] Repository description is set
  - [ ] Repository is public (if sharing)

- [ ] **Files**
  - [ ] README.md is present
  - [ ] CUSTOMIZATION.md is present
  - [ ] DEPLOYMENT.md is present
  - [ ] GETTING_STARTED.md is present
  - [ ] LICENSE file is present (optional)

- [ ] **Commit History**
  - [ ] Commits have clear messages
  - [ ] No large binary files committed
  - [ ] No merge conflicts

## Deployment Configuration

- [ ] **Vercel Configuration** (if using Vercel)
  - [ ] `vercel.json` exists
  - [ ] Build command is correct
  - [ ] Output directory is `out`
  - [ ] Environment variable is configured

- [ ] **Netlify Configuration** (if using Netlify)
  - [ ] `netlify.toml` exists
  - [ ] Build command is correct
  - [ ] Publish directory is `out`
  - [ ] Environment variable is configured

- [ ] **GitHub Pages Configuration** (if using GitHub Pages)
  - [ ] Workflow file exists in `.github/workflows/`
  - [ ] Workflow has correct build command
  - [ ] Workflow publishes `out/` directory
  - [ ] GitHub Actions is enabled in settings

## Final Verification

- [ ] **Local Testing**
  - [ ] Dev server runs: `npm run dev`
  - [ ] Build succeeds: `npm run build`
  - [ ] Static files serve: `npm run start`
  - [ ] No errors in console

- [ ] **Preview Build**
  - [ ] Build output is in `out/` directory
  - [ ] `index.html` exists in `out/`
  - [ ] All assets are in `out/`
  - [ ] No missing files

- [ ] **Ready to Deploy**
  - [ ] All checklist items completed
  - [ ] All tests pass
  - [ ] Ready for production
  - [ ] Deployment command ready

## Deployment Checklist

When deploying:

- [ ] Push code to GitHub main branch
- [ ] Verify GitHub Actions workflow completes (if using)
- [ ] Check deployment logs for errors
- [ ] Visit deployed URL
- [ ] Verify site loads without errors
- [ ] Test all functionality on live site
- [ ] Check page speed on live site
- [ ] Verify contact form sends emails
- [ ] Test on mobile device
- [ ] Share portfolio URL

## Post-Deployment

- [ ] **Monitoring**
  - [ ] Check for JavaScript errors
  - [ ] Monitor form submissions
  - [ ] Track page analytics (optional)
  - [ ] Receive email notifications (for contact form)

- [ ] **Sharing**
  - [ ] Add to GitHub profile
  - [ ] Add to email signature
  - [ ] Share on LinkedIn
  - [ ] Add to resume
  - [ ] Submit to portfolio sites

- [ ] **Maintenance**
  - [ ] Update content regularly
  - [ ] Monitor for dependencies updates
  - [ ] Fix any issues that arise
  - [ ] Keep portfolio fresh

## Notes

Use this space to track any issues or custom configurations:

```
- Issue: 
- Solution:
- Custom config:
```

---

**Ready to deploy?** Follow [DEPLOYMENT.md](./DEPLOYMENT.md) for platform-specific instructions.

**Need help?** Check [CUSTOMIZATION.md](./CUSTOMIZATION.md) or [GETTING_STARTED.md](./GETTING_STARTED.md).

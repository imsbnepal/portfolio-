# Deployment Guide

This portfolio is a static website that can be deployed to any hosting service. Choose the platform that best fits your needs.

## Prerequisites

Before deploying, ensure:

1. You've customized your portfolio content (see [CUSTOMIZATION.md](./CUSTOMIZATION.md))
2. You have a GitHub account
3. Your code is committed and pushed to GitHub
4. (Optional) You have a Formspree account for the contact form

## Deployment Platforms

### 1. Vercel (Recommended)

Vercel is the creator of Next.js and provides the best integration. Free tier includes unlimited deployments.

#### Setup Steps

1. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub
2. **Click "New Project"** and select your portfolio repository
3. **Configure Project Settings**:
   - Framework: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `out` (should auto-detect)
   - Root Directory: `./` (default)

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_FORMSPREE_ID` with your Formspree ID (if using contact form)

5. **Click "Deploy"**

Your portfolio will be live in seconds with automatic deployments on every GitHub push.

#### Custom Domain

1. Go to project Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided by Vercel)

#### Automatic Updates

Every time you push to GitHub, Vercel automatically rebuilds and deploys your portfolio.

---

### 2. Netlify

Netlify offers excellent static hosting with a generous free tier.

#### Setup Steps

1. **Go to [netlify.com](https://netlify.com)** and sign up with GitHub
2. **Click "New site from Git"**
3. **Select your repository**
4. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - (Other settings: leave default)

5. **Add Environment Variables**:
   - Go to Site Settings → Environment
   - Add `NEXT_PUBLIC_FORMSPREE_ID` (if using contact form)

6. **Click "Deploy"**

#### netlify.toml Configuration (Optional)

Create a `netlify.toml` file for more control:

```toml
[build]
  command = "npm run build"
  publish = "out"

[env]
  NEXT_PUBLIC_FORMSPREE_ID = "your_form_id"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Custom Domain

1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Update DNS records (instructions provided by Netlify)

---

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup Steps

1. **Create GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_FORMSPREE_ID: ${{ secrets.FORMSPREE_ID }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './out'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v1
```

2. **Configure Repository Settings**
   - Go to Settings → Pages
   - Set source to "GitHub Actions"
   - Set branch to "main"

3. **Add Secrets** (if using contact form)
   - Go to Settings → Secrets and variables → Actions
   - Create new repository secret: `FORMSPREE_ID`
   - Value: Your Formspree form ID

4. **Push to GitHub**

The workflow will automatically build and deploy.

#### Accessing Your Site

Your portfolio will be available at: `https://yourusername.github.io/portfolio`

To use a custom domain:
1. Go to Settings → Pages
2. Set custom domain
3. Update DNS records

---

### 4. Other Static Hosts

#### AWS S3 + CloudFront

1. Build locally: `npm run build`
2. Upload `out/` folder to S3
3. Set up CloudFront distribution
4. Point domain to CloudFront

#### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Set public directory to `out`
4. Deploy: `firebase deploy`

#### Surge.sh

```bash
npm install -g surge
npm run build
surge out yourportfolio.surge.sh
```

#### Render

1. Go to [render.com](https://render.com)
2. Create new Static Site
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `out`

---

## Post-Deployment Checklist

- [ ] Visit your live site and test all links
- [ ] Test contact form submission
- [ ] Verify responsive design on mobile
- [ ] Test all navigation and scrolling
- [ ] Check that images load correctly
- [ ] Test form validation with invalid inputs
- [ ] Verify animations work smoothly
- [ ] Test keyboard navigation
- [ ] Check page load speed
- [ ] Test on different browsers

## Troubleshooting

### Blank page after deployment

**Cause**: Build issues or incorrect output directory

**Solution**:
1. Check deployment logs for build errors
2. Verify `next.config.mjs` has `output: 'export'`
3. Ensure all imports are from client-side compatible packages

### Contact form not sending

**Cause**: Missing or incorrect Formspree ID

**Solution**:
1. Verify `NEXT_PUBLIC_FORMSPREE_ID` is set
2. Check the ID matches your Formspree form
3. Test at [formspree.io](https://formspree.io)

### Images not showing

**Cause**: Incorrect image paths

**Solution**:
1. Verify images are in `public/images/`
2. Use paths like `/images/filename.jpg`
3. Check file names match in component imports

### Styles not loading

**Cause**: CSS build issues

**Solution**:
1. Rebuild locally: `npm run build`
2. Clear deployment cache
3. Restart the deployment

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG for project images
2. **Minimize Dependencies**: Only include necessary npm packages
3. **Enable Caching**: Most platforms do this automatically
4. **CDN**: Use Vercel or Netlify for built-in CDN

## Domain Setup

### Point Domain to Vercel

```
CNAME: cname.vercel-dns.com
```

### Point Domain to Netlify

```
CNAME: your-site.netlify.app
```

### Point Domain to GitHub Pages

```
A: 185.199.108.153
A: 185.199.109.153
A: 185.199.110.153
A: 185.199.111.153
```

## Monitoring

- Set up deployment notifications
- Monitor page performance
- Test contact form periodically
- Check analytics if you add a tracking script

## Next Steps

After deployment:

1. Share your portfolio on social media
2. Add to your email signature
3. Link from your GitHub profile
4. Submit to portfolio sites (Dribbble, Behance, etc.)
5. Monitor form submissions for inquiries

## Support

For deployment issues:
1. Check the platform's documentation
2. Review build logs for errors
3. Verify environment variables are set
4. Test locally before deploying changes

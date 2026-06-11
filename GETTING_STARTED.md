# Getting Started

Quick start guide to clone, customize, and deploy your portfolio in minutes.

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Or use the GitHub "Use this template" button to create your own copy.

## Step 2: Install Dependencies

```bash
npm install
```

Or with other package managers:
```bash
pnpm install    # pnpm
yarn install    # yarn
```

## Step 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Step 4: Customize Your Content

Edit these files with your personal information:

### Essential Files to Update

1. **`app/layout.tsx`** - Update website title and description
   ```typescript
   title: 'Your Name | Portfolio',
   description: 'Your professional description',
   ```

2. **`components/hero.tsx`** - Update hero section text
   ```typescript
   <h1>Your Name</h1>
   <p>Your professional title</p>
   ```

3. **`components/data/projects.ts`** - Add your projects
   ```typescript
   {
     title: 'Project Name',
     description: 'What it does',
     image: '/images/project.jpg',
     tags: ['React', 'Next.js'],
     link: 'https://project-url.com',
   }
   ```

4. **`components/data/skills.ts`** - List your skills
   ```typescript
   {
     category: 'Frontend',
     skills: ['React', 'TypeScript', 'Tailwind CSS'],
   }
   ```

5. **`components/data/experience.ts`** - Add work experience
   ```typescript
   {
     title: 'Job Title',
     company: 'Company Name',
     period: 'Month Year - Present',
     description: 'What you did',
   }
   ```

6. **`components/contact.tsx`** - Update contact info
   ```typescript
   {
     label: 'Email',
     value: 'your.email@example.com',
     href: 'mailto:your.email@example.com',
   }
   ```

7. **`components/footer.tsx`** - Update social links
   ```typescript
   {
     name: 'GitHub',
     url: 'https://github.com/yourusername',
   }
   ```

### Add Project Images

1. Create project images (JPG, PNG recommended)
2. Place in `public/images/`
3. Reference in `components/data/projects.ts`

Example:
```
public/images/
├── project-1.jpg
├── project-2.jpg
└── project-3.jpg
```

## Step 5: Set Up Contact Form (Optional)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and note the form ID
3. Create `.env.local` file in project root:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```
4. Test the form locally by submitting a message

## Step 6: Test Your Changes

- **Local testing**: `npm run dev`
- **Build locally**: `npm run build`
- **Check output**: `npm run start` (serves static files)

Make sure:
- All links work
- Images load correctly
- Form validation works
- Responsive design looks good on mobile
- No console errors

## Step 7: Push to GitHub

```bash
git add .
git commit -m "Update portfolio with personal information"
git push origin main
```

## Step 8: Deploy

Choose your deployment platform:

### Option A: Vercel (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Add environment variable `NEXT_PUBLIC_FORMSPREE_ID` (if using contact form)

**That's it!** Your portfolio is live. Every git push automatically redeploys.

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Netlify auto-detects settings
5. Click "Deploy"

### Option C: GitHub Pages

1. Go to your repository Settings → Pages
2. Set source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml` (template provided)
4. Push to main branch
5. Site deploys automatically to `yourusername.github.io/portfolio`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed platform instructions.

## Customization Tips

- **Change colors**: Edit `app/globals.css` design tokens
- **Change fonts**: Update font imports in `app/layout.tsx`
- **Add sections**: Create new components and import in `app/page.tsx`
- **Remove sections**: Delete imports from `app/page.tsx`

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization guide.

## Common Tasks

### Add a New Project

1. Create project image: `project-name.jpg`
2. Add to `public/images/`
3. Edit `components/data/projects.ts`:
   ```typescript
   {
     id: 4,
     title: 'New Project',
     description: 'Description',
     image: '/images/project-name.jpg',
     tags: ['Tech1', 'Tech2'],
     link: 'https://project-url.com',
   }
   ```

### Update Your About Section

Edit `components/about.tsx` to change the bio text and timeline.

### Change Color Scheme

Edit `app/globals.css`:
```css
.dark {
  --accent: #3b82f6;  /* Change this to your color */
}
```

### Add a Skill

Edit `components/data/skills.ts` and add to the skills array:
```typescript
skills: ['React', 'New Skill Here']
```

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Changes not appearing?**
- Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Restart dev server

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run build
```

**Contact form not working?**
- Check `NEXT_PUBLIC_FORMSPREE_ID` is set in `.env.local`
- Verify form ID is correct at formspree.io
- Check browser console for errors

## File Structure Quick Reference

```
portfolio/
├── app/
│   ├── layout.tsx              # Site metadata
│   ├── page.tsx                # Main page
│   └── globals.css             # Colors and styles
├── components/
│   ├── data/
│   │   ├── projects.ts         # Your projects
│   │   ├── skills.ts           # Your skills
│   │   └── experience.ts       # Work history
│   ├── navigation.tsx          # Header nav
│   ├── hero.tsx                # Hero section
│   ├── about.tsx               # About section
│   ├── projects.tsx            # Projects grid
│   ├── contact.tsx             # Contact form
│   └── footer.tsx              # Footer
├── public/images/              # Project images
├── .env.local                  # Environment variables (create this)
├── next.config.mjs             # Next.js config
├── CUSTOMIZATION.md            # Detailed customization guide
└── DEPLOYMENT.md               # Detailed deployment guides
```

## Next Steps

1. ✅ Clone and install
2. ✅ Customize content
3. ✅ Test locally
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel/Netlify/GitHub Pages
6. ✅ Share your portfolio!

## Need More Help?

- **General questions**: See [README.md](./README.md)
- **Customization details**: See [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Deployment help**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **GitHub Issues**: Open an issue in the repository

## Performance Tips

- Keep project images under 500KB
- Use modern image formats (WebP, AVIF)
- Compress images: [tinypng.com](https://tinypng.com)
- Test page speed: [PageSpeed Insights](https://pagespeed.web.dev)

## Share Your Portfolio

After deploying:
1. Add to your GitHub profile
2. Include in email signature
3. Share on LinkedIn
4. Add to your resume
5. Submit to portfolio sites (Dribbble, Behance, etc.)

Good luck! Your portfolio is ready to impress! 🚀

# Professional Portfolio Website

A modern, static, fully responsive portfolio website built with React and Next.js. Deploy directly from GitHub to Vercel, Netlify, or GitHub Pages without any server-side components.

## Features

- **Fully Static**: Generates pure HTML, CSS, and JavaScript - no server required
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark Mode Professional Theme**: Elegant dark interface with blue accents
- **Smooth Animations**: Framer Motion animations throughout for engaging UX
- **Fast Performance**: Optimized images, lazy loading, and efficient rendering
- **Accessible**: WCAG compliance, semantic HTML, keyboard navigation
- **Easy to Customize**: Hardcoded data files make content editing simple
- **GitHub Deployable**: Clone, customize, and deploy in minutes
- **Contact Form**: Serverless form handling with Formspree integration

## Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Email**: Formspree (serverless)
- **Deployment**: Static export (works with any static host)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Customize Your Content

Edit these files with your information:

- **`components/data/projects.ts`** - Add/edit your projects
- **`components/data/skills.ts`** - Update your skills and expertise
- **`components/data/experience.ts`** - Add your work experience
- **`components/contact.tsx`** - Update contact information
- **`components/footer.tsx`** - Update social links and footer info
- **`app/layout.tsx`** - Update website metadata (title, description)

### 4. Set Up Contact Form (Optional)

1. Go to [formspree.io](https://formspree.io) and sign up for a free account
2. Create a new form and get your form endpoint ID
3. Add to your `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```

### 5. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 6. Build and Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for platform-specific instructions.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── data/
│   │   ├── projects.ts     # Project data
│   │   ├── skills.ts       # Skills data
│   │   └── experience.ts   # Work experience data
│   ├── navigation.tsx      # Navigation bar
│   ├── hero.tsx            # Hero/introduction section
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects showcase
│   ├── contact.tsx         # Contact form
│   └── footer.tsx          # Footer
├── public/
│   └── images/             # Project images and assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
├── README.md               # This file
├── DEPLOYMENT.md           # Deployment guides
└── CUSTOMIZATION.md        # Customization guide
```

## Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:

- Changing colors and fonts
- Adding/removing sections
- Updating personal information
- Customizing animations
- Modifying the layout

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the static export configuration
4. Deploy with one click

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Vercel setup.

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Netlify setup.

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to `GitHub Actions`
4. Use the provided workflow file

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full GitHub Pages setup.

## Performance Optimization

The portfolio is built with performance in mind:

- Static HTML generation (no runtime overhead)
- Optimized images with next/image
- CSS code splitting via Tailwind
- Lazy loading for below-the-fold content
- Efficient animations with Framer Motion
- Minified assets in production builds

## Accessibility

Features include:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader optimization
- Focus indicators on interactive elements

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

## Credits

Built with modern web technologies and best practices for performance, accessibility, and user experience.

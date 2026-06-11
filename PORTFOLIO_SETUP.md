# Professional Portfolio Website - Setup Guide

This is a comprehensive, fully-responsive professional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It features smooth navigation, animated sections, and email integration for contact submissions.

## Features

- **Responsive Design**: Mobile-first approach optimized for all devices (mobile, tablet, desktop)
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Hero Section**: Eye-catching introduction with animated background elements and call-to-action buttons
- **About Section**: Background information, experience timeline, and skills display with progress bars
- **Projects Showcase**: Grid layout with project cards featuring images, descriptions, tags, and external links
- **Contact Form**: Fully functional contact form with validation and email integration via Resend
- **Footer**: Comprehensive footer with social links and navigation
- **Dark Mode Professional Theme**: Sophisticated dark design with blue accent colors
- **Animations**: Smooth Framer Motion animations throughout for enhanced user experience
- **Accessibility**: WCAG compliant with semantic HTML, ARIA labels, and proper color contrast
- **Performance Optimized**: Image lazy loading, code splitting, and efficient rendering

## File Structure

```
/
├── app/
│   ├── page.tsx                 # Main portfolio page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles and design tokens
│   └── api/
│       └── send-email/
│           └── route.ts         # Email sending API endpoint
├── components/
│   ├── navigation.tsx           # Navigation bar with mobile menu
│   ├── hero.tsx                 # Hero section
│   ├── about.tsx                # About and skills section
│   ├── projects.tsx             # Projects showcase grid
│   ├── contact.tsx              # Contact form
│   ├── footer.tsx               # Footer component
│   └── data/
│       ├── projects.ts          # Projects data
│       ├── skills.ts            # Skills and expertise data
│       └── experience.ts         # Work experience and education data
├── public/
│   └── images/
│       ├── project-1.jpg        # Project images
│       ├── project-2.jpg
│       ├── project-3.jpg
│       ├── project-4.jpg
│       ├── project-5.jpg
│       └── project-6.jpg
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

The project uses pnpm as the package manager. Dependencies are automatically installed, but you can manually install them if needed:

```bash
pnpm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Portfolio email (where contact form submissions are sent)
PORTFOLIO_EMAIL=your-email@example.com
```

**Getting a Resend API Key:**
1. Go to [Resend](https://resend.com)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

**Note:** In the email API route, update the `from` address in `/app/api/send-email/route.ts` to use your verified sender email from Resend.

### 3. Update Portfolio Content

Edit the data files to personalize your portfolio:

#### Projects (`components/data/projects.ts`)
- Update project titles, descriptions, and images
- Add/remove projects as needed
- Update project tags and links

#### Skills (`components/data/skills.ts`)
- Modify skill categories and individual skills
- Adjust skill levels (0-100)
- Add or remove skill categories

#### Experience (`components/data/experience.ts`)
- Update work experience entries
- Add education information
- Modify company names, positions, and achievements

### 4. Update Contact Information

In `components/footer.tsx` and `components/contact.tsx`:
- Update email address: Replace `hello@example.com`
- Update phone number: Replace `+1 (555) 123-4567`
- Update location: Replace `San Francisco, CA`
- Update social media links (GitHub, LinkedIn, Twitter, etc.)

### 5. Update Layout Metadata

In `app/layout.tsx`:
- Update the page title: "Portfolio | Your Name"
- Update the description for better SEO
- Customize viewport settings if needed

### 6. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Colors and Design Tokens

The design system uses CSS custom properties defined in `app/globals.css`:

- **Primary Colors**: Background and foreground colors for dark mode
- **Accent Color**: `#3b82f6` (blue) - used for highlights and interactive elements
- **Neutral Colors**: Card, secondary, muted colors for layering

To customize:
1. Edit the CSS variables in `app/globals.css`
2. The dark mode colors are defined in the `.dark` class selector

### Typography

Fonts are defined in `app/layout.tsx` using Google Fonts:
- **Sans**: Geist (body text and general use)
- **Mono**: Geist Mono (code and technical text)

To change fonts:
1. Import different fonts from `next/font/google`
2. Update the font family in `tailwind.config.ts`

### Animations

Animations are powered by [Framer Motion](https://www.framer.com/motion/). To adjust animation speeds:
- Edit `transition` properties in component files
- Modify `animate` and `whileHover` properties for different effects

## Email Configuration Details

The contact form uses Resend for email delivery. The flow:

1. User submits the contact form
2. Frontend validates the data using Zod schema
3. Request is sent to `/api/send-email` endpoint
4. Backend validates again and sends emails:
   - **Confirmation email** to the user
   - **Notification email** to your configured email
5. Success/error message is displayed to the user

## Accessibility Features

- Semantic HTML elements (`<section>`, `<header>`, `<nav>`, `<main>`)
- ARIA labels for icon-only buttons and controls
- Color contrast ratios meet WCAG AA standards
- Form validation with clear error messages
- Keyboard navigation support
- Screen reader friendly text for decorative elements

## Performance Optimizations

- Image lazy loading via Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Client components only where necessary
- Optimized animations that don't block interactions
- Efficient viewport-based animations with `whileInView`

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and select your repository
4. Add environment variables in the project settings
5. Click "Deploy"

### Other Platforms

The site can be deployed to any platform supporting Next.js:

```bash
pnpm run build
pnpm start
```

## Troubleshooting

### Contact Form Not Sending

1. Verify `RESEND_API_KEY` is set correctly in environment variables
2. Check that the sender email matches a verified email in Resend
3. Ensure `PORTFOLIO_EMAIL` is set and accessible
4. Check browser console for error messages

### Images Not Loading

1. Verify images are in `/public/images/` directory
2. Check image file names match those in `components/data/projects.ts`
3. Ensure proper permissions on image files

### Styling Issues

1. Clear the `.next` cache: `rm -rf .next`
2. Rebuild the project: `pnpm run build`
3. Restart the development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React
- **Language**: TypeScript

## Future Enhancement Ideas

- Add blog section with markdown support
- Implement dark/light mode toggle
- Add project filtering by technology
- Create testimonials section
- Add newsletter signup
- Implement analytics
- Add search functionality
- Create admin dashboard for content management

## License

Feel free to use this template for your personal portfolio. Customize it as needed for your own use case.

## Support

For issues or questions:
1. Check the Vercel documentation: https://nextjs.org/docs
2. Review Framer Motion docs: https://www.framer.com/motion/
3. Check Tailwind CSS docs: https://tailwindcss.com/docs
4. Resend email docs: https://resend.com/docs

---

Happy building! Your portfolio is ready to showcase your work to the world.

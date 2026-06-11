# Customization Guide

This guide shows you how to customize every aspect of your portfolio to match your personal brand and content.

## Table of Contents

- [Personal Information](#personal-information)
- [Projects](#projects)
- [Skills](#skills)
- [Experience](#experience)
- [Colors and Design](#colors-and-design)
- [Fonts](#fonts)
- [Sections](#sections)
- [Contact Form](#contact-form)
- [Social Links](#social-links)

## Personal Information

### Update Site Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',  // Change this
  description: 'Your professional description here',  // Change this
  // ... rest of metadata
}
```

### Update Hero Section

Edit `components/hero.tsx`:

Find the hero content section and update:

```typescript
const Hero = () => {
  return (
    <section>
      {/* Update these texts */}
      <h1>Your Name</h1>
      <p>Your professional title or tagline</p>
      {/* ... */}
    </section>
  )
}
```

### Update About Section

Edit `components/about.tsx`:

```typescript
const aboutText = `
  Update this with your background story.
  Talk about your journey, what you're passionate about,
  and what drives your work.
`;

const timeline = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'YYYY - YYYY',
    description: 'What you did and achieved',
  },
  // Add more experience here
];
```

## Projects

### Add or Edit Projects

Edit `components/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'What this project does and technologies used',
    image: '/images/project-1.jpg',  // Image path
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://link-to-project.com',
    github: 'https://github.com/yourusername/project',  // Optional
  },
  // Add more projects...
];
```

### Add Project Images

1. Create image files (JPG, PNG, WebP recommended)
2. Place them in `public/images/`
3. Update image paths in `projects.ts`

**Image Tips**:
- Recommended size: 1200x800px
- Keep file size under 500KB
- Use descriptive names: `project-ecommerce.jpg`

### Remove Projects

Simply delete the object from the `projects` array in `components/data/projects.ts`.

## Skills

### Update Skills

Edit `components/data/skills.ts`:

```typescript
export const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs'],
  },
  // Add more categories...
];
```

### Customize Skill Display

Edit `components/about.tsx` to change how skills are displayed:

```typescript
{skillsData.map((skillGroup) => (
  <div key={skillGroup.category}>
    <h4>{skillGroup.category}</h4>
    {/* Customize display here */}
  </div>
))}
```

## Experience

### Update Work History

Edit `components/data/experience.ts`:

```typescript
export const experienceData = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'Month Year - Present',
    description: 'Key achievements and responsibilities',
    details: [
      'Achievement or responsibility',
      'Another achievement',
    ],
  },
  // Add more positions...
];
```

### Timeline Format

The timeline automatically appears in the About section. Edit `components/about.tsx` to customize styling.

## Colors and Design

### Change Color Scheme

All colors are defined in `app/globals.css`:

```css
.dark {
  --background: #0a0a0a;      /* Main background */
  --foreground: #f5f5f5;      /* Main text */
  --accent: #3b82f6;          /* Highlight color */
  --primary: #f5f5f5;         /* Primary elements */
  --secondary: #2a2a2a;       /* Secondary background */
  --muted: #404040;           /* Muted elements */
  /* ... more colors ... */
}
```

#### Quick Color Changes

**Change accent color** (blue to something else):
- Find `--accent: #3b82f6;`
- Replace with your color hex code

**Change background darkness**:
- Find `--background: #0a0a0a;`
- Use lighter hex for lighter background
- Update `--foreground` for text contrast

**Popular color combinations**:
- Professional Blue: `#3b82f6` (current)
- Tech Purple: `#a855f7`
- Startup Red: `#ef4444`
- Creative Orange: `#f97316`
- Clean Green: `#10b981`

### Switch to Light Mode

To use light mode by default instead of dark mode:

1. Edit `app/layout.tsx`:
```typescript
// Change from:
<html lang="en" className="dark">
// To:
<html lang="en">
```

2. Update `app/globals.css` to use light theme colors (the `:root` section instead of `.dark`)

## Fonts

### Change Typography

Edit `app/globals.css`:

```css
@theme inline {
  --font-sans: 'Your Font Name', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

### Import Custom Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const customFont = YourFont({ subsets: ['latin'] })
```

### Available Google Fonts

Popular choices for portfolios:
- **Clean**: Inter, Roboto, Poppins
- **Professional**: Lato, Open Sans, Montserrat
- **Creative**: Playfair Display, Quicksand, Space Mono

## Sections

### Show/Hide Sections

Edit `app/page.tsx` to control which sections appear:

```typescript
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      {/* Comment out or remove sections you don't want */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}
```

### Add New Sections

1. Create component file: `components/new-section.tsx`
2. Add to `app/page.tsx`:
```typescript
<YourNewSection />
```

### Reorder Sections

Change the order in `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />        {/* Moved before About */}
      <About />
      <Contact />
      <Footer />
    </>
  );
}
```

## Contact Form

### Set Up Formspree

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form
4. Copy the form endpoint ID
5. Add to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=your_id_here
```

### Update Contact Information

Edit `components/contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',  // Change this
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',  // Change this
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, State',  // Change this
    href: '#',
  },
];
```

### Customize Form Fields

Edit the form section in `components/contact.tsx` to add/remove fields:

```typescript
{/* Add new field */}
<motion.div variants={itemVariants}>
  <label>Company</label>
  <input {...register('company')} type="text" />
</motion.div>
```

Don't forget to update the schema at the top:

```typescript
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),  // Add new field
  message: z.string(),
});
```

## Social Links

### Update Footer Links

Edit `components/footer.tsx`:

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',  // Change this
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',  // Change this
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',  // Change this
    icon: Twitter,
  },
  // Add more social links
];
```

### Add Social Platforms

Find available icons in `lucide-react` and add new links:

```typescript
{
  name: 'CodePen',
  url: 'https://codepen.io/yourusername',
  icon: Code,
}
```

## Advanced Customization

### Modify Navigation

Edit `components/navigation.tsx` to change menu items, styling, or mobile behavior.

### Change Animations

Edit the Framer Motion variants in any component:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },  // Initial state
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },  // Change duration
  },
};
```

### Adjust Layout Spacing

Change padding and margins in components:

```typescript
// Change from:
<section className="py-20">
// To:
<section className="py-32">  {/* Larger spacing */}
```

### Modify Responsive Breakpoints

Edit Tailwind classes:

```typescript
// Current: full width on mobile, 3 columns on desktop
<div className="grid md:grid-cols-3">

// Change to 2 columns:
<div className="grid md:grid-cols-2">

// Add tablet breakpoint:
<div className="grid sm:grid-cols-2 md:grid-cols-3">
```

## Testing Your Changes

After making changes:

1. Save the file
2. Check local preview (should auto-update)
3. Test all sections work
4. Test responsive design (resize browser)
5. Test form submission
6. Test all links work

## Common Issues

**Colors not changing?**
- Check you're editing the `.dark` section in `globals.css`
- Verify hex color codes are valid
- Clear browser cache

**Images not showing?**
- Verify file is in `public/images/`
- Check path matches exactly (case-sensitive)
- Ensure image format is supported (JPG, PNG, WebP)

**Form not sending?**
- Verify Formspree ID is set in `.env.local`
- Check browser console for errors
- Test at [formspree.io](https://formspree.io)

**Changes not appearing?**
- Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check dev server is running
- Verify file was saved

## Need Help?

Check the main [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md) for more information.

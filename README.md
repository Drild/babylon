# Babylon Plants - Premium Landing Page

A luxurious, single-page landing page for Babylon Plants indoor plant delivery service. Built with React 19, Tailwind CSS 4, TypeScript, and Framer Motion animations.

## Features

✨ **Dark Botanical Theme** - Elegant dark background with premium green accents
🎨 **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
🎬 **Framer Motion Animations** - Smooth, sophisticated animations on all sections
📱 **Fully Responsive** - Mobile-first design optimized for all devices
🎯 **Performance Optimized** - Fast load times with Vite bundling

## Sections

1. **Navbar** - Fixed navigation with logo and action buttons
2. **Hero** - Large headline with CTAs for shopping and plant styling
3. **Featured Cards** - Stats showcase (10K+ homes, 98% success rate)
4. **Marquee** - Features and benefits section
5. **Services** - Plant solutions and styling packages
6. **Process** - 4-step workflow (Choose → Prepare → Deliver → Thrive)
7. **Stats** - Animated metrics (98%, 24h, 15K+, 500+)
8. **FAQ** - Accordion with common questions
9. **CTA** - Final call-to-action section
10. **Footer** - Navigation links and social media

## Design System

- **Colors:**
  - Background: `hsl(0 0% 4%)` (near black)
  - Foreground: `hsl(0 0% 98%)` (near white)
  - Primary: `hsl(145 30% 65%)` (premium green)
  - Muted Foreground: `hsl(0 0% 63%)`

- **Typography:**
  - Display: Space Grotesk (headings)
  - Body: Inter (content)

- **Effects:**
  - Glassmorphism with 40px blur
  - Backdrop saturation: 1.8
  - Smooth transitions and hover effects

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build:** Vite
- **Package Manager:** pnpm

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:5173`

## Project Structure

```
babylon-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedCards.tsx
│   │   ├── Marquee.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Stats.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  background: 'hsl(0 0% 4%)',
  foreground: 'hsl(0 0% 98%)',
  primary: 'hsl(145 30% 65%)',
}
```

### Content
Update component content directly in `/src/components/`

### Animations
Modify Framer Motion props in components for different animation effects

## Performance

- Optimized images and videos
- Code splitting with Vite
- CSS minification
- JavaScript tree-shaking
- Fast refresh during development

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Author

Babylon Plants Team

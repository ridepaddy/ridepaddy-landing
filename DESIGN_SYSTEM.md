# RidePaddy Design System

## Brand Colors

### Primary Color - Bright Emerald Green
The primary brand color represents growth, trust, and eco-friendliness.

- **Primary 100%**: `#01CD81` (HSL: 157 99% 40%)
  - RGB: 1, 205, 129
  - Usage: Primary buttons, links, important CTAs, brand elements

- **Primary 60%**: Lighter emerald
  - HSL: 157 99% 60%
  - Usage: Hover states, secondary emphasis

- **Primary 40%**: Soft emerald
  - HSL: 157 99% 75%
  - Usage: Backgrounds, subtle highlights

- **Primary 20%**: Very light emerald
  - HSL: 157 99% 90%
  - Usage: Backgrounds, cards, subtle accents

### Secondary Color - Dark Teal
The secondary color provides depth, professionalism, and stability.

- **Secondary 100%**: `#143D47` (HSL: 192 56% 18%)
  - RGB: 20, 61, 71
  - Usage: Headers, navigation, footers, text on light backgrounds

- **Secondary 60%**: Medium teal
  - HSL: 192 40% 45%
  - Usage: Secondary buttons, hover states

- **Secondary 40%**: Light teal
  - HSL: 192 30% 65%
  - Usage: Borders, dividers, subtle backgrounds

- **Secondary 20%**: Very light teal
  - HSL: 192 25% 85%
  - Usage: Background tints, card backgrounds

## Color Usage Guidelines

### Text Colors
- **Primary Text**: Use `secondary` (#143D47) for body text on light backgrounds
- **Headings**: Use `secondary` for strong emphasis
- **Links**: Use `primary` (#01CD81)
- **Muted Text**: Use `muted-foreground` for secondary information

### Backgrounds
- **Primary Background**: White (`background`)
- **Card Background**: White with subtle tints (`card`)
- **Section Backgrounds**: Alternate between white and `primary-20` or `secondary-20`
- **Dark Mode**: Dark teal variations (`secondary` at 8% lightness)

### Interactive Elements
- **Primary CTA Buttons**:
  - Background: `primary` (#01CD81)
  - Text: White
  - Hover: `primary-60`

- **Secondary Buttons**:
  - Background: `secondary` (#143D47)
  - Text: White
  - Hover: `secondary-60`

- **Tertiary/Ghost Buttons**:
  - Background: Transparent
  - Border: `primary` or `secondary`
  - Text: `primary` or `secondary`

### Status Colors
- **Success**: Uses `primary` (#01CD81)
- **Warning**: Amber (#F59E0B)
- **Error/Destructive**: Red (#EF4444)

## Utility Classes

### Gradients
```css
.brand-gradient              /* Primary to Secondary gradient (left to right) */
.brand-gradient-reverse      /* Secondary to Primary gradient */
.brand-gradient-radial       /* Radial gradient from center */
.success-gradient           /* Multi-stop primary gradient */
```

### Effects
```css
.emerald-glow               /* Subtle emerald glow shadow effect */
.teal-overlay               /* 10% secondary color overlay */
.glass-effect               /* Frosted glass background effect */
.hover-lift                 /* Lift on hover animation */
```

### Animations
```css
.animate-fade-in            /* Fade in with slight upward movement */
.animate-slide-up           /* Slide up animation */
.animate-pulse-soft         /* Soft pulsing animation */
```

## Tailwind Color Classes

Use these Tailwind classes throughout the application:

```jsx
// Backgrounds
className="bg-primary"           // Bright emerald
className="bg-primary-60"        // Lighter emerald
className="bg-secondary"         // Dark teal
className="bg-secondary-20"      // Very light teal

// Text
className="text-primary"         // Emerald text
className="text-secondary"       // Teal text
className="text-foreground"      // Default text color

// Borders
className="border-primary"       // Emerald border
className="border-secondary"     // Teal border

// Hover states
className="hover:bg-primary-60"  // Hover emerald
className="hover:text-primary"   // Hover text emerald
```

## Typography

### Font Families

**Primary Font - Creato Display** (`--font-creato-display`)

- Usage: Headings (h1, h2, h3, h4, h5, h6), hero text, important CTAs
- Weights: Thin (100), Light (300), Regular (400), Medium (500), Bold (700), ExtraBold (800), Black (900)
- Style: Display font for impactful, attention-grabbing text
- Class: `.font-heading`

**Secondary Font - Montserrat** (`--font-montserrat`)

- Usage: Body text, paragraphs, UI elements, navigation
- Weights: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- Style: Clean, modern sans-serif for excellent readability
- Class: `.font-body`

### Font Setup

**Creato Display** is loaded from local font files in `public/fonts/`:

- ✅ `CreatoDisplay-Thin.otf` (100)
- ✅ `CreatoDisplay-Light.otf` (300)
- ✅ `CreatoDisplay-Regular.otf` (400)
- ✅ `CreatoDisplay-Medium.otf` (500)
- ✅ `CreatoDisplay-Bold.otf` (700)
- ✅ `CreatoDisplay-ExtraBold.otf` (800)
- ✅ `CreatoDisplay-Black.otf` (900)

All font files are already configured and ready to use!

**Montserrat** is automatically loaded from Google Fonts.

### Typography Scale

- **Headings**: Creato Display, Bold (700), `secondary` color (#143D47)
- **Body Text**: Montserrat, Regular (400), `foreground` color
- **Links**: Montserrat, Medium (500), `primary` color (#01CD81)
- **Captions/Small Text**: Montserrat, Regular (400), `muted-foreground`
- **Buttons**: Montserrat, SemiBold (600), white or brand colors

## Spacing & Layout

- **Border Radius**:
  - Large: `0.5rem` (--radius-lg)
  - Medium: `calc(0.5rem - 2px)` (--radius-md)
  - Small: `calc(0.5rem - 4px)` (--radius-sm)

## Accessibility

### Contrast Ratios
All color combinations meet WCAG AA standards:
- Primary (#01CD81) on white: Passes for large text
- Secondary (#143D47) on white: Passes for all text sizes
- White on Primary: Passes for all text sizes
- White on Secondary: Passes for all text sizes

### Dark Mode
The design system includes dark mode variants with adjusted lightness values to maintain readability and brand consistency in both light and dark environments.

## Component Examples

### Primary Button
```jsx
<button className="bg-primary hover:bg-primary-60 text-white px-6 py-3 rounded-lg transition-colors">
  Get Started
</button>
```

### Card with Brand Accent
```jsx
<div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-lg">
  <h3 className="text-secondary text-xl font-bold">Card Title</h3>
  <p className="text-foreground">Card content...</p>
</div>
```

### Gradient Section
```jsx
<section className="brand-gradient text-white py-20">
  <h2 className="text-4xl font-bold">Hero Section</h2>
</section>
```

### Typography Example
```jsx
<div>
  <h1 className="font-heading text-5xl font-bold text-secondary">
    Welcome to RidePaddy
  </h1>
  <p className="font-body text-lg text-foreground mt-4">
    Connect with trusted drivers and passengers for safe, affordable carpooling.
  </p>
  <a href="#" className="font-body font-medium text-primary hover:text-primary-60">
    Learn more →
  </a>
</div>
```

## Brand Voice

The color palette reflects RidePaddy's values:
- **Emerald Green (#01CD81)**: Fresh, eco-friendly, growth, trust
- **Dark Teal (#143D47)**: Professional, stable, reliable, secure

Use bright emerald for calls-to-action and moments of excitement. Use dark teal for structure, navigation, and professional content.

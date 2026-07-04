---
name: MediSync
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#5e3bdb'
  on-secondary: '#ffffff'
  secondary-container: '#7858f5'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#390c00'
  on-tertiary-container: '#e25621'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#e6deff'
  secondary-fixed-dim: '#cabeff'
  on-secondary-fixed: '#1c0062'
  on-secondary-fixed-variant: '#481bc6'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for a high-end healthcare ecosystem that balances clinical authority with modern technical sophistication. The brand personality is "Expert Intelligence"—it feels like a premium medical instrument: precise, reliable, and calm under pressure.

The aesthetic direction is **Corporate Modern with Tactile Depth**. It avoids the sterile, flat "startup" look in favor of a layered, multi-dimensional interface. We employ subtle glassmorphism for navigation layers to maintain context and high-quality ambient shadows to establish a clear hierarchy of information. The result is a UI that feels expensive, intentional, and trustworthy for both practitioners and patients.

## Colors
The palette, "Night Sea," departs from generic medical blues by utilizing a deep, authoritative Navy as the primary anchor.

- **Primary (Night Sea):** Used for global navigation, primary actions, and heavy typography. It provides the "grounding" effect of a premium institution.
- **Secondary (Calming Lavender):** Used for interactive elements, selection states, and helpful tooltips. It softens the clinical feel of the Navy.
- **Tertiary (Safety Orange):** Reserved strictly for critical alerts, urgent notifications, and high-priority health data points. 
- **Neutral:** A range of cool grays that bridge the gap between the white surfaces and the deep navy elements.
- **Surfaces:** Pure white (#FFFFFF) is used for the base layer to ensure maximum legibility and a sense of cleanliness.

## Typography
The typography strategy uses a "Dual-Type" system to separate brand expression from functional utility.

- **Headlines (Outfit):** A geometric sans-serif with a tech-forward edge. Used for all headers to inject a premium, modern feel. High-level displays use tighter letter spacing for a sophisticated look.
- **Body & Labels (Public Sans):** A highly legible, neutral sans-serif designed for clarity. This ensures that complex medical data and instructional text are easily scannable and accessible.
- **Mobile Scaling:** Headline sizes are reduced by approximately 25% on mobile devices to prevent excessive wrapping while maintaining visual impact.

## Layout & Spacing
This design system utilizes a **12-column Fluid Grid** for desktop and a **4-column Fluid Grid** for mobile. The rhythm is based on a 4px baseline unit, ensuring all components align to a mathematical scale.

- **Desktop:** 12 columns, 24px gutters, and 48px outer margins. Elements should favor generous whitespace to create a "premium" airy feel.
- **Tablet:** 8 columns, 24px gutters, 32px margins.
- **Mobile:** 4 columns, 16px gutters, 16px margins. Stacked layouts are preferred over horizontal scrolling for medical data density.
- **Content Max-Width:** Layouts are capped at 1280px to prevent line lengths from becoming unreadable on ultra-wide monitors.

## Elevation & Depth
Elevation is used to communicate the hierarchy of "medical urgency" and "user focus."

- **The Base:** Backgrounds are solid white or extremely light gray (#F8FAFC).
- **Surface Layer (Cards):** Use a primary elevation with a soft, multi-layered shadow (0px 4px 20px rgba(10, 25, 47, 0.05)).
- **Overlay Layer (Modals/Popovers):** Higher elevation with a deeper shadow and a thin 1px border (#E2E8F0) to define edges.
- **Glassmorphism:** The Top App Bar and Sidebar utilize a backdrop-blur (12px) with 85% opacity. This creates a "frosted" effect that allows the user to maintain a sense of their position in the app while focusing on the active task.

## Shapes
The shape language is **Intentional and Sharp**. While many healthcare apps use overly rounded, "bubbly" corners, this design system uses a strict 8px (0.5rem) radius for standard UI elements.

- **Buttons & Inputs:** 8px radius.
- **Cards & Containers:** 12px (rounded-lg) to provide a slightly softer framing for large content blocks.
- **Icons:** Use a 2px stroke weight with slightly rounded caps to match the font weight of Public Sans.

## Components
Consistent component styling reinforces the "Expert Intelligence" brand narrative.

- **Buttons:** 
  - *Primary:* Night Sea background, white text. Bold and authoritative.
  - *Secondary:* Lavender stroke, Lavender text. For secondary actions.
  - *Alert:* Safety Orange background. Used only for destructive or high-risk medical actions.
- **Input Fields:** 1px solid border (#CBD5E1). On focus, the border shifts to Lavender with a 2px outer glow.
- **Cards:** White background, 8px radius, subtle shadow. Cards should never have "borders" unless they are selectable items, in which case a Lavender border appears on state-active.
- **Chips/Badges:** Small, 4px radius. Use low-saturation background tints (e.g., 10% opacity Lavender) with high-saturation text for status indicators.
- **Medical Data Lists:** Use "Zebra-striping" with extremely light gray (#F8FAFC) to assist in horizontal scanning across complex rows.
- **Glass App Bar:** Fixed to the top with a 1px bottom border (#E2E8F0) and 12px blur.
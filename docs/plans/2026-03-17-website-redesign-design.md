# Eczemate Website Redesign — Design Document

**Date:** 2026-03-17
**Goal:** Conversion-focused landing page redesign — drive App Store downloads
**Vibe:** Premium & polished (Apple Health meets Headspace)
**Approach:** Scroll-driven cinematic experience with 3D phone mockup centerpiece

---

## 1. Brand Context (from the App)

Eczemate is an iOS eczema tracking & management app. Understanding the app's soul is critical to the website's authenticity.

### Core Values
- **Emotional safety over completionism** — users are dealing with a chronic condition. No guilt, no shame, no "you missed a day" energy.
- **Empowering, not clinical** — "You're about to take control" not "Manage your condition"
- **Compassionate** — "Your skin isn't failing you", daily affirmations, warm greetings
- **Practical** — real tools (scanning, tracking, predicting) not vague wellness promises

### Target Audience
- **Parents (70%)** — managing children's eczema. Most motivated, most emotionally invested.
- **Adult self-managers (25%)** — managing their own eczema.
- **Newly diagnosed (5%)** — need education and guidance above all.

### Brand Voice
- Supportive, not clinical
- Action-oriented: "Spot patterns", "Know exactly what to avoid", "Wake up with a plan"
- Inclusive and gender-neutral
- Motivational but realistic: "Progress over perfection"
- Never condescending, never guilt-tripping

### What the App Does (4 Pillars)
1. **Predict** — AI-powered flare risk forecasting using weather + personal patterns
2. **Track** — Daily symptom logging, food/product tracking, body area mapping, 7-day trend insights
3. **Scan** — Camera-based product/food scanning with AI ingredient analysis and risk flagging
4. **Routine** — Morning/evening routine builder with gentle check-ins (no streak shame)

### Monetization
- Fully paywalled after onboarding. No free tier. Eczemate Pro subscription required.
- The website should NOT mention pricing — let the App Store handle that.

---

## 2. Design System

### Color Palette

**Primary — Sage Green (the brand)**
| Token | Hex | Usage |
|-------|-----|-------|
| sage-50 | #F0F5F3 | Lightest backgrounds |
| sage-100 | #DAE5E0 | Hover states, subtle fills |
| sage-200 | #C4D5CE | Borders, dividers |
| sage-300 | #AECABD | Secondary elements |
| sage-400 | #9DBDAF | Icons, muted text |
| sage-500 | #8FAEA3 | **Primary brand color** |
| sage-600 | #7B9C90 | Darker accents |
| sage-700 | #5E7A6F | Strong text on light bg |
| sage-800 | #445A51 | Dark surfaces |
| sage-900 | #2A3A34 | Very dark surfaces |
| sage-950 | #1F2A26 | Near-black |

**Accent — Premium Gold**
| Token | Hex | Usage |
|-------|-----|-------|
| gold | #C7A96B | CTAs, premium highlights |
| gold-light | #D4BC8A | Hover state for gold |

**Surfaces**
| Token | Hex | Usage |
|-------|-----|-------|
| surface | #F6F7F5 | Page background |
| card | #FFFFFF | Card backgrounds |
| border | #E5E7E5 | Subtle borders |

**Glow Effects (new)**
- Sage glow: `rgba(143, 174, 163, 0.15)` — for ambient light, border glow
- Gold glow: `rgba(199, 169, 107, 0.2)` — for CTA hover states

### Typography

**Display Font:** Fraunces (variable, Google Fonts)
- Hero headline: 72-96px, weight 700, line-height 1.0, letter-spacing -0.02em
- Section headlines: 48-64px, weight 600, line-height 1.1
- Feature titles: 32-40px, weight 600

**Body Font:** DM Sans (variable, Google Fonts)
- Body large: 20px, weight 400, line-height 1.6
- Body: 16-18px, weight 400, line-height 1.6
- Caption: 14px, weight 500, line-height 1.4
- CTA text: 16-18px, weight 600, letter-spacing 0.02em

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| section-gap | 120-160px | Between major sections |
| content-gap | 48-64px | Between content blocks within a section |
| element-gap | 24-32px | Between related elements |
| tight | 8-16px | Within components |

### Border Radius
- Cards: 24px
- Buttons: 16px
- Small elements: 12px
- Pills/badges: 9999px

### Grid
- 12-column grid
- Max content width: 1200px (contained)
- Sections: full-width (edge-to-edge backgrounds)
- Responsive: single column on mobile, multi-column on desktop

---

## 3. Tech Stack

### Core
| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.x | Framework, static export |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |

### Animation & Motion (new)
| Package | Purpose |
|---------|---------|
| **framer-motion** | Scroll-triggered animations, layout transitions, gesture support, orchestrated sequences. The animation backbone. |
| **lenis** | Smooth scroll. Creates the buttery, premium scroll feel. Wraps the native scroll to add momentum and smoothness. |

### 3D (new)
| Package | Purpose |
|---------|---------|
| **@react-three/fiber** | React renderer for Three.js. Renders the 3D phone mockup. |
| **@react-three/drei** | Helper components for R3F (RoundedBox, materials, textures, etc.) |
| **three** | The underlying 3D engine (peer dependency) |

### Deployment
- **Firebase Hosting** — static export to `out/`, aggressive caching
- Keep existing `firebase.json` config

---

## 4. Page Structure

The landing page is a single-page scroll experience with 6 sections:

### Section 1: Hero (100vh)

**Layout:**
- Full viewport height
- Animated gradient mesh background (sage tints that shift subtly)
- Content left-aligned (desktop) or centered (mobile)
- 3D phone mockup floating right (desktop) or below text (mobile)

**Content:**
- Badge: "Predict. Understand. Protect." (pill-shaped, sage border, subtle pulse)
- Headline (Fraunces, 72-96px): Emotionally resonant — about taking control, not about the condition
- Subtext (DM Sans, 20px): One sentence describing what the app does
- CTA: "Download on the App Store" button (gold accent, glow on hover)

**Animation:**
- Background gradient mesh fades in (0.5s ease)
- Headline animates word-by-word (stagger 0.05s per word, spring physics)
- Subtext fades up with 0.3s delay
- CTA scales in with spring (slight overshoot)
- 3D phone rises from below with rotation (1s, spring damping 0.8)
- Phone has subtle idle animation (gentle bob + slow rotate on Y-axis)

### Section 2: Feature Showcase (pinned scroll, ~4 viewport heights)

**This is the centerpiece of the page.**

**Mechanic:**
- The 3D phone pins to the center of the viewport (position: sticky)
- As user scrolls, the phone screen transitions between 4 app screenshots
- Feature descriptions animate in/out on the left or right side
- Background color shifts subtly per feature
- A minimal progress indicator shows which feature is active

**4 Features (in scroll order):**

1. **Predict Flare-Ups**
   - Phone shows: Flare Risk screen with weather data and risk score
   - Copy: AI-powered prediction using weather + personal patterns
   - Accent: warm tone

2. **Track Your Skin**
   - Phone shows: Log/Insights view with 7-day chart
   - Copy: Daily logging, correlations, "working for you" insights
   - Accent: sage tone

3. **Scan Products**
   - Phone shows: Camera scanning a product, ingredient risk flags
   - Copy: Instant ingredient analysis, know before you buy
   - Accent: neutral tone

4. **Build Your Routine**
   - Phone shows: Home screen with morning routine checklist
   - Copy: Time-blocked routines, gentle check-ins, no guilt
   - Accent: calm tone

**Animation per feature transition:**
- Phone screen texture crossfades (0.4s)
- Current feature text slides out (0.3s)
- New feature text slides in from opposite side (0.3s, staggered title → description)
- Background color shifts (0.6s ease)
- Phone does a subtle 5-degree rotation on each transition

### Section 3: Social Proof

**Content:**
- App Store star rating (animated fill)
- Review count
- 1-2 real App Store review quotes
- "Trusted by parents and adults managing eczema daily"

**Animation:**
- Stars fill in sequentially when section enters viewport
- Number counter animates up (e.g., "4.8" counting from 0)
- Review cards fade in with stagger (0.15s apart)

**Note:** If real reviews/numbers aren't available yet, this section can be simplified to a trust statement + the App Store rating badge. Do not fabricate numbers.

### Section 4: How It Works (3 steps)

**Content:**
1. Download from the App Store
2. Complete a 2-minute setup (personalized to your skin)
3. Start predicting, tracking, and scanning

**Layout:** Horizontal 3-step flow (desktop), vertical stack (mobile)
- Each step has an icon, number, title, and one-line description
- Connected by a subtle line/path between steps

**Animation:**
- Steps reveal sequentially on scroll (0.2s stagger)
- Connecting line draws itself between steps
- Icons scale in with spring

### Section 5: Final CTA (100vh)

**Content:**
- Bold headline (Fraunces, 64-80px): Emotionally resonant closer
- Subtext: One encouraging line
- Large App Store CTA button (gold, glow)
- 3D phone returns, showing the home screen, gentle idle animation

**Animation:**
- Text reveals character-by-character (fast, 0.02s per char)
- Phone fades in from below with rotation
- CTA button pulses with subtle gold glow
- Background: dark sage gradient for contrast

### Section 6: Footer

**Content:**
- Eczemate logo
- Links: Privacy, Terms
- Contact: email
- Copyright + "Made with care for people living with eczema."

**Design:** Minimal, clean, dark sage background. No animation needed.

---

## 5. 3D Phone Mockup Spec

**Construction (React Three Fiber):**
- Rounded rectangle geometry (iPhone proportions: ~75mm x 150mm, 12mm radius)
- Dark material (near-black with subtle metallic sheen)
- Screen area: slightly inset plane with app screenshot as texture
- Notch/dynamic island: subtle dark cutout at top of screen

**Textures (app screenshots):**
- 4 high-resolution screenshots from the app (one per feature)
- Rendered as texture maps on the screen plane
- Crossfade between textures using opacity/material transitions

**Lighting:**
- Soft ambient light
- One directional light (top-right) for subtle highlights on the phone edges
- Optional environment map for reflections

**Scroll behavior:**
- Hero: phone enters from below, rotates to face user, subtle idle bob
- Feature section: phone pins center, rotates slightly per feature transition
- CTA: phone returns with gentle spin

**Mobile fallback:**
- On mobile (< 768px), the 3D phone can be replaced with high-quality 2D mockup images to save performance
- Or render at lower resolution with reduced geometry

---

## 6. Animation Principles

### Physics
- All animations use **spring physics** (not linear/ease). This creates natural, premium motion.
- Default spring config: `{ damping: 25, stiffness: 120 }` (snappy but smooth)
- Gentle spring: `{ damping: 30, stiffness: 80 }` (for subtle movements)
- Bouncy spring: `{ damping: 15, stiffness: 150 }` (for CTAs, buttons)

### Scroll
- **Lenis** handles scroll smoothness globally
- **Framer Motion's `useScroll` + `useTransform`** maps scroll position to animation values
- Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}` (animate once, don't replay)
- The pinned feature section uses scroll progress (0-1) mapped to feature index

### Hierarchy
- **Primary animations** (phone, headlines): larger movement, longer duration
- **Secondary animations** (descriptions, badges): smaller movement, quicker
- **Tertiary animations** (borders, glows): subtle, continuous

### Performance
- Use `will-change: transform` on animated elements
- Prefer `transform` and `opacity` animations (GPU-accelerated)
- Lazy load the 3D scene (don't block initial paint)
- Use `<Suspense>` with a loading fallback for the Three.js canvas
- Consider `prefers-reduced-motion` media query — provide a static fallback

---

## 7. Responsive Strategy

| Breakpoint | Layout |
|------------|--------|
| < 640px (mobile) | Single column, stacked sections, 2D phone fallback optional |
| 640-1024px (tablet) | Hybrid layout, phone scales down |
| > 1024px (desktop) | Full experience, 3D phone, side-by-side feature text |

**Key mobile adaptations:**
- Hero: text centered, phone below (or behind with overlay)
- Feature showcase: phone above text (stacked), still pinned scroll
- Social proof: single column cards
- How it works: vertical step flow
- CTA: full-width button

---

## 8. Copy Guidelines

### Tone
- **Lead with empathy, close with empowerment**
- Never say "suffer from eczema" — say "living with eczema" or "managing eczema"
- Never guilt or create urgency ("Don't wait!", "You're falling behind!")
- Action verbs: predict, track, scan, understand, protect, build
- Short sentences. Conversational. No jargon.

### Headlines (examples — not final copy)
- Hero: "Stay ahead of your next flare" or "Know your skin. Protect your days."
- Features: "Four tools. One calm routine."
- CTA: "Your skin deserves better days ahead."

### Do NOT mention on the website:
- Pricing or subscription details (let the App Store handle it)
- "Free trial" or "free tier" (there is none)
- Skin analysis or photo-based diagnosis (deliberately removed from the app)
- Specific medical claims or guarantees

---

## 9. Assets Needed

| Asset | Format | Source |
|-------|--------|--------|
| App screenshots (4) | PNG, 1284x2778px | Capture from app (Predict, Track, Scan, Routine screens) |
| App Store badge | SVG | Apple's official badge |
| App icon | PNG/SVG | Existing `icon.png` |
| Favicon | SVG | Existing or regenerate |
| OG image | PNG, 1200x630px | New — hero composition for social sharing |

---

## 10. What We're NOT Touching

- `/privacy` page — stays as-is
- `/terms` page — stays as-is
- Firebase Hosting config — stays as-is
- Deployment pipeline — stays as-is

---

## 11. Success Criteria

- [ ] Page loads in < 3 seconds on 4G (Lighthouse performance > 90)
- [ ] 3D phone renders smoothly at 60fps on modern devices
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Mobile experience is complete and polished (not a degraded desktop)
- [ ] App Store link works, Google Play link removed or hidden until available
- [ ] Clear visual hierarchy guiding toward download CTA
- [ ] Brand consistency with the app's emotional design language

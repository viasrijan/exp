# FOOTBALL PULSE - Sports Website Specification

## 1. Project Overview

**Project Name:** Football Pulse  
**Project Type:** Sports News & Media Website  
**Core Functionality:** A dark-themed premium football news platform featuring latest matches, transfer news, player analysis, match previews, and editorial content authored by a professional sports journalist persona.  
**Target Users:** Football enthusiasts, casual fans, and dedicated followers of the sport seeking high-quality editorial content.

---

## 2. UI/UX Specification

### Layout Structure

**Reference Template:** Dispatch (webflow.io/templates/dispatch)  
**Adaptation:** Dark theme transformation with football/sports content

#### Page Sections

1. **Navigation Bar (Fixed)**
   - Logo (left-aligned)
   - Navigation links: Home, News, Matches, Transfers, Leagues, Tables, Podcast
   - Search icon + Subscribe button (right-aligned)
   - Height: 72px
   - Background: Semi-transparent with backdrop blur

2. **Hero Section**
   - Full-width featured article with large background image
   - Overlay gradient for text readability
   - Category tag, headline, excerpt, author info, read time
   - Height: 85vh

3. **Live Scores Bar**
   - Horizontal scrolling live match scores
   - Team logos, scores, match status, competition name
   - Sticky below navigation

4. **Featured Articles Grid**
   - 3-column layout (desktop), 2-column (tablet), 1-column (mobile)
   - Large featured card + secondary cards
   - Hover animations with scale effect

5. **Trending Topics Sidebar**
   - Numbered list of trending topics
   - Compact card design

6. **Match Center Section**
   - Today's matches with match cards
   - League filter tabs
   - Score display with team info

7. **Newsletter Section**
   - Email subscription form
   - Dark themed CTA

8. **Footer**
   - Multi-column layout
   - Social links, categories, legal links

### Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

### Visual Design

#### Color Palette (Dark Theme)

| Role | Color | Hex |
|------|-------|-----|
| Background Primary | Off-Black | `#0a0a0b` |
| Background Secondary | Charcoal | `#141416` |
| Background Card | Dark Gray | `#1c1c1f` |
| Background Elevated | Slate | `#252529` |
| Text Primary | Off-White | `#f5f5f7` |
| Text Secondary | Silver | `#a1a1a6` |
| Text Tertiary | Gray | `#6e6e73` |
| Accent Primary | Electric Green | `#00ff87` |
| Accent Secondary | Neon Cyan | `#00d4ff` |
| Accent Tertiary | Hot Pink | `#ff2d55` |
| Error | Red | `#ff453a` |
| Success | Green | `#30d158` |
| Border | Dark Border | `#2c2c2e` |

#### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Logo | Clash Display | Bold | 28px |
| H1 (Hero Headline) | Clash Display | Bold | 64px / 72px line-height |
| H2 (Section Title) | Clash Display | Semibold | 42px |
| H3 (Card Title) | Clash Display | Medium | 24px |
| H4 (Subtitle) | Satoshi | Semibold | 18px |
| Body | Satoshi | Regular | 16px / 26px line-height |
| Caption | Satoshi | Medium | 14px |
| Tag/Category | Satoshi | Bold | 12px |
| Button | Satoshi | Semibold | 14px |

#### Font Sources
- **Clash Display:** https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap
- **Satoshi:** https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap

#### Spacing System

- **Base unit:** 8px
- **Section padding:** 80px vertical (desktop), 48px (mobile)
- **Card padding:** 24px
- **Grid gap:** 24px (desktop), 16px (mobile)
- **Content max-width:** 1400px

#### Visual Effects

- **Card shadows:** `0 4px 24px rgba(0, 0, 0, 0.4)`
- **Glow effect:** `0 0 40px rgba(0, 255, 135, 0.15)`
- **Hover transitions:** 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Image overlay gradient:** linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)
- **Glass morphism:** backdrop-filter: blur(20px)
- **Border radius:** 12px (cards), 8px (buttons), 24px (tags)

### Components

#### Navigation
- States: Default (transparent bg), Scrolled (solid bg with blur)
- Mobile: Hamburger menu with slide-in drawer

#### Article Cards
- **Featured:** Full-width image, category tag, title, excerpt, author, date
- **Standard:** Image, category tag, title, date, read time
- **Compact:** Small thumbnail, title, date
- Hover: Image scale(1.05), title color change to accent

#### Match Score Cards
- Team logos, score, match time/result, competition badge
- Live indicator with pulse animation

#### Category Tags
- Colored background with category name
- Categories: Premier League (green), La Liga (yellow), Champions League (purple), Serie A (navy), Bundesliga (red), Ligue 1 (blue), Transfer (pink), Analysis (cyan)

#### Buttons
- **Primary:** Accent background, dark text
- **Secondary:** Transparent with border, light text
- **Ghost:** No background, accent text
- Hover: Scale(1.02), glow effect

#### Newsletter Form
- Email input with icon
- Subscribe button
- Success state animation

---

## 3. Functionality Specification

### Core Features

1. **Responsive Navigation**
   - Sticky header with scroll-based opacity change
   - Mobile hamburger menu
   - Search modal trigger

2. **Live Scores Display**
   - Horizontal scrolling score bar
   - Auto-refresh simulation (data hardcoded)
   - Match status indicators (FT, 45', 20:00)

3. **Article System**
   - Featured article hero
   - Grid layout with mixed card sizes
   - Category filtering
   - Article detail pages (simulated)

4. **Match Center**
   - Tab-based league filtering
   - Match cards with details
   - League standings (static)

5. **Newsletter Subscription**
   - Email validation
   - Form submission feedback
   - Success animation

6. **Smooth Animations**
   - Page load staggered reveals
   - Scroll-triggered animations
   - Hover micro-interactions
   - Smooth scrolling

### User Interactions

- Navigation links with hover underline animation
- Article cards with hover lift and image zoom
- Match score bar with horizontal scroll
- Newsletter form with validation feedback
- Back-to-top button with smooth scroll

### Data Handling

- Static JSON-like data structures in JavaScript
- Article metadata, match data, standings
- No backend required (static site)

### Edge Cases

- Long titles truncated with ellipsis
- Missing images fallback
- Mobile touch interactions
- Reduced motion preferences respected

---

## 4. Content Specification

### Author Persona

**Name:** Marcus Vane  
**Title:** Senior Football Editor & Lead Columnist  
**Bio:** A former sports journalist with 15+ years of experience covering global football. Marcus has reported from major tournaments across 4 continents and conducted exclusive interviews with world-class managers and players. His writing combines deep tactical insight with compelling narrative, making complex football analysis accessible to fans worldwide.

**Writing Style:**
- Analytical yet accessible
- Heavy on tactical breakdowns
- Historical context references
- Player personality insights
- Data-informed opinions

**Background:**
- Started at The Guardian's sports desk
- Covered 3 World Cups
- Former captain at university level
- Known for: "The Pressing Game" column

### Generated Content (8 Articles)

1. **Breaking News:** Major transfer announcement
2. **Match Review:** Recent high-profile match
3. **Tactical Analysis:** Team/player deep dive
4. **Transfer Rumor:** Window speculation
5. **Player Profile:** Rising star feature
6. **League Preview:** Upcoming fixture focus
7. **Opinion Piece:** Hot take on football topic
8. **Club Update:** Team analysis piece

### Images (AI Generated/Aesthetic)

Using free AI tools for:
- Featured article backgrounds
- Player profile images
- Stadium/tactical graphics
- Match action shots (stylized)

Preferred style:
- Cinematic lighting
- High contrast
- Dynamic angles
- Dark aesthetic
- Gradient overlays

Image sources consideration:
- Unsplash (free stock)
- AI generation prompts prepared
- Placeholder gradients as fallback

---

## 5. Acceptance Criteria

### Visual Checkpoints

- [ ] Dark theme consistently applied
- [ ] All specified colors used correctly
- [ ] Clash Display + Satoshi fonts loaded
- [ ] Navigation glass effect works
- [ ] Hero section at 85vh with gradient overlay
- [ ] Live scores bar sticky and horizontal scroll
- [ ] Article cards display in grid layout
- [ ] Match cards with team logos visible
- [ ] Hover animations smooth (0.3s)
- [ ] Newsletter section styled with dark theme
- [ ] Footer multi-column layout correct
- [ ] Responsive at all breakpoints

### Functionality Checkpoints

- [ ] Navigation scroll effect works
- [ ] Mobile menu toggles correctly
- [ ] Article card links functional
- [ ] Match tabs switch content
- [ ] Newsletter form validates email
- [ ] Scroll animations trigger
- [ ] Smooth scroll to sections

### Content Checkpoints

- [ ] Author bio section present
- [ ] 8 articles with full content
- [ ] Article metadata displayed
- [ ] Images with dark gradient overlays

---

## 6. Technical Implementation

### File Structure

```
/workspace/project/
├── index.html          # Main page
├── styles.css           # All styles
├── script.js           # Interactions
├── SPEC.md             # This specification
└── assets/             # Images folder
```

### External Resources

- Fontshare CDN for fonts
- Unsplash for stock images (as placeholders)
- No JS framework required
- Pure vanilla HTML/CSS/JS

### Performance Targets

- Lighthouse score: 90+
- First contentful paint: < 1.5s
- No render-blocking resources
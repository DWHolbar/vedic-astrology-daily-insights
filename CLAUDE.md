@AGENTS.md

# Vedic Astrology Daily Insights — Project Guidelines

## Content Rules (STRICT)

### No Predictions
- **Never** use predictive language: "will", "shall", "expect to", "is indicated", "are within reach", "you'll receive", "this will bring"
- **Never** frame insights as future forecasts. Everything must be **present-tense observations** about current planetary energies.
- Use phrasing like: "is highlighted", "carries energy", "is in focus", "is the theme", "is prominent"
- Wrong: "You will receive a promotion this week"
- Right: "Career visibility is prominent under this transit"

### No Advisory Language
- **Never** use imperative/directive phrasing: "Do this", "Avoid that", "Make sure", "You should", "Try to", "Seek", "Push forward"
- Insights describe what is happening astronomically and its traditional associations — they do not tell users what to do.
- Wrong: "Take bold action on financial decisions"
- Right: "Bold financial energy is present during this transit"

### No Recommendations
- **No** gemstone, crystal, or stone recommendations (no "wear ruby", "try emerald")
- **No** colour recommendations (no "wear red today", "surround yourself with blue")
- **No** remedial measures, rituals, or prescriptive spiritual practices
- **No** dietary directives or specific health instructions

### Tone
- Observational and descriptive, not prescriptive
- Respectful of the tradition without claiming certainty
- Informational — the site describes planetary alignments and their traditional associations
- Sensitive and non-alarming — never use fear-based language for difficult transits (retrogrades, eclipses, malefic aspects)

### Disclaimer
Every page is served within a layout that includes the footer disclaimer:
- "The content on this site is purely informational, generated from real astronomical transit data. It is not intended as advice of any kind."
- "For accurate and personalised readings, please consult a professional astrologer."

## Brand & Design Guidelines

### Font
- **System font stack only**: `system-ui, -apple-system, sans-serif` (defined in `globals.css`)
- No additional Google fonts or custom fonts. The system font must be consistent across every page and component.

### Colour Palette (defined in `globals.css` @theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#0a1628` | Header, footer background |
| `navy-900` | `#0f1d35` | Hero section gradient |
| `navy-800` | `#172a4a` | Hero gradient, dark accents |
| `navy-700` | `#1e3a5f` | Secondary dark accents |
| `navy-600` | `#2563eb` | Primary blue (buttons, links, accents) |
| `navy-500` | `#3b82f6` | Hover states, "Direct" planet status |
| `navy-400` | `#60a5fa` | Light accents |
| `navy-300` | `#93bbfd` | Subtitle text on dark backgrounds |
| `navy-200` | `#bfdbfe` | Border accents |
| `navy-100` | `#dbeafe` | Card borders |
| `navy-50` | `#eff6ff` | Light card backgrounds |
| `gold-500` | `#f59e0b` | Gold accent (zodiac highlights, CTA) |
| `gold-400` | `#fbbf24` | Gold hover |
| `gold-300` | `#fcd34d` | Gold light |
| `amber-*` | Tailwind amber | Retrograde badges only |
| `slate-*` | Tailwind slate | Body text, secondary text, subtle borders |

- **No greens.** Do not use emerald, green, or teal colours anywhere.
- **No ad-hoc colours.** All colours must come from the navy/gold/amber/slate palette above.
- Error states use `text-red-600 bg-red-50` (calculator validation only).

### Layout Standards
- **Max widths**: `max-w-7xl` for home page, `max-w-5xl` for content pages (calendar, transits, daily insights), `max-w-4xl` for narrow pages (about, calculator)
- **Padding**: All sections use `px-4 sm:px-6 lg:px-8`
- **Hero sections**: Every page has a `bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800` hero with `h1` and subtitle
- **Cards**: White background, `rounded-xl border border-navy-100`

### Typography Hierarchy
| Element | Classes |
|---------|---------|
| h1 (page title) | `text-3xl sm:text-4xl font-bold` (home hero: `text-4xl sm:text-5xl`) |
| h2 (section heading) | `text-2xl font-bold` |
| h3 (card heading) | `font-semibold text-lg` |
| Body text | `text-sm leading-relaxed text-slate-600` |
| Subtle text | `text-xs text-slate-400` or `text-slate-500` |

## Technical Notes

### Astronomy
- All positions use **sidereal zodiac** with **Lahiri ayanamsa**
- Calculations via `astronomy-engine` npm package (client-side)
- Rahu/Ketu computed from mean lunar node formula
- Retrograde detection via velocity (longitude change over time)

### Insight Generation
- Template-based, deterministic: same sign + same date = same insight
- Templates in `src/data/insightTemplates.ts` — all edits must follow content rules above
- House system: House 1 = Moon sign, House 2 = next sign, etc.

### Deployment
- Vercel-compatible Next.js app (App Router)
- All computation is client-side (no server dependencies)

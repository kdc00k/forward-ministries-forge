
## Forward Church Ministries — Build Plan

A premium, multi-page marketing site for Forward Church Ministries (Mobile, AL) matching your spec: Sanctuary-style cinematic hero + Motivation-style content structure, on the Forward brand.

### Before I build
Please paste in your next message (or I'll use clean placeholders you can edit later):
- **Logo file** (SVG preferred) — drop into chat
- **Hero video URL** (MP4/WebM, muted-loop-friendly)
- **Real details**: address, phone, email, pastor name + short bio, service times, social URLs, YouTube channel / latest sermon embed, giving URL

I'll wire them in directly. Anything missing on build day gets a tasteful placeholder.

### Design system (locked tokens)
- Colors: Primary `#0A5EA8`, Accent `#B9E11E`, Dark Navy `#083A67`, White `#FFFFFF`, Light Gray `#F5F7FA`, Charcoal `#2D2D2D`
- Type: Poppins ExtraBold (display) + Inter (body), loaded via `@fontsource`
- Radius: lg/2xl rounded; soft shadows; glassmorphism only on nav
- Motion: Framer Motion — fade-up, slide, hover-lift, count-up, parallax, scroll reveal

All tokens added to `src/styles.css` via `@theme` (no hardcoded colors in components).

### Routes (TanStack Start, file-based)
Each route gets unique `head()` meta (title, description, og):
- `/` Home (12 sections below)
- `/about` Story, beliefs, leadership
- `/im-new` First-time visitor guide
- `/ministries` Grid + ministry detail anchors
- `/events` Event list with cards
- `/watch` Sermon archive + latest
- `/give` Giving page
- `/contact` Form + map + info
- `/plan-a-visit` Visit details + form

### Homepage sections (per your reference)
1. **Hero** — full-viewport autoplay/muted/loop video, blue gradient overlay, transparent nav, FORWARD STARTS HERE. headline (white + accent green split), subheadline, Plan Your Visit + Watch Live buttons, animated scroll indicator
2. **Welcome** — two-column, pastor intro + photo
3. **Service Times** — icon cards (Sunday Worship, Bible Study, Prayer Night, Youth)
4. **Why Visit?** — 4 hover-lift cards
5. **Latest Sermon** — large featured video + carousel of past sermons
6. **Ministries** — responsive grid (Kids, Youth, Young Adults, Men, Women, Outreach, Missions, Worship, Media, Small Groups)
7. **Upcoming Events** — modern event cards with date/title/register
8. **Community Impact** — count-up animated stats
9. **Testimonials** — auto-rotating carousel
10. **Plan Your Visit** — address, parking, kids check-in, FAQ accordion, embedded Google Map (no API needed for iframe embed)
11. **Online Giving** — generosity section + Give Today CTA
12. **News & Updates** + Newsletter signup
13. **Footer** — dark navy, logo, links, socials, contact, newsletter

### Navigation
Sticky transparent → solid-white-on-scroll with smooth transition, blue text post-scroll, white text on hero. Mobile drawer (shadcn Sheet). Items: Home, About, I'm New, Ministries, Events, Watch, Give, Contact + Plan Your Visit CTA.

### Forms (visual-only v1)
Plan a Visit, Prayer Request, Contact, Newsletter, Volunteer, Event RSVP — render with shadcn Form + zod validation, show success toast. No backend yet; easy to wire to Lovable Cloud later.

### Imagery
Generate ~8–10 authentic-feeling church imagery via image gen (worship, families, baptism, fellowship, kids, outreach) — warm-lit, diverse, Mobile-feeling. Stored as CDN assets.

### Technical
- TanStack Start + React 19 + TS + Tailwind v4 + shadcn/ui + Framer Motion + Lucide
- Lazy loading, responsive images, semantic HTML, alt text everywhere
- Per-route SEO meta + JSON-LD `Church` schema on Home
- WCAG AA contrast via tokens
- Single `<main>` per route inside `__root.tsx`

### Out of scope for v1
- Live database / form persistence (mocked)
- Live stream embed (placeholder card linking out)
- Auth / member portal
- Sermon search/filter beyond simple carousel

Reply with the assets/details (or "go ahead with placeholders") and I'll build.

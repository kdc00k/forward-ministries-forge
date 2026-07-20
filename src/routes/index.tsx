import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  ArrowDown,
  Heart,
  Music,
  BookOpen,
  Baby,
  
  Clock,
  MapPin,
  Users,
  Sparkles,
  HandHeart,
  Globe,
  Mic2,
  Camera,
  Coffee,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";


import heroImage from "@/assets/hero-worship.jpg";
import heroVideo1 from "@/assets/hero-user-1.mp4.asset.json";
import heroVideo2 from "@/assets/hero-user-2.mp4.asset.json";
import heroVideo3 from "@/assets/hero-user-3.mp4.asset.json";
import heroVideo4 from "@/assets/hero-user-4.mp4.asset.json";
import bishopWelcome from "@/assets/bishop-welcome.jpg.asset.json";
import community from "@/assets/community-fellowship.jpg";
import kids from "@/assets/ministry-kids.jpg";
import youth from "@/assets/ministry-youth.jpg";
import baptism from "@/assets/ministry-baptism.jpg";
import outreach from "@/assets/ministry-outreach.jpg";
import sermonStage from "@/assets/sermon-stage.jpg";
import exterior from "@/assets/church-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forward Church Ministries — Mobile, AL" },
      {
        name: "description",
        content:
          "FORWARD STARTS HERE. A modern, Spirit-filled church in Mobile, Alabama helping people know Jesus, grow in faith, and impact their community.",
      },
      { property: "og:title", content: "Forward Church Ministries — Mobile, AL" },
      { property: "og:description", content: "FORWARD STARTS HERE. Join us in Mobile, Alabama." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          name: "Forward Church Ministries",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1234 Forward Way",
            addressLocality: "Mobile",
            addressRegion: "AL",
            postalCode: "36608",
            addressCountry: "US",
          },
          telephone: "+1-251-555-0100",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServiceTimes />
      <WhyVisit />
      <MinistriesGrid />
      <PlanYourVisit />
      <Giving />
      <NewsUpdates />
    </>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  const videos = [heroVideo1.url, heroVideo2.url, heroVideo3.url, heroVideo4.url];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Poster fallback — visible while videos load */}
      <img
        src={heroImage}
        alt="Forward Church worship service"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        loading="eager"
        width={1920}
        height={1280}
      />

      {/* Cycling video backgrounds with crossfade */}
      {videos.map((src, i) => (
        <video
          key={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroImage}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeIndex === i ? 1 : 0 }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      <div className="absolute inset-0 hero-overlay" />

      <div className="container-page relative z-10 flex h-full flex-col justify-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display font-extrabold tracking-tight !text-white text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] max-w-5xl"
        >
          FORWARD<br />
          <span style={{ color: "var(--brand-accent)" }}>STARTS HERE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-6 max-w-xl text-white/85 text-lg leading-relaxed"
        >
          Helping people know Jesus, grow in faith, build authentic relationships, and make a lasting impact throughout Mobile, Alabama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="h-14 px-7 rounded-full bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold text-base shadow-[0_10px_40px_-10px_rgba(185,225,30,0.6)]">
            <Link to="/plan-a-visit">Plan Your Visit <ArrowRight className="ml-1 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-7 rounded-full border-white/40 bg-white/5 backdrop-blur text-white hover:bg-white/15 hover:text-white font-bold text-base">
            <Link to="/watch"><Play className="mr-2 h-5 w-5 fill-current" /> Watch Live</Link>
          </Button>
        </motion.div>
      </div>

      <a
        href="#welcome"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 h-12 w-12 rounded-full border border-white/40 text-white grid place-items-center backdrop-blur animate-float-down hover:bg-white/10"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}

/* ----------------------------- WELCOME ----------------------------- */

function Welcome() {
  return (
    <section id="welcome" className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src={bishopWelcome.url} alt="Bishop Lavorgie Burage" className="h-full w-full object-cover" loading="lazy" width={1280} height={1280} />
          </div>
          <div className="absolute -bottom-6 -right-4 lg:-right-10 max-w-[260px] rounded-2xl bg-[color:var(--brand-accent)] p-5 shadow-xl">
            <p className="font-display font-extrabold text-[color:var(--brand-dark)] text-lg leading-tight">
              "You're welcome here — exactly as you are."
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-dark)]/80">Bishop Lavorgie Burage</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Welcome
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] tracking-tight">
              A church family <br /> moving <span className="text-gradient-brand">forward</span> together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              Whether you're exploring faith for the first time or you've walked with Jesus for decades, Forward Church is a place to belong. We gather every Sunday in Mobile to worship, learn, and care for one another — and to step boldly into what God is doing next.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 bg-[color:var(--brand)] hover:bg-[color:var(--brand-dark)] font-bold">
                <Link to="/about">Our Story <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 border-[color:var(--brand)]/30 text-[color:var(--brand)] hover:bg-[color:var(--brand-soft)] font-bold">
                <Link to="/im-new">I'm New Here</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SERVICE TIMES --------------------------- */

const services = [
  { icon: Heart, title: "Sunday Worship", time: "Sundays · 11:00 AM" },
  { icon: BookOpen, title: "Bible Study", time: "Wednesdays · 6:00 PM" },
  { icon: Sparkles, title: "Zoom Prayer Call", time: "Mondays · 7:00 PM" },
  { icon: Music, title: "Sunday School", time: "Sundays · 10:00 AM" },
];

function ServiceTimes() {
  return (
    <section className="section bg-[color:var(--brand-soft)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gather With Us"
          title="Service Times"
          description="Multiple ways to connect throughout the week — bring a friend or come on your own. We'd love to see you."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Card className="group h-full border-0 bg-white rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cardHover)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-[color:var(--brand)] text-white group-hover:bg-[color:var(--brand-accent)] group-hover:text-[color:var(--brand-dark)] transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)] flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {s.time}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY VISIT ----------------------------- */

const whyVisit = [
  { icon: Users, title: "Friendly Community", body: "Real people, real conversations, real friendships. Come as you are." },
  { icon: Music, title: "Powerful Worship", body: "Spirit-led worship that lifts your eyes and renews your heart." },
  { icon: BookOpen, title: "Biblical Teaching", body: "Clear, practical messages rooted in Scripture — for real life today." },
  { icon: Baby, title: "Kids & Family", body: "Safe, fun, faith-filled environments for every child and student." },
];

function WhyVisit() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="What to Expect" title="Why visit Forward?" description="Four reasons families across Mobile call this home." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyVisit.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-[color:var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)]/30 hover:shadow-[var(--shadow-soft)]">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)] group-hover:bg-[color:var(--brand)] group-hover:text-white transition-colors">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold">{c.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ----------------------------- MINISTRIES ----------------------------- */

const ministries = [
  { icon: Baby, title: "Forward Kids", body: "Sunday environments built for kids birth–5th grade." },
  { icon: Mic2, title: "Forward Youth", body: "Middle & high schoolers growing in faith and friendship." },
  { icon: Coffee, title: "Young Adults", body: "Community for 18–29s navigating life with purpose." },
  { icon: HandHeart, title: "Men of Forward", body: "Brotherhood, breakfast, and biblical formation." },
  { icon: Sparkles, title: "Women of Forward", body: "Studies, retreats, and real friendships." },
  { icon: Globe, title: "Outreach", body: "Loving Mobile through tangible, neighbor-first service." },
  { icon: Heart, title: "Missions", body: "Supporting partners in the U.S. and around the globe." },
  { icon: Music, title: "Worship Ministry", body: "Singers, musicians, and creatives leading our gatherings." },
  { icon: Camera, title: "Media Team", body: "Video, audio, and design that carries the message further." },
  { icon: Users, title: "Small Groups", body: "Mid-week circles where faith becomes family." },
];

const ministryImages = [kids, youth, baptism, outreach];

function MinistriesGrid() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ministries"
          title="There's a place for everyone."
          description="From toddlers to grandparents, find a ministry built for your season of life."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((m, i) => {
            const hasImage = i < ministryImages.length;
            return (
              <Reveal key={m.title} delay={(i % 4) * 0.05}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-cardHover)]">
                  {hasImage ? (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={ministryImages[i]}
                        alt={m.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        width={1280}
                        height={960}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-[color:var(--brand-soft)] to-white">
                      <m.icon className="h-12 w-12 text-[color:var(--brand)]/40" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                        <m.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-display font-extrabold">{m.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed flex-1">{m.body}</p>
                    <Link
                      to="/ministries"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand)] hover:text-[color:var(--brand-dark)]"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* --------------------------- PLAN YOUR VISIT --------------------------- */

const faqs = [
  { q: "What should I wear?", a: "Come as you are. Most folks wear casual — jeans, dresses, even shorts in summer. We just want you here." },
  { q: "Where do I park?", a: "Free parking is available on-site, with guest parking marked near the main entrance. Greeters are ready to help." },
  { q: "What about my kids?", a: "Forward Kids is staffed by background-checked volunteers with secure check-in and age-appropriate environments for ages 0–5th grade." },
  { q: "How long is the service?", a: "Sunday services run about 75 minutes — worship, a clear message from the Bible, and time to respond." },
];

function PlanYourVisit() {
  return (
    <section className="section bg-[color:var(--brand-soft)]">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Plan Your Visit
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
            We can't wait to <span className="text-gradient-brand">meet you.</span>
          </h2>
          <p className="mt-5 text-lg text-[color:var(--muted-foreground)] leading-relaxed">
            First time? We've made it simple. Let us know you're coming and we'll have a coffee, a parking spot, and a friend waiting at the door.
          </p>

          <ul className="mt-8 space-y-4 text-[15px]">
            <li className="flex gap-3"><MapPin className="h-5 w-5 mt-0.5 text-[color:var(--brand)] shrink-0" /><span><strong>8930 CR-36</strong><br />Mobile, AL 36695</span></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 mt-0.5 text-[color:var(--brand)] shrink-0" /><span><strong>Sundays</strong> · 11:00 AM</span></li>
            <li className="flex gap-3"><Users className="h-5 w-5 mt-0.5 text-[color:var(--brand)] shrink-0" /><span>Free parking · greeters at every door&nbsp;</span></li>
          </ul>

          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full h-13 px-7 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
              <Link to="/plan-a-visit">Plan My Visit <ArrowRight className="ml-1 h-5 w-5" /></Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)] bg-white">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={exterior} alt="Forward Church building exterior" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ GIVING ------------------------------ */

function Giving() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--brand-dark)] text-white p-8 md:p-16 lg:p-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(700px 360px at 100% 0%, rgba(185,225,30,0.2), transparent 60%), radial-gradient(700px 360px at 0% 100%, rgba(10,94,168,0.55), transparent 60%)",
            }}
          />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Generosity
              </span>
              <h2 className="mt-4 !text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] tracking-tight">
                Move Mobile <span style={{ color: "var(--brand-accent)" }}>forward.</span>
              </h2>
              <p className="mt-5 max-w-xl text-white/75 text-lg leading-relaxed">
                Every gift fuels worship, discipleship, kids ministry, and outreach right here in our city — and missions around the world. Thank you for partnering with what God is doing through Forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full h-13 px-7 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
                  <Link to="/give">Give Today <ArrowRight className="ml-1 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-7 bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white font-bold">
                  <Link to="/give">Set Up Recurring</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Secure", body: "Bank-grade encryption" },
                { label: "Recurring", body: "Weekly or monthly" },
                { label: "Mission", body: "Local & global impact" },
                { label: "Transparent", body: "Annual reporting" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-accent)]">{b.label}</p>
                  <p className="mt-1 text-white/85 text-sm">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- NEWS & UPDATES ---------------------------- */

const posts = [
  { tag: "Announcement", title: "Forward Conference 2026 is here", excerpt: "Three nights of worship, teaching, and prayer. Tickets open Monday.", img: sermonStage },
  { tag: "Story", title: "Hope on the East Side", excerpt: "How one small group started a back-to-school giveaway that served 400 families.", img: community },
  { tag: "Blog", title: "5 ways to grow in your prayer life", excerpt: "Bishop shares practical rhythms anyone can begin this week.", img: bishopWelcome.url },
];

function NewsUpdates() {
  return (
    <section className="section bg-[color:var(--brand-soft)]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> News & Updates
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">
              Latest from Forward
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start rounded-full h-12 px-6 border-[color:var(--brand)]/30 text-[color:var(--brand)] hover:bg-white font-bold">
            <Link to="/about">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-cardHover)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">{p.tag}</p>
                  <h3 className="mt-2 text-lg font-display font-extrabold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{p.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand)] hover:text-[color:var(--brand-dark)]">
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl bg-white border border-[color:var(--border)] p-8 md:p-10 grid md:grid-cols-[1.3fr_1fr] gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight">
                Get the Forward newsletter
              </h3>
              <p className="mt-2 text-[color:var(--muted-foreground)]">Weekly encouragement, sermon recaps, and what's happening at Forward.</p>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        import("sonner").then(({ toast }) => toast.success("You're subscribed!"));
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <input
        type="email"
        required
        placeholder="you@email.com"
        className="flex-1 h-12 rounded-full border border-[color:var(--border)] bg-white px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]/40"
      />
      <Button type="submit" className="h-12 rounded-full bg-[color:var(--brand)] hover:bg-[color:var(--brand-dark)] font-bold px-6">
        Subscribe
      </Button>
    </form>
  );
}

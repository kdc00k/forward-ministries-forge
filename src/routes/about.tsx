import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Cross, Flame, HeartHandshake } from "lucide-react";
import bishopPhoto from "@/assets/pastor-david-carter.jpg.asset.json";
import karliciaPhoto from "@/assets/leader-karlicia.jpg";
import shantonPhoto from "@/assets/leader-shanton.jpg";
import jermeciaPhoto from "@/assets/leader-jermecia.jpg";
import community from "@/assets/community-fellowship.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Forward Church Ministries" },
      { name: "description", content: "Our story, beliefs, and leadership at Forward Church in Mobile, Alabama." },
      { property: "og:title", content: "About Forward Church" },
      { property: "og:description", content: "Meet the people and mission behind Forward Church." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>A church moving <span style={{ color: "var(--brand-accent)" }}>forward{"\u00a0"}in Mobile.</span></>}
        description="Forward Church Ministries began with a simple conviction: that God is still doing new things, and His people are invited to move forward with Him."
      />

      <section className="section bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={bishopPhoto.url} alt="Bishop Lavorgie Burage" className="h-full w-full object-cover" loading="lazy" width={1280} height={1280} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Leadership
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
                Meet Bishop Lavorgie Burage
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                Bishop Bio
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                On any given Sunday you'll find Bishop greeting first-time guests at the door, teaching the Bible in a way that's both honest and hopeful, and praying with people long after the service ends.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Leadership Team
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
              Meet the team.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="text-center">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] mx-auto max-w-sm">
                  <img src={karliciaPhoto} alt="First Lady Karlicia Franklin-Burage" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold">Karlicia Franklin-Burage</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[color:var(--brand)]">First Lady</p>
                <p className="mt-3 text-[color:var(--muted-foreground)] text-sm leading-relaxed max-w-xs mx-auto">
                  A devoted servant-leader who walks alongside Bishop in vision and ministry, caring deeply for the women and families of Forward Church.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-center">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] mx-auto max-w-sm">
                  <img src={shantonPhoto} alt="Youth Pastor Shanton Collins" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold">Shanton Collins</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[color:var(--brand)]">Youth Pastor</p>
                <p className="mt-3 text-[color:var(--muted-foreground)] text-sm leading-relaxed max-w-xs mx-auto">
                  Passionate about reaching the next generation with the gospel and creating a space where young people belong, believe, and become leaders.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="text-center">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] mx-auto max-w-sm">
                  <img src={jermeciaPhoto} alt="Worship Leader Jermecia Frazier" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold">Jermecia Frazier</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[color:var(--brand)]">Worship Leader</p>
                <p className="mt-3 text-[color:var(--muted-foreground)] text-sm leading-relaxed max-w-xs mx-auto">
                  Leads the congregation into authentic worship with a heart for praise that invites every person to encounter the presence of God.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      <section className="section bg-white">
        <div className="container-page rounded-[2rem] overflow-hidden relative">
          <div className="absolute inset-0">
            <img src={community} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[color:var(--brand-dark)]/70" />
          </div>
          <div className="relative p-10 md:p-16 lg:p-20 text-white text-center">
            <h3 className="!text-white text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
              Take your next step with us.
            </h3>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Plan a Sunday visit, join a small group, or reach out — we'd love to walk with you.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full h-12 px-6 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
                <Link to="/plan-a-visit">Plan Your Visit <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white font-bold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

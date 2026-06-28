import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Cross, Flame, HeartHandshake } from "lucide-react";
import pastorDavid from "@/assets/pastor-david-carter.jpg.asset.json";
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

const beliefs = [
  { icon: Cross, title: "Jesus is the Way", body: "We believe in the gospel of Jesus Christ — His life, death, resurrection, and return." },
  { icon: Flame, title: "The Spirit Empowers", body: "We rely on the Holy Spirit to lead, teach, and equip the church for every good work." },
  { icon: Compass, title: "Scripture Guides Us", body: "The Bible is our authority for life, doctrine, and direction as a community." },
  { icon: HeartHandshake, title: "People Matter Most", body: "Every person matters to God — so every person matters to us." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>A church on the move <span style={{ color: "var(--brand-accent)" }}>in Mobile.</span></>}
        description="Forward Church Ministries began with a simple conviction: that God is still doing new things, and His people are invited to move forward with Him."
      />

      <section className="section bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={pastorDavid.url} alt="Pastor David Carter" className="h-full w-full object-cover" loading="lazy" width={1280} height={1280} />
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
                Meet Pastor David Carter
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                David has called Mobile home for nearly two decades. He and his wife Rachel planted Forward with a small team and a big vision — to build a church that helps people take their next step with Jesus, no matter where they're starting from.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                On any given Sunday you'll find David greeting first-time guests at the door, teaching the Bible in a way that's both honest and hopeful, and praying with people long after the service ends.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--brand-soft)]">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> What We Believe
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
              Four convictions that shape everything.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[var(--shadow-card)]">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-[color:var(--brand)] text-white">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-display font-extrabold">{b.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
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

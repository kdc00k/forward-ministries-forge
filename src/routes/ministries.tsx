import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Baby, Mic2, Coffee, HandHeart, Sparkles, Globe, Heart, Music, Camera, Users } from "lucide-react";

import kids from "@/assets/ministry-kids.jpg";
import youth from "@/assets/ministry-youth.jpg";
import outreach from "@/assets/ministry-outreach.jpg";
import baptism from "@/assets/ministry-baptism.jpg";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — Forward Church Ministries" },
      { name: "description", content: "Explore ministries for kids, youth, young adults, men, women, outreach, and more at Forward Church." },
      { property: "og:title", content: "Ministries at Forward" },
      { property: "og:description", content: "Find your place at Forward Church in Mobile, AL." },
      { property: "og:url", content: "/ministries" },
    ],
    links: [{ rel: "canonical", href: "/ministries" }],
  }),
  component: MinistriesPage,
});

const ministries = [
  { icon: Baby, title: "Forward Kids", body: "Sunday environments built for kids birth–5th grade.", img: kids },
  { icon: Mic2, title: "Forward Youth", body: "Middle & high schoolers growing in faith and friendship.", img: youth },
  { icon: Coffee, title: "Young Adults", body: "Community for 18–29s navigating life with purpose." },
  { icon: HandHeart, title: "Men of Forward", body: "Brotherhood, breakfast, and biblical formation." },
  { icon: Sparkles, title: "Women of Forward", body: "Studies, retreats, and real friendships." },
  { icon: Globe, title: "Outreach", body: "Loving Mobile through tangible, neighbor-first service.", img: outreach },
  { icon: Heart, title: "Missions", body: "Supporting partners in the U.S. and around the globe.", img: baptism },
  { icon: Music, title: "Worship Ministry", body: "Singers, musicians, and creatives leading our gatherings." },
  { icon: Camera, title: "Media Team", body: "Video, audio, and design that carries the message further." },
  { icon: Users, title: "Small Groups", body: "Mid-week circles where faith becomes family." },
];

function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title={<>A place for <span style={{ color: "var(--brand-accent)" }}>every season.</span></>}
        description="Whatever your age, story, or stage of faith — there's a community at Forward built for you."
      />

      <section className="section bg-white">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.05}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-cardHover)]">
                {m.img ? (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={m.img} alt={m.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                ) : (
                  <div className="aspect-[16/10] grid place-items-center bg-gradient-to-br from-[color:var(--brand-soft)] to-white">
                    <m.icon className="h-14 w-14 text-[color:var(--brand)]/40" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-display font-extrabold">{m.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed flex-1">{m.body}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand)] hover:text-[color:var(--brand-dark)]">
                    Get involved <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

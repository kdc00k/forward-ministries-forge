import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import baptism from "@/assets/ministry-baptism.jpg";
import youth from "@/assets/ministry-youth.jpg";
import outreach from "@/assets/ministry-outreach.jpg";
import community from "@/assets/community-fellowship.jpg";
import sermonStage from "@/assets/sermon-stage.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Forward Church Ministries" },
      { name: "description", content: "Upcoming events at Forward Church — register, invite a friend, and join in." },
      { property: "og:title", content: "Forward Church Events" },
      { property: "og:description", content: "What's happening at Forward in Mobile, AL." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const events = [
  { d: "12", m: "Jul", title: "Family Beach Baptism", time: "Saturday · 5:00 PM", desc: "Celebrate new life in Christ at Mobile Bay. Bring towels, lawn chairs, and the whole family.", img: baptism },
  { d: "20", m: "Jul", title: "Youth Summer Camp", time: "Mon–Fri · All Day", desc: "5 days of worship, games, and life-change for 6th–12th grade students.", img: youth },
  { d: "03", m: "Aug", title: "Community Outreach Day", time: "Saturday · 9:00 AM", desc: "Serve alongside 300+ neighbors meeting tangible needs across Mobile.", img: outreach },
  { d: "17", m: "Aug", title: "Newcomer Brunch", time: "Sunday · 12:30 PM", desc: "Meet the pastors over brunch and learn what Forward is all about.", img: community },
  { d: "07", m: "Sep", title: "Forward Conference 2026", time: "Thu–Sat · Evenings", desc: "Three nights of worship and teaching with guest speakers from across the country.", img: sermonStage },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={<>Come <span style={{ color: "var(--brand-accent)" }}>experience it</span> with us.</>}
        description="Conferences, camps, community days, and more — there's always something next at Forward."
      />

      <section className="section bg-white">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={(i % 2) * 0.05}>
              <article className="group flex h-full flex-col md:flex-row overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white transition-all duration-300 hover:shadow-[var(--shadow-cardHover)]">
                <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[color:var(--brand-soft)] px-3 py-2 text-center">
                      <p className="text-xl font-display font-extrabold leading-none text-[color:var(--brand)]">{ev.d}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-dark)]">{ev.m}</p>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted-foreground)]">{ev.time}</p>
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-display font-extrabold">{ev.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed flex-1">{ev.desc}</p>
                  <Button
                    onClick={() => toast.success("You're registered! Confirmation email coming soon.")}
                    className="mt-5 self-start rounded-full bg-[color:var(--brand)] hover:bg-[color:var(--brand-dark)] font-bold"
                  >
                    Register <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

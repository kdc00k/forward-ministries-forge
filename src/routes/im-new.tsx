import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Car, Coffee, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/im-new")({
  head: () => ({
    meta: [
      { title: "I'm New — Forward Church Ministries" },
      { name: "description", content: "First time at Forward? Here's everything you need to know before Sunday." },
      { property: "og:title", content: "I'm New at Forward" },
      { property: "og:description", content: "Plan a relaxed first visit to Forward Church in Mobile." },
      { property: "og:url", content: "/im-new" },
    ],
    links: [{ rel: "canonical", href: "/im-new" }],
  }),
  component: ImNew,
});

const steps = [
  { icon: MapPin, title: "Find us easily", body: "We're at 1234 Forward Way, Mobile, AL 36608. Greeters wave you in from the parking lot." },
  { icon: Car, title: "Park up front", body: "Free guest parking is reserved closest to the main entrance — look for the green signs." },
  { icon: Coffee, title: "Grab coffee", body: "Stop by the Forward Café in the lobby. It's on us — say hi to the team while you're there." },
  { icon: ShieldCheck, title: "Drop the kids", body: "Secure check-in opens 30 minutes before service. Background-checked volunteers care for ages 0–5th grade." },
  { icon: Clock, title: "Enjoy the service", body: "Worship, a clear message, and time to respond — about 75 minutes total. No pressure, just presence." },
];

function ImNew() {
  return (
    <>
      <PageHero
        eyebrow="I'm New"
        title={<>You're going to <span style={{ color: "var(--brand-accent)" }}>feel at home.</span></>}
        description="We know visiting a new church can feel like a lot. Here's exactly what to expect on a Sunday at Forward — no surprises."
      >
        <Button asChild size="lg" className="rounded-full h-13 px-6 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
          <Link to="/plan-a-visit">Let us know you're coming <ArrowRight className="ml-1 h-5 w-5" /></Link>
        </Button>
      </PageHero>

      <section className="section bg-white">
        <div className="container-page max-w-4xl">
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <li className="flex gap-5 md:gap-7 rounded-2xl bg-[color:var(--brand-soft)] p-6 md:p-8">
                  <div className="shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-[color:var(--brand)] text-white grid place-items-center">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">Step {i + 1}</p>
                    <h3 className="mt-1 text-xl md:text-2xl font-display font-extrabold">{s.title}</h3>
                    <p className="mt-2 text-[color:var(--muted-foreground)] leading-relaxed">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

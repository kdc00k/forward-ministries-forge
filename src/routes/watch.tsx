import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Play } from "lucide-react";
import sermonStage from "@/assets/sermon-stage.jpg";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Watch — Forward Church Ministries" },
      { name: "description", content: "Watch the latest sermons and live stream from Forward Church in Mobile, AL." },
      { property: "og:title", content: "Watch Forward Church" },
      { property: "og:description", content: "Sermons, series, and live worship from Forward." },
      { property: "og:url", content: "/watch" },
    ],
    links: [{ rel: "canonical", href: "/watch" }],
  }),
  component: WatchPage,
});

const series = [
  { title: "The Power of Forward Faith", series: "Forward · Week 3", duration: "42 min" },
  { title: "Building on the Rock", series: "Foundations · Week 1", duration: "38 min" },
  { title: "Grace That Goes Further", series: "Grace Upon Grace · Week 4", duration: "45 min" },
  { title: "When God Says Go", series: "Calling · Week 2", duration: "39 min" },
  { title: "Hope in the Wilderness", series: "Calling · Week 1", duration: "41 min" },
  { title: "Rooted & Reaching", series: "Foundations · Week 2", duration: "37 min" },
];

function WatchPage() {
  return (
    <>
      <PageHero
        eyebrow="Watch"
        title={<>Sermons, <span style={{ color: "var(--brand-accent)" }}>live and on demand.</span></>}
        description="Catch up on a message you missed or join us live every Sunday at 11 AM CT."
      />

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={sermonStage} alt="Latest sermon" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button aria-label="Play sermon" className="absolute inset-0 grid place-items-center group">
                <span className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="h-9 w-9 fill-current ml-1" />
                </span>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">Now Playing · Forward · Week 3</p>
                <h2 className="mt-1 text-2xl md:text-4xl font-display font-extrabold !text-white">The Power of Forward Faith</h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-14">
            <h3 className="text-2xl font-display font-extrabold">Sermon archive</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {series.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.05}>
                  <a href="#" className="block group rounded-2xl border border-[color:var(--border)] bg-white p-5 hover:border-[color:var(--brand)]/30 hover:shadow-[var(--shadow-card)] transition-all">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-[color:var(--brand-dark)] grid place-items-center">
                      <Play className="h-9 w-9 text-white/80 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">{s.series}</p>
                    <h4 className="mt-1 font-display font-extrabold text-base leading-tight">{s.title}</h4>
                    <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">{s.duration}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

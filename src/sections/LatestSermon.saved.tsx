import { Link } from "@tanstack/react-router";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import sermonStage from "@/assets/sermon-stage.jpg";

const sermons = [
  { title: "The Power of Forward Faith", series: "Forward · Week 3", duration: "42 min" },
  { title: "Building on the Rock", series: "Foundations · Week 1", duration: "38 min" },
  { title: "Grace That Goes Further", series: "Grace Upon Grace · Week 4", duration: "45 min" },
  { title: "When God Says Go", series: "Calling · Week 2", duration: "39 min" },
];

export default function LatestSermon() {
  return (
    <section className="section bg-[color:var(--brand-dark)] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(900px 500px at 100% 0%, rgba(185,225,30,0.15), transparent 60%)" }}
      />
      <div className="container-page relative">
        <SectionHeading
          light
          eyebrow="Latest Sermon"
          title="This week from Forward"
          description="Catch up on the message — wherever you are."
        />
        <Reveal className="mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <img src={sermonStage} alt="Latest sermon" className="h-full w-full object-cover" loading="lazy" width={1600} height={900} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <button
              aria-label="Play latest sermon"
              className="absolute inset-0 grid place-items-center group"
            >
              <span className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
                <Play className="h-9 w-9 fill-current ml-1" />
              </span>
            </button>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">Forward · Week 3</p>
                <h3 className="mt-1 text-2xl md:text-3xl font-display font-extrabold !text-white">The Power of Forward Faith</h3>
              </div>
              <Button asChild className="rounded-full bg-white text-[color:var(--brand-dark)] hover:bg-white/90 font-bold">
                <Link to="/watch">Watch More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sermons.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <a href="#" className="block group rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition-colors">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/40 grid place-items-center">
                  <Play className="h-8 w-8 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">{s.series}</p>
                <h4 className="mt-1 font-display font-extrabold !text-white text-base leading-tight">{s.title}</h4>
                <p className="mt-1 text-xs text-white/60">{s.duration}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

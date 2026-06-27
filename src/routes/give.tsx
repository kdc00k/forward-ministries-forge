import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Repeat2, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "Give — Forward Church Ministries" },
      { name: "description", content: "Give securely to Forward Church Ministries — fueling ministry in Mobile and around the world." },
      { property: "og:title", content: "Give to Forward Church" },
      { property: "og:description", content: "Generosity that moves Mobile forward." },
      { property: "og:url", content: "/give" },
    ],
    links: [{ rel: "canonical", href: "/give" }],
  }),
  component: GivePage,
});

const presets = [25, 50, 100, 250, 500];

const values = [
  { icon: ShieldCheck, label: "Secure", body: "Encrypted, PCI-compliant giving." },
  { icon: Repeat2, label: "Recurring", body: "Weekly or monthly — easy to manage." },
  { icon: Globe, label: "Mission", body: "Local Mobile + global partners." },
  { icon: Heart, label: "Thank You", body: "Every gift makes ministry possible." },
];

function GivePage() {
  const [amount, setAmount] = useState<number>(100);

  return (
    <>
      <PageHero
        eyebrow="Generosity"
        title={<>Give where it <span style={{ color: "var(--brand-accent)" }}>goes furthest.</span></>}
        description="Your generosity fuels worship, kids ministry, outreach, and missions — every gift moves Mobile forward."
      />

      <section className="section bg-white">
        <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(`Thank you for your $${amount} gift!`);
              }}
              className="rounded-3xl bg-[color:var(--brand-soft)] p-8 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-display font-extrabold">Give Today</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">Pick an amount or enter your own.</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={[
                      "h-12 min-w-[80px] px-5 rounded-full font-bold transition-colors",
                      amount === p
                        ? "bg-[color:var(--brand)] text-white"
                        : "bg-white text-[color:var(--brand-dark)] hover:bg-white/70 border border-[color:var(--border)]",
                    ].join(" ")}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="amt">Amount (USD)</Label>
                  <Input id="amt" type="number" min={1} value={amount} onChange={(e) => setAmount(Number(e.target.value || 0))} className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="email">Email for receipt</Label>
                  <Input id="email" type="email" required placeholder="you@email.com" className="mt-1.5 h-12" />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-7 w-full rounded-full h-13 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold text-base">
                Give ${amount} Now <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <p className="mt-3 text-xs text-center text-[color:var(--muted-foreground)]">Demo form · connect a payment processor to go live.</p>
            </form>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold leading-[1.1] tracking-tight">
                Generosity is <span className="text-gradient-brand">worship.</span>
              </h3>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                When you give to Forward, you're investing in real lives — a kid hearing about Jesus for the first time, a family finding community, a neighbor receiving help when they need it most.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.label} delay={i * 0.05}>
                  <div className="rounded-2xl border border-[color:var(--border)] p-5">
                    <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 font-display font-extrabold">{v.label}</p>
                    <p className="text-sm text-[color:var(--muted-foreground)] mt-1">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Sprout, HandCoins, Banknote, FileText, CreditCard } from "lucide-react";
import { toast } from "sonner";
import churchtracQr from "@/assets/qr-churchtrac.jpg.asset.json";
import seedQr from "@/assets/qr-forward-seed.jpg.asset.json";

const CHURCHTRAC_URL = "https://forwardchurchmin.churchtrac.com/give";
const SEED_URL = "https://forwardchurchmin.churchtrac.com/give/19";
const CASHTAG = "$4WARDCH";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "Tithes & Offerings — Forward Church Ministries" },
      { name: "description", content: "Give your tithes and offerings to Forward Church Ministries through ChurchTrac, Cash App, the Forward Seed Initiative, Square, cash, or check." },
      { property: "og:title", content: "Tithes & Offerings — Forward Church Ministries" },
      { property: "og:description", content: "Sowing today for tomorrow's harvest, faith in motion!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GivePage,
});

function copyTag() {
  navigator.clipboard?.writeText(CASHTAG).then(
    () => toast.success(`Copied ${CASHTAG}`),
    () => toast.error("Couldn't copy — the tag is $4WARDCH"),
  );
}

const btnPrimary =
  "w-full rounded-full h-12 bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand)]/90 font-bold";

function QrCard({
  title, body, qr, url, cta, accent,
}: { title: string; body: string; qr: string; url: string; cta: string; accent?: boolean }) {
  return (
    <div
      className={[
        "h-full flex flex-col rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        accent
          ? "bg-[color:var(--brand-dark)] text-white border-transparent"
          : "bg-white border-[color:var(--border)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className={["h-11 w-11 grid place-items-center rounded-xl", accent ? "bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)]" : "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"].join(" ")}>
          {accent ? <Sprout className="h-5 w-5" /> : <HandCoins className="h-5 w-5" />}
        </div>
        <h3 className={["text-xl font-display font-extrabold", accent ? "!text-white" : ""].join(" ")}>{title}</h3>
      </div>
      <p className={["mt-3 text-sm leading-relaxed", accent ? "text-white/75" : "text-[color:var(--muted-foreground)]"].join(" ")}>{body}</p>
      <div className="mt-6 mx-auto w-full max-w-[260px] rounded-2xl bg-white p-3 shadow-sm">
        <img src={qr} alt={`QR code for ${title}`} className="w-full rounded-lg" loading="lazy" />
      </div>
      <div className="mt-auto pt-6">
        <Button asChild size="lg" className={accent ? "w-full rounded-full h-12 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold" : btnPrimary}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {cta} <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}

const other = [
  { icon: CreditCard, label: "Square", body: "Give by card with Square in person at church." },
  { icon: Banknote, label: "Cash", body: "Please complete an offering envelope to ensure your contribution is properly recorded." },
  { icon: FileText, label: "Check", body: "Please complete an offering envelope to ensure your contribution is properly recorded." },
];

function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Tithes & Offerings"
        title={<>Tithes &amp; <span style={{ color: "var(--brand-accent)" }}>Offerings</span></>}
        description="Sowing Today for Tomorrow's Harvest, Faith in Motion!"
      />

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-[color:var(--muted-foreground)]">
              At Forward Church Ministries, giving is an expression of worship, faith, and generosity. Your tithes, offerings, and contributions help us continue the work of ministry, strengthen our community, and move forward in God's purpose. Thank you for your faithfulness and generosity.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <QrCard
                title="ChurchTrac"
                body="Give your tithes and offerings online. Scan the code or tap the button."
                qr={churchtracQr.url}
                url={CHURCHTRAC_URL}
                cta="Give Through ChurchTrac"
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="h-full flex flex-col rounded-3xl p-7 border border-[color:var(--border)] bg-[color:var(--brand-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-[#00D64F] text-white font-extrabold text-xl" aria-hidden>$</div>
                  <h3 className="text-xl font-display font-extrabold">Cash App</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  Send your gift in Cash App to our tag:
                </p>
                <div className="my-auto py-10 text-center">
                  <p className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-[color:var(--brand-dark)]">{CASHTAG}</p>
                </div>
                <Button size="lg" onClick={copyTag} className={btnPrimary}>
                  <Copy className="mr-1 h-4 w-4" /> Copy Cash App Tag
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <QrCard
                accent
                title="The Forward Seed Initiative"
                body="Partner with the vision and future of Forward Church Ministries through your seed contribution."
                qr={seedQr.url}
                url={SEED_URL}
                cta="Give to the Forward Seed Initiative"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--brand-soft)]">
        <div className="container-page">
          <Reveal>
            <h2 className="text-center text-3xl md:text-4xl font-display font-extrabold tracking-tight">Additional Ways to Give</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {other.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white p-6 border border-[color:var(--border)] transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                    <o.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-display font-extrabold text-lg">{o.label}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page text-center max-w-3xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">2 Corinthians 9:7</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              God loves a <span className="text-gradient-brand">cheerful giver.</span>
            </h2>
            <p className="mt-5 text-lg text-[color:var(--muted-foreground)]">
              Thank you for sowing into the vision of Forward Church Ministries. Together, we are moving forward in faith.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

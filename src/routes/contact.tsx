import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Forward Church Ministries" },
      { name: "description", content: "Get in touch with Forward Church in Mobile, AL — questions, prayer requests, or just to say hi." },
      { property: "og:title", content: "Contact Forward Church" },
      { property: "og:description", content: "Reach our team in Mobile, AL." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span style={{ color: "var(--brand-accent)" }}>hear from you.</span></>}
        description="Questions, prayer requests, or just want to connect? Drop us a line and a real human will respond."
      />

      <section className="section bg-white">
        <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent! We'll be in touch within 1 business day.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="rounded-3xl bg-[color:var(--brand-soft)] p-8 md:p-10 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1.5 h-12" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} required placeholder="Tell us a bit more…" className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="rounded-full h-13 px-7 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
                Send Message <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-[color:var(--border)] p-7">
                <h3 className="text-xl font-display font-extrabold">Visit Us</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-[color:var(--brand)] shrink-0 mt-0.5" /><span>1234 Forward Way<br />Mobile, AL 36608</span></li>
                  <li className="flex gap-3"><Phone className="h-5 w-5 text-[color:var(--brand)] shrink-0 mt-0.5" /><a href="tel:+12515550100" className="hover:text-[color:var(--brand)]">(251) 555-0100</a></li>
                  <li className="flex gap-3"><Mail className="h-5 w-5 text-[color:var(--brand)] shrink-0 mt-0.5" /><a href="mailto:hello@forwardchurch.org" className="hover:text-[color:var(--brand)]">hello@forwardchurch.org</a></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] aspect-[16/12]">
                <iframe
                  title="Forward Church location"
                  src="https://www.google.com/maps?q=Mobile%2C+AL&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/plan-a-visit")({
  head: () => ({
    meta: [
      { title: "Plan a Visit — Forward Church Ministries" },
      { name: "description", content: "Let us know you're coming. We'll save you a parking spot, a coffee, and a friend at the door." },
      { property: "og:title", content: "Plan a Visit to Forward Church" },
      { property: "og:description", content: "First Sunday at Forward in Mobile, AL." },
      { property: "og:url", content: "/plan-a-visit" },
    ],
    links: [{ rel: "canonical", href: "/plan-a-visit" }],
  }),
  component: PlanVisit,
});

function PlanVisit() {
  return (
    <>
      <PageHero
        eyebrow="Plan a Visit"
        title={<>Let us know <span style={{ color: "var(--brand-accent)" }}>you're coming.</span></>}
        description="We'll roll out the welcome — and make your first Sunday feel like coming home."
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl mx-auto">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Got it! We can't wait to meet you.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="rounded-3xl bg-[color:var(--brand-soft)] p-8 md:p-10 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="fname">First name</Label>
                  <Input id="fname" required className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="lname">Last name</Label>
                  <Input id="lname" required className="mt-1.5 h-12" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email2">Email</Label>
                  <Input id="email2" type="email" required className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" className="mt-1.5 h-12" />
                </div>
              </div>
              <div>
                <Label htmlFor="when">Which Sunday?</Label>
                <Input id="when" type="date" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="notes">Anything we should know? (kids, accessibility, prayer)</Label>
                <Textarea id="notes" rows={4} className="mt-1.5" />
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm font-normal text-[color:var(--muted-foreground)] leading-snug">
                  Send me the Forward newsletter with sermons and stories.
                </Label>
              </div>
              <Button type="submit" size="lg" className="rounded-full h-13 px-7 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
                I'll Be There <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bishopPhoto from "@/assets/pastor-david-carter.jpg.asset.json";
import karliciaPhoto from "@/assets/leader-karlicia.jpg";
import shantonPhoto from "@/assets/leader-shanton.jpg";
import jermeciaPhoto from "@/assets/leader-jermecia.jpg";
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


function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>A church moving <span style={{ color: "var(--brand-accent)" }}>forward{"\u00a0"}in Mobile.</span></>}
        description="Forward Church Ministries began with a simple conviction: that God is still doing new things, and His people are invited to move forward with Him."
      />

      <section className="section bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={bishopPhoto.url} alt="Bishop Lavorgie Burage" className="h-full w-full object-cover" loading="lazy" width={1280} height={1280} />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
                Meet Bishop Lavorgie Burage
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
                Bishop Bio
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                   Bishop Lavorgie Burage is a preacher, pastor, teacher, husband, father, and servant of God whose life is a testimony of what happens when you say yes to the call of God. 

                   At just 11 years old, he answered the call to preach under the leadership of Bishop Manuel Watson. For 29 years, he has faithfully proclaimed the Gospel, and for the past 4 years, he has served as a pastor. 

                   At the age of 18, Bishop Burage married his wife, Karlicia. Today, they celebrate 22 years of marriage and counting, and together they are the proud parents of three wonderful children who are growing in God and actively serving in ministry. 

                   Bishop Burage later served under the leadership of his father-in-law, Bishop Tyson Johnson, where he served faithfully as an Assistant Pastor and Bishop, spending more than 20 years growing, serving, and developing in ministry. 

                   He is also a graduate of Faulkner University, where he earned both his Bachelor of Business Administration (BBA) and Master of Business Administration (MBA). 

                   After the passing of his pastor, God gave Bishop Burage a new assignment: start a work in your house. What began in his home became a growing ministry through the grace of God. That work eventually moved to its current location and became Forward Church Ministries, where God continues to bless, strengthen, and expand the ministry. 

                   Bishop Burage’s life is a testimony that when God calls you, He will provide the grace to fulfill the assignment. 

                But this isn’t the end of the story.

                God is still writing.
                The ministry is still growing.
                The family is still serving.
                The vision is still unfolding.

                29 years of preaching.
                4 years of pastoring.
                22 years of marriage.
                A lifetime of God’s faithfulness.

                And if you think this is all there is,
                Stay tuned.

                Because God is still writing the story!
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" /> Leadership Team
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-extrabold leading-[1.05] tracking-tight">
              Meet the team.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-16 lg:space-y-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal>
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                  <img src={karliciaPhoto} alt="First Lady Karlicia Franklin-Burage" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand)]">First Lady</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h3 className="mt-3 text-3xl md:text-4xl font-display font-extrabold leading-[1.05] tracking-tight">
                    Karlicia Franklin-Burage
                  </h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
                    A devoted servant-leader who walks alongside Bishop in vision and ministry, caring deeply for the women and families of Forward Church.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal className="lg:order-2">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                  <img src={shantonPhoto} alt="Youth Pastor Shanton Collins" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
              </Reveal>
              <div className="lg:order-1">
                <Reveal>
                  <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand)]">Youth Pastor</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h3 className="mt-3 text-3xl md:text-4xl font-display font-extrabold leading-[1.05] tracking-tight">
                    Shanton Collins
                  </h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
                    Passionate about reaching the next generation with the gospel and creating a space where young people belong, believe, and become leaders.
                  </p>
                </Reveal>
              </div>
            </div>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bishopPhoto from "@/assets/pastor-david-carter.jpg.asset.json";
import karliciaPhoto from "@/assets/leader-karlicia.jpg";
import shantonPhoto from "@/assets/leader-shanton.jpg";

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
                     Lady Karlicia Burage is an evangelist, wife, mother, educator, community servant, and woman of God whose life reflects a passion for purpose, people, and ministry.


                     For nearly 20 years, Lady Burage has faithfully shared the Gospel, using her voice to encourage, empower, and inspire others to discover their God-given purpose. She holds a Bachelor of Business Administration (BBA) from Faulkner University.


                     Lady Burage has been married to Bishop Lavorgie Burage for 22 years, and together they are the proud parents of three wonderful children. Family is at the heart of who she is, and she cherishes spending quality time with her husband, children, friends, and loved ones.


                     For more than 20 years, Lady Burage served under the leadership of Bishop Tyson Johnson. During that time, she faithfully assisted his First Lady and served as her adjutant, learning firsthand the responsibility, wisdom, and grace required to be a leading woman in ministry.


                     Her heart extends beyond the walls of the church. Lady Burage has a genuine passion for helping women discover their purpose and walk confidently in their God-given assignment. She also has a special heart for children, particularly children with exceptionalities, and is passionate about creating opportunities for them to feel valued, supported, and empowered.


                     Her commitment to community is demonstrated through various outreach efforts, including serving families in low-income communities through organizations such as Goodwill and other community initiatives.


                     As she continues to serve alongside her husband at Forward Church Ministries, Lady Burage’s ministry continues to develop and unfold. She understands that God doesn’t reveal the entire journey at once—He develops us along the way.


                     Her story is still being written.
                     Her purpose is still unfolding.
                     Her ministry is still developing.


                     And as God continues to lead her, one thing is certain:


                     The best chapters of Karlicia Burage’s story is still being written.
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
                     Shanton Collins is a devoted husband, loving

                     father of three, grandfather, uncle, preacher,

                     teacher, Youth Pastor and faithful servant of God

                     whose life is centered on faith, family, service,

                     and purpose.

                     At the heart of Shanton’s life is his relationship

                     with God and his family. He is the husband of

                     Minister Shellessa Collins, whom he strives to

                     love and honor according to the biblical example

                     of Christ’s love for the Church. Together, Shanton

                     and Shellessa have built their lives upon faith,

                     family and ministry. Youth Pastor

                     Shanton and his wife are also among the

                     founding members of Forward Church Ministries

                     , where they have had the privilege of helping

                     establish and support a ministry dedicated to

                     advancing the Kingdom of God and impactinglives through the Gospel of Jesus Christ.

                     Shanton has a tremendous love for the Word of

                     God. He believes that Scripture is more than

                     something to be read—it is something to be

                     studied, taught and most of all lived. His passion

                     for biblical truth has helped shape his ministry

                     as a preacher and teacher and has strengthened

                     his desire to help others develop a deeper

                     relationship with Christ.

                     For approximately two years, Shanton has

                     faithfully served as a Youth Pastor. During that

                     time, he has experienced tremendous personal

                     and spiritual growth. While his responsibility is

                     to teach and encourage young people, he

                     recognizes that serving them has also

                     challenged him to study more deeply, pray more

                     intentionally, and continue growing in his own

                     understanding of God's Word.

                     Shanton is especially grateful to Bishop Burage

                     for entrusting him with the opportunity to servein youth ministry and for providing him with the

                     spiritual leadership for his continued

                     development. He considers it an honor to have

                     been given the opportunity to grow under Bishop

                     Burage's leadership, wisdom, and guidance.

                     His heart for youth extends well beyond the

                     walls of the church. Shanton has a genuine love

                     for children and believes strongly that they are

                     the Church of tomorrow. He understands that

                     investing in young people today helps shape the

                     families, churches, communities, and leaders of

                     the future. His desire is not simply to teach

                     children biblical principles, but to help them

                     recognize their value, discover their God-given

                     potential, and understand that their

                     circumstances do not have to determine their

                     future.

                     His life and ministry are grounded in a

                     simple conviction: when God gives you an

                     opportunity, a responsibility, or a person to serve,you should leave it better than you found it.
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

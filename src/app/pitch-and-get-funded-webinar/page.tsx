import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/webinar/CountdownTimer";
import EnrolButton from "@/components/webinar/EnrolButton";
import FaqAccordion from "@/components/webinar/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import {
  PAYSTACK_FULL_URL,
  bootcampAudience,
  bootcampCoaching,
  bootcampContact,
  bootcampFunderQuestions,
  bootcampIncluded,
  bootcampInvestorPack,
  bootcampDemoPrep,
  bootcampPodDates,
  bootcampTimeline,
  bootcampWeeks,
  bootcampPainPoints,
  bootcampResources,
  bootcampSuccessStories,
  bootcampTestimonials,
} from "@/lib/site-data";

const description =
  "A practical funding-readiness bootcamp: 10 live modules, pod coaching and a scored mock panel to build and test your pitch, from your problem to your numbers, ask and funder strategy. 7 Nov – 5 Dec 2026. Demo Day 19 Dec.";

export const metadata: Metadata = {
  title: "Pitch & Get Funded — 2026 Bootcamp",
  description,
  alternates: { canonical: "/pitch-and-get-funded-webinar" },
  openGraph: {
    title: "Pitch & Get Funded — 2026 Bootcamp | Idea to Funded",
    description,
    url: "/pitch-and-get-funded-webinar",
    type: "website",
  },
};

function Check({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        light ? "bg-flare/20 text-flare" : "bg-flare/15 text-flare"
      }`}
    >
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

type Session = {
  label: string;
  title?: string;
  intro: string;
  topics?: string[];
  output: string;
  outputLabel?: string;
};

function SessionCard({ session, date, dark = false }: { session: Session; date?: string; dark?: boolean }) {
  return (
    <article className={`rounded-3xl p-7 sm:p-10 ${dark ? "bg-ink text-cream" : "border border-ink/10 bg-white/80"}`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="eyebrow text-flare">{session.label}</span>
        {date && (
          <span className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-cream/50" : "text-ink/40"}`}>
            {date}
          </span>
        )}
      </div>
      {session.title && (
        <h3 className={`mt-3 font-display text-2xl leading-snug sm:text-3xl ${dark ? "text-cream" : "text-ink"}`}>
          {session.title}
        </h3>
      )}
      <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-cream/75" : "text-ink/70"}`}>{session.intro}</p>

      {session.topics && (
        <details className="group mt-6 rounded-2xl border border-ink/10 bg-cream/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
            In this module, you will explore:
            <span className="text-xl text-flare transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <ul className="grid gap-2.5 px-5 pb-5 sm:grid-cols-2">
            {session.topics.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
                {t}
              </li>
            ))}
          </ul>
        </details>
      )}

      {session.output && (
        <div className={`mt-5 rounded-2xl px-5 py-4 ${dark ? "bg-cream/10" : "bg-ink text-cream"}`}>
          <p className="text-[10px] uppercase tracking-widest text-flare">{session.outputLabel ?? "What you build"}</p>
          <p className="mt-1 text-sm leading-relaxed text-cream/85">{session.output}</p>
        </div>
      )}
    </article>
  );
}

export default function BootcampPage() {
  const pageUrl = "https://ideatofunded.com/pitch-and-get-funded-webinar";
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "Pitch & Get Funded — 2026 Bootcamp",
    startDate: "2026-11-07",
    endDate: "2026-12-19",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: pageUrl },
    organizer: { "@type": "Organization", name: "Idea to Funded", url: "https://ideatofunded.com" },
    offers: {
      "@type": "Offer",
      price: "200000",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      url: PAYSTACK_FULL_URL || pageUrl,
    },
    description,
  };

  return (
    <>
      <Header />
      <main className="bg-cream">
        {/* HERO */}
        <section className="bg-ink text-cream">
          <div className="section py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-5 text-flare">Pitch &amp; Get Funded · 2026 Paid Bootcamp</p>
              <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Build a Pitch That Can{" "}
                <span className="italic text-flare">Stand Up in the Room.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
                You know your business. Now you need to communicate it in a way that makes funders
                understand the opportunity, trust the thinking behind it, and see exactly what you
                are asking for.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/60 sm:text-base">
                Pitch &amp; Get Funded is a practical, live online funding-readiness bootcamp. Over
                five weeks of live sessions, you will build, test and strengthen your pitch, covering
                the problem you solve, your business model, your numbers, your funding ask, how you
                deliver it and your funder strategy. Then you put it to the test at Demo Day.
              </p>
              <p className="mt-6 font-display text-xl italic text-gold">
                10 Modules. Pod Coaching. A Scored Mock Panel. One Stronger Funding Pitch.
              </p>

              <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  { label: "Live Bootcamp", value: "7 Nov – 5 Dec 2026" },
                  { label: "Sessions", value: "Live online, every Saturday" },
                  { label: "Demo Day", value: "19 December 2026" },
                  { label: "Programme Fee", value: "₦200,000" },
                ].map((f) => (
                  <div key={f.label} className="rounded-2xl border border-cream/15 bg-cream/5 px-4 py-4">
                    <p className="text-[10px] uppercase tracking-widest text-cream/50">{f.label}</p>
                    <p className="mt-1 font-display text-lg text-cream">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="mb-4 text-[11px] uppercase tracking-widest text-cream/50">Bootcamp begins in</p>
                <CountdownTimer />
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <EnrolButton>Enrol Now — ₦200,000</EnrolButton>
                <EnrolButton plan="deposit" variant="outline-light">
                  Secure My Place — ₦100,000
                </EnrolButton>
              </div>
              <p className="mt-5 text-xs text-cream/55">
                Pay ₦100,000 to secure your place. Enrolment closes 6 November, and your balance must
                be paid before the bootcamp begins on 7 November.
              </p>
            </div>
          </div>
        </section>

        {/* PHOTO STRIP */}
        <section className="bg-ink pb-16">
          <div className="section grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/images/woman-writing-desk.jpg", alt: "Founder preparing her pitch at her desk", position: "center" },
              { src: "/images/man-suit-documents.jpg", alt: "Founder reviewing his funding documents", position: "50% 22%" },
              { src: "/images/colleagues-small.jpg", alt: "Two founders discussing their pitch together", position: "center" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl sm:aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 300px"
                  className="object-cover"
                  style={{ objectPosition: img.position }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">Why founders join</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              A Strong Business Can Still Get Lost in a Weak Pitch.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              Many founders know their businesses well but struggle to turn that knowledge into a
              clear, credible funding story.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {bootcampPainPoints.map((p, i) => (
              <Reveal key={p} delay={i * 0.08} className="rounded-2xl border border-ink/10 bg-white/70 p-7">
                <span className="font-display text-2xl text-flare/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-2xl text-center">
            <p className="font-display text-xl text-ink">
              Pitch &amp; Get Funded helps you fix those gaps before the opportunity comes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
              The programme works on what sits behind the slides: your problem, value proposition,
              market, traction, numbers, ask, delivery and funder strategy.
            </p>
          </Reveal>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4 text-flare">Who Is Pitch &amp; Get Funded For?</p>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Designed for founders with a funding or growth conversation ahead of them.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
                {bootcampAudience.map((a) => (
                  <div key={a} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4">
                    <Check />
                    <span className="text-sm leading-relaxed text-ink/75">{a}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.2} className="relative order-first aspect-[4/5] overflow-hidden rounded-3xl lg:order-last">
                <Image
                  src="/images/mentor-mentee-laptop.jpg"
                  alt="A founder getting one-on-one guidance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </Reveal>
            </div>
            <Reveal delay={0.25} className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink/65">
              <p>
                <strong className="text-ink">You do not need to have raised funding before.</strong>{" "}
                You do need a clearly defined business or business idea that you are ready to work on
                throughout the programme.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">The Curriculum</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Every module strengthens a specific part of your funding case.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65 sm:text-base">
              Live sessions run every Saturday from 7 November to 5 December. You work on your own
              business throughout. Every session ends with a concrete output that goes into your
              final pitch and Investor Pack.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 max-w-4xl space-y-5">
            {bootcampWeeks.flatMap((w) =>
              w.sessions.map((session, i) => (
                <Reveal key={session.label} delay={Math.min(i * 0.05, 0.2)}>
                  <SessionCard session={session} date={`Week ${w.week} · ${w.date}`} />
                </Reveal>
              ))
            )}
          </div>
        </section>

        {/* DEMO DAY PREPARATION */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4 text-flare">After the Live Sessions</p>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Test It Before You Take It to the Room.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/65 sm:text-base">
                The live sessions end on 5 December, but the work does not. The two weeks before Demo
                Day are for testing your pitch under pressure, applying feedback and preparing to
                approach funders.
              </p>
            </Reveal>
            <div className="mx-auto mt-14 max-w-4xl space-y-5">
              {bootcampDemoPrep.map((session, i) => (
                <Reveal key={session.label} delay={Math.min(i * 0.05, 0.2)}>
                  <SessionCard session={session} date={session.date} dark={session.label === "Demo Day"} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* POD COACHING */}
        <section className="bg-ink py-20 text-cream sm:py-24">
          <div className="section grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4 text-flare">Pod Coaching</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                You Don&apos;t Just Attend Classes. You Work on Your Business Between Them.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/75">
                At orientation, you are placed in a small pod of founders. Every two weeks, your pod
                meets with dedicated pod coaches. Together you review your assignments, get feedback
                on your work and fix what is not yet working before you move on.
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-widest text-cream/50">Session dates (all Tuesdays)</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {bootcampPodDates.map((d) => (
                  <span key={d} className="rounded-full border border-flare/40 bg-flare/10 px-4 py-1.5 text-sm text-cream">
                    {d}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-cream">During pod coaching, you will:</p>
              <ul className="mt-4 space-y-3 text-sm text-cream/75">
                {bootcampCoaching.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/team-meeting-laptops.jpg"
                  alt="A pod of founders reviewing their work together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-cream/15 bg-cream/5 p-7">
                <p className="text-[10px] uppercase tracking-widest text-cream/50">The learning cycle</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 font-display text-base sm:text-lg">
                  {["Learn", "Apply", "Submit", "Review", "Improve"].map((step, i, all) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-flare/40 bg-flare/10 px-3.5 py-1.5 text-cream">{step}</span>
                      {i < all.length - 1 && <span className="text-flare">→</span>}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream/70">
                  The goal is not to cover as much content as possible. The goal is for every part of
                  your pitch to be stronger by the time you finish.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT'S INCLUDED + RESOURCES */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">What&apos;s Included in Your Programme Fee?</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Your ₦200,000 enrolment includes:
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bootcampIncluded.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="lift flex gap-5 rounded-2xl border border-ink/10 bg-white/70 p-7">
                <span className="font-display text-2xl text-flare/70">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/woman-laptop-glasses.jpg"
                alt="A founder working through her bootcamp resources"
                fill
                sizes="400px"
                className="object-cover"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow mb-4 text-flare">Resources You Keep</p>
                <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">You will also receive:</h2>
              </Reveal>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {bootcampResources.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.06} className="rounded-2xl border border-ink/10 bg-white/70 p-6">
                    <h3 className="font-display text-base text-ink">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INVESTOR PACK */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image
                src="/images/team-review-tablet.jpg"
                alt="Founders reviewing their finished investor pack"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4 text-flare">Your Final Investor Pack</p>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                You leave with work you can actually use.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/70 sm:text-base">
                By the end of the programme, the work you complete across all 10 modules comes
                together into a practical funding-readiness pack, including:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {bootcampInvestorPack.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-ink/60">
                You will not leave with another folder of training notes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SUCCESS STORIES + TESTIMONIALS */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">Results</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Support Founders Have Already Put to Work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {bootcampSuccessStories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1} className="flex flex-col rounded-3xl bg-ink p-8 text-cream sm:p-10">
                <h3 className="font-display text-2xl text-flare">{s.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{s.summary}</p>
                {s.images && (
                  <div className="gallery-scroll -mx-2 mt-6 flex items-start snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-3">
                    {s.images.map((img) => (
                      <div
                        key={img.src}
                        className={`relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[75%] ${
                          img.fit === "contain" ? "bg-white" : ""
                        }`}
                        style={{ aspectRatio: img.aspect ?? "16 / 9", maxWidth: img.aspect ? "20rem" : undefined }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 85vw, 420px"
                          className={img.fit === "contain" ? "object-contain p-3" : "object-cover"}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-6 flex-1 font-display text-lg italic leading-snug text-cream">&ldquo;{s.quote}&rdquo;</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cream/50">
                  {s.name} · {s.org}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow mb-6 text-flare">What Other Founders Have Said</p>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2">
                {bootcampTestimonials.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.08} className="rounded-2xl border border-ink/10 bg-white p-6">
                    <p className="text-sm leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/90 font-display text-xs text-flare">
                        {t.name.charAt(0)}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{t.name}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15} className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/woman-celebrating-laptop.jpg"
                alt="A founder celebrating a funding win"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="bg-ink py-20 text-cream sm:py-24">
          <div className="section">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4 text-flare">Your Programme Journey</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Five weeks to build it. Two weeks to sharpen it.{" "}
                <span className="italic text-flare">One day to test it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
              <ol className="relative border-l border-cream/15 pl-6 sm:pl-8">
                {bootcampTimeline.map((t) => (
                  <li key={t.date} className="relative pb-6 last:pb-0">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full sm:-left-[39px] ${
                        t.highlight ? "bg-flare ring-4 ring-flare/25" : "border border-cream/40 bg-ink"
                      }`}
                    />
                    <div
                      className={`rounded-2xl px-5 py-4 sm:flex sm:items-baseline sm:gap-6 ${
                        t.highlight ? "border border-flare/50 bg-flare/15" : "border border-cream/10 bg-cream/5"
                      }`}
                    >
                      <p className={`shrink-0 text-[11px] font-semibold uppercase tracking-widest sm:w-36 ${t.highlight ? "text-flare" : "text-cream/50"}`}>
                        {t.date}
                      </p>
                      <p className={`mt-1 sm:mt-0 ${t.highlight ? "font-display text-2xl text-cream" : "text-sm leading-relaxed text-cream/85"}`}>
                        {t.milestone}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-cream/70 sm:text-base">
                At Demo Day, you will put your pitch under real pressure. You will present it, answer
                questions and receive structured feedback on what is working and what still needs to
                improve.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
        <section id="enrol" className="section scroll-mt-24 py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">Your Investment</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">₦200,000</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Pay the programme fee in full, or secure your place with a deposit.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal className="flex flex-col rounded-3xl bg-ink p-8 text-cream sm:p-10">
              <p className="eyebrow text-flare">Pay in Full</p>
              <p className="mt-4 font-display text-4xl">₦200,000</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">
                One payment covering the complete programme experience.
              </p>
              <EnrolButton className="mt-8 w-full">Enrol Now</EnrolButton>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col rounded-3xl border border-ink/15 bg-white/80 p-8 sm:p-10">
              <p className="eyebrow text-flare">Pay a Deposit</p>
              <p className="mt-4 font-display text-4xl text-ink">₦100,000</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                Secure your place today with ₦100,000. The remaining ₦100,000 must be paid in full
                before the bootcamp begins on 7 November 2026. Participants with an outstanding
                balance cannot begin the bootcamp.
              </p>
              <EnrolButton plan="deposit" variant="outline-dark" className="mt-8 w-full">
                Secure Your Place
              </EnrolButton>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-10 max-w-2xl text-center">
            <p className="mb-8 inline-block rounded-full border border-flare/40 bg-flare/10 px-5 py-2 text-sm font-semibold text-ink">
              Enrolment closes 6 November 2026.
            </p>
            <p className="text-[11px] uppercase tracking-widest text-ink/45">Your fee covers the complete programme experience</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              10 Modules + Orientation + 3 Pod Coaching Sessions + Assignments + Scored Mock Panel +
              Founder Resources + Demo Day Preparation + Demo Day
            </p>
            <p className="mt-4 text-xs text-ink/45">Payments are processed securely by Paystack.</p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4 text-flare">Frequently Asked Questions</p>
            </Reveal>
            <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
              <FaqAccordion />
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section py-20 sm:py-28">
          <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-flare/20 blur-[100px]" />
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
              When the Opportunity Comes, Be Ready for the Questions Behind the Slides.
            </h2>
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
              {bootcampFunderQuestions.map((q) => (
                <span key={q} className="rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/80 sm:text-sm">
                  {q}
                </span>
              ))}
            </div>
            <p className="mt-8 font-display text-xl italic text-gold">Build the pitch before you need the room.</p>
            <p className="mx-auto mt-4 max-w-lg text-sm text-cream/70">
              10 Modules. 3 Pod Coaching Sessions. A Scored Mock Panel. Practical Resources. Demo Day.
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-cream/50">
              Live Bootcamp 7 November – 5 December 2026 · Demo Day 19 December 2026
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <EnrolButton>Join Pitch &amp; Get Funded — ₦200,000</EnrolButton>
              <EnrolButton plan="deposit" variant="outline-light">
                ₦100,000 Secures Your Place
              </EnrolButton>
            </div>
            <div className="hairline mx-auto mt-12 max-w-md opacity-20" />
            <div className="mt-8 text-sm text-cream/70">
              <p className="font-semibold text-cream">Questions? Contact {bootcampContact.name} · Idea to Funded</p>
              <p className="mt-2 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
                <a href={`mailto:${bootcampContact.email}`} className="underline underline-offset-4 hover:text-flare">
                  {bootcampContact.email}
                </a>
                <span className="hidden sm:inline">·</span>
                <a href={bootcampContact.whatsapp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-flare">
                  Phone/WhatsApp: {bootcampContact.phone}
                </a>
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
    </>
  );
}

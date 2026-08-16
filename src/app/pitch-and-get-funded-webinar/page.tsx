import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/webinar/CountdownTimer";
import RegisterForm from "@/components/webinar/RegisterForm";
import FaqAccordion from "@/components/webinar/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import { webinarLearn, webinarAudience, webinarTestimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How to Pitch and Get Funded — Free Webinar",
  description:
    "Join Yemisi Isidi's free live webinar on 4 September 2026. Learn how to pitch your idea, create a compelling pitch deck and attract funding or grants.",
  alternates: { canonical: "/pitch-and-get-funded-webinar" },
  openGraph: {
    title: "How to Pitch and Get Funded — Free Webinar | Idea to Funded",
    description:
      "Join Yemisi Isidi's free live webinar on 4 September 2026. Learn how to pitch your idea, create a compelling pitch deck and attract funding or grants.",
    url: "/pitch-and-get-funded-webinar",
    type: "website",
  },
};

export default function WebinarPage() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "How to Pitch and Get Funded",
    startDate: "2026-09-04T18:00:00+01:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: "https://ideatofunded.com/pitch-and-get-funded-webinar" },
    organizer: { "@type": "Organization", name: "Idea to Funded", url: "https://ideatofunded.com" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "NGN", url: "https://ideatofunded.com/pitch-and-get-funded-webinar" },
    description:
      "A free live webinar teaching founders how to pitch their idea, build a compelling pitch deck, and attract funding or grants.",
  };

  return (
    <>
      <Header />
      <main className="bg-cream">
        {/* HERO */}
        <section className="bg-ink text-cream">
          <div className="section py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-5 text-flare">Free Live Webinar for Founders & Aspiring Entrepreneurs</p>
              <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Learn How to Pitch Your Idea and{" "}
                <span className="italic text-flare">Get Funded</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
                Even if you have no business experience, no pitch deck, and no idea what funders
                are looking for. Join Yemisi Isidi, founder of Idea to Funded, for a practical live
                webinar on pitching your idea with confidence.
              </p>
              <p className="mt-5 text-sm font-semibold text-gold">
                Founders supported by Yemisi have secured more than ₦107 million in funding and grants.
              </p>

              <div className="mt-10">
                <CountdownTimer />
              </div>

              <div className="mt-10">
                <a
                  href="#register"
                  className="group inline-flex items-center gap-2 rounded-full bg-flare px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(240,109,56,0.65)] transition-all hover:bg-[#d85a26]"
                >
                  Save My Free Seat
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-cream/45">
                Friday, 4 September 2026 · Live Online · Free to Attend · No experience required
              </p>
            </div>
          </div>

          <div className="hairline opacity-20" />
          <div className="section flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-xs uppercase tracking-widest text-cream/50">
            <span>₦107M+ secured by founders supported by Yemisi</span>
            <span className="hidden sm:inline">·</span>
            <span>10+ years helping entrepreneurs prepare for funding</span>
            <span className="hidden sm:inline">·</span>
            <span>Free checklist for live attendees</span>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">A good idea is not always enough</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Funders cannot support an idea they do not understand.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              Many promising founders miss valuable opportunities because their pitches are too
              long, too confusing, or too focused on the product — without clearly showing the
              problem, the opportunity, or why the business deserves funding. It is not always the
              idea holding them back. Sometimes, it is simply how the idea is being presented.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              This webinar will help you communicate your idea in a way that is clear, compelling,
              and easier for investors, grant providers, and potential partners to understand.
            </p>
            <a href="#register" className="mt-8 inline-block text-sm font-semibold text-flare underline underline-offset-4 hover:text-ink">
              Yes, I want to improve my pitch →
            </a>
          </Reveal>
        </section>

        {/* PERSONAL INVITATION */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section">
            <Reveal className="mx-auto max-w-2xl">
              <p className="eyebrow mb-5 text-flare text-center">A Personal Invitation from Yemisi</p>
              <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-12">
                <p className="font-display text-2xl italic leading-snug text-ink">
                  &ldquo;Bring your idea. I will show you how to talk about it with greater clarity
                  and confidence.&rdquo;
                </p>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
                  <p>Hi, I&apos;m Yemisi.</p>
                  <p>
                    For more than ten years, I have had the privilege of helping entrepreneurs turn
                    early-stage ideas into businesses that are ready to attract funding. I have
                    watched founders move from uncertainty and self-doubt to receiving the funding
                    or grant they needed to move their businesses forward. That moment never gets old.
                  </p>
                  <p>
                    But I have also seen founders with genuinely strong ideas lose opportunities
                    because they struggled to explain what they were building, why it mattered, or
                    why someone should invest in it. That is why I am hosting this free webinar.
                  </p>
                  <p>
                    During the session, I will break pitching down into practical, understandable
                    steps — how to communicate your idea without unnecessary jargon, structure your
                    message, and avoid the common mistakes that make funders lose interest.
                  </p>
                  <p>
                    You do not need an impressive business background. You do not need to have
                    everything figured out. You only need an idea you believe in and a willingness
                    to learn how to present it better.
                  </p>
                </div>
                <p className="mt-6 font-display italic text-ink">See you inside, Yemisi Isidi</p>
                <p className="text-xs uppercase tracking-widest text-ink/40">Founder, Idea to Funded</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT YOU WILL LEARN */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">What You Will Learn</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              By the end of this free webinar, you will understand:
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {webinarLearn.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="lift flex gap-5 rounded-2xl border border-ink/10 bg-white/70 p-7">
                <span className="font-display text-2xl text-flare/70">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-xl text-center">
            <p className="text-sm text-ink/60">
              This will not be a session filled with complicated business language. You will
              receive practical guidance you can begin applying to your idea immediately.
            </p>
            <a href="#register" className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-[#0a3335]">
              Reserve My Free Place
            </a>
          </Reveal>
        </section>

        {/* BONUS */}
        <section className="bg-ink py-20 text-cream sm:py-24">
          <div className="section grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4 text-flare">Free Live-Attendance Bonus</p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Get the Funding Checklist</h2>
              <p className="mt-5 text-base leading-relaxed text-cream/75">
                Attend the webinar live and receive a practical checklist covering the key things
                you need to prepare before applying for your first, or next, round of funding.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/75">
                {[
                  "Check whether your business is ready for funding",
                  "Identify the documents and information you need",
                  "Prepare for investor and grant applications",
                  "Avoid missing important steps in the funding process",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-widest text-gold">
                Completely free when you attend the live webinar
              </p>
            </Reveal>
            <Reveal delay={0.15} className="rounded-3xl border border-cream/15 bg-cream/5 p-10">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-2xl border border-flare/40 bg-flare/10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20V20H4V4Z" stroke="#F06D38" strokeWidth="1.5" />
                  <path d="M8 9H16M8 13H16M8 17H12" stroke="#F06D38" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 9L9.2 10.2L12 7" stroke="#F06D38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-6 text-center font-display text-lg italic text-cream">
                The Ultimate Startup Funding Checklist
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-flare">Is This Webinar for You?</p>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">This webinar is designed for:</h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {webinarAudience.map((a) => (
              <div key={a} className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/60 px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flare/15 text-flare">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-ink/75">{a}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mx-auto mt-10 max-w-xl text-center text-sm text-ink/60">
            <p>
              You do not need previous business experience. You do not need to have raised money
              before. You do not even need to have a finished pitch deck. If you have an idea and
              want to learn how to present it more effectively, you are welcome.
            </p>
          </Reveal>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white/60 py-20 sm:py-24">
          <div className="section">
            <Reveal className="text-center">
              <p className="eyebrow mb-4 text-flare">What Past Attendees Are Saying</p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {webinarTestimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.06} className="rounded-2xl border border-ink/10 bg-white p-6">
                  <p className="text-sm leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/45">— {t.name}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* REGISTER */}
        <section id="register-section" className="section py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4 text-flare">Save Your Free Seat</p>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Learn how to present your idea in a way funders can understand
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/65">
                Register for the free live webinar and we will send you your personal webinar
                access link, a reminder before the session begins, and details on how to receive
                your Startup Funding Checklist.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">
                Friday, 4 September 2026 · Live Online
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <RegisterForm />
            </Reveal>
          </div>
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
            <p className="eyebrow mb-4 text-flare">Your Idea Deserves to Be Understood</p>
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
              Do not let an unclear pitch hide the potential of a strong idea.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm text-cream/70">
              Spend one evening learning how to explain what you are building, why it matters, and
              why someone should support it. The webinar is live, practical, and completely free.
            </p>
            <a
              href="#register"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-flare px-8 py-4 text-sm font-semibold text-white hover:bg-[#d85a26]"
            >
              Save My Free Seat →
            </a>
            <p className="mt-5 text-xs uppercase tracking-widest text-cream/45">
              Friday, 4 September 2026 · Live Online · No previous business experience required
            </p>
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

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CookieSettingsButton } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Idea to Funded collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const CONTACT_EMAIL = "itofunded@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/75 sm:text-base">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <div className="section py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4 text-flare">Legal</p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-ink/50">Last updated: 16 October 2026</p>

            <p className="mt-8 text-base leading-relaxed text-ink/75">
              Idea to Funded (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
              privacy. This policy explains what personal information we collect through this
              website, why we collect it, and the choices you have. It is written with the Nigeria
              Data Protection Act 2023 in mind and, for visitors in the UK and EU, the GDPR.
            </p>

            <Section title="Information we collect">
              <p><strong className="text-ink">Information you give us.</strong> When you subscribe to our mailing list, register for an event, enrol in a programme or contact us, we collect the details you provide, such as your name, email address, phone or WhatsApp number, location, business name and answers to registration questions.</p>
              <p><strong className="text-ink">Payments.</strong> Programme fees are paid through Paystack. Your card and bank details are entered on Paystack&apos;s secure pages and are never seen or stored by us. Paystack shares with us the details needed to confirm your payment, such as your name, email address and the amount paid.</p>
              <p><strong className="text-ink">How you use the website.</strong> With your consent, we use Google Analytics to collect information such as the pages you visit, how long you stay, the website or link that brought you here, your approximate location (city or country) and your device and browser type. This information does not identify you by name.</p>
            </Section>

            <Section title="How we use your information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To deliver programmes, events and services you sign up for, including sending access links, reminders and programme materials</li>
                <li>To process and confirm payments</li>
                <li>To send our newsletter and updates about our programmes, where you have subscribed. You can unsubscribe at any time using the link in any email</li>
                <li>To respond to your enquiries</li>
                <li>To understand how the website is used so we can improve it</li>
              </ul>
              <p>We do not sell your personal information.</p>
            </Section>

            <Section title="Cookies and analytics">
              <p>Cookies are small files stored on your device. We use analytics cookies from Google Analytics only if you click &ldquo;Accept&rdquo; on our cookie banner. We do not use advertising cookies.</p>
              <p>If you decline, Google Analytics may still receive basic, cookieless information that a page was visited, without storing anything on your device or recognising you on later visits.</p>
              <p>
                You can change your choice at any time:{" "}
                <CookieSettingsButton className="font-semibold text-flare underline underline-offset-4 hover:text-ink" />
                .
              </p>
            </Section>

            <Section title="Who we share information with">
              <p>We share information only with trusted service providers who help us run our work, and only as needed:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-ink">Paystack</strong>, to process payments</li>
                <li><strong className="text-ink">Google</strong> (Google Analytics and Google Workspace, including Google Sheets), for website analytics and to store registrations and sign-ups</li>
                <li><strong className="text-ink">Our email service provider</strong> (such as EmailOctopus), to send newsletters and programme emails</li>
                <li><strong className="text-ink">WhatsApp</strong>, if you choose to join our community groups</li>
              </ul>
              <p>Some of these providers may process information outside Nigeria. Where they do, we rely on their published data-protection commitments. We may also disclose information where the law requires it.</p>
            </Section>

            <Section title="How long we keep your information">
              <p>We keep your information only as long as we need it for the purposes above, or as required by law. Mailing-list details are kept until you unsubscribe. Google Analytics data is kept for up to 14 months.</p>
            </Section>

            <Section title="Your rights">
              <p>You can ask us to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Tell you what personal information we hold about you and give you a copy</li>
                <li>Correct information that is wrong or incomplete</li>
                <li>Delete your information</li>
                <li>Stop using your information for marketing</li>
                <li>Withdraw any consent you have given</li>
              </ul>
              <p>
                To make a request, email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-flare underline underline-offset-4 hover:text-ink">
                  {CONTACT_EMAIL}
                </a>
                . If you are unhappy with how we have handled your information, you can also contact the Nigeria Data Protection Commission.
              </p>
            </Section>

            <Section title="Keeping your information safe">
              <p>We use reputable service providers and take reasonable steps to protect your information from loss, misuse and unauthorised access.</p>
            </Section>

            <Section title="Changes to this policy">
              <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was last changed.</p>
            </Section>

            <Section title="Contact us">
              <p>
                Idea to Funded
                <br />
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-flare underline underline-offset-4 hover:text-ink">
                  {CONTACT_EMAIL}
                </a>
                <br />
                Phone/WhatsApp: 09035333965
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

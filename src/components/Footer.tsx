import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="section grid gap-12 py-16 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/icon-192.png" alt="" width={30} height={30} className="h-7 w-7" />
            <span className="font-display text-base font-semibold text-cream">Idea to Funded</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Supporting builders to launch, grow, and become funding-ready — and partnering with
            institutions to design entrepreneurship programmes that deliver measurable outcomes.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 text-cream/40">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-cream">Home</Link></li>
            <li><Link href="/#what-we-do" className="hover:text-cream">Services</Link></li>
            <li><Link href="/pitch-and-get-funded-webinar" className="hover:text-cream">Bootcamp</Link></li>
            <li><a href="https://selfany.com/s/Ideatofunded" target="_blank" rel="noopener noreferrer" className="hover:text-cream">Resources</a></li>
            <li><a href="mailto:itofunded@gmail.com" className="hover:text-cream">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-cream/40">Stay in the loop</p>
          <NewsletterForm />
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { label: "X", href: "https://x.com/IdeatoFunded" },
              { label: "Instagram", href: "https://www.instagram.com/ideatofunded" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/idea-to-funded" },
              { label: "WhatsApp", href: "https://chat.whatsapp.com/LvVpjKlL5vI6HckUXOqn3a" },
            ].map((s) => (
              
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-cream/50 hover:text-cream"
              >
                <span className="text-xs">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="section flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Idea to Funded. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream/70">Privacy Policy</a>
            <a href="#" className="hover:text-cream/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

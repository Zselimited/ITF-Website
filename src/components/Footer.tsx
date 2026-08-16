import Link from "next/link";
import Image from "next/image";

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
            <li><Link href="/pitch-and-get-funded-webinar" className="hover:text-cream">Free Webinar</Link></li>
            <li><Link href="/#book-call" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-cream/40">Stay in the loop</p>
          <form className="flex gap-2" action="mailto:hello@ideatofunded.com" method="get">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:outline-2"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-flare px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#d85a26]"
            >
              Join
            </button>
          </form>
          <div className="mt-6 flex gap-4">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <a key={s} href="#" aria-label={s} className="text-cream/50 hover:text-cream">
                <span className="text-xs">{s}</span>
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

import Button from "@/components/ui/Button";

const WHATSAPP_URL = "https://chat.whatsapp.com/LvVpjKlL5vI6HckUXOqn3a?s=sh&p=a&ilr=0";
const STRATEGY_CALL_MAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=itofunded@gmail.com&su=Strategy%20Call%20Request&body=Hi%20ITF%20team%2C%0A%0AI%27d%20like%20to%20book%20a%20strategy%20call.%0A%0A";
const PARTNER_MAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=itofunded@gmail.com&su=Partnership%20Enquiry&body=Hi%20ITF%20team%2C%0A%0AI%27m%20interested%20in%20partnering%20with%20Idea%20to%20Funded.%0A%0A";

export default function CTABanner() {
  return (
    <section id="book-call" className="section pb-24 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-flare/20 blur-[100px]" />
        <p className="eyebrow mb-4 text-flare">Let&apos;s build</p>
        <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
          Ready to build or deliver with confidence?
        </h2>
        <div id="partner" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={STRATEGY_CALL_MAIL}>Book Your Strategy Call Today</Button>
          <Button href={PARTNER_MAIL} variant="ghost" className="!border-cream/25 !text-cream hover:!bg-cream/10">Partner With Us</Button>
          <Button href={WHATSAPP_URL} variant="ghost" className="!border-cream/25 !text-cream hover:!bg-cream/10">Join Our Community</Button>
        </div>
      </div>
    </section>
  );
}

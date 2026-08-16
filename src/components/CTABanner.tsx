import Button from "@/components/ui/Button";

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
          <Button href="mailto:hello@ideatofunded.com?subject=Strategy%20Call">
            Book Your Strategy Call Today
          </Button>
          <Button
            href="mailto:hello@ideatofunded.com?subject=Partnership%20Enquiry"
            variant="ghost"
            className="!border-cream/25 !text-cream hover:!bg-cream/10"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}

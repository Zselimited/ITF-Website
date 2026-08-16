import { partners } from "@/lib/site-data";

export default function LogoStrip() {
  const track = [...partners, ...partners];
  return (
    <section className="bg-ink py-10">
      <p className="eyebrow mb-6 text-center text-cream/50">Worked with</p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
        <div className="marquee-track">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-8 whitespace-nowrap font-display text-lg text-cream/40 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

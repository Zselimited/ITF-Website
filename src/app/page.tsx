import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import LogoStrip from "@/components/LogoStrip";
import WhatWeDo from "@/components/WhatWeDo";
import CapitalCopilot from "@/components/CapitalCopilot";
import Academy from "@/components/Academy";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import GrowthLine from "@/components/GrowthLine";

export default function HomePage() {
  return (
    <>
      <GrowthLine />
      <Header />
      <main>
        <Hero />
        <ImpactStats />
        <LogoStrip />
        <WhatWeDo />
        <CapitalCopilot />
        <Academy />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

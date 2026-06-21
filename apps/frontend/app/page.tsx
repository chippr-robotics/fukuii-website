import NavHeader from "@/components/sections/NavHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsFukuii } from "@/components/sections/WhatIsFukuii";
import { WhyFukuii } from "@/components/sections/WhyFukuii";
import { NetworksSection } from "@/components/sections/NetworksSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <WhatIsFukuii />
      <WhyFukuii />
      <NetworksSection />
      <CTABannerSection />
      <FooterSection />
    </main>
  );
}

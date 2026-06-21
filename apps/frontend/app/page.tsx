import NavHeader from "@/components/sections/NavHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsFukuii } from "@/components/sections/WhatIsFukuii";
import { WhyFukuii } from "@/components/sections/WhyFukuii";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { StackSection } from "@/components/sections/StackSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NetworksSection } from "@/components/sections/NetworksSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <WhatIsFukuii />
      <WhyFukuii />
      <OperationsSection />
      <StackSection />
      <FeaturesSection />
      <NetworksSection />
      <RoadmapSection />
      <QuickStartSection />
      <CTABannerSection />
      <FooterSection />
    </main>
  );
}

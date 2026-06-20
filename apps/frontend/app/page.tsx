import NavHeader from "@/components/sections/NavHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsFukuii } from "@/components/sections/WhatIsFukuii";
import { WhyFukuii } from "@/components/sections/WhyFukuii";
import { StackSection } from "@/components/sections/StackSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NetworksSection } from "@/components/sections/NetworksSection";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <WhatIsFukuii />
      <WhyFukuii />
      <StackSection />
      <FeaturesSection />
      <NetworksSection />
      <OperationsSection />
      <ArchitectureSection />
      <RoadmapSection />
      <CTABannerSection />
      <QuickStartSection />
      <FooterSection />
    </main>
  );
}

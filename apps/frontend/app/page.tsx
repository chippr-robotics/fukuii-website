import NavHeader from "@/components/sections/NavHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatusStrip } from "@/components/sections/StatusStrip";
import { WhatIsFukuii } from "@/components/sections/WhatIsFukuii";
import { LiveNetworkStats } from "@/components/sections/LiveNetworkStats";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { NetworksSection } from "@/components/sections/NetworksSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <StatusStrip />
      <WhatIsFukuii />
      <LiveNetworkStats />
      <FeaturesSection />
      <NetworksSection />
      <RoadmapSection />
      <QuickStartSection />
      <FooterSection />
    </main>
  );
}

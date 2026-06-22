import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Quick Start",
  description:
    "Install Fukuii in under five minutes: download the pre-built JAR or Docker image, choose a network, and you're running. Mining, staking, and archive configurations build on the same binary.",
};

export default function QuickStartPage() {
  return (
    <main>
      <NavHeader />
      <PageHero
        eyebrow="Quick Start"
        title="Up in five minutes"
        description="From download to a syncing node in about five minutes. Install for your platform, choose a network, and you're running. Mining, staking, and archive configurations build on the same binary from there."
        ctas={[
          { label: "Documentation", href: "https://docs.fukuii.com/", external: true },
        ]}
      />
      <QuickStartSection />
      <FooterSection />
    </main>
  );
}

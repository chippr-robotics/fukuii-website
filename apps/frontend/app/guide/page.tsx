import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { QuickStartInstall } from "@/components/sections/QuickStartInstall";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Quick Start",
  description:
    "Install Fukuii in under five minutes: Mordor SNAP sync, Docker, or Engine API mode paired with a consensus client. Hardware requirements for home nodes through archive nodes.",
};

export default function QuickStartPage() {
  return (
    <main>
      <NavHeader />
      <PageHero
        eyebrow="Installation Guide"
        title="Up in five minutes"
        description="SNAP sync on Mordor, Docker, or Engine API mode paired with a consensus client, all from the same binary."
        ctas={[
          { label: "Download", href: "https://github.com/chippr-robotics/fukuii/releases", external: true, primary: true },
          { label: "GitHub", href: "https://github.com/chippr-robotics/fukuii", external: true },
        ]}
      />
      <QuickStartSection />
      <section className="section-fk">
        <div className="container-fk">

          <QuickStartInstall />
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

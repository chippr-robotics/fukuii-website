import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { QuickStartInstall } from "@/components/sections/QuickStartInstall";

export const metadata: Metadata = {
  title: "Quick Start",
  description:
    "Install Fukuii in under five minutes: Mordor SNAP sync, Docker, or Engine API mode paired with a consensus client. Hardware requirements for home nodes through archive nodes.",
};

export default function QuickStartPage() {
  return (
    <main>
      <NavHeader />
      <section className="section-fk">
        <div className="container-fk">
          <FadeIn>
            <div style={{ marginBottom: "3rem" }}>
              <span className="cell-label">Quick Start</span>
              <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>
                Quick Start
              </h1>
              <p className="section-subtitle">
                Get a node running in under five minutes. SNAP sync on Mordor, Docker, or Engine API
                mode paired with a consensus client, all from the same binary.
              </p>
            </div>
          </FadeIn>

          <QuickStartInstall />
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

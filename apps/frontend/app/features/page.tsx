import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Full capability matrix for Fukuii: wire protocols, sync strategies, consensus modes, Engine API, and observability, all tracked against go-ethereum and Besu.",
};

type TagColor = "green" | "blue" | "teal" | "violet" | "amber" | "indigo" | "orange" | "muted";

interface ProtocolTag { readonly label: string; readonly color: TagColor; }
interface ProtocolCategory { readonly category: string; readonly tags: readonly ProtocolTag[]; }

const PROTOCOLS: readonly ProtocolCategory[] = [
  {
    category: "Wire protocols",
    tags: [
      { label: "ETH68", color: "blue" },
      { label: "ETH69", color: "blue" },
    ],
  },
  {
    category: "Snap sync",
    tags: [
      { label: "Snap V1", color: "teal" },
    ],
  },
  {
    category: "In progress",
    tags: [
      { label: "ETH70", color: "muted" },
      { label: "ETH71", color: "muted" },
      { label: "Snap V2", color: "muted" },
    ],
  },
  {
    category: "Engine API",
    tags: [
      { label: "V1", color: "violet" },
      { label: "V2", color: "violet" },
      { label: "V3", color: "violet" },
      { label: "V4", color: "violet" },
    ],
  },
  {
    category: "JSON-RPC + API",
    tags: [
      { label: "HTTP", color: "amber" },
      { label: "WebSocket", color: "amber" },
      { label: "IPC", color: "amber" },
      { label: "GraphQL", color: "amber" },
      { label: "MCP server", color: "amber" },
    ],
  },
  {
    category: "Discovery",
    tags: [
      { label: "discv4", color: "muted" },
      { label: "discv5", color: "muted" },
    ],
  },
  {
    category: "Monitoring",
    tags: [
      { label: "Prometheus", color: "orange" },
      { label: "Grafana", color: "orange" },
    ],
  },
  {
    category: "Consensus",
    tags: [
      { label: "Clique", color: "green" },
      { label: "AuRa", color: "green" },
      { label: "Ethash", color: "green" },
      { label: "PoS", color: "green" },
      { label: "PoW", color: "green" },
    ],
  },
  {
    category: "CL interop",
    tags: [
      { label: "Lighthouse", color: "indigo" },
      { label: "Prysm", color: "indigo" },
      { label: "Teku", color: "indigo" },
      { label: "Lodestar", color: "indigo" },
      { label: "Nimbus", color: "indigo" },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <NavHeader />
      <PageHero
        eyebrow="Full capability matrix"
        title="What Fukuii can do"
        description="Feature-complete against go-ethereum and Besu: every wire protocol, sync strategy, and consensus mode tracked against the reference implementations. Performance-sensitive paths draw from Nethermind and Reth where Go and Rust solved problems the JVM ecosystem hadn't prioritized."
        ctas={[
          { label: "Download", href: "https://github.com/chippr-robotics/fukuii/releases", external: true, primary: true },
          { label: "Guide", href: "/guide" },
        ]}
      />
      <section className="section-fk">
        <div className="container-fk">

          <FadeIn delay={80}>
            <div className="protocol-matrix">
              {PROTOCOLS.map((row) => (
                <div key={row.category} className="protocol-row">
                  <div className="protocol-category">{row.category}</div>
                  <div className="protocol-tags">
                    {row.tags.map((tag) => (
                      <span key={tag.label} className={`proto-tag proto-tag--${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

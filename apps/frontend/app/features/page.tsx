import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Fukuii's full capability surface: ETH68/69 wire protocols, SNAP sync, Engine API V1-V4, JSON-RPC, GraphQL, and MCP server. On public-network execution it matches go-ethereum and Besu on wire protocols, SNAP sync, and the full Engine API.",
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
      { label: "ETChash", color: "green" },
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
        eyebrow="CAPABILITIES"
        title="What Fukuii can do"
        description="This is the full capability surface, in a single view. Every wire protocol, sync strategy, consensus model, API transport, and consensus-client integration Fukuii ships is tracked against the reference implementations and proven on the public mainnets it runs today. On public-network execution it matches go-ethereum and Besu on wire protocols, SNAP sync, and the full Engine API, with JSON-RPC and GraphQL alongside them. And where the JVM ecosystem can go further, it does: Fukuii ships a built-in MCP server."
        ctas={[
          { label: "Quick Start", href: "/guide" },
        ]}
      />
      <FeaturesSection />
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
      <OperationsSection />
      <FooterSection />
    </main>
  );
}

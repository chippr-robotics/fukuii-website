import { FadeIn } from "@/components/ui/FadeIn";

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

export function FeaturesSection() {
  return (
    <section className="section-fk" id="features" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "2.5rem", maxWidth: "52ch" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Built to the EVM standard.
            </h2>
            <p className="section-subtitle">
              Feature-complete against go-ethereum and Besu. Performance flags from Nethermind and Reth.
              Prometheus and Grafana out of the box.
            </p>
          </div>
        </FadeIn>

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
  );
}

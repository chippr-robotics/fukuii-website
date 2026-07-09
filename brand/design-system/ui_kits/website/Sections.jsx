// Fukuii website — remaining sections
function StatusStrip() {
  const { Stat } = window.FukuiiDesignSystem_97523a;
  const stats = [['3,621', 'tests passing'], ['14', 'Hive simulators'], ['6', 'networks supported'], ['3', 'sync modes']];
  return (
    <div className="status-strip">
      <div className="container-fk">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 3rem', justifyContent: 'center' }}>
          {stats.map(([v, l]) => <Stat key={l} value={v} label={l} />)}
        </div>
      </div>
    </div>
  );
}
window.StatusStrip = StatusStrip;

function WhatIsFukuii() {
  const { GitHub } = window.FkIcons;
  const facts = [
    ['CONSENSUS MODEL', 'One binary. PoW Ethash and PoS Engine API.'],
    ['LANGUAGE STACK', 'Scala 3 LTS · Pekko Typed Actors · JVM.'],
    ['NETWORK COVERAGE', 'ETC, ETH, Mordor, Sepolia, and growing.'],
  ];
  return (
    <section className="section-fk" id="what">
      <div className="container-fk">
        <div className="what-grid">
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid var(--border)' }}>
            <div>
              <span className="cell-label">About</span>
              <h2 className="cell-h2" style={{ marginBottom: '1.5rem' }}>What is Fukuii?</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Fukuii is a Scala EVM execution client. Built on Scala&nbsp;3 LTS and Pekko Typed Actors, it runs any EVM-compatible network from a single binary. Today that means Ethereum Classic, the largest Proof-of-Work EVM, alongside Ethereum mainnet and Sepolia via Engine API V1 through V4.
              </p>
            </div>
            <a href="#quickstart" className="cell-cta" style={{ marginTop: '2rem' }}>Get started with Fukuii →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {facts.map(([label, value], i) => (
              <div key={label} className="fact-box" style={{ borderBottom: i < facts.length - 1 ? '1px solid var(--border)' : 'none', flex: 1 }}>
                <span className="cell-label">{label}</span>
                <p style={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.01em' }}>{value}</p>
              </div>
            ))}
            <a href="#" className="cell-cta"><GitHub size={14} /> View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhatIsFukuii = WhatIsFukuii;

function Networks() {
  const { Badge } = window.FukuiiDesignSystem_97523a;
  const primary = { name: 'Ethereum Classic', chain: 'chain 61', meta: ['PoW / Ethash', 'SNAP sync', 'Olympia fork'], badge: 'Primary' };
  const nets = [
    { name: 'Mordor', chain: 'chain 63', meta: ['PoW / Ethash', 'SNAP sync', 'ETC testnet'] },
    { name: 'Ethereum Mainnet', chain: 'chain 1', meta: ['PoS via Engine API', 'SNAP sync', 'Prague / Electra'] },
    { name: 'Sepolia', chain: 'chain 11155111', meta: ['PoS via Engine API', 'ETH testnet'] },
    { name: 'Private & L2 Chains', chain: 'custom', meta: ['Consensus module built for pluggability', 'PoA · Orbita · L2 derivation'], badge: 'Roadmap' },
  ];
  const Meta = ({ m }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginTop: '0.625rem' }}>
      {m.map((x, i) => <span key={x} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: i === 0 ? 'var(--text-muted)' : 'var(--text-subtle)' }}>{x}</span>)}
    </div>
  );
  return (
    <section className="section-fk" id="networks">
      <div className="container-fk">
        <div style={{ marginBottom: '3rem' }}>
          <span className="cell-label">Networks</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>EVM networks.</h2>
          <p className="section-subtitle">Today: Ethereum Classic and Ethereum mainnet, each with their canonical testnet, from a single binary. Tomorrow: Orbita-powered sidechains, L2 rollups, and private consortium chains — one runtime, many networks.</p>
        </div>
        <div style={{ border: '1px solid var(--border)', borderBottom: 'none', padding: '1.75rem', background: 'var(--accent-soft)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
            <div>
              <span className="cell-label" style={{ color: 'var(--accent)' }}>{primary.badge}</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{primary.name}</h3>
            </div>
            <Badge>{primary.chain}</Badge>
          </div>
          <Meta m={primary.meta} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--border)' }}>
          {nets.map((n, j) => (
            <div key={n.name} style={{ padding: '1.75rem', borderRight: j % 2 === 0 ? '1px solid var(--border)' : undefined, borderBottom: j < (nets.length % 2 === 0 ? nets.length - 2 : nets.length - 1) ? '1px solid var(--border)' : undefined }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{n.name}</h3>
                <Badge>{n.chain}</Badge>
              </div>
              <Meta m={n.meta} />
              {n.badge && <div style={{ marginTop: '1rem' }}><Badge status={n.badge} /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Networks = Networks;

function Roadmap() {
  const { Badge } = window.FukuiiDesignSystem_97523a;
  const phases = [
    ['1', 'fukuii-env', 'In Progress', true],
    ['2', 'Multi-Instance Runtime', 'Planned', false],
    ['3', 'Checkpoint Consensus (Orbita PoA)', 'Planned', false],
    ['4', 'OP-Style Derivation', 'Planned', false],
  ];
  return (
    <section className="section-fk" id="roadmap" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-fk">
        <div style={{ marginBottom: '3rem' }}>
          <span className="cell-label">Roadmap</span>
          <h2 className="section-title">Roadmap — The Orbita Vision</h2>
          <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>The end state is an execution layer that runs any EVM chain, not just the ones it was compiled for. Four phases get there.</p>
        </div>
        <div style={{ border: '1px solid var(--border)' }}>
          {phases.map(([num, name, status, active], i) => (
            <div key={num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.75rem', borderTop: i === 0 ? 'none' : '1px solid var(--border)', background: active ? 'var(--accent-soft)' : 'transparent' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: active ? 'var(--accent)' : 'var(--text-subtle)' }}>Phase {num}</span>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{name}</h3>
              <Badge status={status} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Roadmap = Roadmap;

function QuickStart() {
  const { CodeBlock } = window.FukuiiDesignSystem_97523a;
  return (
    <section className="section-fk" id="quickstart">
      <div className="container-fk">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Quick Start</h2>
          <p className="section-subtitle">Test on Mordor testnet, deploy via Cosign-signed Docker images on GHCR, or pair with any consensus client for Ethereum Sepolia — all from the same binary. Requires JDK 25 LTS.</p>
        </div>
        <CodeBlock label="docker" code={`docker run ghcr.io/chippr-robotics/fukuii --network mordor`} />
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1.25rem' }}>
          From an 8 GB home node to a 64 GB+ archive node, the same binary scales from solo operator to institutional deployment.
        </p>
      </div>
    </section>
  );
}
window.QuickStart = QuickStart;

function CTA() {
  const { Button } = window.FukuiiDesignSystem_97523a;
  return (
    <section className="section-fk">
      <div className="container-fk">
        <div className="cta-glass" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', maxWidth: 640, marginInline: 'auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.25rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>Run a node. Tell us what you see.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>Operator feedback shapes the road to v1.0: sync behavior, peering, resource profiles — the things only a running node reveals.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gradient">Report an issue</Button>
            <Button variant="secondary" rounded>Join discussions</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;

function Footer() {
  const { GitHub } = window.FkIcons;
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-elev)', padding: '2rem 0' }}>
      <div className="container-fk">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>© 2026 Chippr Robotics LLC · Apache 2.0 · <span style={{ color: 'var(--text-muted)' }}>package com.chipprbots</span></p>
          <a href="#" aria-label="GitHub" style={{ color: 'var(--text-muted)' }}><GitHub size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

function WhyFukuii() {
  const pillars = [
    ['The preferred stack', 'Trading desks, clearing systems, and sovereign settlement layers already run on the JVM. Scala 3 makes whole classes of consensus-critical bugs unrepresentable — the compiler rejects them before they reach a block. JFR, async-profiler, JMX, and heap dumps work out of the box.'],
    ['No license meter running', 'Fukuii\u2019s actor runtime is Apache Pekko, the community fork of Akka taken before Lightbend\u2019s move to the Business Source License. No BSL exposure to underwrite \u2014 a line item that matters to legal and procurement at every institution in your stack.'],
    ['Independent by construction', 'Fukuii shares the EIPs and wire protocol but nothing else: different codebase, language, team, and failure modes. A consensus bug in a Go implementation does not propagate to a JVM one. Where ETC and ETH each lean on a single dominant client, Fukuii is the independent path.'],
    ['Agentic infrastructure', 'Fukuii ships a Model Context Protocol server that exposes node state, sync progress, peer counts, and block data to any MCP-compatible agent. Automation, anomaly detection, and runbook execution wire straight into a running node \u2014 no custom scripts, no polling.'],
  ];
  return (
    <section className="section-fk" id="why" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-fk">
        <div style={{ marginBottom: '3rem' }}>
          <span className="cell-label">Why Fukuii</span>
          <h2 className="section-title">Built for the institutions that can&rsquo;t afford to be wrong.</h2>
        </div>
        <div className="why-grid-2" style={{ border: '1px solid var(--border)' }}>
          {pillars.map(([title, body], i) => (
            <div key={title} style={{ padding: '2rem', borderRight: i % 2 === 0 ? '1px solid var(--border)' : undefined, borderTop: i >= 2 ? '1px solid var(--border)' : undefined }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.WhyFukuii = WhyFukuii;

function Stack() {
  const { Tag } = window.FukuiiDesignSystem_97523a;
  const runtime = [
    ['LANGUAGE', 'Scala 3.3.8 LTS'],
    ['JDK', 'OpenJDK 25 LTS'],
    ['ACTOR SYSTEM', 'Apache Pekko 1.6.0'],
    ['STORAGE', 'RocksDB 10.10.1.1'],
    ['EFFECTS', 'Cats Effect 3 + fs2'],
    ['SUPPLY CHAIN', 'Signed provenance \u00b7 CycloneDX SBOM'],
  ];
  const tiers = [
    ['Home', '8 GB RAM \u00b7 500 GB'],
    ['Professional', '16 GB RAM \u00b7 1 TB'],
    ['Enterprise', '32\u201364 GB RAM \u00b7 2\u20134 TB'],
    ['Archive', '64 GB+ RAM \u00b7 4 TB+'],
  ];
  return (
    <section className="section-fk" id="stack">
      <div className="container-fk">
        <div style={{ marginBottom: '3rem' }}>
          <span className="cell-label">Runtime stack</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>A current, fully-pinned stack.</h2>
          <p className="section-subtitle">Cats Effect 3 and fs2, fully migrated off Monix. Every release ships Cosign keyless signatures and a CycloneDX SBOM.</p>
        </div>
        <div className="cell-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2.5rem' }}>
          {runtime.map(([label, value]) => (
            <div key={label} className="cell-fk" style={{ padding: '1.5rem' }}>
              <span className="cell-label">{label}</span>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>{value}</p>
            </div>
          ))}
        </div>
        <div className="protocol-matrix">
          {tiers.map(([tier, spec]) => (
            <div key={tier} className="protocol-row">
              <div className="protocol-category">{tier}</div>
              <div className="protocol-tags"><Tag tone="muted">{spec}</Tag></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stack = Stack;

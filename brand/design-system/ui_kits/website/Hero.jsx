// Fukuii website — hero (cell-grid 2col)
function Hero() {
  const { Button } = window.FukuiiDesignSystem_97523a;
  const { GitHub, Doc, ArrowRight, Linux, Apple, Windows, Docker, Scala, Jvm } = window.FkIcons;
  const platforms = [['Linux', Linux], ['macOS', Apple], ['Windows', Windows], ['Docker', Docker]];
  const stack = [['Scala 3', Scala], ['JVM', Jvm], ['Docker', Docker]];

  return (
    <section id="hero" className="hero-gradient" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
      <span className="aurora-blob aurora-blob--1" style={{ width: 480, height: 480, top: -200, left: -120, background: 'radial-gradient(circle, rgba(80,160,96,0.4), transparent 60%)' }} />
      <span className="aurora-blob aurora-blob--2" style={{ width: 420, height: 420, bottom: -220, right: 40, background: 'radial-gradient(circle, rgba(45,107,64,0.32), transparent 60%)' }} />
      <div className="container-fk" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cell-grid-2col" style={{ border: '1px solid var(--border)' }}>
          {/* Left: brand identity */}
          <div className="hero-cell-overlay" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem', minHeight: 520, textAlign: 'center' }}>
            <img src="../../assets/logo/fukuii-hex-logo.png" alt="" width={300} height={300} style={{ marginTop: '1.5rem', width: 'min(300px, 70%)', height: 'auto' }} />
            <p style={{ fontSize: 'clamp(1.375rem, 3vw, 2rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: '1.5rem', padding: '0 1rem' }}>
              The execution client built to <span style={{ color: 'var(--accent)' }}>finance&rsquo;s standard.</span>
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'auto', paddingTop: '2rem' }}>
              <Button variant="primary">Download</Button>
              <Button variant="secondary" leftIcon={<GitHub size={16} />}>GitHub</Button>
            </div>
            <div className="os-platform-row" style={{ justifyContent: 'center', marginBottom: 0 }}>
              {platforms.map(([label, I]) => <span key={label} className="os-pill"><I size={14} />{label}</span>)}
            </div>
          </div>
          {/* Right: content */}
          <div className="hero-cell-overlay" style={{ position: 'relative', padding: '2.5rem clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--border)' }}>
            <div className="alpha-status" style={{ position: 'absolute', top: '1.25rem', left: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <span className="badge-pulse-dot" /> Alpha v0.7
            </div>
            <div style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 700, letterSpacing: '0.22em', lineHeight: 1.1 }}>FUKUII</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginTop: '0.375rem' }}>Ethereum Virtual Machine Client</div>
              </div>
              <p style={{ fontSize: 'clamp(0.9375rem, 1.2vw + 0.5rem, 1.0625rem)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '52ch' }}>
                Fukuii is a Scala execution client for the wider Ethereum Virtual Machine ecosystem. It is the most feature-complete client available, with native support for established EVM execution configurations and consensus models. Built with intention, Fukuii serves institutional digital custodians, global financial institutions, and sovereign wealth funds, while remaining lightweight enough for the solo operator.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto', paddingTop: '2rem', justifyContent: 'center' }}>
              <Button variant="primary" href="#quickstart">Quick Start</Button>
              <Button variant="secondary" leftIcon={<Doc size={16} />}>Documentation</Button>
            </div>
            <div className="os-platform-row" style={{ justifyContent: 'center', marginBottom: 0 }}>
              {stack.map(([label, I]) => <span key={label} className="os-pill"><I size={14} />{label}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

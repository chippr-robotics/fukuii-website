// Fukuii website — sticky nav + theme toggle
function Nav({ theme, onToggleTheme }) {
  const { GitHub, Sun, Moon } = window.FkIcons;
  const links = ['About', 'Features', 'Roadmap', 'Guide', 'Docs'];
  return (
    <header className="nav-fk">
      <div className="container-fk">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, gap: '1rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
            <img src="../../assets/logo/fukuii-hex-logo.png" alt="" width="34" height="34" style={{ width: 34, height: 34 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ fontWeight: 700, fontSize: '1.0625rem', letterSpacing: '0.06em', lineHeight: 1.2 }}>FUKUII</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-subtle)', lineHeight: 1 }}>Ethereum Virtual Machine Client</span>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="kit-navlinks">
            {links.map((l) => (
              <a key={l} href="#" style={{ padding: '0.375rem 0.75rem', borderRadius: 8, fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', transition: 'color 150ms, background 150ms' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}>{l}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.375rem 0.875rem', borderRadius: 8, border: '1px solid var(--border)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <GitHub size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;

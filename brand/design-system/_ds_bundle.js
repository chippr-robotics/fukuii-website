/* @ds-bundle: {"format":3,"namespace":"FukuiiDesignSystem_97523a","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Cell","sourcePath":"components/core/Cell.jsx"},{"name":"CellGrid","sourcePath":"components/core/Cell.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CodeBlock","sourcePath":"components/data/CodeBlock.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"fd278f763e53","components/core/Badge.jsx":"86ed133c02a5","components/core/Button.jsx":"c194f608dfd9","components/core/Card.jsx":"bfc4e5cce666","components/core/Cell.jsx":"21aa37bfbe2f","components/core/Stat.jsx":"8b606e54bbc0","components/core/Tag.jsx":"697c9ebcb486","components/data/CodeBlock.jsx":"893778bc20c4","components/forms/Input.jsx":"12af2df80809","components/navigation/Tabs.jsx":"de28866645cc","ui_kits/website/Hero.jsx":"644889fb0e6f","ui_kits/website/Nav.jsx":"50c9b02e8a1d","ui_kits/website/Sections.jsx":"f6aad6386d20","ui_kits/website/icons.jsx":"a28ff148ba25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FukuiiDesignSystem_97523a = window.FukuiiDesignSystem_97523a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fukuii lockup — the FUKUII wordmark with its mono sublabel. Optionally
 * shows the hex mascot logo (pass `hex` with the image src). The wordmark
 * is DM Sans 700 with wide tracking.
 */
function Logo({
  hex = null,
  sublabel = 'Ethereum Virtual Machine Client',
  size = 'md',
  stacked = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      word: '0.9375rem',
      sub: '0.5625rem',
      img: 28,
      track: '0.06em'
    },
    md: {
      word: '1.0625rem',
      sub: '0.625rem',
      img: 36,
      track: '0.06em'
    },
    lg: {
      word: '2.25rem',
      sub: '0.625rem',
      img: 96,
      track: '0.22em'
    }
  };
  const s = sizes[size] || sizes.md;
  const wordmark = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.1rem',
      textAlign: stacked ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.word,
      letterSpacing: s.track,
      color: 'var(--text)',
      lineHeight: 1.1
    }
  }, "FUKUII"), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: s.sub,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      lineHeight: 1
    }
  }, sublabel));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: stacked ? 'column' : 'row',
      alignItems: 'center',
      gap: stacked ? '1rem' : '0.625rem',
      ...style
    }
  }, rest), hex && /*#__PURE__*/React.createElement("img", {
    src: hex,
    alt: "Fukuii",
    width: s.img,
    height: s.img,
    style: {
      width: s.img,
      height: s.img,
      objectFit: 'contain'
    }
  }), wordmark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    fg: 'var(--text-muted)',
    bg: 'var(--bg-card)',
    bd: 'var(--border)'
  },
  green: {
    fg: 'var(--fk-green-3)',
    bg: 'rgba(80,160,96,0.08)',
    bd: 'rgba(80,160,96,0.4)'
  },
  gold: {
    fg: 'var(--fk-gold-2)',
    bg: 'rgba(214,181,107,0.08)',
    bd: 'rgba(214,181,107,0.4)'
  }
};

// Roadmap / status vocabulary → tone mapping
const STATUS = {
  Primary: 'green',
  'In Progress': 'green',
  Stable: 'green',
  Planned: 'default',
  Roadmap: 'default',
  Alpha: 'gold'
};

/**
 * Monospace pill badge — the Fukuii status vocabulary (Primary, In Progress,
 * Planned, Roadmap) and chain/capability labels. Pass `tone` directly or a
 * `status` string that maps to the right tone.
 */
function Badge({
  children,
  tone,
  status,
  dot = false,
  style = {},
  ...rest
}) {
  const resolved = tone || status && STATUS[status] || 'default';
  const t = TONES[resolved] || TONES.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.04em',
      padding: '0.25rem 0.625rem',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${t.bd}`,
      background: t.bg,
      color: t.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor',
      flex: 'none'
    }
  }), children || status);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0.5rem 1.25rem',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '0.75rem 1.75rem',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '0.875rem 2rem',
    fontSize: 'var(--text-md)'
  }
};

/**
 * Fukuii button. `primary` is a solid green action (sharp corners, matching
 * the hero + cell aesthetic); `gradient` is the green→gold emphasis CTA;
 * `secondary` is a bordered, quiet action.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  rounded = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)',
      filter: hover && !disabled ? 'brightness(1.08)' : 'none'
    },
    gradient: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)',
      filter: hover && !disabled ? 'brightness(1.08)' : 'none',
      boxShadow: hover && !disabled ? '0 6px 26px -8px rgba(80,160,96,0.5)' : '0 4px 18px -8px rgba(80,160,96,0.4)'
    },
    secondary: {
      background: 'var(--bg-card)',
      color: hover && !disabled ? 'var(--text)' : 'var(--text-muted)',
      border: `1px solid ${hover && !disabled ? 'var(--border-strong)' : 'var(--border)'}`
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--text-muted)',
      border: `1px solid ${hover && !disabled ? 'var(--accent)' : 'var(--border)'}`
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 700,
    lineHeight: 1.1,
    textDecoration: 'none',
    borderRadius: rounded || variant === 'gradient' ? 'var(--radius-md)' : '0',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'all var(--dur-base) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon, children, rightIcon);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rounded surface card (card-fk) — soft green-tinted fill, hairline border,
 * lifts and gains a gold glow ring on hover. For editorial/feature content
 * that isn't part of the bordered cell grid.
 */
function Card({
  children,
  interactive = true,
  padding = '2rem',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--bg-card)',
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: hover ? 'var(--shadow-glow)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'border-color 200ms, box-shadow 200ms, transform 200ms',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Cell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cell — the brand's signature container: sharp corners, hairline border,
 * a documentary mono `label` above the content, and an optional `cta` bar.
 * Compose several inside a CSS grid with gap:1px (use the `.cell-grid`
 * class or `CellGrid`) to get the geth-inspired shared-edge layout.
 */
function Cell({
  children,
  label,
  cta,
  ctaHref,
  elevated = false,
  accent = false,
  padding = '2rem',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: accent ? 'var(--accent-soft)' : elevated ? 'var(--bg-elev)' : 'var(--bg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      flex: 1
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, label), children), cta && /*#__PURE__*/React.createElement("a", {
    className: "cell-cta",
    href: ctaHref || '#'
  }, cta, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))));
}

/** Wrapper that lays cells out with shared 1px borders (the .cell-grid look). */
function CellGrid({
  children,
  columns = 2,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '1px',
      background: 'var(--border)',
      border: '1px solid var(--border)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Cell, CellGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Cell.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status-strip statistic — a large accent-green number beside a mono label.
 * Used in the metrics band (tests passing, networks supported, …).
 */
function Stat({
  value,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.5rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      lineHeight: 1,
      color: 'var(--accent)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      letterSpacing: '0.03em'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = ['green', 'blue', 'teal', 'violet', 'amber', 'muted'];

/**
 * Protocol / capability tag — small monospace pill used in the protocol
 * compatibility matrix and feature lists. Colorways: green, blue, teal,
 * violet, amber, muted.
 */
function Tag({
  children,
  tone = 'green',
  style = {},
  ...rest
}) {
  const t = TONES.includes(tone) ? tone : 'green';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `proto-tag proto-tag--${t}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Command / code panel (code-block). Near-black, monospace, with a copy
 * affordance. Pass `code` as a string; optional `label` chrome.
 */
function CodeBlock({
  code = '',
  label = null,
  style = {},
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {}
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-subtle)',
      marginBottom: '0.5rem'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      position: 'absolute',
      top: label ? '1.9rem' : '0.65rem',
      right: '0.65rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      padding: '0.25rem 0.55rem',
      cursor: 'pointer',
      color: copied ? 'var(--fk-green-3)' : 'var(--text-subtle)',
      background: copied ? 'rgba(80,160,96,0.1)' : 'rgba(0,0,0,0.3)',
      border: `1px solid ${copied ? 'rgba(80,160,96,0.4)' : 'var(--border)'}`,
      borderRadius: '6px',
      transition: 'all 150ms'
    }
  }, copied ? 'Copied' : 'Copy'), /*#__PURE__*/React.createElement("pre", {
    className: "code-block",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("code", null, code)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field — hairline input on the green-tinted card surface, green focus
 * ring. Set `as="textarea"` for multiline; `mono` for technical entry.
 */
function Input({
  label,
  as = 'input',
  error = null,
  mono = false,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `in-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    rows: as === 'textarea' ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      width: '100%',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--color-error)' : focus ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: 'var(--bg-card)',
      padding: '0.75rem 1rem',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px var(--accent-soft)' : 'none',
      resize: as === 'textarea' ? 'none' : undefined,
      transition: 'border-color 150ms, box-shadow 150ms'
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Underline tab bar (tab-btn) — green active indicator. Controlled or
 * uncontrolled; render panels yourself keyed on the active id.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: '0.25rem',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": it.id === active,
    className: `tab-btn${it.id === active ? ' tab-active' : ''}`,
    onClick: () => select(it.id)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Fukuii website — hero (cell-grid 2col)
function Hero() {
  const {
    Button
  } = window.FukuiiDesignSystem_97523a;
  const {
    GitHub,
    Doc,
    ArrowRight,
    Linux,
    Apple,
    Windows,
    Docker,
    Scala,
    Jvm
  } = window.FkIcons;
  const platforms = [['Linux', Linux], ['macOS', Apple], ['Windows', Windows], ['Docker', Docker]];
  const stack = [['Scala 3', Scala], ['JVM', Jvm], ['Docker', Docker]];
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "hero-gradient",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "aurora-blob aurora-blob--1",
    style: {
      width: 480,
      height: 480,
      top: -200,
      left: -120,
      background: 'radial-gradient(circle, rgba(80,160,96,0.4), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "aurora-blob aurora-blob--2",
    style: {
      width: 420,
      height: 420,
      bottom: -220,
      right: 40,
      background: 'radial-gradient(circle, rgba(45,107,64,0.32), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container-fk",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-grid-2col",
    style: {
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-cell-overlay",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2.5rem',
      minHeight: 520,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/fukuii-hex-logo.png",
    alt: "",
    width: 300,
    height: 300,
    style: {
      marginTop: '1.5rem',
      width: 'min(300px, 70%)',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1.375rem, 3vw, 2rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      marginTop: '1.5rem',
      padding: '0 1rem'
    }
  }, "The execution client built to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "finance\u2019s standard.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 'auto',
      paddingTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Download"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(GitHub, {
      size: 16
    })
  }, "GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "os-platform-row",
    style: {
      justifyContent: 'center',
      marginBottom: 0
    }
  }, platforms.map(([label, I]) => /*#__PURE__*/React.createElement("span", {
    key: label,
    className: "os-pill"
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }), label)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-cell-overlay",
    style: {
      position: 'relative',
      padding: '2.5rem clamp(2rem, 4vw, 3.5rem)',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "alpha-status",
    style: {
      position: 'absolute',
      top: '1.25rem',
      left: 'clamp(2rem, 4vw, 3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-pulse-dot"
  }), " Alpha v0.7"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
      fontWeight: 700,
      letterSpacing: '0.22em',
      lineHeight: 1.1
    }
  }, "FUKUII"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.625rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginTop: '0.375rem'
    }
  }, "Ethereum Virtual Machine Client")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(0.9375rem, 1.2vw + 0.5rem, 1.0625rem)',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      maxWidth: '52ch'
    }
  }, "Fukuii is a Scala execution client for the wider Ethereum Virtual Machine ecosystem. It is the most feature-complete client available, with native support for established EVM execution configurations and consensus models. Built with intention, Fukuii serves institutional digital custodians, global financial institutions, and sovereign wealth funds, while remaining lightweight enough for the solo operator.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: 'auto',
      paddingTop: '2rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#quickstart"
  }, "Quick Start"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Doc, {
      size: 16
    })
  }, "Documentation")), /*#__PURE__*/React.createElement("div", {
    className: "os-platform-row",
    style: {
      justifyContent: 'center',
      marginBottom: 0
    }
  }, stack.map(([label, I]) => /*#__PURE__*/React.createElement("span", {
    key: label,
    className: "os-pill"
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }), label)))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Fukuii website — sticky nav + theme toggle
function Nav({
  theme,
  onToggleTheme
}) {
  const {
    GitHub,
    Sun,
    Moon
  } = window.FkIcons;
  const links = ['About', 'Features', 'Roadmap', 'Guide', 'Docs'];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav-fk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/fukuii-hex-logo.png",
    alt: "",
    width: "34",
    height: "34",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '1.0625rem',
      letterSpacing: '0.06em',
      lineHeight: 1.2
    }
  }, "FUKUII"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.625rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      lineHeight: 1
    }
  }, "Ethereum Virtual Machine Client"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '0.25rem',
      alignItems: 'center'
    },
    className: "kit-navlinks"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      padding: '0.375rem 0.75rem',
      borderRadius: 8,
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--text-muted)',
      transition: 'color 150ms, background 150ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--text)';
      e.currentTarget.style.background = 'var(--bg-card)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-muted)';
      e.currentTarget.style.background = 'transparent';
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, theme === 'light' ? /*#__PURE__*/React.createElement(Moon, {
    size: 16
  }) : /*#__PURE__*/React.createElement(Sun, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
      padding: '0.375rem 0.875rem',
      borderRadius: 8,
      border: '1px solid var(--border)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(GitHub, {
    size: 16
  }), " GitHub")))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Fukuii website — remaining sections
function StatusStrip() {
  const {
    Stat
  } = window.FukuiiDesignSystem_97523a;
  const stats = [['3,621', 'tests passing'], ['14', 'Hive simulators'], ['6', 'networks supported'], ['3', 'sync modes']];
  return /*#__PURE__*/React.createElement("div", {
    className: "status-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem 3rem',
      justifyContent: 'center'
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(Stat, {
    key: l,
    value: v,
    label: l
  })))));
}
window.StatusStrip = StatusStrip;
function WhatIsFukuii() {
  const {
    GitHub
  } = window.FkIcons;
  const facts = [['CONSENSUS MODEL', 'One binary. PoW Ethash and PoS Engine API.'], ['LANGUAGE STACK', 'Scala 3 LTS · Pekko Typed Actors · JVM.'], ['NETWORK COVERAGE', 'ETC, ETH, Mordor, Sepolia, and growing.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "what"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "what-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "cell-h2",
    style: {
      marginBottom: '1.5rem'
    }
  }, "What is Fukuii?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-muted)',
      lineHeight: 1.75
    }
  }, "Fukuii is the only Scala EVM execution client. Built on Scala\xA03 LTS and Pekko Typed Actors, it runs any EVM-compatible network from a single binary. Today that means Ethereum Classic, the largest Proof-of-Work EVM, alongside Ethereum mainnet and Sepolia via Engine API V1 through V4.")), /*#__PURE__*/React.createElement("a", {
    href: "#quickstart",
    className: "cell-cta",
    style: {
      marginTop: '2rem'
    }
  }, "Get started with Fukuii \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, facts.map(([label, value], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "fact-box",
    style: {
      borderBottom: i < facts.length - 1 ? '1px solid var(--border)' : 'none',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.0625rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em'
    }
  }, value))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "cell-cta"
  }, /*#__PURE__*/React.createElement(GitHub, {
    size: 14
  }), " View on GitHub")))));
}
window.WhatIsFukuii = WhatIsFukuii;
function Networks() {
  const {
    Badge
  } = window.FukuiiDesignSystem_97523a;
  const primary = {
    name: 'Ethereum Classic',
    chain: 'chain 61',
    meta: ['PoW / Ethash', 'SNAP sync', 'Olympia fork'],
    badge: 'Primary'
  };
  const nets = [{
    name: 'Mordor',
    chain: 'chain 63',
    meta: ['PoW / Ethash', 'SNAP sync', 'ETC testnet']
  }, {
    name: 'Ethereum Mainnet',
    chain: 'chain 1',
    meta: ['PoS via Engine API', 'SNAP sync', 'Prague / Electra']
  }, {
    name: 'Sepolia',
    chain: 'chain 11155111',
    meta: ['PoS via Engine API', 'ETH testnet']
  }, {
    name: 'Holesky',
    chain: 'chain 17000',
    meta: ['PoS via Engine API', 'PoS testnet']
  }, {
    name: 'Private & L2 Chains',
    chain: 'custom',
    meta: ['Pluggable consensus', 'PoA · Orbita · OP-compatible'],
    badge: 'Roadmap'
  }];
  const Meta = ({
    m
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      marginTop: '0.625rem'
    }
  }, m.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: i === 0 ? 'var(--text-muted)' : 'var(--text-subtle)'
    }
  }, x)));
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "networks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, "Networks"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: '0.75rem'
    }
  }, "EVM networks."), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Today: Ethereum Classic and Ethereum mainnet, each with their canonical testnet, from a single binary. Tomorrow: Orbita-powered sidechains, OP-compatible L2 rollups, and private consortium chains \u2014 one runtime, many networks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderBottom: 'none',
      padding: '1.75rem',
      background: 'var(--accent-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cell-label",
    style: {
      color: 'var(--accent)'
    }
  }, primary.badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, primary.name)), /*#__PURE__*/React.createElement(Badge, null, primary.chain)), /*#__PURE__*/React.createElement(Meta, {
    m: primary.meta
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      border: '1px solid var(--border)'
    }
  }, nets.map((n, j) => /*#__PURE__*/React.createElement("div", {
    key: n.name,
    style: {
      padding: '1.75rem',
      borderRight: j % 2 === 0 ? '1px solid var(--border)' : undefined,
      borderBottom: j < (nets.length % 2 === 0 ? nets.length - 2 : nets.length - 1) ? '1px solid var(--border)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, n.name), /*#__PURE__*/React.createElement(Badge, null, n.chain)), /*#__PURE__*/React.createElement(Meta, {
    m: n.meta
  }), n.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: n.badge
  })))))));
}
window.Networks = Networks;
function Roadmap() {
  const {
    Badge
  } = window.FukuiiDesignSystem_97523a;
  const phases = [['1', 'fukuii-env', 'In Progress', true], ['2', 'Multi-Instance Runtime', 'Planned', false], ['3', 'Checkpoint Consensus (Orbita PoA)', 'Planned', false], ['4', 'OP-Style Derivation', 'Planned', false]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "roadmap",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, "Roadmap"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Roadmap \u2014 The Orbita Vision"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle",
    style: {
      marginTop: '0.75rem'
    }
  }, "The end state is an execution layer that runs any EVM chain, not just the ones it was compiled for. Four phases get there.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)'
    }
  }, phases.map(([num, name, status, active], i) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '1.25rem 1.75rem',
      borderTop: i === 0 ? 'none' : '1px solid var(--border)',
      background: active ? 'var(--accent-soft)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: active ? 'var(--accent)' : 'var(--text-subtle)'
    }
  }, "Phase ", num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '0.9375rem',
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, name), /*#__PURE__*/React.createElement(Badge, {
    status: status
  }))))));
}
window.Roadmap = Roadmap;
function QuickStart() {
  const {
    CodeBlock
  } = window.FukuiiDesignSystem_97523a;
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "quickstart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: '0.75rem'
    }
  }, "Quick Start"), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Test on Mordor testnet, deploy via Cosign-signed Docker images on GHCR, or pair with any consensus client for Ethereum Sepolia \u2014 all from the same binary. Requires JDK 25 LTS.")), /*#__PURE__*/React.createElement(CodeBlock, {
    label: "docker",
    code: `docker run ghcr.io/chippr-robotics/fukuii --network mordor`
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      marginTop: '1.25rem'
    }
  }, "From an 8 GB home node to a 64 GB+ archive node, the same binary scales from solo operator to institutional deployment.")));
}
window.QuickStart = QuickStart;
function CTA() {
  const {
    Button
  } = window.FukuiiDesignSystem_97523a;
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-glass",
    style: {
      padding: 'clamp(2rem, 5vw, 3.5rem)',
      textAlign: 'center',
      maxWidth: 640,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.25rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      marginBottom: '1rem'
    }
  }, "Run a node. Tell us what you see."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-muted)',
      lineHeight: 1.65,
      marginBottom: '2rem'
    }
  }, "Operator feedback shapes the road to v1.0: sync behavior, peering, resource profiles \u2014 the things only a running node reveals."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient"
  }, "Report an issue"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    rounded: true
  }, "Join discussions")))));
}
window.CTA = CTA;
function Footer() {
  const {
    GitHub
  } = window.FkIcons;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-elev)',
      padding: '2rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-mono)'
    }
  }, "\xA9 2026 Chippr Robotics LLC \xB7 Apache 2.0 \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "package com.chipprbots")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "GitHub",
    style: {
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(GitHub, {
    size: 18
  })))));
}
window.Footer = Footer;
function WhyFukuii() {
  const pillars = [['The preferred stack', 'Trading desks, clearing systems, and sovereign settlement layers already run on the JVM. Scala 3 makes whole classes of consensus-critical bugs unrepresentable — the compiler rejects them before they reach a block. JFR, async-profiler, JMX, and heap dumps work out of the box.'], ['No license meter running', 'Fukuii\u2019s actor runtime is Apache Pekko, the community fork of Akka taken before Lightbend\u2019s move to the Business Source License. No BSL exposure to underwrite \u2014 a line item that matters to legal and procurement at every institution in your stack.'], ['Independent by construction', 'Fukuii shares the EIPs and wire protocol but nothing else: different codebase, language, team, and failure modes. A consensus bug in a Go implementation does not propagate to a JVM one. Where ETC and ETH each lean on a single dominant client, Fukuii is the independent path.'], ['Agentic infrastructure', 'Fukuii ships a Model Context Protocol server that exposes node state, sync progress, peer counts, and block data to any MCP-compatible agent. Automation, anomaly detection, and runbook execution wire straight into a running node \u2014 no custom scripts, no polling.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "why",
    style: {
      background: 'var(--bg-elev)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, "Why Fukuii"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Built for the institutions that can\u2019t afford to be wrong.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid-2",
    style: {
      border: '1px solid var(--border)'
    }
  }, pillars.map(([title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      padding: '2rem',
      borderRight: i % 2 === 0 ? '1px solid var(--border)' : undefined,
      borderTop: i >= 2 ? '1px solid var(--border)' : undefined
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.125rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      marginBottom: '0.75rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--text-muted)',
      lineHeight: 1.7
    }
  }, body))))));
}
window.WhyFukuii = WhyFukuii;
function Stack() {
  const {
    Tag
  } = window.FukuiiDesignSystem_97523a;
  const runtime = [['LANGUAGE', 'Scala 3.3.8 LTS'], ['JDK', 'OpenJDK 25 LTS'], ['ACTOR SYSTEM', 'Apache Pekko 1.6.0'], ['STORAGE', 'RocksDB 10.10.1.1'], ['EFFECTS', 'Cats Effect 3 + fs2'], ['SUPPLY CHAIN', 'SLSA Level 3 \u00b7 CycloneDX SBOM']];
  const tiers = [['Home', '8 GB RAM \u00b7 500 GB'], ['Professional', '16 GB RAM \u00b7 1 TB'], ['Enterprise', '32\u201364 GB RAM \u00b7 2\u20134 TB'], ['Archive', '64 GB+ RAM \u00b7 4 TB+']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-fk",
    id: "stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fk"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, "Runtime stack"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: '0.75rem'
    }
  }, "A current, fully-pinned stack."), /*#__PURE__*/React.createElement("p", {
    className: "section-subtitle"
  }, "Cats Effect 3 and fs2, fully migrated off Monix. Every release ships Cosign keyless signatures and a CycloneDX SBOM.")), /*#__PURE__*/React.createElement("div", {
    className: "cell-grid",
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      marginBottom: '2.5rem'
    }
  }, runtime.map(([label, value]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "cell-fk",
    style: {
      padding: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cell-label"
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9375rem',
      fontWeight: 600,
      color: 'var(--text)'
    }
  }, value)))), /*#__PURE__*/React.createElement("div", {
    className: "protocol-matrix"
  }, tiers.map(([tier, spec]) => /*#__PURE__*/React.createElement("div", {
    key: tier,
    className: "protocol-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "protocol-category"
  }, tier), /*#__PURE__*/React.createElement("div", {
    className: "protocol-tags"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "muted"
  }, spec)))))));
}
window.Stack = Stack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fukuii website — icon set (reproduced from the prod-sprint site sources)
const Svg = ({
  children,
  size = 16,
  stroke,
  fill = 'currentColor',
  vb = '0 0 24 24',
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: vb,
  fill: stroke ? 'none' : fill,
  stroke: stroke ? 'currentColor' : undefined,
  strokeWidth: stroke || undefined,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, rest), children);
const GitHub = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(Svg, _extends({}, p, {
  stroke: p.stroke || 2.5
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const Doc = p => /*#__PURE__*/React.createElement(Svg, _extends({}, p, {
  stroke: 2
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
}));
const Sun = p => /*#__PURE__*/React.createElement(Svg, _extends({}, p, {
  stroke: 2
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
}));
const Moon = p => /*#__PURE__*/React.createElement(Svg, _extends({}, p, {
  stroke: 2
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));
const Scala = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z"
}));
const Jvm = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942z"
}));
const Docker = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.301 2.612-2.176 1.252-1.402 1.994-2.965 2.53-4.311h.218c1.335 0 2.159-.53 2.61-1.122.271-.355.515-.83.317-1.168l-.195-.03z"
}));
const Linux = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.17 1.23.336 1.98.336.744 0 1.39-.166 1.98-.335.24.482.68.83 1.208.946.752.2 1.692-.005 2.616-.471.862-.463 1.96-.399 2.777-.599.405-.131.765-.267.94-.601.174-.339.142-.804-.106-1.483-.074-.242-.016-.572.04-.97.028-.136.055-.338.055-.537.003-.208-.043-.413-.133-.602-.206-.41-.55-.544-.864-.68-.312-.133-.598-.2-.797-.4-.214-.238-.404-.57-.663-.839a.42.42 0 00-.11-.135c.123-.806-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.066-1.49 1.055-5.964-3.17-6.298-.166-.013-.326-.021-.48-.021z"
}));
const Apple = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
}));
const Windows = p => /*#__PURE__*/React.createElement(Svg, _extends({}, p, {
  vb: "0 0 88 88"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12.4L35.7 7.5l.016 34.4-35.7.2zm35.7 33.5.028 34.5L.03 75.5l-.003-29.8zm4.3-38.9L87.3 0v41.5l-47.3.4zm47.3 39.8-.014 41.3-47.3-6.7-.066-34.7z"
}));
Object.assign(window, {
  FkIcons: {
    GitHub,
    ArrowRight,
    Doc,
    Sun,
    Moon,
    Scala,
    Jvm,
    Docker,
    Linux,
    Apple,
    Windows
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Cell = __ds_scope.Cell;

__ds_ns.CellGrid = __ds_scope.CellGrid;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

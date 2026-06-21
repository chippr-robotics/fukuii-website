"use client";

import Image from "next/image";
import { HexCanvas } from "@/components/ui/HexCanvas";

interface Platform {
  label: string;
  icon: React.ReactNode;
}

const STACK: Platform[] = [
  {
    label: "Scala 3",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z" />
      </svg>
    ),
  },
  {
    label: "Pekko",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.416 3.197c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142S16.196-.348 15.42.112zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963z" />
      </svg>
    ),
  },
  {
    label: "JVM",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942z" />
      </svg>
    ),
  },
  {
    label: "RocksDB",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="m19.299 2.519-2.102.985c.006.005.006.014.006.02a.81.81 0 0 0 .303.337c-2.557 1.32-3.643 3.104-3.643 3.104L4.09 12.228a1.183 1.183 0 0 1-1.598-.482 1.183 1.183 0 0 1 .483-1.596l2.771-1.492A2.226 2.226 0 0 0 6.912 6.84l-1.664.894-2.771 1.494a2.23 2.23 0 0 0 2.109 3.927l1.25-.674c-.09.493-.05 1.019.146 1.516.066.17.11.277.11.277.443.96-.14 1.713-.903 1.713h-.242l-.879 3.828a.93.93 0 0 0-.441-.255l-.438 1.802a.923.923 0 0 0 1.061-.521l1.992-3.578c2.522-.246 3.85-1.954 3.79-4.36 2.611.16 6.093-1.48 7.64-3.726 1.175 1.492 3.395 1.28 4.385.902l.19-.064a.93.93 0 0 0-.11.44l1.857-.02a.933.933 0 0 0-.94-.913h-.01l-3.192-.275-.73-1.914v-2.03a.982.982 0 0 0 .483.126c.527 0 .96-.406 1.01-.918l.764-.508-.035-1.03a.19.19 0 0 0-.192-.187l-.955-.014a.73.73 0 0 0-.898-.252z" />
      </svg>
    ),
  },
];

const PLATFORMS: Platform[] = [
  {
    label: "Linux",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.17 1.23.336 1.98.336.744 0 1.39-.166 1.98-.335.24.482.68.83 1.208.946.752.2 1.692-.005 2.616-.471.862-.463 1.96-.399 2.777-.599.405-.131.765-.267.94-.601.174-.339.142-.804-.106-1.483-.074-.242-.016-.572.04-.97.028-.136.055-.338.055-.537.003-.208-.043-.413-.133-.602-.206-.41-.55-.544-.864-.68-.312-.133-.598-.2-.797-.4-.214-.238-.404-.57-.663-.839a.42.42 0 00-.11-.135c.123-.806-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.066-1.49 1.055-5.964-3.17-6.298-.166-.013-.326-.021-.48-.021zm0 1.257c.115 0 .237.004.359.012 2.986.237 2.269 3.748 2.201 5.522-.085 2.079.45 3.338 1.465 4.611.974 1.2 2.051 2.717 2.584 4.264.27.79.404 1.567.215 2.226-.062.218-.194.392-.304.548l-.135.205c-.11-.055-.217-.117-.326-.175-.56-.294-1.195-.528-1.862-.528-.63 0-1.244.173-1.74.474-.496.3-.997.544-1.497.544-.5 0-1.001-.243-1.497-.544a3.11 3.11 0 00-1.74-.474c-.667 0-1.302.234-1.862.528-.11.058-.217.12-.326.175l-.135-.205c-.11-.156-.242-.33-.304-.548-.189-.659-.055-1.436.215-2.226.533-1.547 1.61-3.064 2.584-4.264 1.015-1.273 1.55-2.532 1.465-4.611C10.235 5.017 9.52 1.506 12.504 1.506v-.249z" />
      </svg>
    ),
  },
  {
    label: "macOS",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
  {
    label: "Windows",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 88 88" fill="currentColor">
        <path d="M0 12.4L35.7 7.5l.016 34.4-35.7.2zm35.7 33.5.028 34.5L.03 75.5l-.003-29.8zm4.3-38.9L87.3 0v41.5l-47.3.4zm47.3 39.8-.014 41.3-47.3-6.7-.066-34.7z" />
      </svg>
    ),
  },
  {
    label: "Docker",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.301 2.612-2.176 1.252-1.402 1.994-2.965 2.53-4.311h.218c1.335 0 2.159-.53 2.61-1.122.271-.355.515-.83.317-1.168l-.195-.03z" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)" }}
    >
      <HexCanvas />
      <div className="container-fk" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="cell-grid-2col"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Left cell: brand identity */}
          <div
            className="hero-cell-overlay"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "2.5rem",
              minHeight: 520,
              textAlign: "center",
            }}
          >
            <Image src="/fukuii-hex-logo.svg" alt="" width={320} height={320} priority unoptimized aria-hidden="true" style={{ marginTop: "2rem" }} />

            <p
              style={{
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                textAlign: "center",
                width: "100%",
                padding: "0 1.25rem",
                marginTop: "1.5rem",
              }}
            >
              AN <span style={{ color: "var(--accent)" }}>EXECUTION CLIENT</span><br />BUILT FOR GLOBAL FINANCE
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginTop: "auto", paddingTop: "2rem", width: "100%" }}>
              <a
                href="https://github.com/chippr-robotics/fukuii/releases"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "1px solid var(--accent)",
                  padding: "0.75rem 1.75rem",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Download Fukuii
              </a>
            </div>

            <div className="os-platform-row" style={{ justifyContent: "center", marginBlock: "1rem 0" }}>
              {PLATFORMS.map((p) => (
                <span key={p.label} className="os-pill">
                  {p.icon}
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right cell: content */}
          <div
            className="hero-cell-overlay"
            style={{
              position: "relative",
              padding: "2.5rem clamp(2rem, 4vw, 3.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              borderLeft: "1px solid var(--border)",
            }}
          >
            <div className="badge-fk badge-gold" style={{ position: "absolute", top: "1.25rem", left: "clamp(2rem, 4vw, 3.5rem)" }}>
              <span className="badge-pulse-dot" />
              Alpha v0.7
            </div>

            <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    color: "var(--text)",
                    lineHeight: 1.1,
                  }}
                >
                  FUKUII
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "var(--text-subtle)",
                    marginTop: "0.375rem",
                  }}
                >
                  Ethereum Virtual Machine Client
                </div>
              </div>

              <p
                style={{
                  fontSize: "clamp(0.9375rem, 1.2vw + 0.5rem, 1.0625rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: "52ch",

                }}
              >
                Fukuii is a Scala execution client for the wider Ethereum Virtual Machine ecosystem.
                It is feature-complete, with native support for established
                EVM execution configurations and consensus models. Built with intention, Fukuii serves
                institutional digital custodians, global financial institutions, and sovereign wealth
                funds, while remaining lightweight enough for the solo operator. Because it runs on the
                JVM, its stack aligns natively with the infrastructure of modern finance: the trading
                desks, clearing systems, and settlement layers already built there.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "auto", paddingTop: "2rem", justifyContent: "center" }}>
              <a
                href="/guide"
                style={{
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-muted)",
                  padding: "0.75rem 1.75rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Quick Start
              </a>
            </div>

            <div className="os-platform-row" style={{ justifyContent: "center", marginBlock: "1rem 0" }}>
              {STACK.map((s) => (
                <span key={s.label} className="os-pill">
                  {s.icon}
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

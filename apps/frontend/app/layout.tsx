import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const CANONICAL_URL = "https://chippr-robotics.github.io/fukuii";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: "Fukuii — Multi-EVM Execution Client",
    template: "%s · Fukuii",
  },
  description:
    "Multi-EVM execution client in Scala 3. Native PoW for Ethereum Classic, Engine API V1–V4 for Ethereum. One binary, any network. SLSA Level 3 provenance, MCP server, SNAP sync.",
  keywords: [
    "ethereum classic",
    "ETC",
    "EVM",
    "execution client",
    "Scala",
    "JVM",
    "Engine API",
    "SNAP sync",
    "Olympia",
    "blockchain node",
    "Sepolia",
    "MCP server",
    "SLSA",
  ],
  authors: [{ name: "Chippr Robotics LLC" }],
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Fukuii",
    title: "Fukuii — Multi-EVM Execution Client",
    description:
      "One binary, any network. Native PoW for Ethereum Classic, Engine API for Ethereum. Scala 3 · SLSA L3 · MCP.",
    images: [
      {
        url: "/og-fukuii.png",
        width: 1200,
        height: 630,
        alt: "Fukuii — Multi-EVM execution client",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fukuii — Multi-EVM Execution Client",
    description:
      "One binary, any network. Native PoW for Ethereum Classic, Engine API for Ethereum. Scala 3 · SLSA L3 · MCP.",
    images: ["/og-fukuii.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: CANONICAL_URL },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chippr Robotics LLC",
  url: CANONICAL_URL,
  logo: `${CANONICAL_URL}/fukuii-hex-logo.png`,
  sameAs: [
    "https://github.com/chippr-robotics/fukuii",
    "https://hub.docker.com/r/chipprbots/fukuii",
  ],
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fukuii",
  applicationCategory: "BlockchainApplication",
  operatingSystem: "Linux, macOS, Windows",
  license: "https://opensource.org/licenses/Apache-2.0",
  description:
    "Multi-EVM execution client in Scala 3 with native PoW for Ethereum Classic and Engine API V1–V4 for Ethereum.",
  downloadUrl: "https://github.com/chippr-robotics/fukuii/releases",
  codeRepository: "https://github.com/chippr-robotics/fukuii",
  programmingLanguage: "Scala",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
      </head>
      <body className="noise-overlay min-h-screen">{children}</body>
    </html>
  );
}

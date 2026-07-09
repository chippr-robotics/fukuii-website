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

const CANONICAL_URL = "https://fukuii.com";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: "Fukuii — Scala EVM Execution Client",
    template: "%s · Fukuii",
  },
  description:
    "Fukuii is a Scala execution client for Ethereum and the EVM ecosystem. Feature-complete, signed and SBOM-verifiable, open source, from solo operators to institutional infrastructure.",
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
    "institutional",
    "sovereign",
    "agentic",
    "Apache Pekko",
    "enterprise node",
  ],
  authors: [{ name: "Chippr Robotics LLC" }],
  creator: "Chippr Robotics LLC",
  formatDetection: { telephone: false, email: false },
  appleWebApp: {
    capable: true,
    title: "Fukuii",
    statusBarStyle: "black-translucent",
  },
  other: { "color-scheme": "dark" },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Fukuii",
    locale: "en_US",
    title: "Fukuii — Scala EVM Execution Client",
    description:
      "Feature-complete Scala EVM execution client for Ethereum Classic and Ethereum. A type system that catches consensus bugs at compile time, built-in MCP server, signed build provenance. One binary, any EVM network.",
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
    title: "Fukuii — Scala EVM Execution Client",
    description:
      "Feature-complete Scala EVM execution client for Ethereum Classic and Ethereum. A type system that catches consensus bugs at compile time, built-in MCP server, signed build provenance. One binary, any EVM network.",
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
    "Fukuii is a Scala execution client for Ethereum and the EVM ecosystem. Feature-complete, signed and SBOM-verifiable, open source, from solo operators to institutional infrastructure.",
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

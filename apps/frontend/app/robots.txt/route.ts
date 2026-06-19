import { NextResponse } from "next/server";

export function GET(): NextResponse {
  const base = "https://chippr-robotics.github.io/fukuii";

  const body = `User-agent: *
Allow: /

# LLM crawlers — explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Cohere-AI
Allow: /

User-agent: Bytespider
Allow: /

# Social previews
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

Sitemap: ${base}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import { siteConfig } from "@/config/seo";

export async function GET(_request: Request) {
  const robots = `
  User-agent: *
  Allow: /
  Sitemap: ${siteConfig.url}/sitemap.xml
  `;

  return new Response(robots);
}

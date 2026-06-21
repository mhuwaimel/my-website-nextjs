import { ENV } from "@/lib/constant";

export async function GET(_request: Request) {
  const robots = `
  User-agent: *
  Allow: /
  Sitemap: ${ENV.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml
  `;

  return new Response(robots);
}

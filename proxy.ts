import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const legacyProjectSlugs: Record<string, string> = {
  "17b4bb3c-faff-4387-bf32-b1fa0a410527": "e-training-management-system",
  "ff88e45e-0b4b-48e5-a2b0-21c0a7c81f9c": "school-leadership-system",
  "89afb0cd-ee33-46dd-83ce-642ff933590c": "educational-supervisor-visits",
  "58c27c03-ef89-4779-8781-01c5a574f112": "madrasati-analytics",
  "db287f56-a7a2-4b40-ad16-3afea7559793": "supervisory-notes-achievement",
  "c075c1a4-722e-4efb-aab9-fbf2ee715a2e": "django-nextjs-portfolio",
  "b8927016-8f85-480f-a487-1fe185651960": "kashif-omr",
  "16d754d2-62b6-43b0-bc0a-bbe931250e85": "nextjs-portfolio",
  "abf488ec-26b6-4f19-84dd-f3466d4566f2": "sanad-education-platform",
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  let shouldRedirect = false;
  const requestHost = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.hostname)
    .split(":")[0]
    .toLowerCase();

  if (requestHost === "www.mohammedh.sa") {
    url.protocol = "https:";
    url.hostname = "mohammedh.sa";
    url.port = "";
    shouldRedirect = true;
  }

  const segments = url.pathname.split("/").filter(Boolean);
  const projectIndex = segments[0] === "en" ? 1 : 0;
  if (segments[projectIndex] === "projects") {
    const legacyId = segments[projectIndex + 1];
    const slug = legacyProjectSlugs[legacyId];
    if (slug) {
      segments[projectIndex + 1] = slug;
      url.pathname = `/${segments.join("/")}`;
      shouldRedirect = true;
    }
  }

  return shouldRedirect ? NextResponse.redirect(url, 308) : NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

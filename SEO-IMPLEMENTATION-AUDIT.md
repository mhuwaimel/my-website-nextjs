# SEO Implementation Audit — mohammedh.sa

**Audit date:** 14 July 2026  
**Scope:** Next.js App Router codebase, deployed public responses, home page, main section pages, and project-detail template  
**Site type assumed:** Arabic-first personal portfolio for a Saudi education-sector leader and web developer, with an English interface preference.  
**Primary SEO goal assumed:** Improve discoverability for the person’s name, professional roles, education-technology work, and portfolio projects.

## Executive summary

The site has a sound SEO foundation. It is accessible over HTTPS, `robots.txt` permits crawling, `sitemap.xml` is valid and referenced from `robots.txt`, all 14 sitemap URLs returned `200`, canonicals are absolute and self-referencing, and the pages have specific Arabic titles and descriptions. The home page also exposes a server-rendered `Person` JSON-LD entity, plus complete Open Graph and X/Twitter metadata.

The main opportunity is to turn this solid foundation into a durable, indexable content architecture. The non-home pages and all project pages have no `<h1>`. Project-detail descriptions are reused as metadata and reach 251–381 characters, making them likely candidates for search-result truncation. English content is only a local-storage client preference at the same Arabic URL, so it is not independently crawlable or eligible for reliable English-language targeting. The GitHub page fetches its central content only after hydration, meaning its repository list is absent from the initial HTML.

The code also preloads eight local fonts on the home page and marks every `CustomImage` as `priority`, including every image in a project carousel. This is avoidable competition for mobile LCP. Field Core Web Vitals were not available in the supplied repository or authenticated Search Console access, so these are code-backed performance risks rather than claimed CWV failures.

## SEO Health Index

**Overall score: 72 / 100 — Fair**

This is an implementation-readiness score, not a prediction of rankings. It does not include backlinks, competition, Search Console coverage, or real-user Core Web Vitals.

| Category | Score | Weight | Weighted contribution | What limits the score |
| --- | ---: | ---: | ---: | --- |
| Crawlability & Indexation | 85 | 30% | 25.5 | English has no crawlable URL; no explicit `llms.txt` guidance. |
| Technical Foundations | 67 | 25% | 16.8 | Eight font preloads, indiscriminate image preloads, lint errors, and limited response security headers. |
| On-Page Optimization | 62 | 20% | 12.4 | Missing H1s beyond the home page; project metadata is too long and not purpose-written. |
| Content Quality & E-E-A-T | 65 | 15% | 9.8 | Thin project narratives, no project/entity markup, and no visible publication/update or authorship context on portfolio templates. |
| Authority & Trust Signals | 75 | 10% | 7.5 | Strong first-party identity and social profiles, but little machine-readable evidence across deeper pages. |
| **Total** |  | **100%** | **72.0** |  |

### Technical SEO scorecard

| Area | Status | Score | Evidence-based assessment |
| --- | --- | ---: | --- |
| Crawlability | Pass | 93 | Deployed `robots.txt` permits `/` and points to `/sitemap.xml`. |
| Indexability | Warn | 85 | Canonicals are correct; no separate English URLs exist. |
| Security | Warn | 75 | HTTPS and HSTS are present; CSP, `X-Frame-Options`, and `Referrer-Policy` were absent in sampled public responses. |
| URL structure | Warn | 80 | Routes are clean, but project URLs are opaque UUIDs rather than descriptive slugs. |
| Mobile | Warn | 75 | Responsive classes are present; rendering/lab and field mobile checks were not available. |
| Core Web Vitals | Warn | 60 | Source and deployed preload evidence indicates unnecessary critical-request pressure; no CrUX data was available. |
| Structured data | Warn | 65 | A valid-looking `Person` graph appears on the home page only. |
| JavaScript rendering | Warn | 70 | Core Arabic content is present in initial HTML, but GitHub data and language switching depend on client JavaScript. |
| IndexNow | Backlog | 40 | No implementation was found. This is optional, but useful for Bing and other participating engines. |

## Observations

### Confirmed strengths

- **Crawling and sitemap are working.** The deployed [`/robots.txt`](https://mohammedh.sa/robots.txt) returns `200`, allows all paths, and references [`/sitemap.xml`](https://mohammedh.sa/sitemap.xml). The sitemap contains 14 canonical URLs; every listed URL returned `200` during this audit.
- **Canonicalization is correctly implemented.** `metadataBase` is set in [`app/layout.tsx`](./app/layout.tsx), and the deployed home, section, and project pages return absolute, self-referencing canonical URLs.
- **Arabic defaults are explicit.** The rendered document uses `lang="ar"` and `dir="rtl"`; the global Open Graph locale is `ar_SA`. This aligns with the Arabic-first target market.
- **Social metadata is comprehensive.** The layout supplies Open Graph and X/Twitter defaults, while `projects`, `experience`, `contact`, `github`, and project-detail pages override titles, descriptions, canonical URLs, and social data.
- **The home page establishes a clear entity.** [`app/page.tsx`](./app/page.tsx) emits a server-rendered `Person` JSON-LD graph with Arabic and Latin names, job title, site URL, skills, GitHub, and LinkedIn.
- **Important Arabic content is server-rendered.** Although much of the UI is implemented as client components, the deployed initial HTML includes the home-page H1, biography, navigation, and project/experience headings. Search crawlers do not need to wait for hydration to see that baseline content.
- **Images generally use `next/image`.** Cards, the hero, and galleries use Next.js image optimization instead of raw content images. This supports responsive image delivery when priorities are scoped correctly.
- **Transport security is in place.** Public responses use HTTPS and send `Strict-Transport-Security: max-age=63072000`.

### Findings

#### F1 — Secondary and project-detail pages have no H1

| Field | Assessment |
| --- | --- |
| Category | On-Page Optimization |
| Severity / confidence | High / High |
| Evidence | The deployed `/projects`, `/experience`, `/github`, and `/contact` pages each contain `0` H1 elements and one H2. All nine project-detail URLs contain `0` H1 and `0` H2 elements. In code, section headings use `<h2>` in `components/Projects/project-grid.tsx`, `components/Experience/ExperienceCard.tsx`, `components/GitHub/ProjectList.tsx`, and `components/Contact/Contact-Form.tsx`; the project title is a `<p>` in `components/Projects/project-gallery.tsx`. |
| Why it matters | The page topic is less explicit to crawlers, assistive technology, and document-outline tools. The issue affects every indexable template beyond the home page. |
| Score impact | −10 raw points from On-Page Optimization. |
| Recommendation | Use one descriptive H1 as the primary page title on every indexable route. Retain H2/H3 for subsections. |

#### F2 — English content is not independently indexable

| Field | Assessment |
| --- | --- |
| Category | Crawlability & Indexation |
| Severity / confidence | Medium / High |
| Evidence | [`PreferencesProvider.tsx`](./components/providers/PreferencesProvider.tsx) reads direction from `localStorage`, changes `<html lang>` after hydration, and changes `document.title` in an effect. The deployed URLs all return `lang="ar"`; only the home page exposes `hreflang="ar-SA"`, and there are no `/en/...` routes or English alternate URLs in the sitemap. |
| Why it matters | A crawler generally indexes the server response at a URL. It cannot reliably select the visitor’s local language preference, so English copy, titles, and project translations cannot build their own search presence. |
| Score impact | −5 raw points from Crawlability & Indexation. |
| Recommendation | If English organic visibility is a goal, create real locale routes such as `/ar/...` and `/en/...`, generate locale-specific metadata, and add reciprocal `hreflang` alternates. Do not add `hreflang="en"` to the current Arabic URL: each alternate must serve the corresponding language directly. |

#### F3 — Seven project descriptions are too long for focused search snippets

| Field | Assessment |
| --- | --- |
| Category | On-Page Optimization |
| Severity / confidence | Medium / High |
| Evidence | `generateMetadata` in [`app/projects/[id]/page.tsx`](./app/projects/[id]/page.tsx) assigns `project.Description_All` directly to `description`, Open Graph, and X metadata. Deployed project descriptions range from 49 to 381 characters; seven are 251–381 characters. Example: the e-training project is 331 characters. |
| Why it matters | Google may rewrite any description, but very long generic body copy gives less control over the query-focused result snippet and social preview. |
| Score impact | −5 raw points from On-Page Optimization. |
| Recommendation | Write a unique 120–160-character Arabic description for each project, focused on the problem, solution, and audience. Keep the fuller case-study summary in the body. |

#### F4 — The GitHub portfolio content is client-only

| Field | Assessment |
| --- | --- |
| Category | Content Quality & E-E-A-T |
| Severity / confidence | Medium / High |
| Evidence | [`components/GitHub/ProjectList.tsx`](./components/GitHub/ProjectList.tsx) calls GitHub’s API inside `useEffect`. The initial deployed `/github` HTML includes the page heading and the loading state, not repository names or descriptions. |
| Why it matters | The page’s main differentiating content depends on JavaScript and an external request. This weakens crawl reliability, provides little indexable detail, and can leave the page thin during API failure or rate limiting. |
| Score impact | −5 raw points from Content Quality & E-E-A-T. |
| Recommendation | Fetch repositories on the server with revalidation, pass them as initial data to the client component, and retain a static curated-project summary as a fallback. |

#### F5 — Font and image priorities create avoidable LCP pressure

| Field | Assessment |
| --- | --- |
| Category | Technical Foundations |
| Severity / confidence | High / High |
| Evidence | [`config/fonts.ts`](./config/fonts.ts) defines eight local fonts and [`app/layout.tsx`](./app/layout.tsx) applies all eight generated class names to `<body>`. The deployed home HTML preloads all eight font files. [`components/CustomImage.tsx`](./components/CustomImage.tsx) always sets `priority`; project galleries use this component for every carousel image. A deployed two-image project page consequently preloads both 1920/3840px gallery images. |
| Why it matters | The browser is asked to fetch many non-LCP assets at high priority. This can delay the actual largest contentful element, particularly on mobile networks. |
| Score impact | −10 raw points from Technical Foundations. |
| Recommendation | Load only the fonts used above the fold, use WOFF2 where possible, and reserve `priority` for the single true LCP image. Let non-visible gallery slides lazy-load. |

#### F6 — Structured data ends at the home page

| Field | Assessment |
| --- | --- |
| Severity / confidence | Medium / High |
| Evidence | The home page has one `application/ld+json` script from [`app/page.tsx`](./app/page.tsx). The deployed `/projects`, `/experience`, `/contact`, `/github`, and sampled project-detail page contain none. |
| Why it matters | The site has a strong person entity but does not connect individual work samples and the professional profile in machine-readable form. Structured data does not guarantee rich results, but it can improve entity understanding. |
| Score impact | −5 raw points from Content Quality & E-E-A-T. |
| Recommendation | Keep `Person` on the home page and add a `CreativeWork` graph for project pages, linked with `author` to the person URL. Add `WebSite`/`ProfilePage` context only when the on-page facts fully support it. |

#### F7 — AI-search guidance is absent, though crawlers are currently open

| Field | Assessment |
| --- | --- |
| Category | Authority & Trust Signals |
| Severity / confidence | Low / High |
| Evidence | `/llms.txt` returns `404`. The deployed `robots.txt` contains only `User-Agent: *` with `Allow: /`; therefore GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, and PerplexityBot are not explicitly blocked. No AI-specific policy is documented. |
| Why it matters | The default rule permits access, which is good for discoverability, but it does not communicate key pages, factual claims, or an intentional AI-crawler policy. |
| Score impact | −2 raw points from Authority & Trust Signals. |
| Recommendation | Decide whether the goal is AI-search citation, model-training exclusion, or both. Keep search-oriented bots accessible if citation visibility is desired, then publish a concise `llms.txt`. Treat this as an emerging GEO enhancement, not a traditional Google ranking factor. |

#### F8 — Project pages lack case-study depth and trust context

| Field | Assessment |
| --- | --- |
| Category | Content Quality & E-E-A-T |
| Severity / confidence | Medium / High |
| Evidence | Project pages render a title, one descriptive paragraph, technology list, gallery, and outbound link in [`components/Projects/project-gallery.tsx`](./components/Projects/project-gallery.tsx). They do not expose a published/updated date, role/scope, measurable outcome, source/citation, or project-specific author context. Several descriptions are only 49 characters in metadata. |
| Why it matters | Search systems and users have limited evidence for expertise and distinct project value. This also reduces the chance of a self-contained passage being cited in AI results. |
| Score impact | −5 raw points from Content Quality & E-E-A-T. |
| Recommendation | Turn important projects into concise case studies: challenge, role, implementation, technologies, measurable result, date, and a verifiable project/repository link. |

#### F9 — The CV call-to-action is a dead internal link

| Field | Assessment |
| --- | --- |
| Category | On-Page Optimization |
| Severity / confidence | Low / High |
| Evidence | The primary CTA in [`components/Hero/hero.tsx`](./components/Hero/hero.tsx) uses `href="#"`, while a public CV exists at `public/Resume/Cv-english.pdf`. |
| Why it matters | It is a poor user experience and misses an opportunity to present a crawlable, correctly linked professional document. |
| Score impact | −2 raw points from On-Page Optimization. |
| Recommendation | Link to the real document, add a descriptive label, and ensure the PDF has a meaningful title, selectable text, language, and a concise filename. |

#### F10 — Response hardening is incomplete

| Field | Assessment |
| --- | --- |
| Category | Technical Foundations |
| Severity / confidence | Low / High |
| Evidence | Sampled responses send HSTS but no `Content-Security-Policy`, `X-Frame-Options`, or `Referrer-Policy`. [`next.config.ts`](./next.config.ts) is currently empty. |
| Why it matters | These headers are not direct ranking signals, but they reduce security risk and reinforce a trustworthy technical baseline. |
| Score impact | −3 raw points from Technical Foundations. |
| Recommendation | Add headers carefully, testing analytics and image/asset routes before deployment. |

## Detailed, copy-ready recommendations

### 1. Add semantic H1s to every indexable template

Use the main page title as the only H1. For a project detail page, change the title element rather than styling a paragraph as a heading.

```tsx
// components/Projects/project-gallery.tsx
// The visual styles can remain unchanged; only the document semantics change.
<h1 className="md:text-3xl font-bold text-right font-[Cairo] text-xl text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
  {project.Title}
</h1>

// Follow with meaningful H2 sections. They make the case study scannable.
<h2 className="text-xl font-semibold">{t.project.overview}</h2>
<p>{project.Description_All}</p>

<h2 className="text-xl font-semibold">{t.project.technologies}</h2>
```

Apply the same rule to the page-level title in projects, experience, GitHub, and contact components: make the current section heading an H1. Do not introduce multiple H1s merely for styling.

### 2. Make project metadata concise and purpose-written

Store a separate `metaDescription` per project. Do not slice arbitrary text in the final implementation if an editor can write the description; the helper below is a safe temporary guardrail.

```ts
// lib/seo.ts
export function toMetaDescription(text: string, maxLength = 155) {
  const clean = text.replace(/\s+/g, " ").trim();

  if (clean.length <= maxLength) return clean;

  // Avoid cutting Arabic words in the middle when shortening the fallback.
  const lastSpace = clean.lastIndexOf(" ", maxLength);
  const end = lastSpace > maxLength * 0.65 ? lastSpace : maxLength;
  return `${clean.slice(0, end).trimEnd()}…`;
}
```

```tsx
// app/projects/[id]/page.tsx
import { toMetaDescription } from "@/lib/seo";

// Prefer project.metaDescription once it is added to the project data model.
const description = toMetaDescription(project.Description_All);

return {
  title: project.Title.trim(),
  description,
  alternates: { canonical: `/projects/${id}` },
  openGraph: {
    type: "article",
    url: `/projects/${id}`,
    title: project.Title.trim(),
    description,
    images: [`/api/og?projectId=${id}`],
  },
};
```

Example target copy for the training system (about 145 characters):

> نظام تدريب إلكتروني لإدارة الترشيح والتسجيل والحضور والشهادات والتقارير لقسم التدريب والابتعاث في تعليم القويعية.

### 3. Serve the GitHub page’s key content from the server

Fetch the repositories in the route so their names and descriptions appear in the original HTML. Revalidate daily to avoid a deployment for every repository update.

```tsx
// app/github/page.tsx
import GitHubProjectList, {
  type GitHubRepo,
} from "@/components/GitHub/ProjectList";

export const revalidate = 86_400; // Refresh the cached data once per day.

async function getRepositories(): Promise<GitHubRepo[]> {
  const response = await fetch(
    "https://api.github.com/users/mhuwaimel/repos?sort=updated&per_page=12",
    { next: { revalidate } },
  );

  if (!response.ok) return [];
  return response.json();
}

export default async function GitHubPage() {
  const repositories = await getRepositories();
  return <GitHubProjectList initialRepos={repositories} />;
}
```

```tsx
// components/GitHub/ProjectList.tsx
// Keep this as a client component only if it needs client interaction.
export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};

export default function GitHubProjectList({
  initialRepos,
}: {
  initialRepos: GitHubRepo[];
}) {
  // Initial render now has indexable repository data.
  const [repos] = useState(initialRepos);
  // ...render the existing repository cards
}
```

If live GitHub data is not essential, a static curated set of five to ten relevant repositories is even more stable and easier to describe semantically.

### 4. Reduce fonts and scope image `priority` to LCP

Use only the one or two font families that are actually visible on the first render. The current layout applies every configured font class to the body, causing eight font preloads.

```tsx
// app/layout.tsx
// Keep one primary Arabic body font. Add another class only where that font is needed.
<body className={`${tajawal.className} antialiased`}>
  {children}
</body>
```

Make `priority` opt-in. The hero image can use it; carousel slides should not.

```tsx
// components/CustomImage.tsx
"use client";

import Image, { type ImageProps } from "next/image";
import React from "react";

type CustomImageProps = ImageProps & {
  priority?: boolean;
};

function CustomImage({
  alt,
  src: initialSrc,
  priority = false, // Lazy-load unless this is the actual LCP image.
  ...props
}: CustomImageProps) {
  const [src, setSrc] = React.useState<ImageProps["src"]>(initialSrc);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      priority={priority}
      onError={() => setSrc("/notImg.jpg")}
    />
  );
}
```

```tsx
// Hero: the likely LCP image may be prioritized.
<CustomImage src="/assets/hero.jpg" alt={t.hero.portraitAlt} fill priority />

// Gallery: only the first, visible slide may be prioritized.
{filterarray.imgs.map((filter, index) => (
  <CustomImage
    key={filter.id}
    src={filter.img}
    width={1920}
    height={1080}
    alt={`${t.project.galleryImage} ${index + 1}`}
    priority={index === 0}
  />
))}
```

After deploying, measure mobile LCP, INP, and CLS using Search Console’s Core Web Vitals report and PageSpeed Insights. Targets are LCP under 2.5 seconds, INP under 200 ms, and CLS under 0.1 at the 75th percentile.

### 5. Create crawlable Arabic and English versions only if both markets matter

Use a locale segment rather than a browser-only toggle. This makes each language a distinct document that can have matching HTML `lang`, metadata, canonical URL, and `hreflang` alternate. The sample assumes the current top-level layout and pages are moved under `app/[locale]/`; do not nest a second `<html>` element below the existing `app/layout.tsx`.

```tsx
// app/[locale]/layout.tsx
// Make this the root layout for locale routes after moving the current shared
// layout here. Redirect `/` to `/ar` with middleware or a minimal root route.
import type { Metadata } from "next";

const supportedLocales = ["ar", "en"] as const;
type Locale = (typeof supportedLocales)[number];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic ? "محمد عبدالعزيز الهويمل" : "Mohammed AlHuwimmel",
    description: isArabic
      ? "مبرمج ومشرف تربوي متخصص في أنظمة الويب التعليمية."
      : "Developer and educational supervisor specializing in web systems for education.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "ar-SA": "/ar",
        en: "/en",
        "x-default": "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>{children}</html>;
}
```

Redirect `/` to `/ar` or retain `/` as the Arabic canonical and only add `/en` with reciprocal alternates. Whichever structure is chosen, include every localized project URL in the sitemap.

### 6. Extend structured data to project work

Use JSON-LD that matches visible content. The following `CreativeWork` graph is an entity-understanding enhancement; it does not promise a Google rich result.

```tsx
// app/projects/[id]/page.tsx
const projectJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.Title.trim(),
  description: project.Description_All.trim(),
  url: `${siteConfig.url}/projects/${id}`,
  image: `${siteConfig.url}/api/og?projectId=${id}`,
  keywords: project.keyWords.join(", "),
  author: {
    "@type": "Person",
    name: "محمد عبدالعزيز الهويمل",
    url: siteConfig.url,
  },
};

return (
  <>
    <script
      type="application/ld+json"
      // JSON.stringify prevents malformed JSON-LD from normal data values.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
    />
    <ProjectGallery projectId={id} />
  </>
);
```

Validate each rendered page with Google’s [Rich Results Test](https://search.google.com/test/rich-results) and Schema.org’s [Schema Markup Validator](https://validator.schema.org/) after deployment. Validation confirms syntax and eligibility signals; it does not guarantee a display feature.

### 7. Publish an intentional robots policy and `llms.txt`

The existing `robots.txt` is functional. Move it to Next.js metadata generation only if a programmatic policy is useful; do not serve competing root robots implementations. The example below keeps general web and AI-search access open.

```ts
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly document the AI-search policy. These are already allowed
      // by the wildcard rule, but named rules make the intent reviewable.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    sitemap: "https://mohammedh.sa/sitemap.xml",
  };
}
```

If you want AI-search citations but do **not** want to opt into model-training crawlers, decide and document the trade-off separately. For example, blocking `GPTBot` can restrict OpenAI training access but does not block `ChatGPT-User` browsing. Review each crawler’s current policy before changing production rules.

```txt
# public/llms.txt
# Mohammed AlHuwimmel
> Arabic-first professional portfolio for Mohammed AlHuwimmel, a web developer and educational supervisor in Saudi Arabia.

## Primary pages
- [About](https://mohammedh.sa/): Professional profile, expertise, and contact details.
- [Professional experience](https://mohammedh.sa/experience): Career timeline in software and educational leadership.
- [Projects](https://mohammedh.sa/projects): Education-technology systems and software case studies.

## Entity details
- Name: Mohammed Abdulaziz AlHuwimmel (محمد عبدالعزيز الهويمل)
- Location: Riyadh, Saudi Arabia
- Profiles: https://github.com/mhuwaimel and https://www.linkedin.com/in/mhuwimmel/
```

`llms.txt` is an emerging convention, not a replacement for crawlable HTML, sitemaps, structured data, or authoritative citations.

### 8. Add safe baseline security headers

Start with headers that do not require nonces. A strict CSP needs testing because the application currently uses an inline preference script and Umami analytics.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 9. Upgrade content for E-E-A-T and AI citation readiness

For each flagship project, add these visible sections below the H1:

1. **What it is:** a 100–160-word, self-contained answer paragraph that defines the system and audience.
2. **The problem:** what operational or educational bottleneck existed.
3. **Role and implementation:** the author’s role, stack, integrations, and relevant constraints.
4. **Outcome:** a specific result or bounded claim, e.g., records processed, time reduced, teams served, or capability delivered. Attribute figures to the project or explain the measurement date.
5. **Evidence and links:** repository, live product where public, screenshots with descriptive captions, and appropriately safe supporting documentation.
6. **Date and ownership:** `Published`/`Updated` and a byline linking back to the home profile.

Use question-oriented H2s where they match user intent, such as **«ما هو نظام التدريب الإلكتروني؟»**, **«كيف يدير النظام التسجيل والشهادات؟»**, and **«ما التقنيات المستخدمة؟»**. This produces extractable passages without keyword stuffing.

## Prioritized action plan

### High-impact improvements

- **Fix F1:** Add one H1 to every section and project template. **Expected recovery: 6–10 points** in On-Page Optimization.
- **Fix F5:** Limit fonts and scope image priority to the actual LCP element. Validate mobile CWV after release. **Expected recovery: 6–10 points** in Technical Foundations.
- **Fix F2:** Decide whether English search traffic is in scope. If it is, ship locale URLs, reciprocal `hreflang`, localized canonicals, and sitemap entries together. **Expected recovery: 3–6 points** in Crawlability & Indexation.
- **Fix F4:** SSR/ISR the GitHub repository content and preserve a static fallback. **Expected recovery: 3–5 points** in Content Quality & E-E-A-T.

### Quick wins

- **Fix F3:** Add short, specific Arabic metadata to every project. **Expected recovery: 3–5 points** in On-Page Optimization.
- **Fix F9:** Replace `href="#"` with the actual CV URL and improve the document metadata. **Expected recovery: 1–2 points** in On-Page Optimization.
- **Fix F10:** Add baseline security headers and test analytics/contact behavior. **Expected recovery: 1–3 points** in Technical Foundations.
- Ensure the logo alt text says the actual brand/person name rather than `logo` in `components/Shared/NavBar.tsx`.

### Longer-term opportunities

- **Fix F6 and F8:** Make every major project a concise case study and add accurate `CreativeWork` JSON-LD. **Expected recovery: 5–10 points** in Content Quality & E-E-A-T.
- **Fix F7:** Publish `llms.txt` and maintain an intentional AI-crawler policy. **Expected recovery: 1–3 points** in Authority & Trust Signals; this is primarily a GEO enhancement.
- Add descriptive project slugs with permanent 301 redirects from existing UUID URLs only when a migration plan and canonical update are ready. Do not change indexed URLs without redirects.
- Consider IndexNow after content is published or substantially updated to speed discovery in participating non-Google engines.

## Validation checklist after implementation

- [ ] Run `npm run typecheck`, `npm run lint`, and `npm run build`. During this audit, type-checking passed, while ESLint reported two errors: a render-time ref rule in `components/Shared/Reveal.tsx` and a synchronous state update in `PreferencesProvider.tsx`.
- [ ] Request `/`, `/robots.txt`, `/sitemap.xml`, every localized URL, and a sample of project URLs. Confirm `200`, a single canonical URL, and no accidental `noindex`.
- [ ] Verify exactly one H1 on every indexable route using rendered HTML, not only the component source.
- [ ] Inspect the server response for the GitHub page and ensure repository names/descriptions are present before JavaScript runs.
- [ ] Validate `Person` and `CreativeWork` JSON-LD after deployment.
- [ ] Use Search Console to inspect the sitemap and URL indexing status; submit locale routes only after their canonicals and `hreflang` are live.
- [ ] Measure mobile field data in Search Console and lab data in PageSpeed Insights before and after the font/image changes.
- [ ] Check robots directives and `/llms.txt` from production after deployment.

## Limitations

This audit did not include Google Search Console, Bing Webmaster Tools, analytics, backlink data, server logs, or authenticated CrUX access. It therefore assesses implementation readiness and public HTTP/HTML behavior, not current indexed-page counts, rankings, manual actions, or traffic. The deployed code and repository should be kept in sync before applying changes: the report is based on the repository and public responses observed on the audit date.

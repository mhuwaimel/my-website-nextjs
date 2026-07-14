import "./globals.css";
import type { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { Toaster } from "sonner";

import { PreferencesProvider } from "@/components/providers/PreferencesProvider";
import Navbar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";

import { siteConfig } from "@/config/seo";
import {
  tajawal,
} from "@/config/fonts";

export const metadata = {
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  authors: [{ name: siteConfig.name, url: "https://github.com/mhuwaimel" }],
  title: {
    default: siteConfig.longTitle,
    template: `${siteConfig.title} | %s`,
  },
  verification: { google: siteConfig.verification },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: "/api/og",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/assets/web-app-manifest-512x512.png",
    apple: "/assets/web-app-manifest-512x512.png",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mohdaziz_9",
    images: "/api/og",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6936f5",
};

// Applied before hydration so direction + theme never flash on first paint.
const noFlashScript = `
(function(){try{
  var d=localStorage.getItem('pref-dir');
  var t=localStorage.getItem('pref-theme');
  var html=document.documentElement;
  if(d==='rtl'||d==='ltr'){html.setAttribute('dir',d);html.setAttribute('lang',d==='rtl'?'ar':'en');}
  if(t==='dark'){html.classList.add('dark');html.setAttribute('data-theme','dark');}
  else if(t==='light'){html.setAttribute('data-theme','light');}
}catch(e){}})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      dir="rtl"
      lang="ar"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="msvalidate.01" content="9C0D081B10D033EC5667B464D310B54F" />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3f49fb09-bc89-49e7-9897-061308b825c6"
        />
      </head>
      <body
        className={`${tajawal.className} antialiased`}
        style={{ fontFamily: "Tajawal, Cairo, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <PreferencesProvider defaultDir="rtl" defaultTheme="light">
          <NextTopLoader
            color="#6936f5"
            height={3}
            showSpinner={false}
            shadow="0 0 10px #6936f5"
          />

          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>

            <main className="grow">
              <div className="mx-auto w-full max-w-[1180px] px-6">
                {children}
              </div>
            </main>

            <Footer />
            <ScrollToTop />
          </div>

          <Toaster richColors position="top-center" />
        </PreferencesProvider>
      </body>
    </html>
  );
}

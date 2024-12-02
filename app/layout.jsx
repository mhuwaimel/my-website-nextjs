import "./globals.css";
import "@fontsource/mada";
import "@fontsource/vibes";
import "@fontsource/tajawal";
import "@fontsource/cairo";
import "@fontsource/almarai";
import "@fontsource/changa";
import "@fontsource/rakkas";
import "@fontsource/lateef";

import { siteConfig } from "@/utils/seo";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import NextTopLoader from "nextjs-toploader";
import { ENV } from "@/lib/constant";
import { GoogleAnalytics } from "@next/third-parties/google";

import ScrollToTop from "@/components/Shared/ScrollToTop";

export const metadata = {
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),

  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  authors: [
    {
      name: siteConfig.name,
      url: "https://github.com/mhuwaimel",
    },
  ],
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} | %s`,
  },
  verification: {
    google: siteConfig.verification,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  alternates: {
    canonical: `https://mohammedh.sa`,
    languages: {
      "ar-SA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
  },
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/assets/web-app-manifest-512x512.png",
    apple: "/assets/web-app-manifest-512x512.png",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mohdaziz_9",
    images: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: "1.0",
  themeColor: "light",
};
export default function RootLayout({ children }) {
  const googleAnId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html dir="rtl" lang="ar">
      <body
        suppressHydrationWarning
        className={` flex flex-col h-screen  antialiased`}
      >
        <NextTopLoader
          color="#6936f5"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="px-1 w-fill sm:px-10">
              <header className="sticky top-0 z-10 ">
                <Navbar />
              </header>
              <div className="relative ">{children}</div>
              <ScrollToTop />
            </div>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>

        <Toaster />
        <GoogleAnalytics gaId={googleAnId} />
      </body>
    </html>
  );
}

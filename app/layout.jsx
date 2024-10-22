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
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "محمد الهويمل",
      url: "https://github.com/mhuwaimel",
    },
  ],
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  verification: {
    google: "WVx7eEsjASR60PqML6j_K3wSyROLR5qqp8905y-Zv8Y",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <GoogleAnalytics />
      <body suppressHydrationWarning className={`   antialiased`}>
        {/* <MainLayout>{children}</MainLayout> */}
        <div className="px-1 w-fill sm:px-10">
          <header className="sticky top-0 z-10 ">
            <Navbar />
          </header>
          <div className="relative main-container">{children}</div>
        </div>
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </body>
    </html>
  );
}

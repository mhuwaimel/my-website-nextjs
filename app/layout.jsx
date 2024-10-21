import "./globals.css";
import "@fontsource/mada";
import "@fontsource/vibes";
import "@fontsource/tajawal";
import "@fontsource/cairo";
import "@fontsource/almarai";
import "@fontsource/changa";
import "@fontsource/rakkas";
import "@fontsource/lateef";
import { GoogleAnalytics } from "@next/third-parties/google";
import MainLayout from "@/components/Layout/MainLayout";
import { siteConfig } from "@/utils/seo";
import { Toaster } from "@/components/ui/toaster";

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
  const googleAn = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html dir="rtl" lang="ar">
      <body suppressHydrationWarning className={`   antialiased`}>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
      <GoogleAnalytics gaId={googleAn} />
    </html>
  );
}

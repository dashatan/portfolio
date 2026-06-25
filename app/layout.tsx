import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import "@/app/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dashatan.vercel.app"),
  title: {
    default: `${profile.name} — ${site.metadataTitleSuffix}`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.intro} ${profile.extendedIntro}`,
  openGraph: {
    title: `${profile.name} — ${site.metadataTitleSuffix}`,
    description: profile.headline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${site.metadataTitleSuffix}`,
    description: profile.headline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

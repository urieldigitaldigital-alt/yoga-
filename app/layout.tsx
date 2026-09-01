import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.brandName} — Yoga, retiros y bienestar`,
  description: site.metaDescription,
  openGraph: {
    title: `${site.brandName} — Yoga, retiros y bienestar`,
    description: site.metaDescription,
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandName} — Yoga, retiros y bienestar`,
    description: site.metaDescription,
  },
};

export const viewport = {
  themeColor: "#f8f4ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fraunces.variable} ${workSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

import "@/theme/globals.css";

import { classed } from "@/lib/utils";
import { fontSerif, fontSans, fontMono } from "@/theme/fonts";
import type { Metadata } from "next";
import Head from "next/head";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  metadataBase: process.env.GITHUB_REPO,
  title: "Halil Teyfik Dolmaci - Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 10+ years building high-performance, observable systems for 250K+ users. Specialized in performance engineering, real-time architectures, and AI/ML platforms.",
  keywords: [
    "Full-Stack Engineer",
    "TypeScript",
    "Node.js",
    "React",
    "AWS",
    "Performance Engineering",
    "AI/ML",
    "Software Engineer",
    "Senior Developer",
    "Tech Leadership",
  ],
  authors: [{ name: "Halil Teyfik Dolmaci", url: "https://github.com/teyfix" }],
  creator: "Halil Teyfik Dolmaci",
  openGraph: {
    title: "Halil Teyfik Dolmaci - Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 10+ years building high-performance, observable systems for 250K+ users. Specialized in performance engineering, real-time architectures, and AI/ML platforms.",
    type: "profile",
    url: "https://linkedin.com/in/teyfik/",
    siteName: "Halil Teyfik Dolmaci Resume",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg", // Add your profile image here
        width: 1200,
        height: 630,
        alt: "Halil Teyfik Dolmaci - Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halil Teyfik Dolmaci - Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 10+ years building high-performance, observable systems for 250K+ users.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens here if needed
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
  },
  alternates: {
    canonical: "https://teyfix.github.io", // Update with your actual domain
  },
  category: "technology",
};

const Body = classed(
  "body",
  `${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`
);

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        {/* Additional meta tags for enhanced SEO */}
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </html>
  );
}

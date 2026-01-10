import "@/theme/globals.css";

import { classed } from "@/lib/utils";
import ogImage from "@/public/og-image.jpeg";
import { fontSans, fontSerif } from "@/theme/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import Head from "next/head";
import { PropsWithChildren } from "react";
import metadata from "./root/metadata.json";

const GITHUB_REPO = process.env.GITHUB_REPO || "teyfix.github.io";

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(`https://${GITHUB_REPO}`),
  title: metadata.title,
  description: metadata.description,
  keywords: metadata.keywords,
  authors: metadata.authors,
  creator: metadata.creator,
  openGraph: {
    title: metadata.title,
    description: metadata.description,
    type: "profile",
    url: "https://linkedin.com/in/teyfik/",
    siteName: `${metadata.creator} - Resume`,
    locale: "en_US",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: metadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadata.title,
    description: metadata.description,
    images: [ogImage.src],
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
});

const Body = classed(
  "body",
  clsx(
    fontSans.variable,
    // Monospace font is not in use at the moment
    // Commented out for resource optimization
    // fontMono.variable,
    fontSerif.variable,
  ),
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

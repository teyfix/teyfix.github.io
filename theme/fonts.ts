import { Crimson_Pro, Inter, JetBrains_Mono } from "next/font/google";

// Inter is a professional, highly legible font perfect for resumes
export const fontSans = Inter({
  variable: "--app-font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Crimson Pro is a serif font perfect for formal resumes
export const fontSerif = Crimson_Pro({
  variable: "--app-font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// JetBrains Mono for code snippets and technical details
export const fontMono = JetBrains_Mono({
  variable: "--app-font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

import { Geist, Geist_Mono, Russo_One } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const russo_one = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

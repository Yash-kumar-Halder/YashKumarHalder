import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./common.css";
import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/MyComponent/navigation-bar";
import Footer from "@/components/MyComponent/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"), // ⚡ Add this
  title: "Yash Kumar Halder | Portfolio",
  description:
    "Frontend developer skilled in React, JavaScript, and MERN Stack.",
  openGraph: {
    title: "Yash Kumar Halder | Portfolio",
    description:
      "Frontend developer skilled in React, JavaScript, and MERN Stack.",
    url: "/",
    siteName: "Yash Kumar Halder",
    images: ["/og-image.jpg"], // will resolve to https://your-domain.com/og-image.jpg
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Kumar Halder | Portfolio",
    description:
      "Frontend developer skilled in React, JavaScript, and MERN Stack.",
    images: ["/og-image.jpg"], // will resolve to https://your-domain.com/og-image.jpg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

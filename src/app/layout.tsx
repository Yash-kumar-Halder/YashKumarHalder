import type { Metadata } from "next";
import "./globals.css";
import "./common.css";
import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/MyComponent/navigation-bar";
import Footer from "@/components/MyComponent/footer";
import {geistSans, geistMono} from "../fonts"



const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yash Kumar Halder | Portfolio",
  description:
    "Full Stack developer skilled in React, JavaScript, and MERN Stack.",
  openGraph: {
    title: "Yash Kumar Halder | Portfolio",
    description:
      "Full Stack developer skilled in React, JavaScript, and MERN Stack.",
    url: "/",
    siteName: "Yash Kumar Halder",
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Kumar Halder | Portfolio",
    description:
      "Full Stack developer skilled in React, JavaScript, and MERN Stack.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "duOrr4J6kHE_V0QxCUoQG-d9m098nQ9kIl2wrwaod-c"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yash Kumar Halder",
              "url": "https://yashkumarhalder.vercel.app",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/yashkumarhalder",
                "https://github.com/yashkumarhalder",
              ],
            }),
          }}
        />
      </head>
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

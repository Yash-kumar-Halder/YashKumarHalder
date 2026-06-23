import ContactForm from "@/components/MyComponent/contact-form";
import React from "react";
import {Caveat_Brush} from "next/font/google"
import { Metadata } from "next";
import HorizontalScale from "@/components/MyComponent/horizontal-scale";

const caveatBrush = Caveat_Brush({
    weight: "400",           // optional, default weight
    style: "normal",         // optional
    subsets: ["latin"],      // optional
    variable: "--font-caveat-brush", // CSS variable name
  });

  const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact | Yash Kumar Halder Portfolio",
  description:
    "Get in touch with Yash Kumar Halder, Full Stack developer skilled in React, JavaScript, and the MERN Stack. Reach out for projects, collaborations, or queries.",
  openGraph: {
    title: "Contact | Yash Kumar Halder Portfolio",
    description:
      "Get in touch with Yash Kumar Halder, Full Stack developer skilled in React, JavaScript, and the MERN Stack. Reach out for projects, collaborations, or queries.",
    url: "/contact",
    siteName: "Yash Kumar Halder",
    images: ["/contact-og-image.jpg"], // Use a unique OG image for Contact page
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Yash Kumar Halder Portfolio",
    description:
      "Get in touch with Yash Kumar Halder, Full Stack developer skilled in React, JavaScript, and the MERN Stack. Reach out for projects, collaborations, or queries.",
    images: ["/contact-og-image.jpg"],
  },
  verification: {
    google: "duOrr4J6kHE_V0QxCUoQG-d9m098nQ9kIl2wrwaod-c",
  },
};
    

const Contact = () => {
  return (
    <section id="contact" className="min-h-[50vh] max-w-5xl mx-auto border-x py-5">
        <HorizontalScale className="relative mt-0" />
        <h1 className={`text-2xl px-5 text-neutral-300 font-semibold border-y mt-5`} >Contact</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;

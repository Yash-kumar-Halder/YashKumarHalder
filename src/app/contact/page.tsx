import ContactForm from "@/components/MyComponent/contact-form";
import React from "react";
import {Caveat_Brush} from "next/font/google"
import { Metadata } from "next";

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
    <section id="contact" className="min-h-[80vh] w-full flex flex-col gap-10 items-center justify-center md:px-[20%] sm:px-5 ">
        <h1 className={`${caveatBrush.className} text-4xl text-gradient-red-purple`} >Always open to new ideas and collaborations—drop me a message anytime.</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;

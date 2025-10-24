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

  export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000/v"), // ⚡ ensures OG & Twitter images resolve
    title: "Contact | Yash Kumar Halder",
    description:
      "Get in touch with Yash Kumar Halder — frontend developer skilled in React, JavaScript, and the MERN Stack. Let's collaborate or discuss your next project.",
    openGraph: {
      title: "Contact | Yash Kumar Halder",
      description:
        "Reach out to Yash Kumar Halder — a frontend developer specializing in React and the MERN Stack. Open for collaboration and freelance opportunities.",
      url: "/contact", // relative path; resolves against metadataBase
      siteName: "Yash Kumar Halder",
      images: ["/og-image.jpg"], // resolves to https://your-domain.com/og-image.jpg
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | Yash Kumar Halder",
      description:
        "Connect with Yash Kumar Halder — frontend developer skilled in React and MERN Stack. Let's build something impactful together.",
      images: ["/og-image.jpg"], // resolves to https://your-domain.com/og-image.jpg
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

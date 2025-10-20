import ContactForm from "@/components/MyComponent/contact-form";
import React from "react";
import {Caveat_Brush} from "next/font/google"

const caveatBrush = Caveat_Brush({
    weight: "400",           // optional, default weight
    style: "normal",         // optional
    subsets: ["latin"],      // optional
    variable: "--font-caveat-brush", // CSS variable name
  });

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] w-full flex flex-col gap-10 items-center justify-center md:px-[20%] sm:px-5 ">
        <h1 className={`${caveatBrush.className} text-4xl text-gradient-red-purple`} >Always open to new ideas and collaborations—drop me a message anytime.</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;

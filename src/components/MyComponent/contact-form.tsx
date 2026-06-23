"use client";
import { ChangeEvent, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again!");
      }
      
    setIsSending(false);
    } catch {
      setStatus("Error occurred!");
    }
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="w-[90%] mx-auto flex flex-col items-center gap-4"
      >
          <div className="w-full grid grid-cols-[1fr_1fr] gap-4 items-center mt-5">
              <div className="border-gradient-nutral-black w-full">
                  <input
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      className="p-2 w-full bg-white dark:bg-black rounded-sm outline-0 text-neutral-300"
                      required
                  />
              </div>
              <div className="border-gradient-nutral-black w-full">
                  <input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="p-2 w-full bg-white dark:bg-black rounded-sm outline-0 text-neutral-300"
                      required
                  />
              </div>
          </div>
          <div className="border-gradient-nutral-black w-full">
              <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="resize-none p-2 h-32 w-full bg-white dark:bg-black rounded-sm outline-0 text-neutral-300"
                  required
              />
          </div>
          <button
              type="submit"
              className="bg-gradient-nutral-black cursor-pointer w-fit px-12 text-white p-2 rounded hover:bg-blue-600 font-semibold border border-accent"
          >
              {isSending ? "Sending" : "Send"}
          </button>
          {status && <p className="text-center">{status}</p>}
      </form>
  );
}

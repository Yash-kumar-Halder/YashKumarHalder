import { connectDB } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req:any) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message)
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });

    await connectDB();

    // Save message to MongoDB
    const newMessage = await Contact.create({ name, email, message });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your own email
      subject: `New Message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, data: newMessage }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}

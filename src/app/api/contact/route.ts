import { connectDB } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json(
                {
                    success: false,
                    message: "All fields are required",
                },
                {
                    status: 400,
                },
            );
        }

        await connectDB();

        const newMessage = await Contact.create({
            name,
            email,
            message,
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Message from ${name}`,
            text: `
  Name: ${name}
  Email: ${email}
  
  Message:
  ${message}
        `,
        });

        return Response.json(
            {
                success: true,
                data: newMessage,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        console.error("API Error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            },
        );
    }
}

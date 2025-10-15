import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App password (NOT your Gmail password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your own email to receive messages
      subject: `New message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}

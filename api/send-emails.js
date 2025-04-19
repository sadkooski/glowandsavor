import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Metoda niedozwolona");
  }

  const { name, email, title, message } = req.body;

  if (!name || !email || !title || !message) {
    return res.status(400).send("Wszystkie pola są wymagane!");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nowa wiadomość od ${name}: ${title}`,
    text: `Wiadomość od: ${name} (${email})\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Wiadomość została wysłana!");
  } catch (error) {
    console.error("❌ Błąd emaila:", error);
    res.status(500).send("Błąd podczas wysyłania wiadomości.");
  }
}
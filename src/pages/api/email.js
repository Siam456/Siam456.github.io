import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: process.env.mail,
  password: process.env.password,
  host: "smtp.gmail.com",
  ssl: true,
});

export default function handler(req, res) {
  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",

    auth: {
      user: "hasibulsiam27@gmail.com",
      pass: "dtsmsscmiwlznvry",
    },
  });

  try {
    await transporter.sendMail({
      subject: req.body.subject,
      html: req.body.body,
      from: req.body.to,
      to: process.env.EMAIL,
    });
    res.send("Thank you! Email send successfully.");
  } catch (e) {
    console.log(e);
    res.status(400).end(JSON.stringify(e));
    return;
  }

  // res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}

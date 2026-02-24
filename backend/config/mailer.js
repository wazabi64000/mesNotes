import nodemailer from "nodemailer";
import "dotenv/config";

const transorter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

transorter.verify((err, success) => {
    if(err) console.error('SMTP non connecté ', err.message)
        else console.log("SMTP connecté avec success");
        
})

export const sendWelcomeEmail =  async (to, email, password) => {
    return transorter.sendMail({
        from: `Welcome ${process.env.BREVO_SMTP_EMAIL}`,
        to,
        subject: "Merci pour votre inscription",
        html: `
        <h2>Bienvenue</h2>
        <p>Votre compte a bien été créé </p>
        <p>Votre email d'inscription: ${email}</p>
        <p>Votre mot de passe d'inscription: ${password}</p>
        `
    })
}
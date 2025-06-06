import nodemailer from "nodemailer";

const targetEmail = process.env.NODEMAILER_TARGET_EMAIL;

const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: "smtp.gmail.com",
  port: process.env.NODEMAILER_PORT,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_EMAIL_PASS,
  },
});

const generateEmailTemplate = (name, message, email) => {
  return `
        <html>
            <body>
                <h1>Message From ${name || "Not provided"}</h1>
                <p><strong>Email:</strong> ${email || "Not provided"}</p>
                <p><strong>Message:</strong> ${message || "Not provided"}</p>
            </body>
        </html>
    `;
};

const sendEmail = async (args) => {
  try {
    const { name, email, message } = args;
    const htmlContent = generateEmailTemplate(name, message, email);

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: `New Request Via Contact Form from ${email}`,
      html: htmlContent,
    };

    const response = await transporter.sendMail(mailOptions);

    return {
      status: "SUCCESS",
    };
  } catch (err) {
    console.error("here is error: ", err);
    return {
      status: "FAILED",
    };
  }
};

export { sendEmail };

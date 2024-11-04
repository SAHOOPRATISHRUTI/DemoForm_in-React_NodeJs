
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const sendEmail = async (formData) => {
  const { name, mobile, email, message } = formData;

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'New Form Submission Confirmation',
    html: `
      <h2>Thank You for Your Submission!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your message. Here are the details of your submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>We will get back to you shortly.</p>
      <p>Best Regards,<br>Your Company Name</p>
    `,
    attachments: [],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

module.exports = { 
  sendEmail 
};

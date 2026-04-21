import ContactMessage from '../models/ContactMessage.js';
import nodemailer from 'nodemailer';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    
    // Save to the database as a backup
    const newMsg = await ContactMessage.create({ name, email, message });

    let emailStatus = 'Email not configured';
    
    // Send email to yourself using Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send the email to yourself
          replyTo: email, // If you click 'reply' in your email client, it goes to the user
          subject: `Portfolio Contact: Message from ${name}`,
          text: `You received a new message from your portfolio contact form.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #7c6aff;">New Portfolio Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="border-left: 4px solid #7c6aff; padding-left: 10px; color: #555;">
                      ${message.replace(/\n/g, '<br/>')}
                    </blockquote>
                 </div>`,
        };

        await transporter.sendMail(mailOptions);
        emailStatus = 'Email dispatched successfully';
      } catch (mailError) {
        console.error('Nodemailer Error:', mailError);
        emailStatus = 'Email failed to dispatch';
      }
    }

    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.', data: newMsg, emailStatus });
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    next(err);
  }
};

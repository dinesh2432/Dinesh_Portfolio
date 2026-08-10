import ContactMessage from '../models/ContactMessage.js';
import { Resend } from 'resend';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Save to MongoDB as a backup regardless of email outcome
    const newMsg = await ContactMessage.create({ name, email, message });

    let emailStatus = 'Email not configured';

    // Send email via Resend HTTP API (works on Render — no SMTP ports needed)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [process.env.EMAIL_USER || 'ddk113311@gmail.com'],
          reply_to: email,
          subject: `Portfolio Contact: Message from ${name}`,
          text: `You received a new message from your portfolio contact form.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eee; border-radius: 12px;">
              <h2 style="color: #7c6aff; margin-top: 0;">📬 New Portfolio Message</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7c6aff;">${email}</a></td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;"/>
              <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
              <blockquote style="border-left: 4px solid #7c6aff; margin: 0; padding: 12px 16px; background: #f9f9ff; border-radius: 0 8px 8px 0; color: #333;">
                ${message.replace(/\n/g, '<br/>')}
              </blockquote>
              <p style="margin-top: 20px; font-size: 12px; color: #aaa;">Sent from your portfolio contact form. Reply to this email to respond directly to ${name}.</p>
            </div>
          `,
        });

        if (error) {
          console.error('Resend Error:', error);
          emailStatus = 'Email failed to dispatch';
        } else {
          emailStatus = 'Email dispatched successfully';
        }
      } catch (mailError) {
        console.error('Resend Exception:', mailError);
        emailStatus = 'Email failed to dispatch';
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: newMsg,
      emailStatus,
    });
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

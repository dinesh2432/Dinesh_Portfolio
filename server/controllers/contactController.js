import ContactMessage from '../models/ContactMessage.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const newMsg = await ContactMessage.create({ name, email, message });
    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.', data: newMsg });
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

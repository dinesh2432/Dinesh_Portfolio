import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import axios from 'axios';
import toast from 'react-hot-toast';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ isDark }) {
  const { email, github, linkedin } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      setSent(true);
      toast.success('Message sent! I will get back to you.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputBase = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 font-body ${
    isDark
      ? 'bg-dark-border border-dark-border text-dark-text placeholder-dark-muted focus:border-accent'
      : 'bg-gray-50 border-light-border text-light-text placeholder-light-muted focus:border-accent'
  }`;

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">

          <h2 className="font-display text-4xl md:text-5xl font-bold">Get in Touch</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-10 lg:gap-16 items-start">
          {/* Left: Text + Socials */}
          <div>
            <p className={`text-base leading-relaxed mb-8 max-w-md ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
              Whether it's a project idea, an opportunity, or just a conversation about tech — my inbox is open.
              I try to reply within a day or two.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: email,
                  href: `mailto:${email}`,
                  id: 'contact-email-link',
                },
                { icon: GithubIcon,
                  label: 'github.com/dinesh2432',
                  href: github,
                  id: 'contact-github-link',
                },
                {
                  icon: LinkedinIcon,
                  label: 'linkedin.com/in/dinesh0906',
                  href: linkedin,
                  id: 'contact-linkedin-link',
                },
              ].map(({ icon: Icon, label, href, id }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  id={id}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`flex items-center gap-4 group ${isDark ? 'text-dark-muted hover:text-dark-text' : 'text-light-muted hover:text-light-text'} transition-colors`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all group-hover:border-accent group-hover:text-accent ${
                      isDark ? 'border-dark-border' : 'border-light-border'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl border p-6 md:p-8 ${
              isDark ? 'bg-dark-surface border-dark-border' : 'bg-white border-light-border'
            }`}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <CheckCircle size={40} className="text-green-400" />
                <p className="font-display text-xl font-bold">Message sent!</p>
                <p className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                  I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputBase}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputBase}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={5}
                    className={`${inputBase} resize-none`}
                    disabled={loading}
                  />
                </div>
                <motion.button
                  type="submit"
                  id="contact-submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

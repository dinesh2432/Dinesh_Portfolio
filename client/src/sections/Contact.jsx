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

  const inputBase = `w-full px-4 py-3 rounded-md border text-sm outline-none transition-all duration-200 font-body ${
    isDark
      ? 'bg-[#09090B] border-[#27272A] text-[#FAFAFA] placeholder:text-[#27272A] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
      : 'bg-[#FAFAFA] border-[#E4E4E7] text-[#09090B] placeholder:text-[#E4E4E7] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
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
            <p className={`text-base flex-1 leading-relaxed mb-8 max-w-md ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
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
                  className={`flex items-center gap-4 group transition-colors ${
                    isDark ? 'text-[#A1A1AA] hover:text-[#FAFAFA]' : 'text-[#71717A] hover:text-[#09090B]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-md border flex items-center justify-center transition-all duration-200 group-hover:border-[#2563EB] group-hover:text-[#2563EB] ${
                      isDark ? 'border-[#27272A] bg-[#18181B]' : 'border-[#E4E4E7] bg-white'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                  <span className="text-sm font-semibold tracking-wide">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-md border p-6 md:p-8 ${
              isDark ? 'bg-[#18181B] border-[#27272A]' : 'bg-white border-[#E4E4E7]'
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
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-md font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',        // optional phone
    botField: '',     // honeypot
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botField !== '') return; // honeypot

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_u5ojose',
        'template_pdbphcf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          phone: formData.phone || 'N/A',
          time: new Date().toLocaleString(),
        },
        'QaUbpwLw3b8cd1nij'
      );

      toast.success('Message sent successfully!', {
        // animated toast options (framer-motion inside react-hot-toast)
        style: {
          borderRadius: '8px',
          background: '#22c55e',
          color: '#fff',
        },
      });

      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        botField: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again later.', {
        style: {
          borderRadius: '8px',
          background: '#ef4444',
          color: '#fff',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4 text-black">
            Shoot a Request
          </h2>
          <div className="h-1 w-20 bg-black"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="text-xl md:text-2xl font-medium mb-8 text-black">
              Let&apos;s collaborate on something extraordinary. Drop me a message and I&apos;ll get back to you within 24 hours.
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-black">Direct Email</div>
              <a 
                href="mailto:bolajiademola815@gmail.com" 
                className="text-xl hover:underline text-black transition-colors"
              >
                bolajiademola815@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`w-full px-4 py-3 border-b border-black focus:outline-none focus:border-b-2 bg-white text-black placeholder-gray-500 ${errors.name ? 'border-red-500' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 border-b border-black focus:outline-none focus:border-b-2 bg-white text-black placeholder-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (optional)"
                className="w-full px-4 py-3 border-b border-black focus:outline-none focus:border-b-2 bg-white text-black placeholder-gray-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Masterpiece"
                rows={5}
                className={`w-full px-4 py-3 border-b border-black focus:outline-none focus:border-b-2 bg-white text-black placeholder-gray-500 ${errors.message ? 'border-red-500' : ''}`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="bg-black text-white px-8 py-3 uppercase tracking-wider flex items-center gap-2 hover:bg-gray-900 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

const services = [
  'Logo Design & Branding',
  'Print Design',
  'Website Development',
  'Mobile App Development',
  'Custom Digital Solutions',
  'Other',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000 - $10,000',
  'Over $10,000',
  'Not Sure',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch and let's start creating.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="mb-8">Get in <span className="gradient-text">Touch</span></h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Have a project in mind? We'd love to hear about it. Fill out the form or use
                  one of the contact methods below.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:info@pixelforge.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect rounded-xl p-6 hover:border-gold-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <div className="text-white font-semibold">singhalsparshu9876@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect rounded-xl p-6 hover:border-gold-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                    <div className="text-white font-semibold">+91 8077534280</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect rounded-xl p-6 hover:border-gold-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">WhatsApp</div>
                    <div className="text-white font-semibold">Chat with us</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Visit Us</div>
                    <div className="text-white font-semibold">Madhav Palace, Sector 3, Sikandra Agra, 282001</div>
                  </div>
                </motion.div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl font-serif mb-8">Send Us a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                               text-white placeholder-gray-500 focus:outline-none focus:border-gold-500
                               transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                               text-white placeholder-gray-500 focus:outline-none focus:border-gold-500
                               transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                             text-white placeholder-gray-500 focus:outline-none focus:border-gold-500
                             transition-colors"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                               text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="" className="bg-navy-900">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-navy-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                               text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="" className="bg-navy-900">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-navy-900">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                             text-white placeholder-gray-500 focus:outline-none focus:border-gold-500
                             transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400"
                  >
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Timeline varies by project scope. Simple logos take 5-7 days, websites 2-4 weeks, and mobile apps 4-8 weeks.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, bank transfers, and offer flexible payment plans for larger projects.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! All our packages include post-launch support, and we offer maintenance plans for long-term partnerships.',
              },
              {
                q: 'Can I see examples of your work?',
                a: 'Absolutely! Check out our portfolio page to see our recent projects and case studies.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <h4 className="font-semibold mb-3">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
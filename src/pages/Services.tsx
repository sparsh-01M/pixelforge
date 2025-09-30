import { motion } from 'framer-motion';
import {
  Palette,
  FileText,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Palette,
    title: 'Logo Design & Branding',
    description: 'Create a memorable brand identity that captures your essence and resonates with your audience.',
    features: [
      'Custom logo design',
      'Brand guidelines',
      'Color palette development',
      'Typography selection',
      'Brand collateral',
    ],
    gradient: 'from-gold-500 to-yellow-600',
  },
  {
    icon: FileText,
    title: 'Print Design',
    description: 'Professional print materials that make a lasting impression and elevate your marketing efforts.',
    features: [
      'Business cards',
      'Flyers & brochures',
      'Banners & posters',
      'Pamphlets & catalogs',
      'Packaging design',
    ],
    gradient: 'from-yellow-600 to-amber-500',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Stunning, high-performance websites tailored to your industry and business goals.',
    features: [
      'E-commerce platforms',
      'Restaurant & café sites',
      'Hotel & hospitality',
      'Gym & fitness centers',
      'School & education',
      'Startup websites',
    ],
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    features: [
      'Gym & fitness apps',
      'E-commerce shopping apps',
      'Booking & reservation systems',
      'Customer loyalty apps',
      'Startup MVPs',
    ],
    gradient: 'from-yellow-500 to-gold-500',
  },
  {
    icon: Layers,
    title: 'Custom Digital Solutions',
    description: 'Comprehensive packages combining design, development, and branding for complete digital transformation.',
    features: [
      'Full brand identity',
      'Website + mobile app combos',
      'Digital marketing assets',
      'Social media branding',
      'Ongoing support & maintenance',
    ],
    gradient: 'from-gold-600 to-amber-600',
  },
];

const industries = [
  {
    name: 'E-commerce',
    icon: '🛒',
    description: 'Complete online store solutions with payment integration',
  },
  {
    name: 'Hospitality',
    icon: '🏨',
    description: 'Hotels, cafés, and restaurant digital experiences',
  },
  {
    name: 'Fitness',
    icon: '💪',
    description: 'Gym websites and member management apps',
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'School websites and learning management systems',
  },
  {
    name: 'Startups',
    icon: '🚀',
    description: 'Launch-ready websites and MVP applications',
  },
  {
    name: 'Retail',
    icon: '🏪',
    description: 'Shopping store apps and inventory systems',
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive design and development solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80
                                  group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative h-full flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-32 h-32 text-white/90" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <service.icon className="w-8 h-8 text-gold-500" />
                    <h3 className="text-gold-500 font-semibold uppercase text-sm tracking-wider">
                      Service {index + 1}
                    </h3>
                  </motion.div>

                  <h2 className="mb-6">{service.title}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gold-500" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to="/pricing" className="btn-secondary">
                    View Packages
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Specialized solutions tailored to your industry's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 text-center card-hover group"
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold-500 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-gold-600 to-yellow-600 text-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-16 h-16 mb-6" />
              <h2 className="mb-6">Ready to Bring Your Vision to Life?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and create a custom solution that exceeds your
                expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-black text-gold-500 font-semibold px-8 py-4 rounded-full
                           hover:scale-105 transition-transform duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full
                           hover:bg-black hover:text-gold-500 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                  alt="Project planning"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
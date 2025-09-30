import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Starter',
    price: '$499',
    period: 'per project',
    description: 'Perfect for small businesses and startups needing essential branding',
    popular: false,
    features: [
      'Custom logo design',
      '3 design concepts',
      '2 revision rounds',
      'Business card design',
      'Social media kit',
      'Brand color palette',
      'File formats: PNG, JPG, PDF',
      '5-day delivery',
    ],
  },
  {
    name: 'Professional',
    price: '$1,999',
    period: 'per project',
    description: 'Ideal for businesses ready to establish a strong online presence',
    popular: true,
    features: [
      'Complete brand identity package',
      'Custom website (up to 5 pages)',
      'Responsive design',
      'SEO optimization',
      'Contact form integration',
      'Content management system',
      'Logo & print materials',
      '3 months support',
      '2-3 week delivery',
    ],
  },
  {
    name: 'Premium',
    price: '$4,999',
    period: 'per project',
    description: 'Complete digital transformation with website, app, and full branding',
    popular: false,
    features: [
      'Everything in Professional',
      'Custom mobile app (iOS/Android)',
      'Advanced website (10+ pages)',
      'E-commerce functionality',
      'Push notifications',
      'Analytics integration',
      'Admin dashboard',
      '6 months support & updates',
      '4-6 week delivery',
    ],
  },
  {
    name: 'Custom',
    price: 'Let\'s Talk',
    period: 'tailored solution',
    description: 'Enterprise-level solutions with unlimited possibilities',
    popular: false,
    features: [
      'Fully customized package',
      'Multiple platforms',
      'Complex integrations',
      'Advanced features',
      'Dedicated project manager',
      'Priority support',
      'Ongoing maintenance',
      'Flexible timeline',
    ],
  },
];

const addOns = [
  { name: 'Logo Animation', price: '$299' },
  { name: 'Social Media Management (monthly)', price: '$499' },
  { name: 'SEO Package', price: '$799' },
  { name: 'Additional Pages', price: '$199 each' },
  { name: 'Copywriting Services', price: '$399' },
  { name: 'Professional Photography', price: '$599' },
];

export default function Pricing() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium quality at competitive prices. Choose the package that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-gold-500/20 to-navy-900 border-2 border-gold-500 scale-105 lg:scale-110'
                    : 'glass-effect'
                } card-hover`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gold-500 text-black px-6 py-2 rounded-full flex items-center gap-2 font-semibold text-sm">
                      <Star className="w-4 h-4 fill-black" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    {pkg.price !== "Let's Talk" && (
                      <span className="text-gray-400 text-sm">{pkg.period}</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full justify-center ${
                    pkg.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {pkg.price === "Let's Talk" ? 'Contact Us' : 'Get Started'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
              Add-On <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Enhance your package with these premium add-ons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 flex items-center justify-between hover:border-gold-500/50 transition-colors"
              >
                <div>
                  <h4 className="font-semibold mb-1">{addon.name}</h4>
                  <p className="text-gold-500 font-semibold">{addon.price}</p>
                </div>
                <Check className="w-6 h-6 text-gold-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Not Sure Which Package is Right?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and we'll help you choose the perfect solution
                for your business needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="text-xl font-semibold mb-6">Our Guarantee</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-black" />
                    </div>
                    <p className="text-gray-400">100% Satisfaction Guarantee</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-black" />
                    </div>
                    <p className="text-gray-400">Unlimited Revisions*</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-black" />
                    </div>
                    <p className="text-gray-400">On-Time Delivery</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                  *Within project scope and timeline
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
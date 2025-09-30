import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Zap, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Exceptional craftsmanship in every pixel',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
  },
  {
    icon: CheckCircle,
    title: 'Affordable Packages',
    description: 'Enterprise-level work at competitive prices',
  },
  {
    icon: Sparkles,
    title: 'Creative Designs',
    description: 'Unique solutions tailored to your brand',
  },
];

const showcaseItems = [
  {
    type: 'Logo Design',
    description: 'Brand Identity Excellence',
    gradient: 'from-gold-500 to-yellow-600',
  },
  {
    type: 'Website Development',
    description: 'Digital Experiences',
    gradient: 'from-gold-600 to-amber-500',
  },
  {
    type: 'Mobile Apps',
    description: 'Next-Gen Solutions',
    gradient: 'from-amber-500 to-yellow-500',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'FitLife Gym',
    review: 'Pixel Forge transformed our digital presence. Our new website and app increased memberships by 60% in just 3 months!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'TechStart Inc',
    review: 'Outstanding work! They delivered a stunning brand identity that perfectly captures our vision. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    company: 'Bella Boutique',
    review: 'Their e-commerce website solution boosted our online sales by 180%. Professional, creative, and reliable team!',
    rating: 5,
  },
];

const clients = [
  'FitLife Gym',
  'TechStart Inc',
  'Bella Boutique',
  'Green Valley School',
  'Urban Café',
  'Summit Hotel',
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-navy-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1920')] bg-cover bg-center opacity-10" />

        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-16 h-16 text-gold-500 mx-auto" />
            </motion.div>

            <h1 className="mb-6 text-balance">
              We Design. We Build.<br />
              <span className="gradient-text">We Elevate Your Brand.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Logos, Websites, Mobile Apps & More – crafted to perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className="section-padding bg-gradient-to-b from-black to-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our <span className="gradient-text">Expertise</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80
                              group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-serif mb-2">{item.type}</h3>
                  <p className="text-white/80">{item.description}</p>
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
            <h2 className="mb-4">Why Choose <span className="gradient-text">Us?</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 text-center card-hover"
              >
                <motion.div
                  className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Client <span className="gradient-text">Testimonials</span></h2>
            <p className="text-gray-400 text-lg">
              Trusted by businesses that demand excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gold-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gold-500/60 hover:text-gold-500 transition-colors font-semibold"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-gold-600 to-yellow-600 text-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get in touch today!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-gold-500 font-semibold px-8 py-4 rounded-full
                       hover:scale-105 transition-transform duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
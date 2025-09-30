import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const categories = ['All', 'Logos', 'Print', 'Websites', 'Apps'];

const portfolioItems = [
  {
    id: 1,
    title: 'FitLife Gym Branding',
    category: 'Logos',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    description: 'Complete brand identity for premium fitness center including logo, color palette, and marketing materials.',
  },
  {
    id: 2,
    title: 'Bella Boutique E-commerce',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    description: 'Modern e-commerce platform with integrated payment system and inventory management.',
  },
  {
    id: 3,
    title: 'TechStart Brand Guide',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800',
    description: 'Comprehensive brand guidelines and print collateral for tech startup.',
  },
  {
    id: 4,
    title: 'FitZone Mobile App',
    category: 'Apps',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    description: 'Member management and workout tracking app for fitness enthusiasts.',
  },
  {
    id: 5,
    title: 'Green Valley School',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    description: 'Educational platform with student portal and parent communication system.',
  },
  {
    id: 6,
    title: 'Urban Café Logo',
    category: 'Logos',
    image: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800',
    description: 'Artisanal café branding with vintage-modern aesthetic.',
  },
  {
    id: 7,
    title: 'Summit Hotel Website',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800',
    description: 'Luxury hotel website with booking system and virtual tours.',
  },
  {
    id: 8,
    title: 'ShopEase Mobile App',
    category: 'Apps',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    description: 'Shopping app with AR try-on features and personalized recommendations.',
  },
  {
    id: 9,
    title: 'Corporate Brochure Design',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    description: 'Premium brochure design for financial services company.',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of exceptional designs and digital solutions that have
              helped brands succeed
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold-500 text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent
                                  opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="inline-block px-3 py-1 bg-gold-500 text-black text-xs font-semibold rounded-full mb-3 w-fit">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-2 text-gold-500 mt-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="text-sm font-semibold">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-4xl w-full bg-navy-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50
                         flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-96 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
              </div>

              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-gold-500 text-black text-sm font-semibold rounded-full mb-4">
                  {selectedItem.category}
                </div>
                <h2 className="text-3xl font-serif mb-4">{selectedItem.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex gap-4">
                  <button className="btn-primary">
                    View Live Site
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="btn-secondary" onClick={() => setSelectedItem(null)}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Like What You See?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project.
            </p>
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
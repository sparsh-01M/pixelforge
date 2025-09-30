import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Palette, Code, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Discussion',
    description: 'We start by understanding your vision, goals, and requirements through detailed consultation.',
    duration: '1-2 days',
    highlights: [
      'Discover your brand story',
      'Define project scope',
      'Set clear objectives',
      'Establish timeline',
    ],
  },
  {
    number: 2,
    icon: Lightbulb,
    title: 'Planning',
    description: 'Strategic planning and research to create a roadmap for your project success.',
    duration: '2-3 days',
    highlights: [
      'Competitive analysis',
      'User research',
      'Content strategy',
      'Technical planning',
    ],
  },
  {
    number: 3,
    icon: Palette,
    title: 'Design',
    description: 'Crafting beautiful, user-centered designs that align with your brand identity.',
    duration: '1-2 weeks',
    highlights: [
      'Wireframes & mockups',
      'Visual design concepts',
      'Interactive prototypes',
      'Revision rounds',
    ],
  },
  {
    number: 4,
    icon: Code,
    title: 'Development',
    description: 'Building your solution with clean code, best practices, and cutting-edge technology.',
    duration: '2-4 weeks',
    highlights: [
      'Front-end development',
      'Back-end integration',
      'Quality assurance',
      'Performance optimization',
    ],
  },
  {
    number: 5,
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing support and maintenance to ensure your success long after launch.',
    duration: 'Ongoing',
    highlights: [
      'Post-launch support',
      'Bug fixes & updates',
      'Training & documentation',
      'Growth consultation',
    ],
  },
];

export default function Process() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results, every single time
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent hidden lg:block" />

        <div className="container-custom">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'
                  }`}
                >
                  <motion.div
                    className="glass-effect rounded-2xl p-8 lg:p-12 card-hover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-8 h-8 text-black" />
                      </motion.div>
                      <div>
                        <div className="text-gold-500 text-sm font-semibold mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-3xl font-serif">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-gold-500" />
                      <span className="text-sm text-gold-500 font-semibold">
                        Duration: {step.duration}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {step.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: highlightIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                          <span className="text-gray-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 1 ? '-left-8' : '-right-8'
                    }`}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-black border-4 border-gold-500 flex items-center justify-center font-bold text-2xl gradient-text"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden h-96"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? '1553877522-43269d4ea984'
                          : index === 1
                          ? '1454165804606-c3d57bc86b40'
                          : index === 2
                          ? '1561070791-2526d30994b5'
                          : index === 3
                          ? '1461749280684-dccba630e2f6'
                          : '1556761175-5973dc0f32e7'
                      }?w=800`}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.div
                        className="text-6xl font-bold opacity-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        viewport={{ once: true }}
                      >
                        0{step.number}
                      </motion.div>
                    </div>
                  </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Why Our Process <span className="gradient-text">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Transparent Communication',
                description: 'Stay informed at every step with regular updates and clear milestones',
              },
              {
                title: 'Collaborative Approach',
                description: 'Your input matters. We work together to refine and perfect every detail',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and review ensure flawless delivery every time',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8 text-center card-hover"
              >
                <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-gold-600 to-yellow-600 text-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's begin your journey to digital excellence. Schedule a free consultation
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-black text-gold-500 font-semibold px-8 py-4 rounded-full
                         hover:scale-105 transition-transform duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full
                         hover:bg-black hover:text-gold-500 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
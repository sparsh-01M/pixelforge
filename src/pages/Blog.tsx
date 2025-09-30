import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Design Trends', 'Technology', 'Business Growth'];

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Logo Design Trends in 2025',
    excerpt: 'Discover the latest trends shaping brand identities this year, from minimalism to bold gradients.',
    category: 'Design Trends',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    date: 'March 15, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Every Gym Needs a Mobile App',
    excerpt: 'Mobile apps are revolutionizing the fitness industry. Learn how they boost member engagement and retention.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    date: 'March 12, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'The Future of School Websites',
    excerpt: 'Educational institutions need modern websites. Explore the features that engage students and parents.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    date: 'March 10, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'How Startups Can Win with Strong Branding',
    excerpt: 'First impressions matter. Learn how powerful branding can set your startup apart from the competition.',
    category: 'Business Growth',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    date: 'March 8, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'E-commerce Design Best Practices',
    excerpt: 'Increase conversions with these proven design strategies for online stores.',
    category: 'Design Trends',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    date: 'March 5, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Maximizing ROI from Your Website',
    excerpt: 'Turn your website into a powerful business tool that generates leads and drives revenue.',
    category: 'Business Growth',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    date: 'March 3, 2025',
    readTime: '7 min read',
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              Insights & <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on design, development, and digital growth
            </p>
          </motion.div>
        </div>
      </section>

      {featuredPost && (
        <section className="section-padding bg-navy-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-serif mb-2">
                <span className="gradient-text">Featured Article</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-effect rounded-3xl overflow-hidden card-hover"
            >
              <div className="relative h-96 lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 lg:p-12">
                <div className="inline-block px-4 py-2 bg-gold-500 text-black text-sm font-semibold rounded-full mb-4">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="btn-primary">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding bg-gradient-to-b from-navy-900 to-black">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
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
              </div>

              <div className="relative w-full lg:w-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full
                           text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-gold-500 text-black text-xs font-semibold rounded-full">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3 group-hover:text-gold-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-gold-500 hover:gap-3 transition-all font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No articles found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on design, development, and
              digital strategy.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full
                         text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
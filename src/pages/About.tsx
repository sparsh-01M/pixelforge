import { motion } from 'framer-motion';
import { Target, Eye, Heart, TrendingUp, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const values = [
  {
    icon: Heart,
    title: 'Creativity',
    description: 'We push boundaries to create unique, memorable designs',
  },
  {
    icon: Award,
    title: 'Class',
    description: 'Premium quality and sophistication in everything we deliver',
  },
  {
    icon: TrendingUp,
    title: 'Modern Design',
    description: 'Cutting-edge solutions that keep you ahead of trends',
  },
];

const stats = [
  { number: 150, label: 'Designs', suffix: '+' },
  { number: 40, label: 'Websites', suffix: '+' },
  { number: 20, label: 'Mobile Apps', suffix: '+' },
  { number: 80, label: 'Happy Clients', suffix: '+' },
];

const team = [
  {
    name: 'Alex Rivera',
    position: 'Creative Director',
    bio: 'Visionary designer with 12+ years crafting iconic brand identities',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Sarah Chen',
    position: 'Lead Developer',
    bio: 'Full-stack expert specializing in scalable web and mobile solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
  {
    name: 'Marcus Johnson',
    position: 'UI/UX Designer',
    bio: 'Master of user experience with a passion for intuitive interfaces',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
  {
    name: 'Emily Santos',
    position: 'Project Manager',
    bio: 'Orchestrating seamless delivery and exceptional client experiences',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
  },
];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function About() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-32 bg-gradient-to-br from-black via-navy-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              About <span className="gradient-text">Pixel Forge Studios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where creativity meets excellence. We are a premium design and development
              studio crafting digital experiences that elevate brands.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-gold-500" />
                <h3 className="text-gold-500 font-semibold">Our Mission</h3>
              </div>
              <h2 className="mb-6">Transforming Ideas Into Digital Masterpieces</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Pixel Forge Studios, we believe every brand deserves a digital presence
                that not only looks stunning but performs exceptionally. Our mission is to
                bridge the gap between creative vision and technical excellence, delivering
                solutions that drive real business results.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We work with businesses of all sizes—from ambitious startups to established
                enterprises—providing them with the design and development expertise they
                need to stand out in today's competitive digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
                  alt="Creative workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-gold-500" />
                <h3 className="text-gold-500 font-semibold">Our Vision</h3>
              </div>
              <h2 className="mb-6">Setting New Standards in Digital Excellence</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We envision a digital world where every business, regardless of size, has
                access to world-class design and development services. Our goal is to become
                the go-to studio for brands seeking premium digital solutions that combine
                aesthetics with functionality.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Through innovation, dedication, and a relentless pursuit of perfection, we're
                building a legacy of exceptional work that helps our clients achieve their
                boldest ambitions.
              </p>
            </motion.div>
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
            <h2 className="mb-4">Our <span className="gradient-text">Values</span></h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-8 text-center card-hover"
              >
                <motion.div
                  className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-10 h-10 text-black" />
                </motion.div>
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our <span className="gradient-text">Impact</span></h2>
            <p className="text-gray-400 text-lg">
              Numbers that speak to our commitment and success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  <Counter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
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
            <h2 className="mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-gray-400 text-lg">
              The creative minds behind your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl card-hover"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ y: 20 }}
                >
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-gold-500 text-sm mb-3">{member.position}</p>
                  <motion.p
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {member.bio}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
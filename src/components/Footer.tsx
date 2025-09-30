import { Link } from 'react-router-dom';
import {
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
];

const services = [
  { name: 'Logo Design', href: '/services' },
  { name: 'Website Development', href: '/services' },
  { name: 'Mobile Apps', href: '/services' },
  { name: 'Print Design', href: '/services' },
];

const company = [
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-navy-900 border-t border-gold-500/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold gradient-text">
                  Pixel Forge
                </span>
                <span className="text-xs text-gold-500 -mt-1">Studios</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Designs That Speak. Websites & Apps That Sell. We craft premium
              digital experiences that elevate your brand and drive results.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@pixelforge.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">singhalsparshu9876@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8077534280</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Madhav Palace, Sector 3, Sikandra Agra, 282001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Pixel Forge Studios. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500 border border-gold-500/20
                         flex items-center justify-center text-gold-500 hover:text-black
                         transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link to="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="#" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
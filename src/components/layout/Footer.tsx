import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Residential Construction', path: '/residential' },
      { label: 'Commercial Construction', path: '/commercial' },
      { label: 'Project Portfolio', path: '/projects' },
      { label: 'Project Management', path: '/about' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Process', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Client Portal', path: '/login' },
    ],
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-luxury" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-accent-foreground">H</span>
              </div>
              <div>
                <span className="text-lg font-display font-semibold text-foreground block">Houston Enterprise</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Since 1998</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unparalleled construction excellence for residential and commercial projects in Houston and beyond.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/10 transition-colors group"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:(281) 915-9595"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  (281) 915-9595
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@houinc.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  info@houinc.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span>
                  2100 W Loop South, Suite 1115<br />
                  Houston, TX 77027
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Houston Enterprise. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
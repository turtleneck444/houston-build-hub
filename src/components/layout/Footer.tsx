import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Houston Enterprise</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Unparalleled construction excellence for residential and commercial projects in Houston.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/residential" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Project Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  2100 W Loop South, Suite 1115<br />
                  Houston, TX 77027
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:(281) 915-9595" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (281) 915-9595
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:info@houinc.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@houinc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Houston Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
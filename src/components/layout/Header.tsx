import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCurrentUser, logout, isAdmin } from '@/services/auth';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = getCurrentUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Residential', path: '/residential' },
    { label: 'Commercial', path: '/commercial' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 hover:opacity-90 transition-all">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-accent-foreground">H</span>
              </div>
              <div className="absolute inset-0 rounded-xl gradient-accent opacity-50 blur-lg group-hover:opacity-70 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-display font-semibold text-foreground tracking-tight">Houston Enterprise</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Construction Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {isAdmin() ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/admin')}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    Admin
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/portal/dashboard')}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    My Projects
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-foreground/70 hover:text-foreground"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="text-foreground/70 hover:text-foreground"
                >
                  Client Portal
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/contact')}
                  className="btn-premium gradient-accent text-accent-foreground rounded-full px-6 group"
                >
                  Start a Project
                  <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 text-lg font-medium transition-colors ${
                        isActive(link.path) ? 'text-accent' : 'text-foreground/70'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6 space-y-3 border-t border-border mt-4">
                  {user ? (
                    <>
                      {isAdmin() ? (
                        <Button
                          variant="outline"
                          className="w-full rounded-full"
                          onClick={() => {
                            navigate('/admin');
                            setMobileMenuOpen(false);
                          }}
                        >
                          Admin Dashboard
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full rounded-full"
                          onClick={() => {
                            navigate('/portal/dashboard');
                            setMobileMenuOpen(false);
                          }}
                        >
                          My Projects
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        className="w-full"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        onClick={() => {
                          navigate('/login');
                          setMobileMenuOpen(false);
                        }}
                      >
                        Client Portal
                      </Button>
                      <Button
                        className="w-full gradient-accent text-accent-foreground rounded-full"
                        onClick={() => {
                          navigate('/contact');
                          setMobileMenuOpen(false);
                        }}
                      >
                        Start a Project
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
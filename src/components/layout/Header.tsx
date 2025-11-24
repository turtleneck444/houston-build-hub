import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getCurrentUser, logout, isAdmin } from '@/services/auth';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Houston Enterprise</span>
              <span className="text-xs text-muted-foreground">Construction Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {isAdmin() ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/admin')}
                  >
                    Admin Dashboard
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/portal/dashboard')}
                  >
                    My Projects
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/login')}
                >
                  Client Login
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/contact')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-border">
              {user ? (
                <>
                  {isAdmin() ? (
                    <Button
                      variant="outline"
                      className="w-full"
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
                      className="w-full"
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
                    className="w-full"
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Client Login
                  </Button>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => {
                      navigate('/contact');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
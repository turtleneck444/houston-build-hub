import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Houston's Premier Construction Partner</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Unparalleled Construction Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Transforming visions into reality across residential, commercial, and industrial projects throughout Houston.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow text-lg h-14 px-8"
              onClick={() => navigate('/projects')}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8"
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { label: 'Years of Excellence', value: '25+' },
              { label: 'Projects Completed', value: '500+' },
              { label: 'Client Satisfaction', value: '98%' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
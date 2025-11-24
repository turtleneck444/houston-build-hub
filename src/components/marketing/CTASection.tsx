import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            From initial consultation to final walkthrough, we're committed to delivering excellence at every step of your construction journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow text-lg h-14 px-8"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8"
              onClick={() => window.location.href = 'tel:(281) 915-9595'}
            >
              <Phone className="mr-2 h-5 w-5" />
              (281) 915-9595
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-bold mb-2">24-48h</div>
              <div className="text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Licensed</div>
              <div className="text-white/80">& Fully Insured</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Warranty</div>
              <div className="text-white/80">On All Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
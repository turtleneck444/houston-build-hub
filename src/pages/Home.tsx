import { Shell } from '@/components/layout/Shell';
import { HeroSection } from '@/components/marketing/HeroSection';
import { ServicesOverview } from '@/components/marketing/ServicesOverview';
import { ProjectHighlights } from '@/components/marketing/ProjectHighlights';
import { ProcessTimeline } from '@/components/marketing/ProcessTimeline';
import { TestimonialCarousel } from '@/components/marketing/TestimonialCarousel';
import { CTASection } from '@/components/marketing/CTASection';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Shell>
      <HeroSection />
      <ServicesOverview />
      <ProjectHighlights />
      <ProcessTimeline />
      <TestimonialCarousel />

      {/* Client Portal Teaser */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Already Building With Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access your personalized project portal to track progress, view documents, and communicate with your project team.
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/login')}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Log in to Your Project Portal
          </Button>
        </div>
      </section>

      <CTASection />
    </Shell>
  );
};

export default Home;
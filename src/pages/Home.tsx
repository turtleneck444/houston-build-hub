import { Shell } from '@/components/layout/Shell';
import { HeroSection } from '@/components/marketing/HeroSection';
import { ServicesOverview } from '@/components/marketing/ServicesOverview';
import { ProjectHighlights } from '@/components/marketing/ProjectHighlights';
import { ProcessTimeline } from '@/components/marketing/ProcessTimeline';
import { TestimonialCarousel } from '@/components/marketing/TestimonialCarousel';
import { CTASection } from '@/components/marketing/CTASection';
import { Button } from '@/components/ui/button';
import { LogIn, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientPortalSection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass rounded-3xl p-12 border-glow">
            <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-6">
              <LogIn className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Already Building With Us?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Access your personalized project portal to track progress, view documents, approve milestones, and communicate with your project team in real-time.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/login')}
              className="rounded-full border-foreground/20 hover:bg-foreground/5 group h-14 px-8"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Access Client Portal
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <Shell>
      <HeroSection />
      <ServicesOverview />
      <ProjectHighlights />
      <ProcessTimeline />
      <TestimonialCarousel />
      <ClientPortalSection />
      <CTASection />
    </Shell>
  );
};

export default Home;
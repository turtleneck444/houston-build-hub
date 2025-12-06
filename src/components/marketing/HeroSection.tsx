import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video/Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop)',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* Noise texture */}
        <div className="absolute inset-0 noise opacity-50" />
      </div>

      {/* Accent Lighting Effects */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-steel/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-5xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/90 tracking-wide">Houston's Premier Construction Partner</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]"
          >
            <span className="block text-foreground">Crafting</span>
            <span className="block text-gradient">Extraordinary</span>
            <span className="block text-foreground">Spaces</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-light"
          >
            Where visionary architecture meets uncompromising craftsmanship. 
            For those who demand nothing less than exceptional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="btn-premium gradient-accent text-accent-foreground font-semibold text-lg h-14 px-8 rounded-full"
              onClick={() => navigate('/projects')}
            >
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-foreground/10 text-foreground hover:bg-foreground/5 text-lg h-14 px-8 rounded-full group"
              onClick={() => navigate('/contact')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-12 pt-8 border-t border-foreground/10"
          >
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '$2B+', label: 'Total Project Value' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>

      {/* Side Accent */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
    </section>
  );
};
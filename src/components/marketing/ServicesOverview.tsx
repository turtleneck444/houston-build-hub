import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, ClipboardCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const ServicesOverview = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Home,
      title: 'Residential',
      subtitle: 'Custom Homes & Renovations',
      description: 'From bespoke estates to thoughtful renovations, we craft living spaces that reflect your unique vision and lifestyle.',
      features: ['New Home Construction', 'Kitchen & Bath Remodels', 'Home Additions', 'Historic Restoration'],
      path: '/residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    },
    {
      icon: Building,
      title: 'Commercial',
      subtitle: 'Business & Industrial',
      description: 'Building environments that drive success. Modern offices, retail destinations, and industrial facilities built for performance.',
      features: ['Office Buildings', 'Retail & Hospitality', 'Medical Facilities', 'Industrial Complexes'],
      path: '/commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      icon: ClipboardCheck,
      title: 'Management',
      subtitle: 'End-to-End Oversight',
      description: 'Complete project oversight ensuring timelines, budgets, and quality standards exceed expectations at every phase.',
      features: ['Timeline Control', 'Budget Management', 'Quality Assurance', 'Stakeholder Coordination'],
      path: '/about',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow text-accent">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Construction</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to completion, we deliver exceptional results across every type of construction project with unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="card-premium group h-full bg-card border-border/50 overflow-hidden cursor-pointer"
                  onClick={() => navigate(service.path)}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-6 glass rounded-xl p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-accent">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center text-accent font-medium group-hover:gap-3 gap-2 transition-all">
                      <span>Explore {service.title}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
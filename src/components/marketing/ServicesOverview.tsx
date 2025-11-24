import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, ClipboardCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesOverview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, major renovations, additions, and interior transformations crafted to your vision.',
      features: ['New Home Builds', 'Kitchen & Bath Remodels', 'Home Additions', 'Exterior Renovations'],
      path: '/residential',
      color: 'steel'
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, hospitality, and industrial facilities built for business success.',
      features: ['Office Buildings', 'Retail Centers', 'Medical Facilities', 'Adaptive Reuse'],
      path: '/commercial',
      color: 'accent'
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'End-to-end oversight ensuring your project stays on schedule, on budget, and exceeds expectations.',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Communication Hub'],
      path: '/about',
      color: 'success'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to completion, we deliver exceptional results across every type of construction project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift border-2 hover:border-accent transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 mb-6`}>
                  <Icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => navigate(service.path)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
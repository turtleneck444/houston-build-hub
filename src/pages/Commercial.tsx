import { Shell } from '@/components/layout/Shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Building, Store, Stethoscope, Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getProjectsByType } from '@/mock-data/projects';

const Commercial = () => {
  const navigate = useNavigate();
  const commercialProjects = getProjectsByType('Commercial').slice(0, 4);

  const services = [
    {
      icon: Building,
      title: 'Office Buildings',
      description: 'Class A office spaces designed for productivity, collaboration, and employee satisfaction.'
    },
    {
      icon: Store,
      title: 'Retail Centers',
      description: 'Attractive, functional retail environments that drive traffic and enhance customer experience.'
    },
    {
      icon: Stethoscope,
      title: 'Medical Facilities',
      description: 'Healthcare-compliant spaces built to exacting standards for patient care and operations.'
    },
    {
      icon: Factory,
      title: 'Industrial & Warehouse',
      description: 'Purpose-built industrial facilities optimized for logistics, manufacturing, and distribution.'
    }
  ];

  return (
    <Shell>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Commercial Construction Aligned With Your Business Goals
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We understand that commercial projects demand precision, efficiency, and minimal disruption to operations. Our team delivers on-time, on-budget results that drive business success.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => navigate('/contact')}
            >
              Discuss Your Commercial Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Construction Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              From ground-up construction to tenant improvements, we deliver commercial spaces that work as hard as you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover-lift">
                  <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Businesses Choose Houston Enterprise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'On-Time Delivery',
                  description: 'We understand project timelines are critical to your business. Our track record speaks for itself with 95% on-time completion rate.'
                },
                {
                  title: 'Budget Certainty',
                  description: 'Transparent pricing, detailed estimates, and proactive cost management ensure no surprises.'
                },
                {
                  title: 'Code Compliance Experts',
                  description: 'Deep knowledge of commercial building codes, ADA requirements, and industry-specific regulations.'
                },
                {
                  title: 'Minimal Disruption',
                  description: 'Strategic phasing and after-hours work options to keep your business operational during construction.'
                },
                {
                  title: 'Quality Craftsmanship',
                  description: 'Premium materials and skilled trade partners deliver results that stand the test of time.'
                },
                {
                  title: 'Single Point of Contact',
                  description: 'Dedicated project manager provides clear communication and swift decision-making throughout.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Recent Commercial Projects</h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped businesses succeed through exceptional construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {commercialProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-lift cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="relative h-64">
                  <img
                    src={project.feature_image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                  <p className="text-muted-foreground line-clamp-2">{project.summary}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/projects')}
            >
              View All Projects
              <ArrowRight className="ml-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Business's Future</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us for a consultation to discuss your commercial construction needs and get a detailed project proposal.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => navigate('/contact')}
          >
            Request a Proposal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Shell>
  );
};

export default Commercial;
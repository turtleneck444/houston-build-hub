import { Shell } from '@/components/layout/Shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Home, Wrench, Plus, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getProjectsByType } from '@/mock-data/projects';

const Residential = () => {
  const navigate = useNavigate();
  const residentialProjects = getProjectsByType('Residential').slice(0, 4);

  const services = [
    {
      icon: Home,
      title: 'New Home Builds',
      description: 'Custom homes designed and built to your exact specifications, from foundation to finish.'
    },
    {
      icon: Wrench,
      title: 'Major Renovations',
      description: 'Transform your existing space with comprehensive whole-home renovations.'
    },
    {
      icon: Plus,
      title: 'Home Additions',
      description: 'Expand your living space with seamlessly integrated additions and second stories.'
    },
    {
      icon: Palette,
      title: 'Kitchen & Bath Remodels',
      description: 'High-end kitchen and bathroom transformations that elevate your daily living.'
    }
  ];

  return (
    <Shell>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Residential Construction – From Dream to Reality
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Whether you're building your dream home from the ground up or transforming your existing space, we bring unmatched craftsmanship and attention to detail to every residential project.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => navigate('/contact')}
            >
              Start Your Residential Project
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
              Comprehensive Residential Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to completion, we handle every aspect of your residential construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover-lift">
                  <div className="inline-flex p-4 rounded-xl bg-steel/10 mb-6">
                    <Icon className="h-8 w-8 text-steel" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Your Journey to a Beautiful Home</h2>
            
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'We meet with you to understand your vision, lifestyle needs, budget, and timeline. Our team conducts a comprehensive site assessment.'
                },
                {
                  step: '2',
                  title: 'Design Development',
                  description: 'Work closely with our design team to create detailed plans, select materials, finishes, and fixtures that reflect your style and meet your functional needs.'
                },
                {
                  step: '3',
                  title: 'Permitting & Pre-Construction',
                  description: 'We handle all permit applications, HOA approvals, and pre-construction logistics, ensuring all requirements are met before breaking ground.'
                },
                {
                  step: '4',
                  title: 'Construction Phase',
                  description: 'Experience transparent communication with regular updates, quality craftsmanship from trusted trade partners, and meticulous project management.'
                },
                {
                  step: '5',
                  title: 'Final Walkthrough & Handover',
                  description: 'Thorough inspection, punch list completion, final touches, and comprehensive handover of your beautiful new or renovated home.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-steel flex items-center justify-center text-steel-foreground font-bold text-xl">
                    {item.step}
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Recent Residential Projects</h2>
            <p className="text-lg text-muted-foreground">
              See the quality and craftsmanship we bring to every home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {residentialProjects.map((project) => (
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Residential Project?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can turn your vision into reality. Schedule a free consultation today.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => navigate('/contact')}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Shell>
  );
};

export default Residential;
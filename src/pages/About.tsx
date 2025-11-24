import { Shell } from '@/components/layout/Shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Shield, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent communication, honest pricing, and ethical practices in every interaction.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality standards and meticulous attention to detail in every project.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Collaborative relationships built on trust, respect, and shared success.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing modern techniques and technologies to deliver superior results.'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Houston Enterprise founded with a vision for construction excellence' },
    { year: '2005', event: 'Expanded into commercial construction, completing first major office project' },
    { year: '2012', event: 'Reached 250+ completed projects milestone' },
    { year: '2018', event: 'Opened state-of-the-art project management center' },
    { year: '2024', event: '500+ projects completed, serving Houston\'s finest clients' }
  ];

  return (
    <Shell>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Houston's Future Since 1999
            </h1>
            <p className="text-xl text-white/90 mb-8">
              For over 25 years, Houston Enterprise has been the trusted partner for residential and commercial construction projects throughout the Greater Houston area.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Houston Enterprise was founded on a simple belief: construction should be an exciting, rewarding experience for our clients, not a source of stress. What started as a small residential construction company has grown into one of Houston's most respected full-service construction firms, handling everything from custom luxury homes to major commercial developments.
              </p>
              <p className="mb-6">
                Our success stems from an unwavering commitment to quality, transparent communication, and treating every project—whether a kitchen remodel or a multi-million dollar office building—with the same level of dedication and professionalism.
              </p>
              <p>
                Today, we're proud to serve residential and commercial clients across Houston with a team of experienced professionals, trusted trade partners, and a proven track record of delivering exceptional results on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover-lift">
                  <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-3xl font-bold text-accent">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <CheckCircle2 className="h-6 w-6 text-success mb-2" />
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '$200M+', label: 'Total Project Value' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the Houston Enterprise difference on your next construction project.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => navigate('/contact')}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Shell>
  );
};

export default About;
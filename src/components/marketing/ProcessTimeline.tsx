import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet to understand your vision, requirements, timeline, and budget. Our team conducts a thorough site assessment.'
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Collaborate with our design team to refine plans, select materials, and finalize specifications that bring your vision to life.'
    },
    {
      number: '03',
      title: 'Permits & Pre-Construction',
      description: 'We handle all permit applications, code compliance, and pre-construction logistics while keeping you informed every step.'
    },
    {
      number: '04',
      title: 'Build & Oversight',
      description: 'Expert project management ensures quality craftsmanship, schedule adherence, and transparent communication throughout construction.'
    },
    {
      number: '05',
      title: 'Final Walkthrough',
      description: 'Comprehensive inspection, punch list completion, and project handover. We ensure your complete satisfaction before completion.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven, transparent process that ensures quality, timeliness, and your complete satisfaction.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-steel to-success -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left Side */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <div
                    className="inline-block p-8 bg-card rounded-2xl shadow-lg hover-lift border-2 border-border hover:border-accent transition-all"
                  >
                    <div className="text-5xl font-bold text-accent/20 mb-4">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10">
                  <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                </div>

                {/* Right Side (Empty for zigzag effect) */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-muted/50 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free consultation to discuss your project. We respond within 1-2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="font-medium">Call us: (281) 915-9595</span>
            <span className="text-muted-foreground hidden sm:inline">or</span>
            <span className="font-medium">Email: info@houinc.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
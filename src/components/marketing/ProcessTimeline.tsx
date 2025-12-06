import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, PenTool, FileCheck, HardHat, Key } from 'lucide-react';

export const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      description: 'We begin with an in-depth consultation to understand your goals, requirements, and aspirations. Every great project starts with listening.',
    },
    {
      icon: PenTool,
      number: '02',
      title: 'Design',
      subtitle: 'Crafting the Blueprint',
      description: 'Our design team transforms concepts into detailed plans, selecting materials and refining specifications that bring your vision to life.',
    },
    {
      icon: FileCheck,
      number: '03',
      title: 'Preparation',
      subtitle: 'Permits & Pre-Construction',
      description: 'We navigate permits, code compliance, and pre-construction logistics while keeping you informed at every milestone.',
    },
    {
      icon: HardHat,
      number: '04',
      title: 'Construction',
      subtitle: 'Building Excellence',
      description: 'Expert project management ensures quality craftsmanship, schedule adherence, and transparent communication throughout.',
    },
    {
      icon: Key,
      number: '05',
      title: 'Delivery',
      subtitle: 'Your Vision Realized',
      description: 'Comprehensive walkthrough, punch list completion, and project handover. We ensure complete satisfaction before keys change hands.',
    },
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow text-accent">Our Approach</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            A Proven Path to <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our refined five-phase process ensures every project unfolds with precision, transparency, and exceptional results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-accent via-steel to-accent origin-top"
            />
          </div>

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative lg:flex lg:items-center lg:min-h-[180px]"
                >
                  {/* Left Content */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:order-2 lg:pl-16'}`}>
                    <div className={`glass rounded-2xl p-8 border-glow ${isLeft ? 'lg:ml-auto' : ''} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="text-5xl font-display font-bold text-accent/20">{step.number}</span>
                        <div className="glass rounded-xl p-2">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-1">{step.title}</h3>
                      <p className="text-accent text-sm mb-3">{step.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full gradient-accent items-center justify-center shadow-glow z-10"
                  >
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </motion.div>

                  {/* Right Side (empty for layout) */}
                  <div className={`hidden lg:block lg:w-1/2 ${isLeft ? 'lg:order-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a consultation to discuss your project. We respond within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <a href="tel:(281) 915-9595" className="flex items-center justify-center gap-2 text-accent hover:underline">
                <span className="font-semibold">(281) 915-9595</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a href="mailto:info@houinc.com" className="flex items-center justify-center gap-2 text-accent hover:underline">
                <span className="font-semibold">info@houinc.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
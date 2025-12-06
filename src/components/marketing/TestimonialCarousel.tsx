import { Star, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TestimonialCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'James & Patricia Anderson',
      project: 'River Oaks Estate',
      type: 'Residential',
      rating: 5,
      quote: 'Houston Enterprise transformed our historic home into a modern masterpiece while preserving its architectural soul. Their attention to detail and communication throughout the process was nothing short of exceptional.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Memorial Properties LLC',
      project: 'Memorial Office Tower',
      type: 'Commercial',
      rating: 5,
      quote: 'A true partnership from start to finish. Their project management kept us on schedule and under budget while delivering a Class A building that exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Dr. Sarah Chen',
      project: 'Medical Plaza Build-out',
      type: 'Commercial',
      rating: 5,
      quote: 'The team understood the unique requirements of medical facilities. They navigated complex code requirements seamlessly and delivered a space that perfectly serves our patients.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    },
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-luxury" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Accent lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow text-accent">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by Houston's <span className="text-gradient">Finest</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our clients' success stories speak to the relationships we build and the excellence we deliver.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full flex flex-col border-glow">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground/90 leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-accent/20 animate-pulse-glow" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.project} • <span className="text-accent">{testimonial.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%', label: 'Client Satisfaction' },
            { value: '500+', label: 'Projects Completed' },
            { value: '85%', label: 'Repeat Clients' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
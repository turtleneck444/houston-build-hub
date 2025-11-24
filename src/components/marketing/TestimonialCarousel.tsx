import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'James & Patricia Anderson',
      project: 'River Oaks Estate Renovation',
      type: 'Residential',
      rating: 5,
      quote: 'Houston Enterprise transformed our historic home into a modern masterpiece while preserving its architectural soul. Their attention to detail and communication throughout the process was exceptional.',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Memorial Properties LLC',
      project: 'Memorial Office Tower',
      type: 'Commercial',
      rating: 5,
      quote: 'A true partnership from start to finish. Their project management kept us on schedule and under budget while delivering a Class A building that exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Dr. Sarah Chen',
      project: 'Medical Plaza Build-out',
      type: 'Commercial',
      rating: 5,
      quote: 'The team understood the unique requirements of medical facilities. They navigated complex code requirements seamlessly and delivered a space that perfectly serves our patients.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Houston's Best
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Don't just take our word for it. Here's what our clients say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card text-card-foreground hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-10 w-10 text-accent mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.project} • {testimonial.type}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
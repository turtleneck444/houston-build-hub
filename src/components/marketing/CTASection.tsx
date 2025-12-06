import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const CTASection = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 noise" />
      </div>

      {/* Accent lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow text-accent">Start Your Journey</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From initial consultation to final walkthrough, we're committed to delivering excellence at every step. Your vision deserves nothing less.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="btn-premium gradient-accent text-accent-foreground font-semibold rounded-full h-14 px-8"
                  onClick={() => navigate('/contact')}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-foreground/20 hover:bg-foreground/5 h-14 px-8"
                  onClick={() => window.location.href = 'tel:(281) 915-9595'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              {/* Response time badges */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'Response Time', value: '24-48hrs' },
                  { label: 'Free Estimates', value: 'Always' },
                  { label: 'Licensed & Insured', value: '✓' },
                ].map((item, i) => (
                  <div key={i} className="text-sm">
                    <span className="text-muted-foreground">{item.label}: </span>
                    <span className="text-accent font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-strong rounded-3xl p-10 border-glow">
                <h3 className="text-2xl font-display font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <a
                    href="tel:(281) 915-9595"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:shadow-glow transition-shadow">
                      <Phone className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-lg font-semibold group-hover:text-accent transition-colors">(281) 915-9595</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@houinc.com"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-steel flex items-center justify-center group-hover:shadow-glow transition-shadow">
                      <Mail className="h-5 w-5 text-steel-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-lg font-semibold group-hover:text-accent transition-colors">info@houinc.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Office</div>
                      <div className="text-lg font-semibold">2100 W Loop South, Suite 1115</div>
                      <div className="text-muted-foreground">Houston, TX 77027</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/10">
                  <p className="text-sm text-muted-foreground text-center">
                    Available Monday - Friday, 8:00 AM - 6:00 PM CST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
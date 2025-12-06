import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { projects, Project } from '@/mock-data/projects';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ProjectHighlights = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = projects.slice(0, 6);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/30 to-background" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      {/* Floating accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Featured Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Projects That <span className="text-gradient">Define</span> Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our diverse portfolio of residential masterpieces and commercial landmarks that showcase our commitment to quality.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/projects')}
            className="rounded-full border-foreground/20 hover:bg-foreground/5 group self-start lg:self-auto"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Projects Grid - Masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={index === 0 || index === 3 ? 'lg:row-span-2' : ''}
            >
              <Card
                className="card-premium group h-full overflow-hidden cursor-pointer bg-card border-border/50"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className={`relative overflow-hidden ${index === 0 || index === 3 ? 'h-full min-h-[500px]' : 'h-64'}`}>
                  {/* Image */}
                  <img
                    src={project.feature_image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      variant={project.type === 'Residential' ? 'residential' : 'commercial'}
                      className="backdrop-blur-sm"
                    >
                      {project.type}
                    </Badge>
                    {project.status === 'Completed' && (
                      <Badge variant="success" className="backdrop-blur-sm">
                        Completed
                      </Badge>
                    )}
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="h-5 w-5 text-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    
                    {(index === 0 || index === 3) && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.summary}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
                      <span className="text-sm text-muted-foreground">{project.size}</span>
                      <span className="text-sm text-accent font-medium">
                        {new Date(project.start_date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
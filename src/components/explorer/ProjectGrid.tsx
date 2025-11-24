import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { Project } from '@/mock-data/projects';
import { useNavigate } from 'react-router-dom';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const navigate = useNavigate();

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
      </div>
    );
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Planning':
        return 'status';
      default:
        return 'status';
    }
  };

  const formatBudget = (budget: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(budget);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="overflow-hidden hover-lift cursor-pointer group"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.feature_image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <Badge variant={project.type === 'Residential' ? 'residential' : 'commercial'}>
                {project.type}
              </Badge>
              <Badge variant={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {project.name}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.summary}
            </p>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-accent" />
                {new Date(project.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-4 w-4 text-accent" />
                {formatBudget(project.estimated_budget)}
              </div>
            </div>

            {project.status === 'In Progress' && (
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.completion_percentage}%</span>
                </div>
                <Progress value={project.completion_percentage} className="h-2" />
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground">{project.size}</span>
              <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
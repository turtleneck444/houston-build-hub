import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, DollarSign, User } from 'lucide-react';
import { Project } from '@/mock-data/projects';
import { useNavigate } from 'react-router-dom';

interface ProjectSummaryCardProps {
  project: Project;
}

export const ProjectSummaryCard = ({ project }: ProjectSummaryCardProps) => {
  const navigate = useNavigate();

  const formatBudget = (budget: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(budget);
  };

  const getNextMilestone = () => {
    const upcoming = project.milestones.find(m => m.status === 'upcoming');
    const inProgress = project.milestones.find(m => m.status === 'in-progress');
    return inProgress || upcoming;
  };

  const nextMilestone = getNextMilestone();

  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.feature_image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={project.type === 'Residential' ? 'residential' : 'commercial'}>
            {project.type}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-semibold">{project.completion_percentage}%</span>
          </div>
          <Progress value={project.completion_percentage} className="h-3" />
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Budget</div>
            <div className="font-semibold flex items-center gap-1">
              <DollarSign className="h-4 w-4 text-accent" />
              {formatBudget(project.estimated_budget)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Est. Completion</div>
            <div className="font-semibold flex items-center gap-1">
              <Calendar className="h-4 w-4 text-accent" />
              {new Date(project.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        {nextMilestone && (
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="text-sm text-muted-foreground mb-1">
              {nextMilestone.status === 'in-progress' ? 'Current Milestone' : 'Next Milestone'}
            </div>
            <div className="font-medium mb-1">{nextMilestone.title}</div>
            <div className="text-sm text-muted-foreground">
              Target: {new Date(nextMilestone.date).toLocaleDateString()}
            </div>
          </div>
        )}

        {/* Project Manager */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Project Manager</div>
            <div className="font-medium">{project.project_manager.name}</div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => navigate(`/portal/projects/${project.id}`)}
        >
          View Project Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
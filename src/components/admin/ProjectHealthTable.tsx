import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Eye } from 'lucide-react';
import { adminMetrics } from '@/mock-data/metrics';
import { useNavigate } from 'react-router-dom';

export const ProjectHealthTable = () => {
  const navigate = useNavigate();

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'warning';
      case 'low':
        return 'status';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <h3 className="text-xl font-bold">Projects Requiring Attention</h3>
      </div>

      {adminMetrics.projects_at_risk.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          All projects are on track! 🎉
        </div>
      ) : (
        <div className="space-y-4">
          {adminMetrics.projects_at_risk.map((project) => (
            <div
              key={project.id}
              className="flex items-start justify-between p-4 border border-border rounded-lg hover:border-accent transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold">{project.name}</h4>
                  <Badge variant={getSeverityColor(project.severity)}>
                    {project.severity} priority
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.issue}</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate(`/portal/projects/${project.id}`)}
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};
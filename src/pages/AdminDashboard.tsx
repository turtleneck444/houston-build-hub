import { Shell } from '@/components/layout/Shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { KPIStatsPanel } from '@/components/admin/KPIStatsPanel';
import { ConversionFunnelChart } from '@/components/admin/ConversionFunnelChart';
import { ProjectHealthTable } from '@/components/admin/ProjectHealthTable';
import { LogOut, Download } from 'lucide-react';
import { getCurrentUser, logout, isAdmin } from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { adminMetrics } from '@/mock-data/metrics';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user || !isAdmin()) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || !isAdmin()) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Shell>
      <section className="py-16 bg-gradient-to-br from-primary to-steel text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-white/80">Business performance overview and analytics</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          {/* KPIs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Performance Indicators</h2>
            <KPIStatsPanel />
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Conversion Funnel */}
            <div>
              <ConversionFunnelChart />
            </div>

            {/* Project Distribution */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Project Distribution</h3>
              <div className="space-y-4">
                {adminMetrics.project_types_distribution.map((type, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{type.type}</span>
                      <span className="font-semibold">{type.count} projects</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${(type.count / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Projects at Risk */}
          <ProjectHealthTable />

          {/* Active Projects Overview */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Projects by Stage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">
                  {adminMetrics.projects_by_stage.planning}
                </div>
                <div className="text-muted-foreground">Planning</div>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl font-bold text-warning mb-2">
                  {adminMetrics.projects_by_stage.in_progress}
                </div>
                <div className="text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-4xl font-bold text-success mb-2">
                  {adminMetrics.projects_by_stage.completed_this_year}
                </div>
                <div className="text-muted-foreground">Completed This Year</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Shell>
  );
};

export default AdminDashboard;
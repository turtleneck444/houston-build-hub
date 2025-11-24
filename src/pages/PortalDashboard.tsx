import { Shell } from '@/components/layout/Shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProjectSummaryCard } from '@/components/portal/ProjectSummaryCard';
import { Bell, Calendar, FileText, Image, LogOut } from 'lucide-react';
import { getCurrentUser, logout } from '@/services/auth';
import { getProjectsByClient } from '@/mock-data/projects';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PortalDashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || !user.client_id) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userProjects = getProjectsByClient(user.client_id);

  // Mock notifications
  const notifications = [
    { id: 1, message: 'New photos uploaded to River Oaks Estate project', time: '2 hours ago' },
    { id: 2, message: 'Next milestone: MEP Installation scheduled for Sept 10', time: '1 day ago' },
    { id: 3, message: 'Budget update available for review', time: '3 days ago' }
  ];

  return (
    <Shell>
      <section className="py-16 bg-gradient-to-br from-primary to-steel text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
              <p className="text-white/80">Here's what's happening with your projects.</p>
            </div>
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
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Active Projects</h2>
                {userProjects.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {userProjects.map((project) => (
                      <ProjectSummaryCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">No active projects at the moment.</p>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm">Active Projects</span>
                    </div>
                    <span className="font-semibold">{userProjects.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="text-sm">Documents</span>
                    </div>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4 text-accent" />
                      <span className="text-sm">Photos</span>
                    </div>
                    <span className="font-semibold">156</span>
                  </div>
                </div>
              </Card>

              {/* Notifications */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Recent Updates</h3>
                </div>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <p className="text-sm mb-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Contact PM */}
              {userProjects.length > 0 && (
                <Card className="p-6 bg-muted/50">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact your project manager directly:
                  </p>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">{userProjects[0].project_manager.name}</p>
                    <p className="text-muted-foreground">{userProjects[0].project_manager.email}</p>
                    <p className="text-muted-foreground">{userProjects[0].project_manager.phone}</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
};

export default PortalDashboard;
import { Shell } from '@/components/layout/Shell';
import { ProjectFilterBar } from '@/components/explorer/ProjectFilterBar';
import { ProjectGrid } from '@/components/explorer/ProjectGrid';
import { projects } from '@/mock-data/projects';
import { useState } from 'react';

const ProjectExplorer = () => {
  const [filters, setFilters] = useState({
    type: 'All' as 'All' | 'Residential' | 'Commercial',
    status: 'All' as 'All' | 'Planning' | 'In Progress' | 'Completed' | 'On Hold',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredProjects = projects.filter(project => {
    const matchesType = filters.type === 'All' || project.type === filters.type;
    const matchesStatus = filters.status === 'All' || project.status === filters.status;
    const matchesSearch = !filters.search ||
      project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.summary.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <Shell>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-steel text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Project Portfolio</h1>
            <p className="text-xl text-white/90">
              Explore our diverse portfolio of residential and commercial construction projects across Houston and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProjectFilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Projects Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
                </p>
              </div>
              <ProjectGrid projects={filteredProjects} />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
};

export default ProjectExplorer;
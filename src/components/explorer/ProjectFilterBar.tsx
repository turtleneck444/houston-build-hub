import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectFilterBarProps {
  filters: {
    type: 'All' | 'Residential' | 'Commercial';
    status: 'All' | 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
    search: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export const ProjectFilterBar = ({ filters, onFilterChange }: ProjectFilterBarProps) => {
  const types = ['All', 'Residential', 'Commercial'];
  const statuses = ['All', 'Planning', 'In Progress', 'Completed'];

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search projects by name or location..."
          className="pl-10 h-12"
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </div>

        {/* Type Filter */}
        <div>
          <div className="text-sm text-muted-foreground mb-2">Project Type</div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Badge
                key={type}
                variant={filters.type === type ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                onClick={() => onFilterChange('type', type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <div className="text-sm text-muted-foreground mb-2">Status</div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <Badge
                key={status}
                variant={filters.status === status ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                onClick={() => onFilterChange('status', status)}
              >
                {status}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {(filters.type !== 'All' || filters.status !== 'All' || filters.search) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            onFilterChange('type', 'All');
            onFilterChange('status', 'All');
            onFilterChange('search', '');
          }}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
};
export interface AdminMetrics {
  leads_this_month: number;
  leads_last_month: number;
  conversion_rate: number;
  average_project_size: number;
  active_projects_count: number;
  total_active_value: number;
  projects_by_stage: {
    planning: number;
    in_progress: number;
    completed_this_year: number;
  };
  revenue_this_year: number;
  revenue_last_year: number;
  projects_at_risk: {
    id: string;
    name: string;
    issue: string;
    severity: 'high' | 'medium' | 'low';
  }[];
  leads_by_month: {
    month: string;
    residential: number;
    commercial: number;
  }[];
  project_types_distribution: {
    type: string;
    count: number;
    value: number;
  }[];
}

export const adminMetrics: AdminMetrics = {
  leads_this_month: 47,
  leads_last_month: 38,
  conversion_rate: 34.5,
  average_project_size: 3200000,
  active_projects_count: 9,
  total_active_value: 28800000,
  projects_by_stage: {
    planning: 2,
    in_progress: 8,
    completed_this_year: 12
  },
  revenue_this_year: 42500000,
  revenue_last_year: 38200000,
  projects_at_risk: [
    {
      id: 'proj-006',
      name: 'Medical Plaza Build-out',
      issue: 'Specialized equipment delivery delayed 3 weeks',
      severity: 'medium'
    },
    {
      id: 'proj-008',
      name: 'Warehouse Conversion',
      issue: 'Environmental remediation uncovered additional work',
      severity: 'high'
    }
  ],
  leads_by_month: [
    { month: 'Jan', residential: 18, commercial: 8 },
    { month: 'Feb', residential: 22, commercial: 12 },
    { month: 'Mar', residential: 25, commercial: 10 },
    { month: 'Apr', residential: 20, commercial: 15 },
    { month: 'May', residential: 28, commercial: 14 },
    { month: 'Jun', residential: 24, commercial: 11 },
    { month: 'Jul', residential: 26, commercial: 13 },
    { month: 'Aug', residential: 30, commercial: 17 }
  ],
  project_types_distribution: [
    { type: 'Residential New Build', count: 15, value: 22500000 },
    { type: 'Residential Renovation', count: 28, value: 18200000 },
    { type: 'Commercial Office', count: 8, value: 42000000 },
    { type: 'Commercial Retail', count: 6, value: 15800000 },
    { type: 'Commercial Medical', count: 4, value: 12500000 }
  ]
};
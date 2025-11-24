import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Users, Building, CheckCircle } from 'lucide-react';
import { adminMetrics } from '@/mock-data/metrics';

export const KPIStatsPanel = () => {
  const stats = [
    {
      label: 'Leads This Month',
      value: adminMetrics.leads_this_month,
      change: `+${Math.round(((adminMetrics.leads_this_month - adminMetrics.leads_last_month) / adminMetrics.leads_last_month) * 100)}%`,
      trend: 'up' as const,
      icon: Users,
      color: 'accent'
    },
    {
      label: 'Conversion Rate',
      value: `${adminMetrics.conversion_rate}%`,
      change: '+3.2%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'success'
    },
    {
      label: 'Active Projects',
      value: adminMetrics.active_projects_count,
      change: 'On Track',
      trend: 'neutral' as const,
      icon: Building,
      color: 'steel'
    },
    {
      label: 'Total Active Value',
      value: `$${(adminMetrics.total_active_value / 1000000).toFixed(1)}M`,
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'accent'
    },
    {
      label: 'Avg Project Size',
      value: `$${(adminMetrics.average_project_size / 1000000).toFixed(1)}M`,
      change: '+8.3%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'success'
    },
    {
      label: 'YTD Revenue',
      value: `$${(adminMetrics.revenue_this_year / 1000000).toFixed(1)}M`,
      change: `+${Math.round(((adminMetrics.revenue_this_year - adminMetrics.revenue_last_year) / adminMetrics.revenue_last_year) * 100)}%`,
      trend: 'up' as const,
      icon: DollarSign,
      color: 'accent'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="p-6 hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                <Icon className={`h-6 w-6 text-${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'
              }`}>
                {stat.trend === 'up' && <TrendingUp className="h-4 w-4" />}
                {stat.change}
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        );
      })}
    </div>
  );
};
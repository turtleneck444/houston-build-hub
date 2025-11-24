import { Card } from '@/components/ui/card';
import { adminMetrics } from '@/mock-data/metrics';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ConversionFunnelChart = () => {
  const data = adminMetrics.leads_by_month;

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-6">Monthly Lead Generation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis dataKey="month" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar dataKey="residential" fill="hsl(var(--steel))" name="Residential" />
          <Bar dataKey="commercial" fill="hsl(var(--accent))" name="Commercial" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
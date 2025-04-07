
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '../ui/stats-card';
import { Leaf, BarChart3, TrendingDown } from 'lucide-react';
import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

const CarbonMetrics = () => {
  // Sample data
  const carbonData = [
    { name: 'Jan', carbon: 4000, efficiency: 2400 },
    { name: 'Feb', carbon: 3500, efficiency: 2210 },
    { name: 'Mar', carbon: 3200, efficiency: 2290 },
    { name: 'Apr', carbon: 2800, efficiency: 2400 },
    { name: 'May', carbon: 2200, efficiency: 2500 },
    { name: 'Jun', carbon: 2000, efficiency: 2600 },
    { name: 'Jul', carbon: 1900, efficiency: 2700 },
  ];

  return (
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Carbon Intelligence</CardTitle>
        <p className="text-xs text-muted-foreground">Sustainable operations metrics and ESG impact</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <StatsCard
            title="Carbon Reduction"
            value="32%"
            icon={Leaf}
            variant="success"
            trend={{ value: 4.5, isPositive: true }}
            description="vs last quarter"
          />
          <StatsCard
            title="Supply Efficiency"
            value="87"
            icon={TrendingDown}
            description="efficiency score"
            trend={{ value: 2, isPositive: true }}
          />
        </div>
        
        <div className="h-48 mt-3 animate-chart-in">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={carbonData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.6)' }} 
                stroke="rgba(255,255,255,0.1)" 
              />
              <YAxis 
                tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.6)' }} 
                stroke="rgba(255,255,255,0.1)" 
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(10, 17, 40, 0.9)',
                  border: '1px solid rgba(67, 97, 238, 0.2)',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="carbon" 
                stroke="#01BAEF" 
                strokeWidth={2}
                dot={{ r: 3, fill: '#0A1128', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#01BAEF', stroke: '#0A1128', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#06D6A0" 
                strokeWidth={2}
                dot={{ r: 3, fill: '#0A1128', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#06D6A0', stroke: '#0A1128', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonMetrics;

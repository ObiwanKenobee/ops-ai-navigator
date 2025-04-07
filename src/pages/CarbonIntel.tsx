
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import CarbonMetrics from '@/components/dashboard/CarbonMetrics';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/ui/stats-card';
import { 
  BarChart3, 
  Calendar, 
  Leaf, 
  TrendingDown, 
  Factory, 
  Truck, 
  Download,
  Filter
} from 'lucide-react';
import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  AreaChart,
  Area
} from 'recharts';

const CarbonIntel = () => {
  // Sample data
  const monthlyData = [
    { month: 'Jan', emissions: 840, target: 900 },
    { month: 'Feb', emissions: 820, target: 880 },
    { month: 'Mar', emissions: 780, target: 860 },
    { month: 'Apr', emissions: 790, target: 840 },
    { month: 'May', emissions: 750, target: 820 },
    { month: 'Jun', emissions: 710, target: 800 },
    { month: 'Jul', emissions: 690, target: 780 },
    { month: 'Aug', emissions: 670, target: 760 },
    { month: 'Sep', emissions: 640, target: 740 },
    { month: 'Oct', emissions: 620, target: 720 },
    { month: 'Nov', emissions: 600, target: 700 },
    { month: 'Dec', emissions: 580, target: 680 },
  ];

  const sourcesData = [
    { name: 'Transportation', value: 45 },
    { name: 'Manufacturing', value: 30 },
    { name: 'Facilities', value: 15 },
    { name: 'Other', value: 10 },
  ];

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Carbon Intelligence</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Year to Date
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <StatsCard 
              title="Carbon Reduction"
              value="32%"
              icon={Leaf}
              variant="success"
              trend={{ value: 4.5, isPositive: true }}
              description="vs last year"
            />
            <StatsCard 
              title="Supply Efficiency"
              value="87%"
              icon={TrendingDown}
              description="ESG compliance score"
              trend={{ value: 2, isPositive: true }}
            />
            <StatsCard 
              title="Carbon Credits"
              value="$1.2M"
              icon={BarChart3}
              description="Revenue generated"
              variant="success"
              trend={{ value: 12, isPositive: true }}
            />
          </div>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">Annual Emissions Trajectory</CardTitle>
                <p className="text-xs text-muted-foreground">CO2e in metric tons vs reduction target</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </CardHeader>
            <CardContent>
              <div className="h-64 animate-chart-in">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="month" 
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
                    <Area 
                      type="monotone" 
                      dataKey="emissions" 
                      fill="rgba(1, 186, 239, 0.2)" 
                      stroke="#01BAEF" 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#06D6A0" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Q1 Result</div>
                  <div className="text-xl font-bold text-atlas-success">-12.4%</div>
                </div>
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Q2 Result</div>
                  <div className="text-xl font-bold text-atlas-success">-8.9%</div>
                </div>
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Q3 Forecast</div>
                  <div className="text-xl font-bold text-atlas-success">-10.5%</div>
                </div>
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Annual Target</div>
                  <div className="text-xl font-bold">-30%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1 space-y-4">
          <CarbonMetrics />
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Emission Sources</CardTitle>
              <p className="text-xs text-muted-foreground">Distribution by operational area</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {sourcesData.map((source) => (
                <div key={source.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {source.name === 'Transportation' && <Truck className="h-4 w-4 mr-2 text-atlas-warning" />}
                      {source.name === 'Manufacturing' && <Factory className="h-4 w-4 mr-2 text-atlas-danger" />}
                      {source.name === 'Facilities' && <BarChart3 className="h-4 w-4 mr-2 text-atlas-teal" />}
                      {source.name === 'Other' && <Leaf className="h-4 w-4 mr-2 text-atlas-success" />}
                      <span className="text-sm font-medium">{source.name}</span>
                    </div>
                    <span className="text-sm font-bold">{source.value}%</span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        source.name === 'Transportation' ? 'bg-atlas-warning' : 
                        source.name === 'Manufacturing' ? 'bg-atlas-danger' :
                        source.name === 'Facilities' ? 'bg-atlas-teal' : 'bg-atlas-success'
                      }`} 
                      style={{ width: `${source.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 rounded-md bg-atlas-success/10 border border-atlas-success/20">
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-atlas-success" />
                  <div>
                    <div className="text-sm font-medium text-atlas-success">Carbon Optimization</div>
                    <div className="text-xs text-muted-foreground">3 recommendations available</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default CarbonIntel;

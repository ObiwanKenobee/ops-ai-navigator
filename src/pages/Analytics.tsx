
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/ui/stats-card';
import { 
  BarChart3, 
  Calendar, 
  Filter, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  PieChart,
  LineChart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  CartesianGrid, 
  Line, 
  LineChart as RechartsLineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

const Analytics = () => {
  // Sample data
  const performanceData = [
    { month: 'Jan', actual: 4000, predicted: 3700 },
    { month: 'Feb', actual: 4200, predicted: 4100 },
    { month: 'Mar', actual: 4500, predicted: 4300 },
    { month: 'Apr', actual: 4300, predicted: 4400 },
    { month: 'May', actual: 4800, predicted: 4600 },
    { month: 'Jun', actual: 5000, predicted: 4800 },
    { month: 'Jul', actual: 4900, predicted: 5000 },
    { month: 'Aug', actual: 5200, predicted: 5100 },
    { month: 'Sep', actual: 5500, predicted: 5300 },
    { month: 'Oct', actual: 5700, predicted: 5500 },
    { month: 'Nov', actual: 6000, predicted: 5800 },
    { month: 'Dec', actual: 6200, predicted: 6000 },
  ];

  const categoryData = [
    { name: 'Category A', value: 35 },
    { name: 'Category B', value: 25 },
    { name: 'Category C', value: 20 },
    { name: 'Category D', value: 15 },
    { name: 'Category E', value: 5 },
  ];

  const barData = [
    { name: 'Q1', revenue: 3200, cost: 2400 },
    { name: 'Q2', revenue: 4500, cost: 3200 },
    { name: 'Q3', revenue: 5100, cost: 3800 },
    { name: 'Q4', revenue: 6000, cost: 4200 },
  ];

  const COLORS = ['#4361EE', '#01BAEF', '#06D6A0', '#FFD166', '#EF476F'];

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Last 12 Months
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-4 gap-4">
          <StatsCard 
            title="Performance Index"
            value="92.4"
            icon={Activity}
            description="Overall score"
            trend={{ value: 3.2, isPositive: true }}
            variant="success"
          />
          <StatsCard 
            title="Revenue Growth"
            value="18.7%"
            icon={TrendingUp}
            description="Year over year"
            trend={{ value: 2.3, isPositive: true }}
          />
          <StatsCard 
            title="Cost Reduction"
            value="7.2%"
            icon={TrendingDown}
            description="Year over year"
            trend={{ value: 1.5, isPositive: true }}
            variant="success"
          />
          <StatsCard 
            title="Efficiency Ratio"
            value="1.24x"
            icon={BarChart3}
            description="Output per input"
            trend={{ value: 0.8, isPositive: true }}
          />
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">Performance Trends</CardTitle>
                <p className="text-xs text-muted-foreground">Monthly actual vs predicted performance</p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-sm bg-atlas-teal mr-1"></div>
                  <span>Actual</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-sm bg-atlas-success mr-1"></div>
                  <span>Predicted</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 animate-chart-in">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={performanceData}
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
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#01BAEF" 
                      strokeWidth={2}
                      dot={{ r: 3, fill: '#0A1128', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#01BAEF', stroke: '#0A1128', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#06D6A0" 
                      strokeWidth={2}
                      dot={{ r: 3, fill: '#0A1128', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#06D6A0', stroke: '#0A1128', strokeWidth: 2 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Quarterly Comparison</CardTitle>
              <p className="text-xs text-muted-foreground">Revenue vs Cost analysis</p>
            </CardHeader>
            <CardContent>
              <div className="h-64 animate-chart-in">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
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
                    <Legend 
                      verticalAlign="top" 
                      height={36}
                      formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>{value}</span>}
                    />
                    <Bar dataKey="revenue" fill="#01BAEF" name="Revenue" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="cost" fill="#4361EE" name="Cost" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Category Distribution</CardTitle>
              <p className="text-xs text-muted-foreground">Percentage allocation by category</p>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(10, 17, 40, 0.9)',
                        border: '1px solid rgba(67, 97, 238, 0.2)',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                {categoryData.map((category, index) => (
                  <div key={category.name} className="flex items-center">
                    <div 
                      className="h-3 w-3 rounded-sm mr-2" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-xs">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Key Insights</CardTitle>
              <p className="text-xs text-muted-foreground">AI-generated analytics summary</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-md bg-atlas-success/10 border border-atlas-success/20">
                <div className="flex items-center text-sm font-medium text-atlas-success mb-1">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Growth Opportunity
                </div>
                <p className="text-xs">Category A shows 23% growth potential based on current market trends and historical performance.</p>
              </div>
              
              <div className="p-3 rounded-md bg-atlas-warning/10 border border-atlas-warning/20">
                <div className="flex items-center text-sm font-medium text-atlas-warning mb-1">
                  <Activity className="h-4 w-4 mr-2" />
                  Efficiency Alert
                </div>
                <p className="text-xs">Q3 cost to revenue ratio increased 4.3%. Recommend reviewing operational expenses.</p>
              </div>
              
              <div className="p-3 rounded-md bg-atlas-teal/10 border border-atlas-teal/20">
                <div className="flex items-center text-sm font-medium text-atlas-teal mb-1">
                  <PieChart className="h-4 w-4 mr-2" />
                  Portfolio Insight
                </div>
                <p className="text-xs">Categories B and C combined represent 45% of allocation but drive 63% of value.</p>
              </div>
              
              <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                <div className="flex items-center text-sm font-medium text-atlas-accent mb-1">
                  <LineChart className="h-4 w-4 mr-2" />
                  Performance Forecast
                </div>
                <p className="text-xs">Predictive model suggests Q1 2026 will exceed target by approximately 12%.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default Analytics;


import React from 'react';
import AppShell from '@/components/layout/AppShell';
import CommandGraph from '@/components/dashboard/CommandGraph';
import SupplyChainMonitor from '@/components/dashboard/SupplyChainMonitor';
import CarbonMetrics from '@/components/dashboard/CarbonMetrics';
import AiAssistant from '@/components/dashboard/AiAssistant';
import { StatsCard } from '@/components/ui/stats-card';
import { Activity, AlertTriangle, ArrowRight, BarChart3, Boxes, Clock, Server, Settings, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto h-full">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <StatsCard 
              title="Decision Intelligence"
              value="98.2%"
              icon={Zap}
              description="Accuracy score"
              trend={{ value: 1.2, isPositive: true }}
            />
            <StatsCard 
              title="Reported Incidents"
              value="2"
              icon={AlertTriangle}
              description="In the last 24h"
              variant="warning"
              trend={{ value: 3, isPositive: false }}
            />
            <StatsCard 
              title="System Status"
              value="Optimal"
              icon={Server}
              description="All systems operational"
              variant="success"
            />
          </div>
          
          <CommandGraph />
          
          <div className="grid grid-cols-2 gap-4">
            <CarbonMetrics />
            <AiAssistant />
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Real-time Metrics</CardTitle>
              <p className="text-xs text-muted-foreground">Global operational performance</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Decision Quality</div>
                  <div className="w-2/3 bg-secondary/50 rounded-full h-2.5">
                    <div className="bg-atlas-teal h-2.5 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="text-sm font-medium">94%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Network Efficiency</div>
                  <div className="w-2/3 bg-secondary/50 rounded-full h-2.5">
                    <div className="bg-atlas-accent h-2.5 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <div className="text-sm font-medium">87%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Carbon Reduction</div>
                  <div className="w-2/3 bg-secondary/50 rounded-full h-2.5">
                    <div className="bg-atlas-success h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="text-sm font-medium">78%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Inventory Utilization</div>
                  <div className="w-2/3 bg-secondary/50 rounded-full h-2.5">
                    <div className="bg-atlas-warning h-2.5 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                  <div className="text-sm font-medium">63%</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <SupplyChainMonitor />
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Command Actions</CardTitle>
              <p className="text-xs text-muted-foreground">Common operations and tasks</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Run Simulation
                </Button>
                <Button variant="outline" className="justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
                <Button variant="outline" className="justify-start">
                  <Boxes className="h-4 w-4 mr-2" />
                  Inventory
                </Button>
                <Button variant="outline" className="justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Scheduling
                </Button>
                <Button variant="outline" className="justify-start col-span-2">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure Atlas IO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default Index;

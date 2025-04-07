
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import SupplyChainMonitor from '@/components/dashboard/SupplyChainMonitor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/ui/stats-card';
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  Map, 
  Truck, 
  PackageOpen, 
  Warehouse, 
  ArrowRight, 
  Boxes 
} from 'lucide-react';

const SupplyChain = () => {
  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Supply Chain Operations</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Last 30 Days
              </Button>
              <Button size="sm">
                <Map className="mr-2 h-4 w-4" />
                View Global Map
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <StatsCard 
              title="Active Shipments"
              value="487"
              icon={Truck}
              description="In transit"
              trend={{ value: 3.5, isPositive: true }}
            />
            <StatsCard 
              title="Stock Levels"
              value="76.4%"
              icon={PackageOpen}
              description="Inventory capacity"
              trend={{ value: 2.1, isPositive: true }}
            />
            <StatsCard 
              title="Fulfilment Rate"
              value="94.8%"
              icon={Boxes}
              description="On-time delivery"
              variant="success"
            />
          </div>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Logistics Overview</CardTitle>
              <p className="text-xs text-muted-foreground">End-to-end supply chain visibility</p>
            </CardHeader>
            <CardContent>
              <div className="h-64 grid-pattern bg-atlas-navy/40 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Supply Chain Visualization</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Warehouse Efficiency</div>
                  <div className="text-2xl font-bold">87%</div>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-atlas-success mr-1">+4.5%</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Transit Time</div>
                  <div className="text-2xl font-bold">4.2 days</div>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-atlas-success mr-1">-0.3 days</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-md bg-atlas-accent/10 border border-atlas-accent/20">
                  <div className="text-sm font-medium mb-1">Order Accuracy</div>
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-atlas-success mr-1">+0.7%</span>
                    <span className="text-muted-foreground">vs last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1 space-y-4">
          <SupplyChainMonitor />
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Next Deliveries</CardTitle>
              <p className="text-xs text-muted-foreground">Scheduled for the next 24 hours</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { id: 'DEL-28756', destination: 'New York Hub', time: '3h 45m', items: 156 },
                { id: 'DEL-28741', destination: 'Chicago DC', time: '8h 20m', items: 237 },
                { id: 'DEL-28732', destination: 'Miami Center', time: '11h 05m', items: 94 },
              ].map((delivery) => (
                <div key={delivery.id} className="flex items-center justify-between p-2 rounded-md bg-atlas-navy/30">
                  <div>
                    <div className="font-medium">{delivery.id}</div>
                    <div className="text-xs text-muted-foreground">{delivery.destination}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-atlas-teal" />
                      <span className="text-sm">{delivery.time}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{delivery.items} items</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-sm mt-2" size="sm">
                View All Deliveries <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default SupplyChain;

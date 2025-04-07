
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MoreHorizontal, Package, Truck, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StatsCard } from '../ui/stats-card';

interface SupplyRouteProps {
  name: string;
  status: 'normal' | 'warning' | 'danger';
  origin: string;
  destination: string;
  eta: string;
  items: number;
}

const SupplyChainMonitor = () => {
  const [activeTab, setActiveTab] = React.useState('routes');
  
  const supplyRoutes: SupplyRouteProps[] = [
    { 
      name: "Shanghai to Los Angeles", 
      status: "normal", 
      origin: "Shanghai, CN", 
      destination: "Los Angeles, US", 
      eta: "May 12, 2025", 
      items: 342 
    },
    { 
      name: "Rotterdam to New York", 
      status: "warning", 
      origin: "Rotterdam, NL", 
      destination: "New York, US", 
      eta: "Apr 28, 2025", 
      items: 156 
    },
    { 
      name: "Singapore to Sydney", 
      status: "danger", 
      origin: "Singapore, SG", 
      destination: "Sydney, AU", 
      eta: "May 03, 2025", 
      items: 87 
    },
  ];
  
  const SupplyRouteCard = ({ route }: { route: SupplyRouteProps }) => {
    const statusColors = {
      normal: "bg-atlas-success/10 border-atlas-success/20",
      warning: "bg-atlas-warning/10 border-atlas-warning/20",
      danger: "bg-atlas-danger/10 border-atlas-danger/20"
    };
    
    const statusIconColors = {
      normal: "text-atlas-success",
      warning: "text-atlas-warning",
      danger: "text-atlas-danger"
    };
    
    return (
      <Card className={cn("mb-3 border", statusColors[route.status])}>
        <CardContent className="p-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{route.name}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <span>{route.origin}</span>
                <ArrowRight className="h-3 w-3" />
                <span>{route.destination}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-sm">
            <div className="flex items-center gap-1">
              <Package className={cn("h-4 w-4", statusIconColors[route.status])} />
              <span>{route.items} items</span>
            </div>
            <div className="flex items-center gap-1">
              <div className={cn("h-2 w-2 rounded-full", 
                route.status === "normal" ? "bg-atlas-success" : 
                route.status === "warning" ? "bg-atlas-warning" : "bg-atlas-danger"
              )}></div>
              <span>{route.status === "normal" ? "On Time" : route.status === "warning" ? "Delayed" : "Critical"}</span>
            </div>
            <div className="text-muted-foreground">ETA: {route.eta}</div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Card className="col-span-1 row-span-2 border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Supply Chain Monitor</CardTitle>
        <p className="text-xs text-muted-foreground">Real-time logistics tracking and optimization</p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 pb-2">
        <StatsCard
          title="Active Routes"
          value="19"
          icon={Truck}
          trend={{ value: 3, isPositive: true }}
          description="vs last week"
        />
        <StatsCard
          title="Inventory"
          value="54.2k"
          icon={Warehouse}
          trend={{ value: 2, isPositive: false }}
          description="units"
        />
      </CardContent>
      
      <div className="px-6">
        <div className="flex border-b border-atlas-accent/10 mb-2">
          <button 
            className={cn(
              "text-sm pb-2 px-3 -mb-px", 
              activeTab === 'routes' ? "border-b border-atlas-teal text-atlas-teal" : "text-muted-foreground"
            )}
            onClick={() => setActiveTab('routes')}
          >
            Routes
          </button>
          <button 
            className={cn(
              "text-sm pb-2 px-3 -mb-px",
              activeTab === 'hubs' ? "border-b border-atlas-teal text-atlas-teal" : "text-muted-foreground"
            )}
            onClick={() => setActiveTab('hubs')}
          >
            Hubs
          </button>
        </div>
      </div>
      
      <CardContent className="pt-0">
        {activeTab === 'routes' && (
          <div className="space-y-1">
            {supplyRoutes.map((route, index) => (
              <SupplyRouteCard key={index} route={route} />
            ))}
            <Button variant="outline" className="w-full text-sm" size="sm">
              View All Routes
            </Button>
          </div>
        )}
        
        {activeTab === 'hubs' && (
          <div className="py-3 text-center text-muted-foreground">
            <Warehouse className="h-12 w-12 mx-auto mb-2 opacity-30" />
            <p>Hub visualization is being processed</p>
            <p className="text-xs">Check back soon</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SupplyChainMonitor;

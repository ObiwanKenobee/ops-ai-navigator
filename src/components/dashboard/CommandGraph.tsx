
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, AlertTriangle, CheckCircle, Filter, Info, Maximize2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CommandGraph = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState('realtime');

  // Simulating graph nodes that would normally be rendered with a library like visx, d3, or react-force-graph
  const renderGraphPlaceholder = () => {
    return (
      <div className="relative h-full w-full grid-pattern bg-atlas-navy/40 rounded-lg overflow-hidden graph-container">
        <div className="absolute left-1/4 top-1/3 h-5 w-5 rounded-full bg-atlas-teal opacity-80 animate-pulse-node" />
        <div className="absolute left-1/2 top-1/3 h-4 w-4 rounded-full bg-atlas-success opacity-80 animate-pulse-node-slow" />
        <div className="absolute left-3/4 top-1/3 h-6 w-6 rounded-full bg-atlas-teal opacity-80 animate-pulse-node" />
        <div className="absolute left-1/4 top-2/3 h-5 w-5 rounded-full bg-atlas-danger opacity-80 animate-pulse-node-slow" />
        <div className="absolute left-1/2 top-2/3 h-7 w-7 rounded-full bg-atlas-teal opacity-80 animate-pulse-node" />
        <div className="absolute left-3/4 top-2/3 h-4 w-4 rounded-full bg-atlas-warning opacity-80 animate-pulse-node-slow" />
        
        {/* Simulated lines connecting nodes */}
        <svg className="absolute top-0 left-0 w-full h-full">
          <line x1="25%" y1="33%" x2="50%" y2="33%" className="link active" />
          <line x1="50%" y1="33%" x2="75%" y2="33%" className="link" />
          <line x1="25%" y1="33%" x2="25%" y2="66%" className="link" />
          <line x1="50%" y1="33%" x2="50%" y2="66%" className="link active" />
          <line x1="75%" y1="33%" x2="75%" y2="66%" className="link" />
          <line x1="25%" y1="66%" x2="50%" y2="66%" className="link" />
          <line x1="50%" y1="66%" x2="75%" y2="66%" className="link active" />
        </svg>
        
        {/* Legends and labels */}
        <div className="absolute top-4 left-4 bg-atlas-carbon/70 px-3 py-2 rounded-md backdrop-blur-sm">
          <div className="text-xs text-muted-foreground">Command Graph™</div>
          <div className="text-sm font-medium">Global Supply Network</div>
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="bg-atlas-carbon/70 px-2 py-1 rounded-md backdrop-blur-sm flex items-center">
            <div className="h-2 w-2 rounded-full bg-atlas-teal mr-1"></div>
            <span className="text-xs">Normal</span>
          </div>
          <div className="bg-atlas-carbon/70 px-2 py-1 rounded-md backdrop-blur-sm flex items-center">
            <div className="h-2 w-2 rounded-full bg-atlas-warning mr-1"></div>
            <span className="text-xs">Warning</span>
          </div>
          <div className="bg-atlas-carbon/70 px-2 py-1 rounded-md backdrop-blur-sm flex items-center">
            <div className="h-2 w-2 rounded-full bg-atlas-danger mr-1"></div>
            <span className="text-xs">Critical</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 bg-atlas-carbon/70 px-3 py-2 rounded-md backdrop-blur-sm">
          <div className="text-xs text-muted-foreground">Network Health</div>
          <div className="text-sm font-medium flex items-center">
            <Activity className="h-3 w-3 mr-1 text-atlas-teal" />
            87% Optimal
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="col-span-2 row-span-2 border-atlas-accent/10 bg-atlas-carbon/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-semibold flex items-center">
            Command Graph™
            <Badge variant="outline" className="ml-2 text-xs bg-atlas-accent/10">
              BETA
            </Badge>
          </CardTitle>
          <p className="text-xs text-muted-foreground">Visualizing operational decision intelligence in real-time</p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100%-4rem)]">
        <div className="flex justify-between items-center px-6 mb-1">
          <TabsList className="bg-atlas-navy/30">
            <TabsTrigger value="realtime" className="text-xs">Real-Time</TabsTrigger>
            <TabsTrigger value="forecast" className="text-xs">Forecast</TabsTrigger>
            <TabsTrigger value="historical" className="text-xs">Historical</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-1 text-xs">
            <div className="flex items-center">
              <CheckCircle className="h-3 w-3 text-atlas-success mr-1" />
              <span className="text-muted-foreground mr-2">3 Optimal</span>
            </div>
            <div className="flex items-center">
              <AlertTriangle className="h-3 w-3 text-atlas-warning mr-1" />
              <span className="text-muted-foreground mr-2">2 At Risk</span>
            </div>
            <div className="flex items-center">
              <Info className="h-3 w-3 text-atlas-danger mr-1" />
              <span className="text-muted-foreground">1 Critical</span>
            </div>
          </div>
        </div>
        <CardContent className="p-0 h-[calc(100%-2rem)]">
          <TabsContent value="realtime" className="h-full m-0 p-3">
            {renderGraphPlaceholder()}
          </TabsContent>
          <TabsContent value="forecast" className="h-full m-0 p-3">
            {renderGraphPlaceholder()}
          </TabsContent>
          <TabsContent value="historical" className="h-full m-0 p-3">
            {renderGraphPlaceholder()}
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default CommandGraph;

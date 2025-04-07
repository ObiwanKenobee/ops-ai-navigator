
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Check, Zap } from 'lucide-react';

const AutonomousResilienceLayer = () => {
  return (
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Shield className="h-5 w-5 text-atlas-teal" />
          Autonomous Ops Resilience
        </CardTitle>
        <p className="text-xs text-muted-foreground">Stoic control dichotomy in action</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-atlas-navy/30 p-3 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-atlas-teal" />
                <h3 className="text-sm font-medium">Controllable Factors</h3>
              </div>
              <span className="text-xs bg-atlas-teal/10 text-atlas-teal px-2 py-0.5 rounded-full">
                78% Optimized
              </span>
            </div>
            <ul className="mt-2 space-y-1 text-xs">
              <li className="text-muted-foreground">• Inventory allocation</li>
              <li className="text-muted-foreground">• Order scheduling</li>
              <li className="text-muted-foreground">• Quality control protocols</li>
              <li className="text-muted-foreground">• Resource management</li>
            </ul>
          </div>
          
          <div className="bg-atlas-navy/30 p-3 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-atlas-warning" />
                <h3 className="text-sm font-medium">External Variables</h3>
              </div>
              <span className="text-xs bg-atlas-warning/10 text-atlas-warning px-2 py-0.5 rounded-full">
                92% Monitored
              </span>
            </div>
            <ul className="mt-2 space-y-1 text-xs">
              <li className="text-muted-foreground">• Weather disruptions</li>
              <li className="text-muted-foreground">• Geopolitical events</li>
              <li className="text-muted-foreground">• Market fluctuations</li>
              <li className="text-muted-foreground">• Regulatory changes</li>
            </ul>
          </div>
        </div>

        <div className="bg-atlas-navy/20 p-3 rounded-md">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Zap className="h-4 w-4 text-atlas-accent" />
            Operational Equanimity Score
          </h3>
          <div className="flex items-center mt-2 gap-1">
            <div className="w-full bg-atlas-navy/30 h-2 rounded-full">
              <div className="bg-atlas-accent h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-sm font-bold">85</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            System maintains high resilience under stress conditions
          </p>
        </div>

        <div className="flex justify-between text-xs">
          <div className="text-muted-foreground">
            <span className="font-medium">Disruptions Absorbed:</span> 137
          </div>
          <div className="text-muted-foreground">
            <span className="font-medium">Antifragility Index:</span>
            <span className="text-atlas-teal"> 4.8/5.0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutonomousResilienceLayer;

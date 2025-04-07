
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Handshake, Repeat, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CovenantGovernanceLayer = () => {
  return (
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5 text-atlas-teal" />
          Covenant Protocol
        </CardTitle>
        <p className="text-xs text-muted-foreground">Value-aligned operational rituals</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-atlas-navy/30 p-3 rounded-md">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Handshake className="h-4 w-4 text-atlas-accent" />
            Active Covenants
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs">Supply Partners</span>
                <Badge variant="outline" className="text-xs">14 Active</Badge>
              </div>
              <div className="w-full bg-atlas-navy/30 h-1.5 rounded-full">
                <div className="bg-atlas-teal h-1.5 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs">Manufacturing</span>
                <Badge variant="outline" className="text-xs">8 Active</Badge>
              </div>
              <div className="w-full bg-atlas-navy/30 h-1.5 rounded-full">
                <div className="bg-atlas-accent h-1.5 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs">Logistics</span>
                <Badge variant="outline" className="text-xs">11 Active</Badge>
              </div>
              <div className="w-full bg-atlas-navy/30 h-1.5 rounded-full">
                <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs">Distribution</span>
                <Badge variant="outline" className="text-xs">6 Active</Badge>
              </div>
              <div className="w-full bg-atlas-navy/30 h-1.5 rounded-full">
                <div className="bg-atlas-warning h-1.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-atlas-navy/20 p-3 rounded-md">
          <h3 className="text-sm font-medium mb-2">Operational Liturgies</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Repeat className="h-4 w-4 text-atlas-teal" />
                <span className="text-xs">Daily Supply Chain Synchronization</span>
              </div>
              <Badge variant="secondary" className="text-xs">08:00 UTC</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Repeat className="h-4 w-4 text-atlas-accent" />
                <span className="text-xs">Weekly Resource Allocation Ritual</span>
              </div>
              <Badge variant="secondary" className="text-xs">Monday</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Repeat className="h-4 w-4 text-atlas-success" />
                <span className="text-xs">Monthly Covenant Renewal Ceremony</span>
              </div>
              <Badge variant="secondary" className="text-xs">1st Day</Badge>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <div>
            <span className="font-medium">Trust Score:</span> 94.7%
          </div>
          <div>
            <span className="font-medium">Covenant Value:</span> $12.4M
          </div>
          <div>
            <span className="font-medium">Smart Contracts:</span> 142
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CovenantGovernanceLayer;

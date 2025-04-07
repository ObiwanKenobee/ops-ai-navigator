
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen, Brain, TrendingUp } from 'lucide-react';

const OperationalMemoryEngine = () => {
  return (
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-atlas-teal" />
          Operational Memory Engine
        </CardTitle>
        <p className="text-xs text-muted-foreground">Historical knowledge compounding system</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 bg-atlas-navy/30 p-3 rounded-md">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-atlas-accent" />
              <h3 className="text-sm font-medium">Decision History</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Chronicles of past operational decisions, outcomes, and exceptions
            </p>
          </div>

          <div className="space-y-2 bg-atlas-navy/30 p-3 rounded-md">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-atlas-accent" />
              <h3 className="text-sm font-medium">Pattern Recognition</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              AI-powered insights derived from historical operational data
            </p>
          </div>
        </div>

        <div className="bg-atlas-navy/20 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Knowledge Compounding Rate</span>
            <span className="text-sm font-bold text-atlas-teal flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" /> 
              187% YoY
            </span>
          </div>
          <div className="w-full bg-atlas-navy/30 h-2 rounded-full mt-2">
            <div className="bg-atlas-teal h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Operational knowledge is compounding at an accelerating rate
          </p>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Total Decision Points: 24,731</span>
          <span>Insights Generated: 893</span>
          <span>Historical Lookback: 3.7 years</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OperationalMemoryEngine;

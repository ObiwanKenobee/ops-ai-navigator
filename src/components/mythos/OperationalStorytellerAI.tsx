
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Bookmark, TrendingUp, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const OperationalStorytellerAI = () => {
  return (
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-atlas-teal" />
          Operational Storyteller AI
        </CardTitle>
        <p className="text-xs text-muted-foreground">Converting data into compelling narratives</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-atlas-navy/30 p-3 rounded-md">
          <h3 className="text-sm font-medium mb-2">Featured Operational Stories</h3>
          <div className="space-y-2.5">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-atlas-teal" />
                  <span className="text-sm font-medium">The $4M Delay Fix</span>
                </div>
                <Badge variant="outline" className="text-xs text-atlas-teal">ROI Story</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                How a 2-second delay correction in our assembly process saved millions in annual costs.
              </p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-atlas-accent" />
                  <span className="text-sm font-medium">The Resilient Route</span>
                </div>
                <Badge variant="outline" className="text-xs text-atlas-accent">Crisis Response</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                How our systems navigated through the Southeast Asia shipping disruption.
              </p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-atlas-success" />
                  <span className="text-sm font-medium">Carbon Reduction Chronicles</span>
                </div>
                <Badge variant="outline" className="text-xs text-atlas-success">ESG Impact</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                The journey to 34% emissions reduction while improving delivery times.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-atlas-navy/20 p-3 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-atlas-warning" />
              Operational Canon Metrics
            </h3>
            <Badge className="bg-atlas-teal/20 hover:bg-atlas-teal/30 text-atlas-teal">
              <TrendingUp className="h-3 w-3 mr-1" /> Growing
            </Badge>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-atlas-navy/30 p-2 rounded-md text-center">
              <div className="text-lg font-bold text-atlas-teal">137</div>
              <div className="text-xs text-muted-foreground">Stories Crafted</div>
            </div>
            <div className="bg-atlas-navy/30 p-2 rounded-md text-center">
              <div className="text-lg font-bold text-atlas-accent">94%</div>
              <div className="text-xs text-muted-foreground">Exec Alignment</div>
            </div>
            <div className="bg-atlas-navy/30 p-2 rounded-md text-center">
              <div className="text-lg font-bold text-atlas-success">18K</div>
              <div className="text-xs text-muted-foreground">Data Points</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Dynamic Narratives: 24</span>
          <span>Cultural Impact Score: 8.7/10</span>
          <span>Insight Adoption: 83%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OperationalStorytellerAI;

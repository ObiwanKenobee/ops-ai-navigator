
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import OperationalMemoryEngine from '@/components/alexandria/OperationalMemoryEngine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, BookOpen, Brain, Clock, History, Layers, Library, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Alexandria = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">🕰️ The Library of Operational Alexandria</h1>
            <p className="text-muted-foreground">Knowledge compounding system for operational excellence</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Archives
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10 col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Library className="h-5 w-5 text-atlas-teal" />
                Knowledge Compounding System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <p className="text-sm">
                  The Library of Operational Alexandria captures, codifies, and transmits operational knowledge, 
                  creating a compounding system of intelligence that grows more valuable over time.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-atlas-teal" />
                      <h3 className="text-sm font-medium">Operational Memory</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Every decision, outcome, and exception feeds into a dynamic operational canon that grows
                      richer and more valuable with each interaction.
                    </p>
                  </div>
                  
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-atlas-accent" />
                      <h3 className="text-sm font-medium">Pattern Recognition</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Advanced AI systems identify patterns across time and departments, surfacing insights
                      that would remain hidden to human operators.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-atlas-teal" />
                Time-Based Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-atlas-teal" />
                        <h3 className="text-sm font-medium">Knowledge Layers</h3>
                      </div>
                      <span className="text-xs bg-atlas-teal/10 text-atlas-teal px-2 py-0.5 rounded-full">3,217</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accumulated operational insights in the system
                    </p>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <History className="h-4 w-4 text-atlas-accent" />
                        <h3 className="text-sm font-medium">Temporal Depth</h3>
                      </div>
                      <span className="text-xs bg-atlas-accent/10 text-atlas-accent px-2 py-0.5 rounded-full">3.7 yrs</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Historical data span available for analysis
                    </p>
                  </div>
                </div>
                
                <Button className="w-full gap-2 bg-atlas-teal/20 text-atlas-teal hover:bg-atlas-teal/30 hover:text-atlas-teal">
                  <Book className="h-4 w-4" />
                  Access Knowledge Base
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <OperationalMemoryEngine />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Recent Operational Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <h3 className="text-sm font-medium">Inventory Optimization Pattern</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Historical analysis reveals a 22% reduction in carrying costs when applying seasonal 
                    pre-positioning based on 3-year cyclical demand patterns.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-teal">Confidence: 94%</span>
                    <span className="text-muted-foreground">Generated: 2 days ago</span>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <h3 className="text-sm font-medium">Supply Chain Resilience Finding</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Multi-sourcing from geographically distributed suppliers increases costs by 7% 
                    but reduces disruption risk by 64% based on historical events.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-teal">Confidence: 87%</span>
                    <span className="text-muted-foreground">Generated: 5 days ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Compounding Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-teal">187%</div>
                    <div className="text-xs text-muted-foreground">Annual Knowledge Growth</div>
                  </div>
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-accent">$4.2M</div>
                    <div className="text-xs text-muted-foreground">Value Created</div>
                  </div>
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-success">24,731</div>
                    <div className="text-xs text-muted-foreground">Decision Points</div>
                  </div>
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-warning">893</div>
                    <div className="text-xs text-muted-foreground">Insights Generated</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Detailed Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default Alexandria;

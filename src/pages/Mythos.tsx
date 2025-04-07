
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import OperationalStorytellerAI from '@/components/mythos/OperationalStorytellerAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, BookOpen, Bookmark, ArrowRight, PenTool, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Mythos = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">📖 The Mythos Engine</h1>
            <p className="text-muted-foreground">Transforming operational insights into compelling narratives</p>
          </div>
          <Button variant="outline" className="gap-2">
            <PenTool className="h-4 w-4" />
            Story Workshop
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10 col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-atlas-teal" />
                Narrative-Driven Operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <p className="text-sm">
                  The Mythos Engine transforms raw operational data into compelling narratives that drive 
                  understanding, alignment, and action across the organization. By framing complex operational 
                  realities as stories, we make insights accessible and actionable.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-atlas-teal" />
                      <h3 className="text-sm font-medium">Operational Storytelling</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Converts complex data patterns and insights into meaningful, memorable narratives 
                      that resonate with stakeholders at all levels of the organization.
                    </p>
                  </div>
                  
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Bookmark className="h-4 w-4 text-atlas-accent" />
                      <h3 className="text-sm font-medium">Cultural Reinforcement</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Creates shared organizational mythology that reinforces values, celebrates 
                      victories, and embeds operational wisdom in the company culture.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-atlas-teal" />
                Narrative Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Executive Alignment</h3>
                      <span className="text-md font-bold text-atlas-teal">94%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Improvement in strategic understanding via narratives
                    </p>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Cultural Impact</h3>
                      <span className="text-md font-bold text-atlas-accent">8.7/10</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Effectiveness of stories in driving organizational behavior
                    </p>
                  </div>
                </div>
                
                <Button className="w-full gap-2 bg-atlas-teal/20 text-atlas-teal hover:bg-atlas-teal/30 hover:text-atlas-teal">
                  <MessageSquare className="h-4 w-4" />
                  Generate New Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <OperationalStorytellerAI />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Featured Operational Epics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">The Manifest Destiny of Southeast Asia</h3>
                    <Badge variant="outline" className="text-atlas-teal">Growth Strategy</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    The epic three-year journey expanding our operational footprint across Southeast Asia, 
                    overcoming logistical challenges and cultural barriers to establish a resilient regional network.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-teal">18 Chapters</span>
                    <span className="text-muted-foreground">ROI Impact: $8.7M</span>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">The Carbon Reduction Odyssey</h3>
                    <Badge variant="outline" className="text-atlas-accent">Sustainability</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    How our global operations embarked on an ambitious journey to reduce carbon 
                    emissions by 34% while simultaneously improving delivery times and reducing costs.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-accent">12 Chapters</span>
                    <span className="text-muted-foreground">ESG Value: $4.3M</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  Explore All Epics <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Narrative Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-teal">137</div>
                  <div className="text-xs text-muted-foreground">Stories Crafted</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-accent">94%</div>
                  <div className="text-xs text-muted-foreground">Executive Alignment</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-success">83%</div>
                  <div className="text-xs text-muted-foreground">Insight Adoption</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-warning">18K</div>
                  <div className="text-xs text-muted-foreground">Data Points Woven</div>
                </div>
              </div>
              
              <div className="bg-atlas-navy/30 p-3 rounded-md">
                <h3 className="text-sm font-medium mb-2">Narrative Frameworks in Use</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Hero's Journey</span>
                    <Badge variant="secondary" className="text-xs">42 Stories</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Challenge & Triumph</span>
                    <Badge variant="secondary" className="text-xs">37 Stories</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Innovation Epiphany</span>
                    <Badge variant="secondary" className="text-xs">29 Stories</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Operational Evolution</span>
                    <Badge variant="secondary" className="text-xs">24 Stories</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default Mythos;

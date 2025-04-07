import React from 'react';
import AppShell from '@/components/layout/AppShell';
import CovenantGovernanceLayer from '@/components/covenant/CovenantGovernanceLayer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Handshake, ArrowRight, FileText, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Covenant = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">🕊️ The Atlas Covenant Protocol</h1>
            <p className="text-muted-foreground">Building operational trust through value-aligned governance</p>
          </div>
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Covenant Repository
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10 col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-atlas-teal" />
                Covenantal Governance Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <p className="text-sm">
                  The Atlas Covenant Protocol establishes a new foundation for operational relationships based on
                  shared values, trust mechanics, and ritualized processes that create enduring partnerships across
                  the supply chain ecosystem.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Handshake className="h-4 w-4 text-atlas-teal" />
                      <h3 className="text-sm font-medium">Trust-Based Collaboration</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Replaces transactional relationships with value-aligned partnerships that compound in value
                      over time through trust and shared mission objectives.
                    </p>
                  </div>
                  
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Repeat className="h-4 w-4 text-atlas-accent" />
                      <h3 className="text-sm font-medium">Operational Liturgies</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Creates consistent, repeatable rituals and protocols that build operational rhythm,
                      reinforce values, and establish predictable excellence.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-atlas-teal" />
                Smart Contract Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Active Contracts</h3>
                      <span className="text-md font-bold text-atlas-teal">142</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Automated agreements governing operational relationships
                    </p>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Trust Score</h3>
                      <span className="text-md font-bold text-atlas-accent">94.7%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      System-wide covenant adherence metric
                    </p>
                  </div>
                </div>
                
                <Button className="w-full gap-2 bg-atlas-teal/20 text-atlas-teal hover:bg-atlas-teal/30 hover:text-atlas-teal">
                  <Handshake className="h-4 w-4" />
                  Initiate New Covenant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <CovenantGovernanceLayer />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Active Covenant Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-atlas-teal" />
                      <h3 className="text-sm font-medium">Eastern Manufacturing Alliance</h3>
                    </div>
                    <Badge variant="outline" className="text-atlas-teal">Supply Partner</Badge>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Trust Score</span>
                      <span className="text-sm font-medium">98.2%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Covenant Age</span>
                      <span className="text-sm font-medium">3.4 Years</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Value Created</span>
                      <span className="text-sm font-medium">$3.7M</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-atlas-accent" />
                      <h3 className="text-sm font-medium">Global Logistics Partners</h3>
                    </div>
                    <Badge variant="outline" className="text-atlas-accent">Logistics</Badge>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Trust Score</span>
                      <span className="text-sm font-medium">95.6%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Covenant Age</span>
                      <span className="text-sm font-medium">2.1 Years</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Value Created</span>
                      <span className="text-sm font-medium">$2.4M</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  View All Partners <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Covenant Value Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-teal">$12.4M</div>
                  <div className="text-xs text-muted-foreground">Total Value Created</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-accent">39</div>
                  <div className="text-xs text-muted-foreground">Active Partners</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-success">94.7%</div>
                  <div className="text-xs text-muted-foreground">System Trust Score</div>
                </div>
                <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                  <div className="text-2xl font-bold text-atlas-warning">2.8 yrs</div>
                  <div className="text-xs text-muted-foreground">Avg Covenant Age</div>
                </div>
              </div>
              
              <div className="bg-atlas-navy/30 p-3 rounded-md">
                <h3 className="text-sm font-medium mb-2">Trust Building Progress</h3>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>Transparency</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-atlas-navy/40 h-1.5 rounded-full mt-1">
                      <div className="bg-atlas-teal h-1.5 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>Reliability</span>
                      <span>93%</span>
                    </div>
                    <div className="w-full bg-atlas-navy/40 h-1.5 rounded-full mt-1">
                      <div className="bg-atlas-accent h-1.5 rounded-full" style={{ width: '93%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>Mutual Value</span>
                      <span>97%</span>
                    </div>
                    <div className="w-full bg-atlas-navy/40 h-1.5 rounded-full mt-1">
                      <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '97%' }}></div>
                    </div>
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

export default Covenant;

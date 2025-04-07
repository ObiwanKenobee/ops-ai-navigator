
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import AutonomousResilienceLayer from '@/components/stoic/AutonomousResilienceLayer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Check, BarChart3, ExternalLink, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StoicMind = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">🧬 The Stoic Mind of Atlas</h1>
            <p className="text-muted-foreground">Control what you can, understand what you can't</p>
          </div>
          <Button variant="outline" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Resilience Dashboard
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10 col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5 text-atlas-teal" />
                Operational Resilience Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <p className="text-sm">
                  The Stoic Mind of Atlas applies philosophical principles of the Dichotomy of Control 
                  to operations, creating systems that distinguish between what can be controlled and 
                  what can only be responded to.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-atlas-teal" />
                      <h3 className="text-sm font-medium">Within Our Control</h3>
                    </div>
                    <ul className="mt-1 space-y-1 text-xs">
                      <li className="text-muted-foreground">• Internal processes optimization</li>
                      <li className="text-muted-foreground">• Resource allocation efficiency</li>
                      <li className="text-muted-foreground">• Decision-making frameworks</li>
                      <li className="text-muted-foreground">• Contingency planning protocols</li>
                    </ul>
                  </div>
                  
                  <div className="bg-atlas-navy/30 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-atlas-warning" />
                      <h3 className="text-sm font-medium">External Factors</h3>
                    </div>
                    <ul className="mt-1 space-y-1 text-xs">
                      <li className="text-muted-foreground">• Weather and natural events</li>
                      <li className="text-muted-foreground">• Global supply chain disruptions</li>
                      <li className="text-muted-foreground">• Geopolitical developments</li>
                      <li className="text-muted-foreground">• Market volatility and demand shifts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Zap className="h-5 w-5 text-atlas-teal" />
                Emotional Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Equanimity Score</h3>
                      <span className="text-md font-bold text-atlas-teal">85/100</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      System's ability to maintain composure during disruptions
                    </p>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Antifragility Index</h3>
                      <span className="text-md font-bold text-atlas-accent">4.8/5.0</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ability to grow stronger through disruptions
                    </p>
                  </div>
                </div>
                
                <Button className="w-full gap-2 bg-atlas-teal/20 text-atlas-teal hover:bg-atlas-teal/30 hover:text-atlas-teal">
                  <Shield className="h-4 w-4" />
                  Run Resilience Simulation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <AutonomousResilienceLayer />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Current External Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Weather Alert: Southern Asia</h3>
                    <Badge variant="outline" className="text-atlas-warning">Medium Impact</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tropical storm developing in the South China Sea may impact shipping routes.
                    System is automatically replanning logistics to minimize disruption.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-teal">Proactive Actions: 3</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Details <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Market Volatility: Electronic Components</h3>
                    <Badge variant="outline" className="text-atlas-accent">High Impact</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Price fluctuations in semiconductor market detected. Alternative sourcing
                    strategies activated to maintain optimal cost balance.
                  </p>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-atlas-teal">Proactive Actions: 7</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Details <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Moral Compass Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-atlas-navy/30 p-3 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Decision Priority Matrix</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Mission-Critical Operations</span>
                      <div className="flex items-center gap-1">
                        <div className="w-24 bg-atlas-navy/40 h-1.5 rounded-full">
                          <div className="bg-atlas-teal h-1.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-xs">95%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Stakeholder Value</span>
                      <div className="flex items-center gap-1">
                        <div className="w-24 bg-atlas-navy/40 h-1.5 rounded-full">
                          <div className="bg-atlas-accent h-1.5 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                        <span className="text-xs">87%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Environmental Impact</span>
                      <div className="flex items-center gap-1">
                        <div className="w-24 bg-atlas-navy/40 h-1.5 rounded-full">
                          <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '83%' }}></div>
                        </div>
                        <span className="text-xs">83%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Social Responsibility</span>
                      <div className="flex items-center gap-1">
                        <div className="w-24 bg-atlas-navy/40 h-1.5 rounded-full">
                          <div className="bg-atlas-warning h-1.5 rounded-full" style={{ width: '79%' }}></div>
                        </div>
                        <span className="text-xs">79%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-teal">93%</div>
                    <div className="text-xs text-muted-foreground">Signal-to-Noise Ratio</div>
                  </div>
                  <div className="bg-atlas-navy/30 p-3 rounded-md text-center">
                    <div className="text-2xl font-bold text-atlas-accent">137</div>
                    <div className="text-xs text-muted-foreground">Disruptions Absorbed</div>
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

export default StoicMind;

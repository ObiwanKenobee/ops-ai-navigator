
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Key, 
  Clock,
  Save
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">⚙️ Settings</h1>
            <p className="text-muted-foreground">Configure your Atlas IO experience</p>
          </div>
          <Button variant="default">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-atlas-teal">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Security
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Integrations
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Key className="h-4 w-4 mr-2" />
                    API Keys
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5 text-atlas-teal" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs">Full Name</label>
                      <input 
                        id="name" 
                        className="w-full bg-atlas-navy/30 border border-atlas-accent/10 rounded-md p-2 text-sm" 
                        defaultValue="John Doe" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="title" className="text-xs">Job Title</label>
                      <input 
                        id="title" 
                        className="w-full bg-atlas-navy/30 border border-atlas-accent/10 rounded-md p-2 text-sm" 
                        defaultValue="Operations Manager" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs">Email</label>
                      <input 
                        id="email" 
                        className="w-full bg-atlas-navy/30 border border-atlas-accent/10 rounded-md p-2 text-sm" 
                        defaultValue="john.doe@atlas.io" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="timezone" className="text-xs">Timezone</label>
                      <select 
                        id="timezone" 
                        className="w-full bg-atlas-navy/30 border border-atlas-accent/10 rounded-md p-2 text-sm"
                      >
                        <option>UTC (GMT+0)</option>
                        <option>Eastern Time (GMT-5)</option>
                        <option>Pacific Time (GMT-8)</option>
                        <option>Central European Time (GMT+1)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-atlas-accent/10" />
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm">Dark Mode</h4>
                        <p className="text-xs text-muted-foreground">Always use dark theme</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm">Compact View</h4>
                        <p className="text-xs text-muted-foreground">Reduce spacing in the interface</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm">Real-time Updates</h4>
                        <p className="text-xs text-muted-foreground">Receive live data updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-atlas-accent/10" />
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Sessions</h3>
                  <div className="p-3 bg-atlas-navy/30 rounded-md space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-atlas-teal" />
                        <div>
                          <p className="text-sm">Current Session</p>
                          <p className="text-xs text-muted-foreground">Started 2 hours ago</p>
                        </div>
                      </div>
                      <Badge className="bg-atlas-teal">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;

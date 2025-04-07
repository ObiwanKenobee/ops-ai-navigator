
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  UserPlus, 
  MessageSquare,
  Mail,
  Award,
  Calendar,
  Clock,
  Search
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  // Sample team members data
  const teamMembers = [
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Operations Manager',
      avatar: 'JD',
      status: 'online',
      lastActive: 'Now',
      badges: ['Leadership', 'Supply Chain']
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      role: 'Logistics Coordinator',
      avatar: 'SJ',
      status: 'online',
      lastActive: 'Now',
      badges: ['Logistics', 'Analytics']
    },
    { 
      id: 3, 
      name: 'Michael Chen', 
      role: 'Supply Chain Analyst',
      avatar: 'MC',
      status: 'offline',
      lastActive: '3 hours ago',
      badges: ['Data Science', 'Supply Chain']
    },
    { 
      id: 4, 
      name: 'Emma Rodriguez', 
      role: 'Sustainability Lead',
      avatar: 'ER',
      status: 'away',
      lastActive: '30 minutes ago',
      badges: ['ESG', 'Reporting']
    },
    { 
      id: 5, 
      name: 'David Kim', 
      role: 'AI Systems Engineer',
      avatar: 'DK',
      status: 'online',
      lastActive: 'Now',
      badges: ['AI', 'Development']
    }
  ];

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">👥 Team</h1>
            <p className="text-muted-foreground">Manage your team and collaborators</p>
          </div>
          <div className="flex gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input 
                className="w-full bg-atlas-carbon/50 border border-atlas-accent/10 rounded-md pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground" 
                placeholder="Search team members..." 
              />
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </div>
        </div>
        
        <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-atlas-teal" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {teamMembers.map(member => (
                <div key={member.id} className="bg-atlas-navy/30 p-3 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center 
                        ${member.status === 'online' ? 'bg-atlas-teal/20 text-atlas-teal' : 
                          member.status === 'away' ? 'bg-atlas-warning/20 text-atlas-warning' : 
                          'bg-atlas-accent/20 text-atlas-accent'}`}>
                        <span className="text-sm font-semibold">{member.avatar}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium">{member.name}</h3>
                          <div className={`h-2 w-2 rounded-full 
                            ${member.status === 'online' ? 'bg-atlas-teal' : 
                              member.status === 'away' ? 'bg-atlas-warning' : 
                              'bg-atlas-accent/40'}`} />
                        </div>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{badge}</Badge>
                    ))}
                    <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                      <Clock className="h-3 w-3" />
                      {member.lastActive}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Upcoming Team Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-atlas-navy/30 p-3 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-atlas-teal/20 rounded-md flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-atlas-teal" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Weekly Supply Chain Sync</h3>
                    <p className="text-xs text-muted-foreground">Tomorrow at 10:00 AM • Virtual</p>
                  </div>
                </div>
              </div>
              <div className="bg-atlas-navy/30 p-3 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-atlas-accent/20 rounded-md flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-atlas-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Quarterly Planning Session</h3>
                    <p className="text-xs text-muted-foreground">Friday at 1:00 PM • Conference Room A</p>
                  </div>
                </div>
              </div>
              <div className="bg-atlas-navy/30 p-3 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-atlas-success/20 rounded-md flex items-center justify-center">
                    <Award className="h-5 w-5 text-atlas-success" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Team Recognition Event</h3>
                    <p className="text-xs text-muted-foreground">Next Monday at 4:00 PM • Main Hall</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Task Completion Rate</h3>
                    <span className="text-sm font-bold text-atlas-teal">92%</span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-2 rounded-full">
                    <div className="bg-atlas-teal h-2 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Collaboration Score</h3>
                    <span className="text-sm font-bold text-atlas-accent">87%</span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-2 rounded-full">
                    <div className="bg-atlas-accent h-2 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Innovation Index</h3>
                    <span className="text-sm font-bold text-atlas-success">76%</span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-2 rounded-full">
                    <div className="bg-atlas-success h-2 rounded-full" style={{ width: '76%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Response Time</h3>
                    <span className="text-sm font-bold text-atlas-warning">85%</span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-2 rounded-full">
                    <div className="bg-atlas-warning h-2 rounded-full" style={{ width: '85%' }} />
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

export default Team;

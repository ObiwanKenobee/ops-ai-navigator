
import React, { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  SendHorizonal, 
  Calendar, 
  Filter, 
  Download,
  Lightbulb,
  Clock,
  Search,
  Warehouse,
  Truck,
  AlertTriangle,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AiAssistant = () => {
  const [message, setMessage] = useState('');
  const [expanded, setExpanded] = useState({
    insights: true,
    history: true,
    suggestions: true
  });
  
  // Sample conversation
  const conversation = [
    { 
      type: 'system', 
      content: 'Atlas AI is ready to assist with supply chain optimization and operational decisions.' 
    },
    { 
      type: 'user', 
      content: 'Show me potential supply chain risks for Q2' 
    },
    { 
      type: 'assistant', 
      content: 'I\'ve identified 3 high-risk areas in your Q2 supply chain:\n\n1. Port congestion in Rotterdam (67% probability)\n2. Semiconductor delays from Taiwan suppliers (43% probability)\n3. Rising fuel costs impacting EU logistics (58% probability)\n\nWould you like me to generate mitigation strategies?' 
    },
    {
      type: 'user',
      content: 'Yes, please suggest mitigation strategies for these risks'
    },
    {
      type: 'assistant',
      content: 'Here are recommended mitigation strategies for each risk:\n\n**1. Rotterdam Port Congestion (67% probability)**\n- Reroute 40% of shipments through Hamburg for the next 45 days\n- Expedite customs documentation 72 hours in advance (rather than standard 48)\n- Pre-book priority unloading slots with a 15% premium\n\n**2. Taiwan Semiconductor Delays (43% probability)**\n- Increase safety stock of critical components by 35% for Q2\n- Activate secondary suppliers in Malaysia and Vietnam\n- Implement component substitution plan for non-critical applications\n\n**3. Rising EU Fuel Costs (58% probability)**\n- Lock in Q2 fuel contracts within the next 7 days\n- Optimize routing algorithms for 12% less fuel consumption\n- Consolidate shipments to increase average load efficiency from 82% to 90%\n\nWould you like me to initiate any of these actions or run a simulation?'
    }
  ];

  const suggestedQueries = [
    "Optimize inventory for the Chicago distribution center",
    "Analyze last quarter's logistics performance",
    "Generate sustainability report for EU operations",
    "Forecast demand for Category B products in Q3",
    "Identify critical supply chain bottlenecks"
  ];

  const recentInsights = [
    {
      title: "Inventory Optimization",
      description: "Miami warehouse shows 23% excess capacity in electronics",
      icon: Warehouse,
      timestamp: "2 hours ago",
      priority: "medium"
    },
    {
      title: "Logistics Alert",
      description: "Significant delays detected in North Atlantic shipping routes",
      icon: Truck,
      timestamp: "4 hours ago",
      priority: "high"
    },
    {
      title: "Compliance Warning",
      description: "New regulatory requirements affecting EU distribution",
      icon: AlertTriangle,
      timestamp: "Yesterday",
      priority: "high"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Would handle message submission here
      console.log('Message submitted:', message);
      setMessage('');
    }
  };

  const toggleSection = (section: 'insights' | 'history' | 'suggestions') => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderMessage = (msg: typeof conversation[0], index: number) => {
    return (
      <div 
        key={index} 
        className={cn(
          "mb-3 last:mb-0 animate-fade-in",
          msg.type === 'system' ? "text-center" : "text-left"
        )}
      >
        {msg.type === 'system' && (
          <div className="bg-atlas-accent/10 rounded-md px-3 py-2 text-sm text-muted-foreground">
            {msg.content}
          </div>
        )}
        
        {msg.type === 'user' && (
          <div className="flex justify-end">
            <div className="bg-atlas-accent/20 text-foreground rounded-md rounded-tr-none px-3 py-2 text-sm max-w-[80%]">
              {msg.content}
            </div>
          </div>
        )}
        
        {msg.type === 'assistant' && (
          <div className="flex">
            <div className="bg-atlas-teal/10 border border-atlas-teal/20 text-foreground rounded-md rounded-tl-none px-3 py-2 text-sm max-w-[80%]">
              <div className="flex items-center gap-1 mb-1 pb-1 border-b border-atlas-teal/10">
                <Bot className="h-3 w-3 text-atlas-teal" />
                <span className="text-xs font-medium text-atlas-teal">Atlas AI</span>
              </div>
              <div className="whitespace-pre-line">{msg.content}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <AppShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Atlas AI Assistant</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                All Conversations
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Chat
              </Button>
              <Button size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex flex-col">
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50 flex-1 flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Intelligent Assistant</CardTitle>
              <p className="text-xs text-muted-foreground">Ask me anything about operations, supply chain, or analytics</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 bg-atlas-navy/30 rounded-md mb-4">
                {conversation.map(renderMessage)}
              </div>
              
              <form onSubmit={handleSubmit} className="mt-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask Atlas AI anything..."
                    className="w-full pl-4 pr-12 py-3 bg-atlas-navy/20 border border-atlas-accent/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-atlas-teal"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-1.5 top-1.5 h-8 w-8 bg-atlas-teal text-atlas-navy hover:bg-atlas-teal/80"
                    disabled={!message.trim()}
                  >
                    <SendHorizonal className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold">Recent Insights</CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7" 
                onClick={() => toggleSection('insights')}
              >
                {expanded.insights ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CardHeader>
            {expanded.insights && (
              <CardContent className="px-4 py-0 pb-4">
                <div className="space-y-2">
                  {recentInsights.map((insight, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "p-2 rounded-md flex items-start gap-3",
                        insight.priority === 'high' ? "bg-atlas-danger/10 border border-atlas-danger/20" : 
                        insight.priority === 'medium' ? "bg-atlas-warning/10 border border-atlas-warning/20" : 
                        "bg-atlas-accent/10 border border-atlas-accent/20"
                      )}
                    >
                      <div className={cn(
                        "mt-0.5 p-1.5 rounded-md",
                        insight.priority === 'high' ? "bg-atlas-danger/20" : 
                        insight.priority === 'medium' ? "bg-atlas-warning/20" : 
                        "bg-atlas-accent/20"
                      )}>
                        <insight.icon className={cn(
                          "h-4 w-4",
                          insight.priority === 'high' ? "text-atlas-danger" : 
                          insight.priority === 'medium' ? "text-atlas-warning" : 
                          "text-atlas-accent"
                        )} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{insight.title}</div>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {insight.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold">Suggested Queries</CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7" 
                onClick={() => toggleSection('suggestions')}
              >
                {expanded.suggestions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CardHeader>
            {expanded.suggestions && (
              <CardContent className="px-4 py-0 pb-4">
                <div className="space-y-2">
                  {suggestedQueries.map((query, index) => (
                    <Button 
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-xs h-auto py-2"
                      onClick={() => setMessage(query)}
                    >
                      <Lightbulb className="h-3 w-3 mr-2 text-atlas-teal" />
                      {query}
                    </Button>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
          
          <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
            <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold">Recent Conversations</CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7" 
                onClick={() => toggleSection('history')}
              >
                {expanded.history ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CardHeader>
            {expanded.history && (
              <CardContent className="px-4 py-0 pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="pl-8 pr-3 py-1.5 h-8 w-full rounded-md bg-atlas-navy/30 border border-atlas-accent/10 text-xs focus:outline-none focus:ring-1 focus:ring-atlas-teal mb-2"
                  />
                </div>
                <div className="space-y-2">
                  {[
                    { title: "Q2 Supply Chain Risk Analysis", date: "Today, 10:24 AM" },
                    { title: "Inventory Optimization for Dallas", date: "Yesterday, 3:15 PM" },
                    { title: "Transportation Cost Analysis", date: "Apr 5, 2025" },
                    { title: "Supplier Performance Review", date: "Apr 3, 2025" }
                  ].map((convo, index) => (
                    <div key={index} className="p-2 rounded-md bg-atlas-accent/5 hover:bg-atlas-accent/10 transition-colors cursor-pointer">
                      <div className="text-sm font-medium truncate">{convo.title}</div>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {convo.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default AiAssistant;

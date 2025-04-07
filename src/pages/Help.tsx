
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  Book, 
  FileText, 
  Video, 
  MessageSquare, 
  Search,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Help = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "How do I create a new supply chain connection?",
      answer: "Navigate to Supply Chain > Connections and click on 'Add Connection'. Follow the wizard to set up your new connection parameters."
    },
    {
      question: "Can I export analytics data?",
      answer: "Yes, all analytics data can be exported. Go to the Analytics page and use the 'Export' button in the top-right corner."
    },
    {
      question: "How do I customize dashboard widgets?",
      answer: "Click and hold on any widget to drag it to a new position. Use the three-dot menu on each widget to resize, configure, or remove it."
    },
    {
      question: "What permissions do team members need?",
      answer: "Permission levels are set in the Team section. Administrators can assign roles like Viewer, Editor, or Admin to control access levels."
    },
    {
      question: "How secure is my operational data?",
      answer: "Atlas IO uses enterprise-grade encryption and follows strict data protection protocols. All data is encrypted both in transit and at rest."
    }
  ];

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">❓ Help & Support</h1>
            <p className="text-muted-foreground">Resources, documentation, and support options</p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              className="w-full bg-atlas-carbon/50 border border-atlas-accent/10 rounded-md pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground" 
              placeholder="Search help topics..." 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardContent className="p-6">
              <div className="h-10 w-10 bg-atlas-teal/20 rounded-md flex items-center justify-center mb-4">
                <Book className="h-5 w-5 text-atlas-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive guides and reference materials for all Atlas IO features.
              </p>
              <Button variant="outline" className="w-full">
                Browse Docs
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardContent className="p-6">
              <div className="h-10 w-10 bg-atlas-accent/20 rounded-md flex items-center justify-center mb-4">
                <Video className="h-5 w-5 text-atlas-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Tutorial Videos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step video tutorials to help you get the most out of Atlas IO.
              </p>
              <Button variant="outline" className="w-full">
                Watch Tutorials
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardContent className="p-6">
              <div className="h-10 w-10 bg-atlas-success/20 rounded-md flex items-center justify-center mb-4">
                <MessageSquare className="h-5 w-5 text-atlas-success" />
              </div>
              <h3 className="text-lg font-medium mb-2">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get in touch with our support team for personalized assistance.
              </p>
              <Button className="w-full bg-atlas-success hover:bg-atlas-success/80">
                Contact Us
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-atlas-teal" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-atlas-navy/30 p-4 rounded-md">
                <h3 className="text-sm font-medium mb-2">{faq.question}</h3>
                <p className="text-xs text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Quick Start Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-atlas-navy/30 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-atlas-teal" />
                  <span className="text-sm">Getting Started with Atlas IO</span>
                </div>
                <Button variant="ghost" size="sm">
                  Read Guide
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="bg-atlas-navy/30 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-atlas-accent" />
                  <span className="text-sm">Setting Up Your First Supply Chain</span>
                </div>
                <Button variant="ghost" size="sm">
                  Read Guide
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="bg-atlas-navy/30 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-atlas-success" />
                  <span className="text-sm">Analyzing Carbon Emissions</span>
                </div>
                <Button variant="ghost" size="sm">
                  Read Guide
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-carbon/50 border-atlas-accent/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-atlas-success/10 border border-atlas-success/20 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-atlas-success">All Systems Operational</h3>
                    <span className="text-xs text-atlas-success bg-atlas-success/20 px-2 py-0.5 rounded-full">
                      Updated 5 minutes ago
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    All Atlas IO services are operating normally. No incidents reported.
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">API Services</h3>
                    <span className="h-2 w-2 rounded-full bg-atlas-success"></span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-1.5 rounded-full">
                    <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Data Processing</h3>
                    <span className="h-2 w-2 rounded-full bg-atlas-success"></span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-1.5 rounded-full">
                    <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Dashboard Services</h3>
                    <span className="h-2 w-2 rounded-full bg-atlas-success"></span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-1.5 rounded-full">
                    <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">AI Subsystems</h3>
                    <span className="h-2 w-2 rounded-full bg-atlas-success"></span>
                  </div>
                  <div className="w-full bg-atlas-navy/50 h-1.5 rounded-full">
                    <div className="bg-atlas-success h-1.5 rounded-full" style={{ width: '100%' }} />
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

export default Help;

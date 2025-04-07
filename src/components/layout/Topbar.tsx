
import React from 'react';
import { Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Topbar = () => {
  return (
    <header className="h-16 border-b border-atlas-accent/10 bg-atlas-carbon/50 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Atlas IO..."
            className="pl-9 pr-4 py-2 h-9 w-64 rounded-md bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-1 focus:ring-atlas-teal"
          />
        </div>
        
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="sm" className="text-xs h-9 bg-secondary/50">
            Global View
          </Button>
          <Button variant="outline" size="sm" className="text-xs h-9 bg-secondary/50">
            Last 24h
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-atlas-danger"></span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        
        <div className="px-2 py-1 rounded-md bg-atlas-success/10 border border-atlas-success/20 flex items-center">
          <span className="h-2 w-2 rounded-full bg-atlas-success mr-2"></span>
          <span className="text-xs font-medium text-atlas-success">System Normal</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

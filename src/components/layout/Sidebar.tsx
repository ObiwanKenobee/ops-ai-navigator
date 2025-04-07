
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Network, 
  Truck, 
  Leaf, 
  Bot, 
  Settings, 
  Users, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const [active, setActive] = React.useState('dashboard');

  const navItems = [
    { id: 'dashboard', name: 'Command Graph', icon: Network },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck },
    { id: 'carbon', name: 'Carbon Intel', icon: Leaf },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'ai-assistant', name: 'AI Assistant', icon: Bot },
  ];

  const bottomNavItems = [
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'team', name: 'Team', icon: Users },
    { id: 'help', name: 'Help', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 h-full bg-atlas-carbon flex flex-col border-r border-atlas-accent/10">
      <div className="p-4 border-b border-atlas-accent/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-atlas-teal flex items-center justify-center">
            <Network className="h-5 w-5 text-atlas-navy" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-white">Atlas</span>
            <span className="text-atlas-teal">IO</span>
          </h1>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Intelligent Operations OS</p>
      </div>

      <nav className="flex-1 pt-4 px-2">
        <div className="space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "flex items-center w-full gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                active === item.id 
                  ? "bg-atlas-accent/10 text-atlas-teal" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-2 border-t border-atlas-accent/10">
        <div className="space-y-1">
          {bottomNavItems.map(item => (
            <button
              key={item.id}
              className="flex items-center w-full gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-atlas-accent/10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-atlas-accent/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-atlas-accent">JD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Operations Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

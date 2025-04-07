
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, SendHorizonal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AiAssistant = () => {
  const [message, setMessage] = React.useState('');
  
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
    <Card className="border-atlas-accent/10 bg-atlas-carbon/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Atlas AI Assistant</CardTitle>
        <p className="text-xs text-muted-foreground">Operational insights and decision support</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-40 px-4 py-2 overflow-y-auto bg-atlas-navy/30 mb-2">
          {conversation.map(renderMessage)}
        </div>
        
        <form onSubmit={handleSubmit} className="px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Atlas AI anything..."
              className="w-full pl-3 pr-10 py-2 bg-atlas-navy/20 border border-atlas-accent/10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-atlas-teal"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-1 top-1 h-7 w-7 bg-atlas-teal text-atlas-navy hover:bg-atlas-teal/80"
              disabled={!message.trim()}
            >
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AiAssistant;

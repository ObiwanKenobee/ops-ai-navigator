
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SupplyChain from "./pages/SupplyChain";
import CarbonIntel from "./pages/CarbonIntel";
import Analytics from "./pages/Analytics";
import AiAssistant from "./pages/AiAssistant";
import Alexandria from "./pages/Alexandria";
import StoicMind from "./pages/StoicMind";
import Covenant from "./pages/Covenant";
import Mythos from "./pages/Mythos";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/carbon-intel" element={<CarbonIntel />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
          <Route path="/alexandria" element={<Alexandria />} />
          <Route path="/stoic-mind" element={<StoicMind />} />
          <Route path="/covenant" element={<Covenant />} />
          <Route path="/mythos" element={<Mythos />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/team" element={<Team />} />
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

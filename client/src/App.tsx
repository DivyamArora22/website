import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Resume from "@/pages/resume";
import RiscVCpuProject from "@/pages/projects/risc-v-cpu";
import DatapathLayoutProject from "@/pages/projects/datapath-layout";
import OhlcAggregatorProject from "@/pages/projects/ohlc-aggregator";
import MortalKombatGameProject from "@/pages/projects/mortal-kombat-game";
import LinuxOsProject from "@/pages/projects/linux-os";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects/risc-v-cpu" component={RiscVCpuProject} />
      <Route path="/projects/datapath-layout" component={DatapathLayoutProject} />
      <Route path="/projects/ohlc-aggregator" component={OhlcAggregatorProject} />
      <Route path="/projects/mortal-kombat-game" component={MortalKombatGameProject} />
      <Route path="/projects/linux-os" component={LinuxOsProject} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

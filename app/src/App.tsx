import { Switch, Route, Router as WouterRouter } from "wouter"; // Import Router as WouterRouter
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Rename the custom Router function
function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* The NotFound route will now correctly handle paths relative to the base */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Use WouterRouter with the base path */}
        <WouterRouter base="/profile">
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

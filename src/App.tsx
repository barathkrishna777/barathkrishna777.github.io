import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Career from "./pages/Career";
import TravelPage from "./pages/Travel";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Redirect root to /about or use About as the index */}
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              
              {/* Travel route handles both list and detail via optional params or nested logic */}
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/travel/:id" element={<TravelPage />} />
              
              <Route path="/contact" element={<ContactPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <footer className="py-8 bg-card border-t border-border mt-auto">
            <div className="container px-6">
              <p className="text-center text-sm text-muted-foreground">
                © 2025 Barathkrishna Satheeshkumar. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
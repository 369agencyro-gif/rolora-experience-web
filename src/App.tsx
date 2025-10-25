import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import RoloraFacialGlow from "./pages/RoloraFacialGlow";
import RoloraSculpt from "./pages/RoloraSculpt";
import TimelessLift from "./pages/TimelessLift";
import RoloraReset from "./pages/RoloraReset";
import ExpressSculpt from "./pages/ExpressSculpt";
import Enhancements from "./pages/Enhancements";
import BodyRolling from "./pages/BodyRolling";
import FullGallery from "./pages/FullGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/facial-glow" element={<RoloraFacialGlow />} />
          <Route path="/services/sculpt" element={<RoloraSculpt />} />
          <Route path="/services/timeless-lift" element={<TimelessLift />} />
          <Route path="/services/reset" element={<RoloraReset />} />
          <Route path="/services/express-sculpt" element={<ExpressSculpt />} />
          <Route path="/services/enhancements" element={<Enhancements />} />
          <Route path="/services/body-rolling" element={<BodyRolling />} />
          <Route path="/gallery" element={<FullGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

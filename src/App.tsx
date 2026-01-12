import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useMetaPixel } from "./hooks/use-meta-pixel";
import Index from "./pages/Index";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import RoloraFacialGlow from "./pages/RoloraFacialGlow";
import RoloraSculpt from "./pages/RoloraSculpt";
import TimelessLift from "./pages/TimelessLift";
import RoloraReset from "./pages/RoloraReset";
import ExpressSculpt from "./pages/ExpressSculpt";
import Enhancements from "./pages/Enhancements";
import BodyRolling from "./pages/BodyRolling";
import HeadSpa from "./pages/HeadSpa";
import SculptScalpReset from "./pages/SculptScalpReset";
import FullGallery from "./pages/FullGallery";
import SpecialOffer from "./pages/SpecialOffer";
import GlowFlowOffer from "./pages/GlowFlowOffer";
import NewClientOffers from "./pages/NewClientOffers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MetaPixelTracker = () => {
  useMetaPixel();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaPixelTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/facial-glow" element={<RoloraFacialGlow />} />
          <Route path="/services/sculpt" element={<RoloraSculpt />} />
          <Route path="/services/timeless-lift" element={<TimelessLift />} />
          <Route path="/services/reset" element={<RoloraReset />} />
          <Route path="/services/express-sculpt" element={<ExpressSculpt />} />
          <Route path="/services/enhancements" element={<Enhancements />} />
          <Route path="/services/body-rolling" element={<BodyRolling />} />
          <Route path="/services/head-spa" element={<HeadSpa />} />
          <Route path="/services/sculpt-scalp-reset" element={<SculptScalpReset />} />
          <Route path="/gallery" element={<FullGallery />} />
          <Route path="/special-offer" element={<SpecialOffer />} />
          <Route path="/glow-flow-offer" element={<GlowFlowOffer />} />
          <Route path="/intro-offers" element={<NewClientOffers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

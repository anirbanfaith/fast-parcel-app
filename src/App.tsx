import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TrackShipment from "./pages/TrackShipment";
import ShippingCalculator from "./pages/ShippingCalculator";
import ExportGuide from "./pages/ExportGuide";
import CustomsDocumentation from "./pages/CustomsDocumentation";
import GSTRefund from "./pages/GSTRefund";
import CountryRegulations from "./pages/CountryRegulations";
import AirFreight from "./pages/AirFreight";
import SeaFreight from "./pages/SeaFreight";
import ExpressDelivery from "./pages/ExpressDelivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EcommerceFulfillment from "./pages/EcommerceFulfillment";
import CustomsClearance from "./pages/CustomsClearance";
import Warehousing from "./pages/Warehousing";
import TermsOfService from "./pages/TermsOfService";
import ExportCompliance from "./pages/ExportCompliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/track-shipment" element={<TrackShipment />} />
          <Route path="/shipping-calculator" element={<ShippingCalculator />} />
          <Route path="/export-guide" element={<ExportGuide />} />
          <Route path="/customs-documentation" element={<CustomsDocumentation />} />
          <Route path="/gst-refund" element={<GSTRefund />} />
          <Route path="/country-regulations" element={<CountryRegulations />} />
          <Route path="/air-freight" element={<AirFreight />} />
          <Route path="/sea-freight" element={<SeaFreight />} />
          <Route path="/express-delivery" element={<ExpressDelivery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/ecommerce-fulfillment" element={<EcommerceFulfillment />} />
          <Route path="/customs-clearance" element={<CustomsClearance />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/export-compliance" element={<ExportCompliance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

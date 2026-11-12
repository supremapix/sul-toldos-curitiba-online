import ShareSuprema from './components/ShareSuprema';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CidadePage from "./pages/cidade/[cidade]";
import BairroPage from "./pages/bairro/[bairro]";
import FaqPage from "./pages/FaqPage";
import SitemapPage from "./pages/SitemapPage";

const queryClient = new QueryClient();

export const AppContent = ({helmetContext = {}}: {helmetContext?: object}) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <>
          <ShareSuprema />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/mapa-do-site" element={<SitemapPage />} />
            <Route path="/cidade/:cidade" element={<CidadePage />} />
            <Route path="/bairro/:bairro" element={<BairroPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const App = () => <BrowserRouter><AppContent /></BrowserRouter>;
export default App;

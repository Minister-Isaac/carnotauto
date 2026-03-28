import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import DashboardLayout from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Founder from "./pages/Founder";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Subscriptions from "./pages/Subscriptions";
import Payments from "./pages/Payments";
import Reminders from "./pages/Reminders";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SpareParts from "./pages/SpareParts";
import SparePartDetail from "./pages/SparePartDetail";
import MBKeys from "./pages/MBKeys";
import MBKeyDetail from "./pages/MBKeyDetail";
import MediaCenter from "./pages/MediaCenter";
import ECURepair from "./pages/services/ECURepair";
import EISRepair from "./pages/services/EISRepair";
import ESLRepair from "./pages/services/ESLRepair";
import KeyRepair from "./pages/services/KeyRepair";
import SevenGTronic from "./pages/services/SevenGTronic";
import ISMRepair from "./pages/services/ISMRepair";
import SteeringAngleSensor from "./pages/services/SteeringAngleSensor";
import WiringHarness from "./pages/services/WiringHarness";
import FBS4Solutions from "./pages/services/FBS4Solutions";
import FBS3Solutions from "./pages/services/FBS3Solutions";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const AppRoutes = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ecu-repair" element={<ECURepair />} />
      <Route path="/services/eis-repair" element={<EISRepair />} />
      <Route path="/services/esl-repair" element={<ESLRepair />} />
      <Route path="/services/key-repair" element={<KeyRepair />} />
      <Route path="/services/7g-tronic" element={<SevenGTronic />} />
      <Route path="/services/ism-repair" element={<ISMRepair />} />
      <Route path="/services/steering-angle-sensor" element={<SteeringAngleSensor />} />
      <Route path="/services/wiring-harness" element={<WiringHarness />} />
      <Route path="/services/fbs4-solutions" element={<FBS4Solutions />} />
      <Route path="/services/fbs3-solutions" element={<FBS3Solutions />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/founder" element={<Founder />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/spare-parts" element={<SpareParts />} />
      <Route path="/spare-parts/:partId" element={<SparePartDetail />} />
      <Route path="/mb-keys" element={<MBKeys />} />
      <Route path="/mb-keys/:keyId" element={<MBKeyDetail />} />
      <Route path="/media-center" element={<MediaCenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reminders" element={<Reminders />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

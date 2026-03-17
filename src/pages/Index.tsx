import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Cpu, Key, Gauge, Zap, CircuitBoard, ArrowRight, CheckCircle, Download, Shield, Monitor, Settings, Wrench, Database } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Cpu, title: "Advanced Diagnostics", desc: "Full-spectrum OBD-II and manufacturer-level diagnostic scans" },
  { icon: CircuitBoard, title: "Vehicle Coding", desc: "Module coding and feature activation for all major brands" },
  { icon: Zap, title: "ECU Programming", desc: "Flash programming, software updates, and ECU calibration" },
  { icon: Gauge, title: "Odometer Correction", desc: "Legal odometer recalibration for instrument cluster replacements" },
  { icon: Key, title: "Key Programming", desc: "Transponder key programming, immobilizer reset, and smart key setup" },
  { icon: Car, title: "Electrical Diagnostics", desc: "Wiring fault tracing, CAN bus analysis, and sensor calibration" },
];

const stats = [
  { value: "5,000+", label: "Vehicles Serviced" },
  { value: "98%", label: "Fix Rate" },
  { value: "50+", label: "Brands Supported" },
  { value: "24/7", label: "Remote Support" },
];

const softwareTools = [
  {
    icon: Monitor,
    title: "XENTRY Diagnostics",
    desc: "Latest Mercedes-Benz XENTRY diagnostic software with full system access for cars and commercial vehicles.",
  },
  {
    icon: Database,
    title: "DAS Standalone",
    desc: "Diagnose-Assistenz-System with offline mode support, special functions, and developer capabilities.",
  },
  {
    icon: Download,
    title: "Software Updates & Patchers",
    desc: "All-in-one patchers, simple activation tools, and quarterly software updates for seamless operation.",
  },
  {
    icon: Settings,
    title: "ECU Flash & Calibration",
    desc: "Flash programming data, FDOK corrections, SCR/AdBlue solutions, and emissions calibration files.",
  },
  {
    icon: Key,
    title: "Offline Key Programming",
    desc: "Transponder key teach-in, SAM assignment, and immobilizer solutions for Smart and Mercedes platforms.",
  },
  {
    icon: Wrench,
    title: "Special Functions & Developer Mode",
    desc: "Unlocked control unit adaptations, VMAX settings, transmission routines, and advanced developer tools.",
  },
];

const whyChooseUs = [
  { icon: Shield, title: "Original Software", desc: "Direct from manufacturer servers — always genuine, always up to date." },
  { icon: Download, title: "Latest Versions", desc: "Quarterly updates with the newest diagnostic data and features." },
  { icon: Wrench, title: "Developer Tools", desc: "Advanced functions, special passwords, and unlocked adaptation menus." },
  { icon: Monitor, title: "Full System Coverage", desc: "From legacy DAS to modern XENTRY — every generation supported." },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Automotive diagnostics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container py-24 md:py-36 text-primary-foreground">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Professional Automobile Diagnostics
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Precision Diagnostics for the Modern Vehicle
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 font-body max-w-lg">
              Expert vehicle coding, programming, and electronic system repair. We speak your car's language.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => navigate("/register")}>
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
  variant="outline"
  size="lg"
  className="bg-primary text-white border-primary hover:bg-primary/90 hover:text-white"
  onClick={() => navigate("/services")}
>
  View Services
</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Comprehensive diagnostics and programming solutions for all vehicle makes and models.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Card key={svc.title} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                  <svc.icon className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-lg">{svc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{svc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diagnostic Software & Solutions */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20">
          <div className="text-center mb-12">
            <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
              Software & Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              OEM-Level Diagnostic Software
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              We provide access to the latest original diagnostic software, patchers, and developer tools directly from manufacturer servers — keeping your workshop equipped with cutting-edge technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTools.map((item) => (
              <Card key={item.title} className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground group hover:bg-primary-foreground/10 transition-colors">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center mb-2 group-hover:bg-accent/30 transition-colors">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-primary-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-primary-foreground/60 text-sm mb-4">
              Supporting all Mercedes-Benz platforms: Cars, Trucks, Smart, Sprinter & Commercial Vehicles
            </p>
            <Button variant="hero" size="lg" onClick={() => navigate("/services")}>
              Explore All Solutions <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">Why Choose KingsCarNotAutomobile?</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We combine dealer-level expertise with independent workshop flexibility.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Create your account, register your vehicle, and subscribe to proactive maintenance alerts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Free diagnostic report", "Maintenance reminders", "Priority support"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <CheckCircle className="h-4 w-4 text-accent" /> {item}
              </span>
            ))}
          </div>
          <Button variant="hero" size="lg" className="mt-8" onClick={() => navigate("/register")}>
            Create Free Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-semibold text-foreground">
            <Car className="h-4 w-4 text-accent" />
            KingsCarNotAutomobile
          </div>
          <p>© {new Date().getFullYear()} KingsCarNotAutomobile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

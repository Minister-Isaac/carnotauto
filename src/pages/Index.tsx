import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Car,
  Cpu,
  Key,
  Gauge,
  Zap,
  CircuitBoard,
  ArrowRight,
  CheckCircle,
  Download,
  Shield,
  Monitor,
  Settings,
  Wrench,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
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
    icon: Database,
    title: "Alldata",
    desc: "Online subscription for all vehicle manufacturers with repair manuals, technical bulletins, component locations, and full wiring diagrams.",
  },
  {
    icon: Monitor,
    title: "Haynes Pro",
    desc: "Repair software manual covering multiple vehicle brands with detailed service procedures and diagnostics.",
  },
  {
    icon: Download,
    title: "Mitchell OnDemand",
    desc: "Professional automotive repair system with labor data, wiring diagrams, and OEM service information.",
  },
  {
    icon: Settings,
    title: "Techstream (Toyota/Lexus)",
    desc: "Dealer-level diagnostic and repair software for Toyota and Lexus vehicles with full system access.",
  },
  {
    icon: CircuitBoard,
    title: "ElsaWin (VAG Group)",
    desc: "Official repair software for Volkswagen, Audi, Skoda, Seat, and Porsche with factory manuals and wiring diagrams.",
  },
  {
    icon: Cpu,
    title: "BMW Diagnostics System",
    desc: "Custom-built PC-based diagnostic tool for BMW with advanced coding, programming, and fault analysis.",
  },
  {
    icon: Wrench,
    title: "Vediamo / DTS Monaco",
    desc: "Advanced engineering tools for Mercedes-Benz ECU coding, parameter tuning, and developer diagnostics.",
  },
];

const whyChooseUs = [
  { icon: Shield, title: "Original Software", desc: "Always genuine and up to date." },
  { icon: Download, title: "Latest Versions", desc: "Quarterly updates and new features." },
  { icon: Wrench, title: "Developer Tools", desc: "Advanced functions unlocked." },
  { icon: Monitor, title: "Full Coverage", desc: "Supports all vehicle generations." },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            loading="lazy"
            alt="Automotive diagnostics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-brightness-75" />
        </div>

        <div className="relative container py-24 md:py-36 text-primary-foreground px-4">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Professional Automobile Diagnostics
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Precision Diagnostics for the Modern Vehicle
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Expert vehicle coding, programming, and electronic system repair.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="hero"
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => navigate("/register")}
              >
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-primary text-white border-primary hover:bg-primary/90 hover:text-white hover:scale-105 transition-transform"
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
        <div className="container grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`py-8 text-center ${i !== stats.length - 1 ? "md:border-r" : ""}`}>
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <motion.section {...fadeUp} className="container py-16 md:py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Comprehensive diagnostics for all vehicles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Card key={svc.title} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20">
                  <svc.icon className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>{svc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{svc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Software Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 px-4">
          <div className="text-center mb-12">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">
              Trusted OEM & Dealer Tools
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OEM-Level Diagnostic Software
            </h2>

            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              We provide industry-leading automotive diagnostic software including Alldata, Mitchell, Techstream, ElsaWin, and advanced engineering tools like Vediamo and DTS Monaco — giving you full access to repair manuals, wiring diagrams, ECU programming, and dealer-level diagnostics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTools.map((item) => (
              <Card
                key={item.title}
                className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 transition"
              >
                <CardHeader>
                  <div className="h-10 w-10 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section {...fadeUp} className="container py-16 md:py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose KingsCar</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Diagnose Smarter. Drive Safer.
          </h2>

          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Prevent breakdowns before they happen.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="hover:scale-105 transition-transform"
            onClick={() => navigate("/register")}
          >
            Create Free Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground px-4">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Car className="h-4 w-4 text-accent" />
            KingsCar
          </div>

          <p>© {new Date().getFullYear()} KingsCar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
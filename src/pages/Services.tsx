import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Cpu, CircuitBoard, Zap, Gauge, Key, Car, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Advanced Diagnostics",
    desc: "Full-spectrum OBD-II and manufacturer-level diagnostic scans covering all vehicle systems including engine, transmission, ABS, SRS, and body modules.",
    features: ["DTC reading & clearing", "Live data streaming", "Freeze frame analysis", "Bi-directional control"],
  },
  {
    icon: CircuitBoard,
    title: "Vehicle Coding",
    desc: "Module coding and feature activation for BMW, Mercedes, Audi, VW, and other premium brands.",
    features: ["Feature activation", "Module adaptation", "Variant coding", "Long coding"],
  },
  {
    icon: Zap,
    title: "ECU Programming",
    desc: "Flash programming, software updates, and ECU calibration using official protocols.",
    features: ["Flash reprogramming", "Software updates", "Calibration files", "Module replacement"],
  },
  {
    icon: Gauge,
    title: "Odometer Correction",
    desc: "Legal odometer recalibration for instrument cluster replacements and mileage discrepancies.",
    features: ["Cluster replacement", "EEPROM correction", "CAN mileage sync", "Documentation"],
  },
  {
    icon: Key,
    title: "Key Programming",
    desc: "Transponder key programming, immobilizer reset, and smart key setup for lost or replacement keys.",
    features: ["All keys lost", "Add spare key", "Immobilizer reset", "Smart key pairing"],
  },
  {
    icon: Car,
    title: "Electrical Diagnostics",
    desc: "Advanced wiring fault tracing, CAN bus analysis, and sensor calibration for complex electrical issues.",
    features: ["Wiring analysis", "CAN bus diagnosis", "Sensor calibration", "Multiplexing"],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16">
      <div className="text-center mb-16 animate-fade-in">
        <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h1 className="text-4xl font-display font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          From basic diagnostics to advanced ECU programming, we provide comprehensive electronic solutions for your vehicle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <Card key={svc.title} className="group hover:shadow-md transition-all animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svc.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">{svc.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{svc.desc}</CardDescription>
              <div className="grid grid-cols-2 gap-2">
                {svc.features.map((f) => (
                  <span key={f} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {f}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button variant="hero" size="lg" onClick={() => navigate("/register")}>
          Get Started <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Services;

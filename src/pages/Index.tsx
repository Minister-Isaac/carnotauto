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
  Database
} from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import heroBg from "@/assets/hero-bg.jpg";

/* VEHICLE IMAGES */
import car1 from "@/assets/vehicles/car1.jpg";
import car2 from "@/assets/vehicles/car2.jpg";
import car3 from "@/assets/vehicles/car3.jpg";
import car4 from "@/assets/vehicles/car4.jpg";
import car5 from "@/assets/vehicles/car5.jpg";
import car6 from "@/assets/vehicles/car6.jpg";
import car7 from "@/assets/vehicles/car7.jpg";
import car8 from "@/assets/vehicles/car8.jpg";

/* VEHICLES SLIDER */
const vehicles = [
  { name: "Mercedes-Benz Diagnostics", img: car1 },
  { name: "BMW Programming", img: car2 },
  { name: "Audi ECU Repair", img: car3 },
  { name: "Toyota Key Coding", img: car4 },
  { name: "Range Rover Modules", img: car5 },
  { name: "Volkswagen Electronics", img: car6 },
  { name: "Lexus Immobilizer", img: car7 },
  { name: "Porsche Coding", img: car8 },
];

const services = [
  { icon: Cpu, title: "Advanced Diagnostics", desc: "Full-spectrum OBD-II and manufacturer-level diagnostic scans", slug: "ecu-repair" },
  { icon: CircuitBoard, title: "Vehicle Coding", desc: "Module coding and feature activation for all major brands", slug: "fbs4-solutions" },
  { icon: Zap, title: "ECU Programming", desc: "Flash programming, software updates, and ECU calibration", slug: "ecu-repair" },
  { icon: Gauge, title: "Odometer Correction", desc: "Legal odometer recalibration for instrument cluster replacements", slug: "steering-angle-sensor" },
  { icon: Key, title: "Key Programming", desc: "Transponder key programming, immobilizer reset, and smart key setup", slug: "key-repair" },
  { icon: Car, title: "Electrical Diagnostics", desc: "Wiring fault tracing, CAN bus analysis, and sensor calibration", slug: "wiring-harness" },
];

const stats = [
  { value: "5,000+", label: "Vehicles Serviced" },
  { value: "98%", label: "Fix Rate" },
  { value: "50+", label: "Brands Supported" },
  { value: "24/7", label: "Remote Support" },
];

const softwareTools = [
  { icon: Monitor, title: "XENTRY Diagnostics", desc: "Latest Mercedes-Benz XENTRY diagnostic software with full system access for cars and commercial vehicles." },
  { icon: Database, title: "DAS Standalone", desc: "Diagnose-Assistenz-System with offline mode support, special functions, and developer capabilities." },
  { icon: Download, title: "Alldata", desc: "Online subscription for all vehicle manufacturers — repair software manual with technical bulletins." },
  { icon: Wrench, title: "Hyence", desc: "Comprehensive repair software manual covering all vehicle makes and models." },
  { icon: Settings, title: "Mitchell & Techstream", desc: "Mitchell pro repair data plus Techstream for Toyota/Lexus diagnostics." },
  { icon: CircuitBoard, title: "ElsaWin", desc: "Official workshop software for Volkswagen, Audi, Škoda, SEAT, and Porsche." },
];

const whyChooseUs = [
  { icon: Shield, title: "Original Software", desc: "Direct from manufacturer servers — always genuine." },
  { icon: Download, title: "Latest Versions", desc: "Quarterly updates with newest diagnostic data." },
  { icon: Wrench, title: "Developer Tools", desc: "Advanced functions and unlocked adaptation menus." },
  { icon: Monitor, title: "Full System Coverage", desc: "From legacy DAS to modern XENTRY." },
];

const Index = () => {
  const navigate = useNavigate();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="relative container py-24 md:py-36 text-primary-foreground">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Professional Automobile Diagnostics
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Precision Diagnostics for the Modern Vehicle
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8">
              Expert vehicle coding, programming, and electronic system repair.
            </p>

            <div className="flex gap-3">
              <Button size="lg" onClick={() => navigate("/register")}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => navigate("/services")}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE SLIDER */}
      <section className="bg-card border-b py-10">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest">
            Vehicles We Support
          </p>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {vehicles.map((vehicle) => (
                <CarouselItem
                  key={vehicle.name}
                  className="basis-[85%] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative overflow-hidden rounded-xl group">
                    <img
                      src={vehicle.img}
                      className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="font-semibold text-lg">
                        {vehicle.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <div className="text-2xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive diagnostics and programming solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Card
              key={svc.title}
              className="cursor-pointer"
              onClick={() => navigate(`/services/${svc.slug}`)}
            >
              <CardHeader>
                <svc.icon className="h-6 w-6 text-accent mb-2" />
                <CardTitle>{svc.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {svc.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose KingsCarNotAutomobile?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>

          <Button
            size="lg"
            onClick={() => navigate("/register")}
          >
            Create Free Account
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-card">
        <div className="container py-8 flex justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-accent" />
            KingsCarNotAutomobile
          </div>

          <p>
            © {new Date().getFullYear()} KingsCarNotAutomobile
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
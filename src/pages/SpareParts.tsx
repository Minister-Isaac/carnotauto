import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

import ribbonCableImg from "@/assets/parts/ribbon-cable.jpg";
import ezsEisW164Img from "@/assets/parts/ezs-eis-w164.jpg";
import ecuCdiW211Img from "@/assets/parts/ecu-cdi-w211.jpg";
import elvEslMotorImg from "@/assets/parts/elv-esl-motor.jpg";
import testingCablesImg from "@/assets/parts/testing-cables.jpg";
import breakoutBoxImg from "@/assets/parts/breakout-box.jpg";
import keyShellImg from "@/assets/parts/key-shell.jpg";
import bgaKeyChromeImg from "@/assets/parts/bga-key-chrome.jpg";
import canBusImg from "@/assets/parts/can-bus-analyzer.jpg";
import wiringHarnessImg from "@/assets/parts/wiring-harness-kit.jpg";

const parts = [
  { id: "ribbon-cable", name: "Mercedes High Quality Ribbon Cable LCD Display Pixel", category: "Electronics", img: ribbonCableImg, inStock: true },
  { id: "ezs-eis-w164", name: "MB - EZS/EIS W164 - W216", category: "Security", img: ezsEisW164Img, inStock: true },
  { id: "ecu-cdi-w211", name: "ECU CDI KIT W211", category: "ECU", img: ecuCdiW211Img, inStock: true },
  { id: "ecu-cdi-w203", name: "ECU CDI KIT W203", category: "ECU", img: ecuCdiW211Img, inStock: true },
  { id: "elv-esl-motor", name: "Mercedes ELV/ESL Motor Repair Universal Tools", category: "Tools", img: elvEslMotorImg, inStock: true },
  { id: "ezs-eis-w169", name: "MB EZS/EIS W169 - W245", category: "Security", img: ezsEisW164Img, inStock: true },
  { id: "ezs-eis-w203", name: "MB EZS/EIS W203 - W209 - W211 - W219", category: "Security", img: ezsEisW164Img, inStock: true },
  { id: "testing-cables", name: "Mercedes Testing Cables", category: "Cables", img: testingCablesImg, inStock: true },
  { id: "breakout-box", name: "Mercedes Breakout Box", category: "Tools", img: breakoutBoxImg, inStock: true },
  { id: "obd-cables", name: "OBD Diagnostic Cables Set", category: "Cables", img: testingCablesImg, inStock: true },
  { id: "key-shell", name: "Mercedes Key Shell Replacement", category: "Keys", img: keyShellImg, inStock: true },
  { id: "bga-key-chrome", name: "BGA Key Chrome Housing", category: "Keys", img: bgaKeyChromeImg, inStock: true },
  { id: "ir-key-fob", name: "IR Key Fob Case", category: "Keys", img: keyShellImg, inStock: false },
  { id: "ecu-connector-pin", name: "ECU Connector Pin Kit", category: "Electronics", img: ribbonCableImg, inStock: true },
  { id: "can-bus-analyzer", name: "CAN Bus Analyzer Tool", category: "Tools", img: canBusImg, inStock: true },
  { id: "wiring-harness-kit", name: "Wiring Harness Repair Kit", category: "Cables", img: wiringHarnessImg, inStock: true },
];

const SpareParts = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Package className="h-5 w-5 text-accent" />
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Shop</p>
        </div>
        <h1 className="text-4xl font-display font-bold mb-4">Original Spare Parts</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Genuine Mercedes-Benz parts, testing tools, and diagnostic accessories.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {parts.map((part) => (
          <div
            key={part.id}
            className="group cursor-pointer animate-fade-in"
            onClick={() => navigate(`/spare-parts/${part.id}`)}
          >
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-border mb-3 group-hover:shadow-md transition-shadow">
              <img
                src={part.img}
                alt={part.name}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-medium text-accent group-hover:underline leading-tight">
              {part.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpareParts;

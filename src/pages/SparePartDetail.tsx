import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

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

const partsData: Record<string, { name: string; category: string; img: string; inStock: boolean; description: string }> = {
  "ribbon-cable": { name: "Mercedes High Quality Ribbon Cable LCD Display Pixel", category: "Electronics", img: ribbonCableImg, inStock: true, description: "High quality ribbon cable for Mercedes-Benz LCD display pixel repair. Compatible with W203, W209, W211, W219 instrument clusters. Fixes dead pixels and fading displays." },
  "ezs-eis-w164": { name: "MB - EZS/EIS W164 - W216", category: "Security", img: ezsEisW164Img, inStock: true, description: "Original EZS/EIS electronic ignition switch module for Mercedes W164 (ML-Class) and W216 (CL-Class). Plug-and-play replacement with full compatibility." },
  "ecu-cdi-w211": { name: "ECU CDI KIT W211", category: "ECU", img: ecuCdiW211Img, inStock: true, description: "Complete ECU CDI repair kit for Mercedes W211 E-Class. Includes all necessary components for CDI engine control unit refurbishment." },
  "ecu-cdi-w203": { name: "ECU CDI KIT W203", category: "ECU", img: ecuCdiW211Img, inStock: true, description: "Complete ECU CDI repair kit for Mercedes W203 C-Class. Factory-spec components for reliable engine management restoration." },
  "elv-esl-motor": { name: "Mercedes ELV/ESL Motor Repair Universal Tools", category: "Tools", img: elvEslMotorImg, inStock: true, description: "Universal tool set for ELV/ESL electronic steering lock motor repair. Works with W204, W207, W212 and other Mercedes models." },
  "ezs-eis-w169": { name: "MB EZS/EIS W169 - W245", category: "Security", img: ezsEisW164Img, inStock: true, description: "EZS/EIS module for Mercedes W169 (A-Class) and W245 (B-Class). Direct replacement for faulty ignition switch modules." },
  "ezs-eis-w203": { name: "MB EZS/EIS W203 - W209 - W211 - W219", category: "Security", img: ezsEisW164Img, inStock: true, description: "Multi-platform EZS/EIS module compatible with W203, W209, W211, and W219 Mercedes-Benz models." },
  "testing-cables": { name: "Mercedes Testing Cables", category: "Cables", img: testingCablesImg, inStock: true, description: "Professional testing cable set for Mercedes-Benz diagnostic work. Includes EIS, ECU, and gateway test cables with secure connectors." },
  "breakout-box": { name: "Mercedes Breakout Box", category: "Tools", img: breakoutBoxImg, inStock: true, description: "Diagnostic breakout box for Mercedes-Benz. Provides safe signal access points for live testing of ECU and module circuits." },
  "obd-cables": { name: "OBD Diagnostic Cables Set", category: "Cables", img: testingCablesImg, inStock: true, description: "Complete OBD-II diagnostic cable set with 16-pin connector and adapters for all Mercedes-Benz models." },
  "key-shell": { name: "Mercedes Key Shell Replacement", category: "Keys", img: keyShellImg, inStock: true, description: "Replacement key shell housing for Mercedes-Benz keys. High-quality ABS construction with chrome trim, fits most key generations." },
  "bga-key-chrome": { name: "BGA Key Chrome Housing", category: "Keys", img: bgaKeyChromeImg, inStock: true, description: "Chrome housing for Mercedes BGA keys. Premium quality replacement shell with all button pads and blade slot included." },
  "ir-key-fob": { name: "IR Key Fob Case", category: "Keys", img: keyShellImg, inStock: false, description: "Replacement case for Mercedes infrared key fob. Compatible with early W220, W215, and other IR-equipped models." },
  "ecu-connector-pin": { name: "ECU Connector Pin Kit", category: "Electronics", img: ribbonCableImg, inStock: true, description: "Precision connector pin kit for ECU harness repair. Gold-plated pins for reliable electrical connections." },
  "can-bus-analyzer": { name: "CAN Bus Analyzer Tool", category: "Tools", img: canBusImg, inStock: true, description: "Professional CAN bus analyzer for Mercedes-Benz diagnostics. Reads and monitors CAN-H and CAN-L signals in real-time." },
  "wiring-harness-kit": { name: "Wiring Harness Repair Kit", category: "Cables", img: wiringHarnessImg, inStock: true, description: "Complete wiring harness repair kit with color-coded wires, heat shrink, and Mercedes-spec connectors." },
};

const SparePartDetail = () => {
  const { partId } = useParams();
  const part = partId ? partsData[partId] : null;

  if (!part) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Part Not Found</h1>
        <Link to="/spare-parts" className="text-accent hover:underline">← Back to Spare Parts</Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
        <Link to="/spare-parts" className="hover:text-foreground transition-colors">Spare Parts</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{part.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="bg-white rounded-lg border border-border p-4">
          <img
            src={part.img}
            alt={part.name}
            className="w-full max-w-md mx-auto object-contain"
            width={512}
            height={512}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <Badge variant={part.inStock ? "default" : "secondary"} className={`w-fit mb-4 ${part.inStock ? "bg-green-600 hover:bg-green-700" : ""}`}>
            {part.inStock ? "IN STOCK" : "OUT OF STOCK"}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-muted-foreground/80 mb-6 leading-tight">
            {part.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {part.description}
          </p>
          <Link to="/contact" className="text-accent hover:underline text-sm font-medium">
            Contact us for pricing and availability →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SparePartDetail;

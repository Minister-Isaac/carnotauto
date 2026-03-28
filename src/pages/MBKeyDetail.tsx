import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

import modifiedMb2ndGenImg from "@/assets/keys/modified-mb-2nd-gen.jpg";
import mb2ndGenImg from "@/assets/keys/mb-2nd-gen.jpg";
import mb3rdGenImg from "@/assets/keys/mb-3rd-gen.jpg";
import mbFbs3_4thGenImg from "@/assets/keys/mb-fbs3-4th-gen.jpg";
import mbIrKeyImg from "@/assets/keys/mb-ir-key.jpg";
import mbKeyBatteryCoverImg from "@/assets/keys/mb-key-battery-cover.jpg";

const keysData: Record<string, { name: string; img: string; description: string }> = {
  "modified-mb-2nd-gen": { name: "Modified MB - Key second-generation electronic key", img: modifiedMb2ndGenImg, description: "Modified Mercedes-Benz second-generation electronic key with enhanced signal range and improved button responsiveness. Compatible with W203, W208, W210, and W168 models. Features lock, unlock, and trunk release functions." },
  "mb-2nd-gen": { name: "MB - Key second-generation electronic key", img: mb2ndGenImg, description: "Original Mercedes-Benz second-generation chrome electronic key. Features the classic Mercedes star design with integrated transponder chip. Compatible with W203, W209, W211 platforms." },
  "mb-3rd-gen": { name: "MB - Key third-generation electronic key", img: mb3rdGenImg, description: "Mercedes-Benz third-generation electronic smart key with panic button. Supports KEYLESS-GO functionality. Compatible with W204, W207, W212 and newer platforms." },
  "mb-fbs3-4th-gen": { name: "MB - Key FBS3 Fourth-generation electronic key", img: mbFbs3_4thGenImg, description: "Fourth-generation FBS3 electronic key for Mercedes-Benz. Advanced encryption with rolling code security. Compatible with W222, W213, W167 and current generation vehicles." },
  "mb-fbs3-4th-gen-v2": { name: "MB - Key FBS3 Fourth-generation electronic key", img: mbFbs3_4thGenImg, description: "Variant of the fourth-generation FBS3 key with updated firmware compatibility. Suitable for vehicles manufactured from 2014 onwards." },
  "mb-ir-key": { name: "MB - IR Key Fob Remote", img: mbIrKeyImg, description: "Mercedes-Benz infrared key fob remote. First-generation electronic key for W220 S-Class, W215 CL-Class, and W210 E-Class. Infrared signal with mechanical key blade." },
  "mb-key-battery-cover": { name: "MB - Key Battery Cover Panel", img: mbKeyBatteryCoverImg, description: "Replacement battery cover panel for Mercedes-Benz electronic keys. High-quality ABS plastic construction. Universal fit for most Mercedes key generations." },
  "modified-mb-2nd-gen-v2": { name: "Modified MB - Key second-generation (variant)", img: modifiedMb2ndGenImg, description: "Alternative variant of the modified second-generation Mercedes key. Features improved water resistance and enhanced button durability for heavy-use environments." },
};

const MBKeyDetail = () => {
  const { keyId } = useParams();
  const key = keyId ? keysData[keyId] : null;

  if (!key) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Key Not Found</h1>
        <Link to="/mb-keys" className="text-accent hover:underline">← Back to Keys</Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
        <Link to="/mb-keys" className="hover:text-foreground transition-colors">Keys</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{key.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white rounded-lg border border-border p-4">
          <img src={key.img} alt={key.name} className="w-full max-w-md mx-auto object-contain" width={512} height={512} />
        </div>

        <div className="flex flex-col justify-center">
          <Badge className="w-fit mb-4 bg-green-600 hover:bg-green-700">IN STOCK</Badge>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-muted-foreground/80 mb-6 leading-tight">
            {key.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">{key.description}</p>
          <Link to="/contact" className="text-accent hover:underline text-sm font-medium">
            Contact us for pricing and availability →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MBKeyDetail;

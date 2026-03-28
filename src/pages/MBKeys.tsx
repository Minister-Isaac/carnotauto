import { useNavigate } from "react-router-dom";
import { Key } from "lucide-react";

import modifiedMb2ndGenImg from "@/assets/keys/modified-mb-2nd-gen.jpg";
import mb2ndGenImg from "@/assets/keys/mb-2nd-gen.jpg";
import mb3rdGenImg from "@/assets/keys/mb-3rd-gen.jpg";
import mbFbs3_4thGenImg from "@/assets/keys/mb-fbs3-4th-gen.jpg";
import mbIrKeyImg from "@/assets/keys/mb-ir-key.jpg";
import mbKeyBatteryCoverImg from "@/assets/keys/mb-key-battery-cover.jpg";

const keys = [
  { id: "modified-mb-2nd-gen", name: "Modified MB - Key second-generation electronic key", img: modifiedMb2ndGenImg },
  { id: "mb-2nd-gen", name: "MB - Key second-generation electronic key", img: mb2ndGenImg },
  { id: "mb-3rd-gen", name: "MB - Key third-generation electronic key", img: mb3rdGenImg },
  { id: "mb-fbs3-4th-gen", name: "MB - Key FBS3 Fourth-generation electronic key", img: mbFbs3_4thGenImg },
  { id: "mb-fbs3-4th-gen-v2", name: "MB - Key FBS3 Fourth-generation electronic key", img: mbFbs3_4thGenImg },
  { id: "mb-ir-key", name: "MB - IR Key Fob Remote", img: mbIrKeyImg },
  { id: "mb-key-battery-cover", name: "MB - Key Battery Cover Panel", img: mbKeyBatteryCoverImg },
  { id: "modified-mb-2nd-gen-v2", name: "Modified MB - Key second-generation (variant)", img: modifiedMb2ndGenImg },
];

const MBKeys = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Key className="h-5 w-5 text-accent" />
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Keys</p>
        </div>
        <h1 className="text-4xl font-display font-bold mb-4">MB-Keys</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Mercedes-Benz electronic keys, fobs, and key accessories for all generations.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {keys.map((key) => (
          <div
            key={key.id}
            className="group cursor-pointer animate-fade-in"
            onClick={() => navigate(`/mb-keys/${key.id}`)}
          >
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-border mb-3 group-hover:shadow-md transition-shadow">
              <img
                src={key.img}
                alt={key.name}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-medium text-accent group-hover:underline leading-tight">
              {key.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBKeys;

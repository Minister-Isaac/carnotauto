import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Key, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const KeyRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Key className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes-Benz Smart Keys Repair</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          The Mercedes key uses advanced infrared and radio frequency technology to communicate with the security system via a unique rolling code system. The downside is that it can easily be damaged if dropped or comes in contact with liquid.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Common Key Faults</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Key won't lock or unlock vehicle</li>
              <li>• Mercedes key won't turn in ignition</li>
              <li>• Convenience opening & closing not functioning</li>
              <li>• Cracked key buttons</li>
              <li>• One or more buttons not working</li>
              <li>• Liquid damaged</li>
              <li>• No dash lights after starting</li>
              <li>• Indicators, windscreen wipers, windows & other electronics not working after start</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Additional Keys</h3>
            <p className="text-muted-foreground mb-3">
              We can program additional keys to all Mercedes-Benz vehicles — old type to new, including BGA & KEYLESS-GO keys. We work with your data. Send us:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• EZS/EIS Data</li>
              <li>• VIN number</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Lost Keys</h3>
            <p className="text-muted-foreground mb-3">
              For lost keys, we require the original data from EZS/EIS only. If you don't have any devices, send us the old EZS/EIS and we'll resend with additional keys of the quantity you need.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• EZS/EIS Data OR send us the unit</li>
              <li>• VIN number</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for key repair services</span>
        </div>
      </div>
    </div>
  );
};

export default KeyRepair;

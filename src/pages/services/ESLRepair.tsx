import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ESLRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Shield className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">MB - ELV/ESL Electronic Steering Lock Repair</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          Before the updating from factory there are many problems about failing ELV/ESL in cars from 2007 onward. The ELV/ESL on this range is unlike other models — the car relies on a signal from it to allow the engine to work.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">ELV/ESL Common Faults</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Key turns but no ignition light and no engine start</li>
              <li>• Key turns and releases lock but no engine start</li>
              <li>• Steering lock stays in off position after removing the key</li>
              <li>• Steering lock is locked and doesn't release when key is inserted</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Repair & Replacement</h3>
            <p className="text-muted-foreground mb-3">
              Many ELV/ESL can be easily fixed by motor replacement. If you can't replace or repair, we can supply a new unit or do full repairs on your old kit — ready to plug and play requiring no other programming.
            </p>
            <p className="text-muted-foreground font-semibold">Send us:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• EZS/EIS data as a dump</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for ESL/ELV repair services</span>
        </div>
      </div>
    </div>
  );
};

export default ESLRepair;

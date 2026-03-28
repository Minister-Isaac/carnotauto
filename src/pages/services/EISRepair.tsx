import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EISRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Lock className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">MB - EZS/EIS Electronic Ignition Switch Repair</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          The Mercedes DAS system mainly works around the EIS so any malfunction or fault may cause the system to not work. The EIS holds vital key data and links to the ECU and ESL, and also acts as a central gateway to other vehicle electronics — meaning EIS and key faults could seem to cause other system faults.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">EZS/EIS Electronic Ignition Switch Faults</h3>
            <p className="text-muted-foreground">
              Many EZS/EIS can be easily fixed, with replacement parts or service exchange unit. If a unit cannot be repaired or replaced, we can supply a new unit which is fully plug and play requiring no other programming.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Replaced EZS/EIS Service</h3>
            <p className="text-muted-foreground mb-3">
              We can work with your data — no need for an extra EZS/EIS. We can send a new unit fully plug and play requiring no other programming. Please send us:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• EZS/EIS data</li>
              <li>• VIN number</li>
              <li>• Part number</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for EIS/EZS repair services</span>
        </div>
      </div>
    </div>
  );
};

export default EISRepair;

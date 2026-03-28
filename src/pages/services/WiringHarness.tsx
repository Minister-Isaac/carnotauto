import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cable, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WiringHarness = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Cable className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes Main Engine Wiring Harness Rebuild</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          We specialize in the complete rebuild and repair of Mercedes-Benz main engine wiring harnesses. Degraded wiring harnesses are a common source of intermittent electrical faults, engine misfires, and sensor malfunctions in older Mercedes vehicles.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Supported Models</h3>
            <div className="grid grid-cols-2 gap-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">E-Class W124</p>
                <p className="text-sm">111 Engine Types</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">E-Class W210</p>
                <p className="text-sm">All engine variants</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">C-Class W202/W203</p>
                <p className="text-sm">Complete harness rebuild</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">S-Class W140/W220</p>
                <p className="text-sm">Full system coverage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Service Includes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Complete wiring harness disassembly and inspection</li>
              <li>• Replacement of all degraded wiring and connectors</li>
              <li>• Heat-resistant sleeving and OEM-spec materials</li>
              <li>• Full continuity and insulation testing</li>
              <li>• Documentation and wiring diagrams provided</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for wiring harness rebuild services</span>
        </div>
      </div>
    </div>
  );
};

export default WiringHarness;

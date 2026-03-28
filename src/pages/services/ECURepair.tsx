import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ECURepair = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Cpu className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes-Benz Engine ECU Repair</h1>
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground text-lg">
          We can repair most Mercedes-Benz Engine ECU for several common faults which includes:
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Common ECU Faults</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Vehicle not starting when hot</li>
              <li>• Low fuel pressure when hot</li>
              <li>• Engine fan runs at full speed at times for no obvious reason</li>
              <li>• Throttle body stiff / jammed / blocked due to ice</li>
              <li>• Alternator serial interface communication faults</li>
              <li>• Starter or alternator faults</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Old ECU Wiring Harness Problems</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Injector issues</li>
              <li>• Idle problems</li>
              <li>• Ignition output faults</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">SCN Coding Service</h3>
            <p className="text-muted-foreground mb-3">
              Without SCN coding the ECU won't work properly. We offer SCN coding services. Please send us:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• VIN number</li>
              <li>• Part number</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Make Virgin Service</h3>
            <p className="text-muted-foreground mb-3">
              We work with your data — no need for a second ECU. Save time and money. Please send us:
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• ECU data</li>
              <li>• VIN number</li>
              <li>• Part number</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for ECU repair services</span>
        </div>
      </div>
    </div>
  );
};

export default ECURepair;

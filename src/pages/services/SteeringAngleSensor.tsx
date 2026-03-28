import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gauge, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SteeringAngleSensor = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Gauge className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes Steering Angle Sensor</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          The steering angle sensor is a critical component for the Electronic Stability Program (ESP), providing the control unit with precise data about the steering wheel position and rotation speed.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Common Issues</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• ESP / BAS warning lights illuminated</li>
              <li>• Steering angle sensor fault codes</li>
              <li>• Loss of stability control functions</li>
              <li>• Steering wheel position not recognized</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Steering angle sensor calibration</li>
              <li>• Sensor replacement and programming</li>
              <li>• ESP system diagnostics</li>
              <li>• Full system reset and adaptation</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for steering sensor services</span>
        </div>
      </div>
    </div>
  );
};

export default SteeringAngleSensor;

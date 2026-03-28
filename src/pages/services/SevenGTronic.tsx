import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SevenGTronic = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Settings className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes 7G-Tronic</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          The 7-speed automatic transmission transfers engine power to the road with even greater ease and boasts a winning combination of smoother gear-shifting, lower fuel consumption, and reduced emissions.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">7G-Tronic Plus</h3>
            <p className="text-muted-foreground mb-4">
              The latest version of the successful 7-speed automatic transmission from Mercedes-Benz.
            </p>
            <h4 className="font-semibold mb-2">Components:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Y3/8Y1 Working pressure control solenoid</li>
              <li>• Y3/8Y2 K1 Clutch solenoid</li>
              <li>• Y3/8Y3 K2 Clutch solenoid</li>
              <li>• Y3/8Y4 K3 Clutch solenoid</li>
              <li>• Y3/8Y5 B1 Brake clutch solenoid</li>
              <li>• Y3/8Y6 B2 Brake clutch solenoid</li>
              <li>• Y3/8Y7 B3 Brake clutch solenoid</li>
              <li>• Y3/8Y8 Torque converter lockup solenoid</li>
              <li>• Y3/8N1 Turbine speed sensor</li>
              <li>• Y3/8N2 Internal speed sensor</li>
              <li>• Y3/8N3 Output speed sensor</li>
              <li>• Y3/8N4 Fully integrated transmission control</li>
              <li>• Y3/8S1 Selection range sensor</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">VGS Manager</h3>
            <p className="text-muted-foreground">
              Easy to enable Manual, Agility modes in EGS52, EGS53, VGSNAG2, enable paddles, change axle ratio and many other options. Software generates checksum automatically.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Programming Services</h3>
            <p className="text-muted-foreground">
              We are able to program all kinds of new 7G-Tronic and reprogram used units with original SCN coding.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for 7G-Tronic services</span>
        </div>
      </div>
    </div>
  );
};

export default SevenGTronic;

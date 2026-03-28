import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FBS4Solutions = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <ShieldCheck className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes DAS-4 [FBS-4] Solutions</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          Comprehensive solutions for Mercedes-Benz Authorization System 4 (FBS-4). We provide full support for the latest generation security system including key programming, EIS solutions, and VGS configurations.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">FBS-4 Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• FBS-4 key programming and replacement</li>
              <li>• EZS/EIS FBS-4 solutions</li>
              <li>• VGS FDCT and 9G transmission support</li>
              <li>• NTG / Theft Activated solutions</li>
              <li>• Daimler SEED KEY generation</li>
              <li>• Certificate ZenZefi services</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">VGS FBS3/FBS4 Converter</h3>
            <p className="text-muted-foreground">
              Tools to convert VGS long SCN digits to 4 SCN digits, convert VGS SCN from HEX/Decimal/Binary to text format.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for FBS-4 solutions</span>
        </div>
      </div>
    </div>
  );
};

export default FBS4Solutions;

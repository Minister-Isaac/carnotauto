import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FBS3Solutions = () => {
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
        <h1 className="text-3xl font-display font-bold">Mercedes DAS-3 [FBS-3] Solutions</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          Complete solutions for Mercedes-Benz Authorization System 3 (FBS-3), covering both pre-2007 and post-2007 vehicle platforms.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">FBS-3 Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• MB Dealer Password generation</li>
              <li>• ESL/ELV & Emulator Password</li>
              <li>• EZS/EIS Pinout Diagrams for all models</li>
              <li>• FBS-3 key programming (pre-2007 and post-2007)</li>
              <li>• Full security system diagnostics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Free Tools for Customers</h3>
            <p className="text-muted-foreground">
              We provide free dealer password tools and ESL/ELV emulator password tools for our customers. Note: These applications are not for getting security keys from the dealer.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for FBS-3 solutions</span>
        </div>
      </div>
    </div>
  );
};

export default FBS3Solutions;

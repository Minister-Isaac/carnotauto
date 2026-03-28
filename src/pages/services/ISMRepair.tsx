import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cog, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ISMRepair = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-16 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate("/services")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
          <Cog className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl font-display font-bold">Mercedes ISM - Intelligent Servo Module</h1>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground text-lg">
          The intelligent servo module (ISM) for Direct Select is mounted on the left side of the automatic transmission. It allows the system to read the selected drive position via electrical signals and to engage the drive position via a mechanical interface on the transmission.
        </p>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Used In</h3>
            <p className="text-muted-foreground">
              Mercedes-Benz vehicles with 722.9 7G-Tronic transmission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">Typical Trouble Codes</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Error 1984:</strong> Unknown fault code / Unknown fault type 1
              </li>
              <li>
                <strong>Error 1994:</strong> Component A80 (Intelligent servo module for direct select) is defective — Repair
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-display font-semibold mb-3">SCN Coding</h3>
            <p className="text-muted-foreground">
              Only the new type needs Online SCN coding. Old type requires no SCN coding or other special procedure. Steps: 1) Select vehicle, 2) Selection sensor adaptation procedure to be executed, 3) This can be done using the MB-STAR/XENTRY diagnostic tool.
            </p>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 mt-8">
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-muted-foreground">Contact us for ISM services</span>
        </div>
      </div>
    </div>
  );
};

export default ISMRepair;

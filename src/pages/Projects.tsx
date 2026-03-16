import { Card, CardContent } from "@/components/ui/card";
import { Car, ImageIcon, PlayCircle } from "lucide-react";

const projectCategories = [
  "All",
  "ECU Programming",
  "Vehicle Coding",
  "Key Programming",
  "Electrical Diagnostics",
  "Odometer Correction",
];

const projects = [
  { type: "image", title: "BMW F30 ECU Flash", category: "ECU Programming" },
  { type: "video", title: "Mercedes W205 Coding Session", category: "Vehicle Coding" },
  { type: "image", title: "Audi A6 Key Programming", category: "Key Programming" },
  { type: "image", title: "Range Rover Electrical Fault Trace", category: "Electrical Diagnostics" },
  { type: "video", title: "Toyota Camry Full Diagnostic", category: "ECU Programming" },
  { type: "image", title: "Honda Accord CAN Bus Analysis", category: "Electrical Diagnostics" },
  { type: "image", title: "Ford Explorer Cluster Repair", category: "Odometer Correction" },
  { type: "video", title: "Lexus RX350 Coding Walkthrough", category: "Vehicle Coding" },
  { type: "image", title: "Volkswagen Golf ECU Calibration", category: "ECU Programming" },
  { type: "image", title: "Hyundai Tucson Smart Key Setup", category: "Key Programming" },
  { type: "video", title: "Chevrolet Malibu Wiring Repair", category: "Electrical Diagnostics" },
  { type: "image", title: "Nissan Pathfinder Diagnostic Report", category: "ECU Programming" },
  { type: "image", title: "Porsche Cayenne Feature Activation", category: "Vehicle Coding" },
  { type: "video", title: "Kia Sportage Immobilizer Reset", category: "Key Programming" },
  { type: "image", title: "Jeep Wrangler Sensor Calibration", category: "Electrical Diagnostics" },
  { type: "image", title: "Infiniti Q50 Odometer Recalibration", category: "Odometer Correction" },
  { type: "video", title: "Mazda CX-5 Full System Scan", category: "ECU Programming" },
  { type: "image", title: "Volvo XC90 Module Programming", category: "Vehicle Coding" },
  { type: "image", title: "Subaru Outback Key Cloning", category: "Key Programming" },
  { type: "video", title: "Land Cruiser Electrical Overhaul", category: "Electrical Diagnostics" },
  { type: "image", title: "Acura TLX Dashboard Restore", category: "Odometer Correction" },
  { type: "image", title: "Tesla Model 3 Diagnostic Interface", category: "ECU Programming" },
  { type: "video", title: "Jaguar XF Comfort Coding", category: "Vehicle Coding" },
  { type: "image", title: "Chrysler 300 Transponder Setup", category: "Key Programming" },
];

const Projects = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-4">Our Projects</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-2xl">
            See Our Work in Action
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl font-body">
            Browse through our completed projects — from ECU programming to complex electrical repairs. Photos and videos of real jobs.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-card sticky top-16 z-40">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors first:bg-accent first:text-accent-foreground"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted relative flex items-center justify-center">
                {project.type === "video" ? (
                  <div className="text-center">
                    <PlayCircle className="h-12 w-12 text-accent/40 mx-auto mb-2 group-hover:text-accent/70 transition-colors" />
                    <p className="text-xs text-muted-foreground">Video</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <ImageIcon className="h-12 w-12 text-accent/40 mx-auto mb-2 group-hover:text-accent/70 transition-colors" />
                    <p className="text-xs text-muted-foreground">Photo</p>
                  </div>
                )}
                {/* Category badge */}
                <span className="absolute top-2 left-2 px-2 py-1 rounded-md bg-primary/80 text-primary-foreground text-[10px] font-semibold backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <CardContent className="p-3">
                <p className="text-sm font-medium truncate">{project.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload prompt */}
        <div className="mt-12 border-2 border-dashed border-accent/20 rounded-2xl p-12 text-center">
          <ImageIcon className="h-16 w-16 text-accent/20 mx-auto mb-4" />
          <h3 className="font-display font-semibold text-lg mb-2">More Content Coming Soon</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            We're uploading more photos and videos of our completed projects. Check back for updates showcasing our diagnostic expertise.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-semibold text-foreground">
            <Car className="h-4 w-4 text-accent" />
            KingsCarNotAutomobile
          </div>
          <p>© {new Date().getFullYear()} KingsCarNotAutomobile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;

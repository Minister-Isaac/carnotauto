import { Card, CardContent } from "@/components/ui/card";
import { Car, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const milestones = [
  { year: "2010", icon: GraduationCap, title: "Engineering Degree", desc: "Graduated with a degree in Automotive/Electrical Engineering." },
  { year: "2013", icon: Briefcase, title: "Industry Experience", desc: "Worked with leading dealerships mastering OEM diagnostic platforms." },
  { year: "2016", icon: BookOpen, title: "Advanced Certifications", desc: "Earned certifications in ECU programming, vehicle coding, and CAN bus systems." },
  { year: "2018", icon: Award, title: "Founded KingsCarNotAutomobile", desc: "Launched the company to bring dealership-grade diagnostics to everyone." },
];

const Founder = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-4">The Founder</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-2xl">
            Meet the Visionary Behind the Brand
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl font-body">
            A passionate automobile diagnostician with over a decade of hands-on experience.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="container py-20">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo Placeholder */}
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-2xl bg-muted border-2 border-dashed border-accent/20 flex items-center justify-center">
              <div className="text-center p-6">
                <Car className="h-16 w-16 text-accent/30 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground font-medium">Founder Photo</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Upload coming soon</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-display font-bold mb-2">King</h2>
            <p className="text-accent font-semibold text-sm mb-6">Founder & Lead Diagnostician</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a deep passion for automobiles and technology, King founded KingsCarNotAutomobile to revolutionize the way vehicle owners access professional diagnostics. His journey started from a genuine curiosity about how vehicles communicate through electronic systems.
              </p>
              <p>
                Over the years, he has mastered advanced diagnostic tools across all major vehicle brands — from European luxury cars to Japanese and American models. His expertise spans ECU programming, vehicle coding, key programming, and complex electrical fault diagnosis.
              </p>
              <p>
                King's philosophy is simple: every vehicle owner deserves access to accurate, transparent, and affordable diagnostic services. This belief drives every aspect of KingsCarNotAutomobile's operations and customer service approach.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["ECU Programming", "Vehicle Coding", "Key Programming", "CAN Bus Analysis", "OBD-II Diagnostics", "Electrical Fault Tracing"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50">
        <div className="container py-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Journey & Milestones</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <Card key={m.year} className="text-center">
                <CardContent className="p-6">
                  <div className="text-accent font-display font-bold text-2xl mb-3">{m.year}</div>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <m.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Founder;

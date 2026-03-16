import { Card, CardContent } from "@/components/ui/card";
import { Car, Shield, Wrench, Users, Target, Eye } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust & Integrity", desc: "We build lasting relationships through honest diagnostics and transparent pricing." },
  { icon: Wrench, title: "Technical Excellence", desc: "Our team stays ahead with continuous training on the latest vehicle technologies." },
  { icon: Users, title: "Customer First", desc: "Every vehicle gets the same meticulous attention, regardless of make or model." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-2xl">
            Driving Innovation in Automobile Diagnostics
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl font-body">
            KingsCarNotAutomobile was founded with a single mission: to bring dealership-level diagnostic expertise to every vehicle owner — affordably and transparently.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class automobile diagnostic services using cutting-edge technology, ensuring every vehicle runs at peak performance. We bridge the gap between complex vehicle electronics and everyday car owners.
              </p>
            </CardContent>
          </Card>
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted name in automobile diagnostics across the region, setting the standard for technical excellence, customer service, and innovation in vehicle electronic systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50">
        <div className="container py-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5,000+", label: "Happy Customers" },
            { value: "50+", label: "Brands Supported" },
            { value: "15+", label: "Team Members" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-display font-bold text-accent">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
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

export default About;

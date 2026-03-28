import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Play } from "lucide-react";

const videos = [
  { title: "W204/212/207 ESL-ELV Open to Repair", desc: "Step-by-step guide for opening and repairing the ESL/ELV electronic steering lock module." },
  { title: "W204/212/207 ESL-ELV Motor Repair Tools", desc: "Demonstration of specialized motor repair tools for the electronic steering lock." },
  { title: "MB EZS/EIS W205-W253 Programming", desc: "EZS/EIS programming procedure for the latest Mercedes W205 and W253 platforms." },
  { title: "Mercedes Key Programming Tutorial", desc: "Complete walkthrough of Mercedes smart key programming process." },
  { title: "7G-Tronic VGS Manager Demo", desc: "How to use the VGS Manager software for 7G-Tronic transmission programming." },
  { title: "XENTRY Diagnostic Software Setup", desc: "Full installation and configuration guide for the latest XENTRY diagnostic software." },
];

const MediaCenter = () => (
  <div className="container py-16">
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Video className="h-5 w-5 text-accent" />
        <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Watch & Learn</p>
      </div>
      <h1 className="text-4xl font-display font-bold mb-4">Media Center</h1>
      <p className="text-muted-foreground max-w-lg mx-auto">
        Video tutorials, demonstrations, and guides for our diagnostic services and tools.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {videos.map((vid, i) => (
        <Card key={i} className="group hover:shadow-md transition-shadow cursor-pointer animate-fade-in">
          <CardContent className="pt-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
              <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Play className="h-6 w-6 text-accent ml-1" />
              </div>
            </div>
            <h3 className="font-display font-semibold text-sm mb-1">{vid.title}</h3>
            <p className="text-xs text-muted-foreground">{vid.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MediaCenter;

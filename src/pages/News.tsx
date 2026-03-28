import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

const newsItems = [
  { date: "Mar 2026", title: "XENTRY Simple Activation Latest Version", desc: "Latest XENTRY diagnostic software activation tool now available with full support for all Mercedes platforms." },
  { date: "Mar 2026", title: "Mercedes-Benz ZenZefi Update License", desc: "Updated ZenZefi certificate license available for extended validity period." },
  { date: "Feb 2026", title: "Mercedes Star-Diagnostic Software DAS/XENTRY Update", desc: "Quarterly update for Mercedes Star-Diagnostic Software with new vehicle coverage and bug fixes." },
  { date: "Feb 2026", title: "Mercedes Patcher Update Full Fix All XENTRY Versions", desc: "Comprehensive patcher update supporting all XENTRY versions for seamless activation." },
  { date: "Jan 2026", title: "Mercedes VGS FBS3/FBS4 Converter V2", desc: "New version of the VGS converter tool with improved SCN digit conversion capabilities." },
  { date: "Jan 2026", title: "Mercedes Online ECU-Unlock Server", desc: "New online ECU unlock server now available for remote ECU unlocking services." },
  { date: "Dec 2025", title: "Mercedes Online AED Comparer Server", desc: "Advanced AED comparison server launched for detailed ECU data analysis." },
  { date: "Dec 2025", title: "Mercedes All-In-One Full Patcher", desc: "Unified patcher tool supporting all diagnostic software versions in a single package." },
  { date: "Nov 2025", title: "New BMW Diagnostic PC Build Available", desc: "Complete PC-based diagnostic toolkit for BMW now available with full ISTA support." },
  { date: "Nov 2025", title: "Alldata Subscription Plans Updated", desc: "New Alldata subscription tiers with expanded vehicle coverage and wiring diagrams." },
];

const News = () => (
  <div className="container py-16">
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Newspaper className="h-5 w-5 text-accent" />
        <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Stay Updated</p>
      </div>
      <h1 className="text-4xl font-display font-bold mb-4">Latest News</h1>
      <p className="text-muted-foreground max-w-lg mx-auto">
        Stay up to date with the latest software updates, tools, and diagnostic solutions.
      </p>
    </div>

    <div className="space-y-4 max-w-3xl mx-auto">
      {newsItems.map((item, i) => (
        <Card key={i} className="hover:shadow-md transition-shadow animate-fade-in cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs">{item.date}</Badge>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default News;

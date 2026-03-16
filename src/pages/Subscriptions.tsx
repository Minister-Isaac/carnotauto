import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Crown } from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$29",
    period: "/month",
    desc: "Essential diagnostics coverage",
    features: ["Monthly diagnostic scan", "Email reminders", "Basic vehicle report", "Email support"],
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$59",
    period: "/month",
    desc: "Complete diagnostics & coding",
    features: ["Weekly diagnostic monitoring", "SMS & email reminders", "Full vehicle report", "Priority support", "Vehicle coding included", "ECU health monitoring"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Fleet",
    price: "$149",
    period: "/month",
    desc: "For multi-vehicle owners and businesses",
    features: ["Unlimited vehicles", "Real-time monitoring", "Dedicated account manager", "On-site support", "Custom reporting", "API access"],
    popular: false,
  },
];

const Subscriptions = () => {
  const [selected, setSelected] = useState<string | null>("pro");

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold">Subscription Plans</h1>
        <p className="text-muted-foreground text-sm">Choose the right plan for your vehicle maintenance needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative cursor-pointer transition-all ${
              selected === plan.id ? "ring-2 ring-accent shadow-lg" : "hover:shadow-md"
            } ${plan.popular ? "border-accent" : ""}`}
            onClick={() => setSelected(plan.id)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Crown className="h-3 w-3" /> Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.desc}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={selected === plan.id ? "hero" : "outline"}
                className="w-full"
              >
                {selected === plan.id ? "Selected" : "Select Plan"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" disabled={!selected} onClick={() => window.location.href = "/dashboard/payments"}>
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default Subscriptions;

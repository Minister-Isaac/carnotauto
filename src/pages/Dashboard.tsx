import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CarFront, Crown, CreditCard, Bell, ArrowRight } from "lucide-react";

const mockVehicles = [
  { id: "1", make: "BMW", model: "530i", year: 2022, vin: "WBA53BJ0XNWW12345", status: "Healthy" },
  { id: "2", make: "Mercedes", model: "C300", year: 2021, vin: "W1KZF8DB5MA12345", status: "Service Due" },
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    { label: "Register Vehicle", icon: CarFront, to: "/dashboard/vehicles" },
    { label: "View Plans", icon: Crown, to: "/dashboard/subscriptions" },
    { label: "Payments", icon: CreditCard, to: "/dashboard/payments" },
    { label: "Reminders", icon: Bell, to: "/dashboard/reminders" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold">Welcome back, {user?.name || "User"}</h1>
        <p className="text-muted-foreground">Here's an overview of your vehicles and services.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Card key={action.label} className="cursor-pointer hover:shadow-md transition-shadow group" onClick={() => navigate(action.to)}>
            <CardContent className="p-4 flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <action.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium">{action.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Vehicles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-display font-semibold">My Vehicles</h2>
          <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard/vehicles")}>
            View all <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {mockVehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{vehicle.year} {vehicle.make} {vehicle.model}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    vehicle.status === "Healthy"
                      ? "bg-success/10 text-success"
                      : "bg-alert/10 text-alert animate-pulse-alert"
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground font-mono">VIN: {vehicle.vin}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Upcoming Reminders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Bell className="h-4 w-4 text-alert" />
            <span>Mercedes C300 — Oil change due in 500 miles</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span>BMW 530i — Brake inspection in 30 days</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

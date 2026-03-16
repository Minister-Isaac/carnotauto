import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, AlertTriangle, Clock } from "lucide-react";

const reminders = [
  {
    id: "1",
    vehicle: "2021 Mercedes C300",
    service: "Oil Change",
    dueDate: "2025-01-15",
    urgency: "urgent",
    note: "Due in approximately 500 miles",
  },
  {
    id: "2",
    vehicle: "2022 BMW 530i",
    service: "Brake Inspection",
    dueDate: "2025-02-10",
    urgency: "upcoming",
    note: "Scheduled maintenance at 30,000 miles",
  },
  {
    id: "3",
    vehicle: "2022 BMW 530i",
    service: "Tire Rotation",
    dueDate: "2025-03-01",
    urgency: "upcoming",
    note: "Every 7,500 miles recommended",
  },
  {
    id: "4",
    vehicle: "2021 Mercedes C300",
    service: "Coolant Flush",
    dueDate: "2025-04-20",
    urgency: "normal",
    note: "Scheduled for spring service",
  },
  {
    id: "5",
    vehicle: "2022 BMW 530i",
    service: "Transmission Service",
    dueDate: "2025-06-15",
    urgency: "normal",
    note: "Fluid change at 60,000 miles",
  },
];

const urgencyConfig = {
  urgent: { icon: AlertTriangle, color: "text-alert", bg: "bg-alert/10", label: "Urgent" },
  upcoming: { icon: Clock, color: "text-accent", bg: "bg-accent/10", label: "Upcoming" },
  normal: { icon: CheckCircle, color: "text-success", bg: "bg-success/10", label: "Scheduled" },
};

const Reminders = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-bold">Maintenance Reminders</h1>
        <p className="text-muted-foreground text-sm">Stay on top of your vehicle maintenance schedule</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-5 w-5 text-alert mx-auto mb-1 animate-pulse-alert" />
            <div className="text-2xl font-display font-bold">{reminders.filter(r => r.urgency === "urgent").length}</div>
            <div className="text-xs text-muted-foreground">Urgent</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-5 w-5 text-accent mx-auto mb-1" />
            <div className="text-2xl font-display font-bold">{reminders.filter(r => r.urgency === "upcoming").length}</div>
            <div className="text-xs text-muted-foreground">Upcoming</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-5 w-5 text-success mx-auto mb-1" />
            <div className="text-2xl font-display font-bold">{reminders.filter(r => r.urgency === "normal").length}</div>
            <div className="text-xs text-muted-foreground">Scheduled</div>
          </CardContent>
        </Card>
      </div>

      {/* Reminders list */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-4 w-4 text-accent" /> All Reminders
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {reminders.map((r) => {
            const config = urgencyConfig[r.urgency as keyof typeof urgencyConfig];
            const Icon = config.icon;
            return (
              <div key={r.id} className="flex items-start gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className={`h-8 w-8 rounded-full ${config.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`h-4 w-4 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{r.service}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.color} font-medium`}>
                      {config.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.vehicle}</p>
                  <p className="text-xs text-muted-foreground">{r.note}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">Due: {r.dueDate}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reminders;

import { Link, useLocation } from "react-router-dom";
import { Car, LayoutDashboard, CreditCard, Bell, Settings, CarFront, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/vehicles", label: "My Vehicles", icon: CarFront },
  { to: "/dashboard/subscriptions", label: "Subscriptions", icon: Crown },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/reminders", label: "Reminders", icon: Bell },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-sidebar text-sidebar-foreground min-h-[calc(100vh-4rem)]">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Car className="h-5 w-5 text-sidebar-primary" />
          <span className="font-display font-semibold text-sm">Dashboard</span>
        </div>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

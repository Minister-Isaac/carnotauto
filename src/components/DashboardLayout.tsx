import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CarFront, Crown, CreditCard, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileLinks = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/vehicles", label: "Vehicles", icon: CarFront },
  { to: "/dashboard/subscriptions", label: "Plans", icon: Crown },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/reminders", label: "Reminders", icon: Bell },
];

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <main className="flex-1 p-4 md:p-8 pb-20 lg:pb-8">
        <Outlet />
      </main>
      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t flex justify-around py-2 z-50">
        {mobileLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex flex-col items-center gap-1 text-xs px-2 py-1 transition-colors",
                isActive ? "text-accent font-medium" : "text-muted-foreground"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardLayout;

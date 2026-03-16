import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, CheckCircle } from "lucide-react";
import { useState } from "react";

const paymentHistory = [
  { id: "1", date: "2024-12-01", amount: "$59.00", plan: "Pro Plan", status: "Paid" },
  { id: "2", date: "2024-11-01", amount: "$59.00", plan: "Pro Plan", status: "Paid" },
  { id: "3", date: "2024-10-01", amount: "$29.00", plan: "Basic Plan", status: "Paid" },
];

const Payments = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Payments</h1>
          <p className="text-muted-foreground text-sm">Manage billing and view payment history</p>
        </div>
        <Button variant="hero" size="sm" onClick={() => setShowPayment(!showPayment)}>
          <CreditCard className="h-4 w-4 mr-1" /> Make Payment
        </Button>
      </div>

      {showPayment && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPayment(false); }}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Card Number</label>
                <Input placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiry</label>
                  <Input placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVC</label>
                  <Input placeholder="123" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="hero" type="submit">Pay $59.00</Button>
                <Button variant="outline" type="button" onClick={() => setShowPayment(false)}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentHistory.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="text-sm font-medium">{p.plan}</p>
                  <p className="text-xs text-muted-foreground">{p.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display font-semibold text-sm">{p.amount}</span>
                  <span className="flex items-center gap-1 text-xs text-success">
                    <CheckCircle className="h-3 w-3" /> {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;

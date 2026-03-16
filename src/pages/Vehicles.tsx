import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CarFront, Plus, Trash2 } from "lucide-react";

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: string;
  vin: string;
  status: string;
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: "1", make: "BMW", model: "530i", year: "2022", vin: "WBA53BJ0XNWW12345", status: "Healthy" },
    { id: "2", make: "Mercedes", model: "C300", year: "2021", vin: "W1KZF8DB5MA12345", status: "Service Due" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ make: "", model: "", year: "", vin: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setVehicles([...vehicles, { ...form, id: Date.now().toString(), status: "Healthy" }]);
    setForm({ make: "", model: "", year: "", vin: "" });
    setShowForm(false);
  };

  const handleRemove = (id: string) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">My Vehicles</h1>
          <p className="text-muted-foreground text-sm">Register and manage your vehicles</p>
        </div>
        <Button variant="hero" size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-1" /> Add Vehicle
        </Button>
      </div>

      {showForm && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">Register New Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAdd} className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Make</label>
                <Input placeholder="e.g. BMW" value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Model</label>
                <Input placeholder="e.g. 530i" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Year</label>
                <Input placeholder="e.g. 2022" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">VIN</label>
                <Input placeholder="Vehicle Identification Number" value={form.vin} onChange={(e) => setForm({ ...form, vin: e.target.value })} required />
              </div>
              <div className="sm:col-span-2 flex gap-2">
                <Button variant="hero" type="submit">Register Vehicle</Button>
                <Button variant="outline" type="button" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {vehicles.map((v) => (
          <Card key={v.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CarFront className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{v.year} {v.make} {v.model}</CardTitle>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">VIN: {v.vin}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  v.status === "Healthy" ? "bg-success/10 text-success" : "bg-alert/10 text-alert"
                }`}>
                  {v.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => handleRemove(v.id)}>
                <Trash2 className="h-3 w-3 mr-1" /> Remove
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {vehicles.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <CarFront className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p>No vehicles registered yet. Add your first vehicle above.</p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;

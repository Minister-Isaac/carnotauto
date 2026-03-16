import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Car, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    initials: "AJ",
    role: "BMW X5 Owner",
    rating: 5,
    text: "KingsCarNotAutomobile diagnosed a problem three other mechanics couldn't find. Their advanced diagnostic tools pinpointed the exact ECU fault in minutes. Absolutely professional!",
  },
  {
    name: "Chioma Okafor",
    initials: "CO",
    role: "Mercedes-Benz C300 Owner",
    rating: 5,
    text: "The vehicle coding service was exceptional. They activated features I didn't even know my car had. The team is knowledgeable and transparent about every step.",
  },
  {
    name: "Emeka Nwosu",
    initials: "EN",
    role: "Toyota Camry Owner",
    rating: 5,
    text: "After my instrument cluster replacement, they recalibrated my odometer perfectly. Legal, documented, and hassle-free. Highly recommend their services.",
  },
  {
    name: "Funke Adeyemi",
    initials: "FA",
    role: "Range Rover Sport Owner",
    rating: 5,
    text: "Lost all my keys and was quoted an outrageous price by the dealer. KingsCarNotAutomobile programmed new keys at a fraction of the cost. Lifesavers!",
  },
  {
    name: "Ibrahim Musa",
    initials: "IM",
    role: "Audi A4 Owner",
    rating: 4,
    text: "Their subscription service keeps me updated on maintenance schedules. The reminders have saved me from costly repairs more than once. Great value for money.",
  },
  {
    name: "Grace Eze",
    initials: "GE",
    role: "Honda Accord Owner",
    rating: 5,
    text: "Professional, fast, and affordable. They traced a wiring fault that had been causing random electrical issues for months. Fixed in one visit!",
  },
  {
    name: "Tunde Bakare",
    initials: "TB",
    role: "Ford Explorer Owner",
    rating: 5,
    text: "The CAN bus analysis they performed revealed multiple sensor issues. Their detailed report helped me understand exactly what needed fixing. Top-notch service.",
  },
  {
    name: "Amina Yusuf",
    initials: "AY",
    role: "Lexus RX350 Owner",
    rating: 5,
    text: "I've been a subscriber for over a year now. The proactive maintenance alerts have kept my car running smoothly. Customer service is always responsive and helpful.",
  },
];

const Testimonials = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-2xl">
            What Our Customers Say
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl font-body">
            Don't just take our word for it — hear from vehicle owners who trust us with their cars.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-accent/10 text-accent font-semibold text-xs">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < t.rating ? "text-accent fill-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
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

export default Testimonials;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "What brands do you support?", a: "We support all major vehicle brands including Mercedes-Benz, BMW, Audi, Volkswagen, Porsche, Toyota, Lexus, Land Rover, and many more. Our diagnostic tools cover over 50 brands." },
  { q: "What is ECU programming?", a: "ECU (Engine Control Unit) programming involves updating or modifying the software in your vehicle's control modules. This includes flash reprogramming, software updates, calibration files, and module replacement coding." },
  { q: "Can you program keys for all Mercedes models?", a: "Yes, we can program keys for all Mercedes-Benz vehicles from old type to new, including BGA and KEYLESS-GO keys. We also handle all-keys-lost situations." },
  { q: "What is SCN coding?", a: "SCN (Software Calibration Number) coding is a Mercedes-Benz specific process that links replacement components to the vehicle's VIN. Without proper SCN coding, many components won't function correctly." },
  { q: "Do you offer remote diagnostics?", a: "Yes! We offer 24/7 remote diagnostic support via TeamViewer, Skype, and WhatsApp. Many issues can be diagnosed and resolved remotely." },
  { q: "What is the EIS/EZS?", a: "The EIS (Electronic Ignition Switch) or EZS is the central gateway module in Mercedes vehicles. It holds key data and communicates with the ECU, ESL, and other vehicle electronics." },
  { q: "What diagnostic software do you use?", a: "We use genuine OEM software including XENTRY, DAS, Vediamo, DTS, Monaco, Alldata, Mitchell, Techstream, ElsaWin, and custom BMW diagnostic tools." },
  { q: "Can you repair water-damaged keys?", a: "Yes, we specialize in repairing liquid-damaged Mercedes smart keys. We can restore functionality or provide a replacement programmed to your vehicle." },
  { q: "What is FBS-3 / FBS-4?", a: "FBS (Fahr-Berechtigungs-System) is Mercedes-Benz's authorization/security system. FBS-3 covers vehicles up to around 2013, while FBS-4 is the latest generation with enhanced security." },
  { q: "How do I send you my ECU/EIS data?", a: "You can read the data using compatible hardware and email it to us. If you don't have the equipment, you can ship the physical unit and we'll handle everything." },
];

const FAQ = () => (
  <div className="container py-16 max-w-3xl">
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-3">
        <HelpCircle className="h-5 w-5 text-accent" />
        <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Help Center</p>
      </div>
      <h1 className="text-4xl font-display font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground max-w-lg mx-auto">
        Find answers to common questions about our diagnostic and programming services.
      </p>
    </div>

    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-display font-semibold">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQ;

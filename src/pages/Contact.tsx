import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => (
  <div className="container py-16">
    <div className="text-center mb-12 animate-fade-in">
      <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
      <h1 className="text-4xl font-display font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground max-w-lg mx-auto">
        Have questions about our diagnostic services? Reach out to us anytime.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Our Location</h3>
              <p className="text-sm text-muted-foreground">Available for on-site and remote diagnostics services worldwide.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Phone / WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Available 24/7 for urgent diagnostic support</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">Send us your vehicle details and we'll get back to you promptly.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <MessageSquare className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Remote Support</h3>
              <p className="text-sm text-muted-foreground">Remote diagnostic sessions via TeamViewer, Skype, or WhatsApp.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Describe your vehicle issue or inquiry..." rows={5} />
          <Button variant="hero" className="w-full">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Contact;

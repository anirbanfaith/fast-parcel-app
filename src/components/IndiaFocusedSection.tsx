import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Calculator, Globe, Truck, Shield, Clock } from "lucide-react";

const IndiaFocusedSection = () => {
  const indiaSpecific = [
    {
      icon: FileCheck,
      title: "GST Refund Support",
      description: "Expert assistance with GST refund processes for exports",
      badge: "Save ₹50,000+ annually"
    },
    {
      icon: Calculator,
      title: "Export Duty Calculator",
      description: "Real-time duty calculations for all destination countries",
      badge: "220+ Countries"
    },
    {
      icon: Globe,
      title: "Country-wise Regulations",
      description: "Up-to-date import regulations and documentation requirements",
      badge: "Daily Updates"
    },
    {
      icon: Truck,
      title: "Port Connectivity",
      description: "Direct connections to major Indian ports: Mumbai, Chennai, Kolkata",
      badge: "12 Major Ports"
    },
    {
      icon: Shield,
      title: "Export Compliance",
      description: "FIDR, IATA registered with 100% regulatory compliance",
      badge: "Government Approved"
    },
    {
      icon: Clock,
      title: "Same-day Pickup",
      description: "Pickup from major Indian cities within 24 hours",
      badge: "15+ Cities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            Made for Indian Exporters
          </div>
          <h2 className="text-4xl font-bold mb-4">India-Specific Export Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized services designed for Indian businesses, covering everything from GST refunds 
            to port connectivity and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indiaSpecific.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Export from India, Simplified</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're shipping handicrafts to Europe, electronics to America, or textiles to Australia - 
            we handle all documentation, customs, and compliance so you can focus on growing your business.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Mumbai Port</Badge>
            <Badge variant="outline">Chennai Port</Badge>
            <Badge variant="outline">Kolkata Port</Badge>
            <Badge variant="outline">JNPT</Badge>
            <Badge variant="outline">Cochin Port</Badge>
            <Badge variant="outline">Vizag Port</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaFocusedSection;

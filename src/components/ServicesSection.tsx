import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ShoppingCart, Package, Truck, Clock, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "International Air Freight",
      description: "Fast and reliable air cargo services to 220+ countries with express and economy options.",
      features: ["Express delivery (2-5 days)", "Economy options", "Door-to-door service", "Live tracking"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Marketplace Solutions",
      description: "Seamless shipping solutions for Amazon FBA, TikTok FBT, Walmart, eBay, Etsy, and more.",
      features: ["Amazon FBA prep & shipping", "TikTok FBT fulfillment", "Walmart marketplace support", "Multi-platform integration"]
    },
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Complete order fulfillment solutions for D2C brands expanding internationally.",
      features: ["Order processing", "Inventory management", "Pick & pack services", "Returns handling"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Express Delivery",
      description: "2-5 days worldwide"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "End-to-end protection"
    },
    {
      icon: Truck,
      title: "Door-to-Door",
      description: "Complete pickup & delivery"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
           Complete Logistics Solutions
          </div>
          <h2 className="text-4xl font-bold mb-4">Comprehensive Services for Global Trade</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From pickup to delivery, we handle every aspect of your international shipping needs with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 bg-secondary/50 rounded-lg">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{feature.title}</div>
                <div className="text-sm text-muted-foreground">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

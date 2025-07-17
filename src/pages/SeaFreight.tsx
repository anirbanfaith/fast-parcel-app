import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship, Container, Anchor, Clock, DollarSign, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SeaFreight = () => {
  const services = [
    {
      title: "Full Container Load (FCL)",
      description: "Dedicated container for your exclusive cargo",
      containerTypes: ["20ft Standard", "40ft Standard", "40ft High Cube", "20ft Open Top"],
      features: ["Exclusive container use", "Direct port-to-port", "Cost-effective for large volumes", "Multiple container sizes"],
      icon: Container,
      transitTime: "15-45 days"
    },
    {
      title: "Less than Container Load (LCL)",
      description: "Share container space with other shippers",
      containerTypes: ["Consolidated shipments"],
      features: ["Cost-effective for small volumes", "Weekly departures", "Door-to-door service", "Flexible booking"],
      icon: Ship,
      transitTime: "20-50 days"
    },
    {
      title: "Break Bulk Cargo",
      description: "Oversized and heavy cargo handling",
      containerTypes: ["Project cargo", "Heavy machinery", "Construction equipment"],
      features: ["Specialized handling", "Custom solutions", "Port-to-port service", "Expert project management"],
      icon: Anchor,
      transitTime: "Variable"
    }
  ];

  const routes = [
    {
      route: "India - USA (West Coast)",
      ports: "JNPT/Chennai - Los Angeles/Long Beach",
      transitTime: "22-28 days",
      frequency: "Daily"
    },
    {
      route: "India - USA (East Coast)",
      ports: "JNPT/Chennai - New York/Savannah",
      transitTime: "28-35 days",
      frequency: "Daily"
    },
    {
      route: "India - Europe",
      ports: "JNPT/Chennai - Hamburg/Rotterdam",
      transitTime: "18-25 days",
      frequency: "Daily"
    },
    {
      route: "India - UAE/Middle East",
      ports: "JNPT/Chennai - Dubai/Jebel Ali",
      transitTime: "7-12 days",
      frequency: "Daily"
    },
    {
      route: "India - Australia",
      ports: "JNPT/Chennai - Sydney/Melbourne",
      transitTime: "15-20 days",
      frequency: "Weekly"
    }
  ];

  const containerSizes = [
    {
      type: "20ft Standard Container",
      dimensions: "L: 5.9m × W: 2.35m × H: 2.39m",
      volume: "33.2 CBM",
      maxWeight: "28,230 kg",
      idealFor: "General cargo, small machinery"
    },
    {
      type: "40ft Standard Container",
      dimensions: "L: 12.03m × W: 2.35m × H: 2.39m",
      volume: "67.7 CBM",
      maxWeight: "30,480 kg",
      idealFor: "Large volume cargo, furniture"
    },
    {
      type: "40ft High Cube Container",
      dimensions: "L: 12.03m × W: 2.35m × H: 2.69m",
      volume: "76.3 CBM",
      maxWeight: "30,480 kg",
      idealFor: "Lightweight, high-volume cargo"
    },
    {
      type: "20ft Open Top Container",
      dimensions: "L: 5.9m × W: 2.35m × H: 2.39m",
      volume: "32.5 CBM",
      maxWeight: "28,230 kg",
      idealFor: "Oversized cargo, machinery"
    }
  ];

  const advantages = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Most economical for large volume shipments"
    },
    {
      icon: Scale,
      title: "High Capacity",
      description: "Handle large volumes and heavy cargo"
    },
    {
      icon: Container,
      title: "Container Security",
      description: "Secure containerized transport"
    },
    {
      icon: Ship,
      title: "Global Network",
      description: "Extensive port network worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sea Freight Services</h1>
            <p className="text-xl text-gray-600 mb-8">Cost-effective ocean freight solutions for your global cargo needs</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Quote</Button>
              <Button variant="outline" size="lg">Container Tracking</Button>
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Options</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-10 w-10 text-primary" />
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{service.transitTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Container Types:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.containerTypes.map((type, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Choose This Service</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Major Routes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Shipping Routes</h2>
            <div className="space-y-4">
              {routes.map((route, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h4 className="font-semibold">{route.route}</h4>
                        <p className="text-sm text-gray-600">{route.ports}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Transit Time</p>
                        <p className="font-semibold">{route.transitTime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Frequency</p>
                        <p className="font-semibold">{route.frequency}</p>
                      </div>
                      <div className="text-center">
                        <Button size="sm">Get Quote</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Container Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Container Specifications</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {containerSizes.map((container, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Container className="h-5 w-5 text-primary" />
                      {container.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Dimensions</p>
                          <p className="font-medium">{container.dimensions}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Volume</p>
                          <p className="font-medium">{container.volume}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Max Weight</p>
                          <p className="font-medium">{container.maxWeight}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Ideal For</p>
                          <p className="font-medium">{container.idealFor}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Sea Freight?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <advantage.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process */}
          <Card>
            <CardHeader>
              <CardTitle>Sea Freight Process</CardTitle>
              <CardDescription>Step-by-step sea freight shipping process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
                  <h4 className="font-semibold mb-1">Booking</h4>
                  <p className="text-xs text-gray-600">Space reservation and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
                  <h4 className="font-semibold mb-1">Cargo Receipt</h4>
                  <p className="text-xs text-gray-600">Container loading and customs export</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
                  <h4 className="font-semibold mb-1">Ocean Transit</h4>
                  <p className="text-xs text-gray-600">Vessel sailing and tracking</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
                  <h4 className="font-semibold mb-1">Arrival</h4>
                  <p className="text-xs text-gray-600">Port arrival and customs import</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">5</div>
                  <h4 className="font-semibold mb-1">Delivery</h4>
                  <p className="text-xs text-gray-600">Final delivery to consignee</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeaFreight;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Shield, Globe, Package, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AirFreight = () => {
  const services = [
    {
      title: "Express Air Freight",
      description: "Fastest delivery for urgent shipments",
      transitTime: "1-3 days",
      features: ["Door-to-door pickup", "Priority handling", "Real-time tracking", "Insurance included"],
      icon: Plane,
      price: "Premium"
    },
    {
      title: "Standard Air Freight",
      description: "Cost-effective air transport solution",
      transitTime: "3-7 days",
      features: ["Consolidated shipments", "Regular departure schedule", "Competitive rates", "Reliable service"],
      icon: Package,
      price: "Standard"
    },
    {
      title: "Charter Services",
      description: "Dedicated aircraft for large shipments",
      transitTime: "On-demand",
      features: ["Dedicated aircraft", "Flexible scheduling", "Large capacity", "Specialized handling"],
      icon: Globe,
      price: "Custom"
    }
  ];

  const destinations = [
    { region: "North America", countries: ["USA", "Canada", "Mexico"], transitTime: "2-5 days" },
    { region: "Europe", countries: ["UK", "Germany", "France", "Netherlands"], transitTime: "2-4 days" },
    { region: "Asia Pacific", countries: ["Singapore", "Australia", "Japan", "South Korea"], transitTime: "1-3 days" },
    { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"], transitTime: "1-2 days" },
    { region: "Africa", countries: ["South Africa", "Kenya", "Nigeria", "Egypt"], transitTime: "2-4 days" }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Speed",
      description: "Fastest mode of international transport"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enhanced security measures and tracking"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Extensive network covering 220+ destinations"
    },
    {
      icon: Package,
      title: "Reliability",
      description: "Consistent schedules and on-time delivery"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Air Freight Services</h1>
            <p className="text-xl text-gray-600 mb-8">Express air cargo delivery with priority handling and global coverage</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Quote</Button>
              <Button variant="outline" size="lg">Track Shipment</Button>
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Options</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <Badge variant={service.price === "Premium" ? "destructive" : "secondary"}>
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">Transit Time: {service.transitTime}</span>
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

          {/* Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Destinations</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {destinations.map((dest, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {dest.region}
                    </CardTitle>
                    <CardDescription>Transit Time: {dest.transitTime}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {dest.countries.map((country, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Air Freight?</h2>
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
              <CardTitle>Air Freight Process</CardTitle>
              <CardDescription>Simple steps to ship your cargo by air</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold mb-2">Book & Prepare</h4>
                  <p className="text-sm text-gray-600">Get quote, book service, prepare documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold mb-2">Pickup & Processing</h4>
                  <p className="text-sm text-gray-600">Cargo pickup, customs clearance, airport processing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold mb-2">Air Transport</h4>
                  <p className="text-sm text-gray-600">Flight departure, in-transit tracking, destination arrival</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold mb-2">Delivery</h4>
                  <p className="text-sm text-gray-600">Customs clearance, final mile delivery, confirmation</p>
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

export default AirFreight;
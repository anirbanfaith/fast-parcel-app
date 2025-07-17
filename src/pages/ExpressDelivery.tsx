import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Shield, Plane, Package, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExpressDelivery = () => {
  const services = [
    {
      title: "Same Day Express",
      description: "Ultra-fast delivery within 24 hours",
      deliveryTime: "4-8 hours",
      coverage: "Metro cities",
      features: ["Hand-carry service", "Real-time tracking", "Signature confirmation", "Insurance included"],
      icon: Zap,
      badge: "FASTEST"
    },
    {
      title: "Next Day Express",
      description: "Guaranteed next business day delivery",
      deliveryTime: "1 business day",
      coverage: "Major cities",
      features: ["Priority handling", "Morning delivery option", "SMS/Email updates", "Proof of delivery"],
      icon: Clock,
      badge: "POPULAR"
    },
    {
      title: "2-3 Day Express",
      description: "Fast international express service",
      deliveryTime: "2-3 business days",
      coverage: "Global",
      features: ["Worldwide coverage", "Customs clearance", "Door-to-door service", "Online tracking"],
      icon: Plane,
      badge: "GLOBAL"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Time-Definite Delivery",
      description: "Committed delivery times with money-back guarantee"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Chain of custody tracking and secure handling"
    },
    {
      icon: Package,
      title: "Real-time Tracking",
      description: "Track your package every step of the way"
    },
    {
      icon: Truck,
      title: "Door-to-Door Service",
      description: "Pickup and delivery at your preferred location"
    }
  ];

  const industries = [
    {
      name: "Healthcare & Pharmaceuticals",
      description: "Temperature-controlled express delivery for medical supplies",
      specialFeatures: ["Cold chain management", "Regulatory compliance", "Priority handling"]
    },
    {
      name: "Automotive",
      description: "Just-in-time delivery for automotive parts and components",
      specialFeatures: ["Spare parts delivery", "Production line support", "Emergency service"]
    },
    {
      name: "Technology",
      description: "Secure transport for electronics and high-value tech products",
      specialFeatures: ["Anti-static packaging", "Secure handling", "Insurance coverage"]
    },
    {
      name: "Fashion & Retail",
      description: "Fast delivery for fashion and retail goods",
      specialFeatures: ["Seasonal delivery", "Returns management", "COD services"]
    }
  ];

  const zones = [
    {
      zone: "Domestic Zone 1",
      areas: "Metro cities (Mumbai, Delhi, Bangalore, Chennai)",
      deliveryTime: "4-8 hours (Same day)",
      cutoffTime: "12:00 PM"
    },
    {
      zone: "Domestic Zone 2", 
      areas: "Tier 1 cities and major towns",
      deliveryTime: "Next business day",
      cutoffTime: "6:00 PM"
    },
    {
      zone: "International Zone A",
      areas: "USA, Europe, Australia, Singapore",
      deliveryTime: "2-3 business days",
      cutoffTime: "3:00 PM"
    },
    {
      zone: "International Zone B",
      areas: "Middle East, Africa, South America",
      deliveryTime: "3-5 business days",
      cutoffTime: "3:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Express Delivery Services</h1>
            <p className="text-xl text-gray-600 mb-8">When speed matters most - guaranteed express delivery solutions</p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Zap className="h-5 w-5 mr-2" />
                Book Express
              </Button>
              <Button variant="outline" size="lg">Track Express</Button>
            </div>
          </div>

          {/* Service Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Express Service Tiers</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge variant={service.badge === "FASTEST" ? "destructive" : "secondary"}>
                      {service.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon className="h-12 w-12 text-red-600" />
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                        <div className="text-lg font-bold text-red-600">{service.deliveryTime}</div>
                      </div>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Coverage: <span className="font-medium">{service.coverage}</span></p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Select This Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Express Service Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry-Specific Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Special Features:</h4>
                      {industry.specialFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Zones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Zones & Transit Times</h2>
            <div className="space-y-4">
              {zones.map((zone, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h4 className="font-semibold">{zone.zone}</h4>
                        <p className="text-sm text-gray-600">{zone.areas}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Delivery Time</p>
                        <p className="font-semibold text-red-600">{zone.deliveryTime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Cutoff Time</p>
                        <p className="font-semibold">{zone.cutoffTime}</p>
                      </div>
                      <div className="text-center">
                        <Button size="sm" variant="outline">Check Rate</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Express Guarantee */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Express Delivery Guarantee</CardTitle>
              <CardDescription className="text-red-700">
                Our commitment to time-definite delivery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">On-Time Guarantee</h4>
                  <p className="text-sm text-gray-600">Money-back guarantee if we miss our committed delivery time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Security Assurance</h4>
                  <p className="text-sm text-gray-600">Full insurance coverage and secure chain of custody</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Proof of Delivery</h4>
                  <p className="text-sm text-gray-600">Signature confirmation and delivery receipt for every shipment</p>
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

export default ExpressDelivery;
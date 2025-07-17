import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Clock, Globe, AlertCircle, CheckCircle2, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomsClearance = () => {
  const clearanceServices = [
    {
      title: "Import Clearance",
      description: "Smooth customs clearance for incoming shipments",
      timeframe: "2-4 business days",
      features: ["Document verification", "Duty calculation", "ICEGATE filing", "Physical examination support"],
      icon: Globe,
      complexity: "Standard"
    },
    {
      title: "Export Clearance",
      description: "Expert handling of export documentation",
      timeframe: "1-2 business days",
      features: ["Export declarations", "GST refund assistance", "LEO filing", "Pre-shipment inspection"],
      icon: FileText,
      complexity: "Fast-track"
    },
    {
      title: "Special Cargo Clearance",
      description: "Specialized clearance for restricted items",
      timeframe: "5-7 business days",
      features: ["License verification", "NOC procurement", "Specialized handling", "Regulatory compliance"],
      icon: Shield,
      complexity: "Complex"
    }
  ];

  const documents = [
    "Commercial Invoice",
    "Packing List",
    "Bill of Lading/AWB",
    "Import/Export License",
    "Certificate of Origin",
    "Insurance Documents",
    "GST Registration",
    "IEC Certificate"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Clearance",
      description: "Average 50% reduction in clearance time"
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "100% regulatory compliance guarantee"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customs experts for your shipments"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Minimize duties and charges through proper classification"
    }
  ];

  const countries = [
    { name: "USA", clearanceTime: "2-3 days", speciality: "FDA/FCC clearance" },
    { name: "Germany", clearanceTime: "1-2 days", speciality: "CE marking verification" },
    { name: "UAE", clearanceTime: "1 day", speciality: "Free zone clearance" },
    { name: "Singapore", clearanceTime: "4-6 hours", speciality: "TradeNet system" },
    { name: "UK", clearanceTime: "2-4 days", speciality: "Brexit compliance" },
    { name: "Australia", clearanceTime: "2-3 days", speciality: "Biosecurity clearance" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customs Clearance Services</h1>
            <p className="text-xl text-gray-600 mb-8">Professional customs clearance ensuring compliance and speed</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Clearance Quote</Button>
              <Button variant="outline" size="lg">Clearance Status</Button>
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Clearance Services</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {clearanceServices.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <Badge variant={service.complexity === "Fast-track" ? "default" : service.complexity === "Complex" ? "destructive" : "secondary"}>
                        {service.complexity}
                      </Badge>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold">Timeline: {service.timeframe}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Start Clearance</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Standard Documentation Checklist
                </CardTitle>
                <CardDescription>Essential documents for smooth customs clearance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Country-Specific Clearance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Country-Specific Clearance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{country.name}</CardTitle>
                    <CardDescription>Clearance Time: {country.clearanceTime}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{country.speciality}</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">View Requirements</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Clearance Service?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process */}
          <Card>
            <CardHeader>
              <CardTitle>Clearance Process</CardTitle>
              <CardDescription>Our systematic approach to customs clearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold mb-2">Document Review</h4>
                  <p className="text-xs text-gray-600">Verify all required documents</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold mb-2">Classification</h4>
                  <p className="text-xs text-gray-600">Accurate HS code determination</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold mb-2">Duty Calculation</h4>
                  <p className="text-xs text-gray-600">Calculate applicable duties and taxes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold mb-2">Filing & Payment</h4>
                  <p className="text-xs text-gray-600">Submit declarations and process payments</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">5</div>
                  <h4 className="font-semibold mb-2">Release</h4>
                  <p className="text-xs text-gray-600">Cargo release and delivery coordination</p>
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

export default CustomsClearance;
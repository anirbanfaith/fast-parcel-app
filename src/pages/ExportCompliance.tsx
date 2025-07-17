import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, AlertTriangle, Globe, BookOpen, Users, CheckCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExportCompliance = () => {
  const complianceAreas = [
    {
      title: "Export Controls",
      description: "Navigate complex export control regulations",
      features: ["Dual-use technology", "ECCN classification", "License requirements", "Sanctioned countries"],
      icon: Shield,
      level: "Critical"
    },
    {
      title: "Documentation Compliance",
      description: "Ensure all export documents meet requirements",
      features: ["Certificate of origin", "Export declarations", "Commercial invoices", "Shipping documents"],
      icon: FileCheck,
      level: "Essential"
    },
    {
      title: "Trade Sanctions",
      description: "Stay compliant with international sanctions",
      features: ["OFAC compliance", "EU sanctions", "UN sanctions", "Country-specific restrictions"],
      icon: AlertTriangle,
      level: "High Risk"
    }
  ];

  const regulations = [
    { country: "USA", regulation: "EAR (Export Administration Regulations)", complexity: "High" },
    { country: "EU", regulation: "EU Dual-Use Regulation", complexity: "Medium" },
    { country: "UK", regulation: "Export Control Order 2008", complexity: "Medium" },
    { country: "Australia", regulation: "Defence Trade Controls Act", complexity: "High" },
    { country: "Canada", regulation: "Export and Import Permits Act", complexity: "Medium" },
    { country: "Japan", regulation: "Foreign Exchange and Foreign Trade Act", complexity: "High" }
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Compliance Training",
      description: "Comprehensive export compliance training programs"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Access to experienced trade compliance specialists"
    },
    {
      icon: CheckCircle,
      title: "Compliance Audits",
      description: "Regular audits to ensure ongoing compliance"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay updated with changing regulations and sanctions"
    }
  ];

  const steps = [
    {
      title: "Classification",
      description: "Determine export classification codes for your products",
      details: ["HS codes", "ECCN numbers", "License requirements", "Restricted party screening"]
    },
    {
      title: "Documentation",
      description: "Prepare and verify all required export documentation",
      details: ["Export licenses", "Certificates", "Commercial documents", "Regulatory filings"]
    },
    {
      title: "Screening",
      description: "Screen all parties against restricted and denied lists",
      details: ["Entity List", "Denied Persons List", "Specially Designated Nationals", "Sanctioned entities"]
    },
    {
      title: "Monitoring",
      description: "Ongoing monitoring of regulatory changes and updates",
      details: ["Regulation updates", "Sanction changes", "Policy modifications", "Compliance alerts"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Export Compliance Services</h1>
            <p className="text-xl text-gray-600 mb-8">Navigate complex export regulations with confidence and expert guidance</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Compliance Assessment</Button>
              <Button variant="outline" size="lg">Expert Consultation</Button>
            </div>
          </div>

          {/* Compliance Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Compliance Areas</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {complianceAreas.map((area, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <area.icon className="h-12 w-12 text-primary" />
                      <Badge variant={area.level === "Critical" ? "destructive" : area.level === "High Risk" ? "destructive" : "default"}>
                        {area.level}
                      </Badge>
                    </div>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* International Regulations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">International Export Regulations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regulations.map((reg, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {reg.country}
                    </CardTitle>
                    <CardDescription>{reg.regulation}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant={reg.complexity === "High" ? "destructive" : "secondary"} className="text-xs">
                        {reg.complexity} Complexity
                      </Badge>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Compliance Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compliance Process */}
          <Card>
            <CardHeader>
              <CardTitle>Export Compliance Process</CardTitle>
              <CardDescription>Our systematic approach to export compliance management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    <div className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-gray-500">• {detail}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Export Compliance Help?</h2>
            <p className="text-gray-600 mb-6">Our compliance experts are ready to help you navigate complex export regulations.</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Schedule Consultation</Button>
              <Button variant="outline" size="lg">Download Compliance Guide</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExportCompliance;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, CheckCircle, AlertTriangle, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExportGuide = () => {
  const steps = [
    {
      title: "Business Registration",
      description: "Obtain IEC (Import Export Code) and register with DGFT",
      status: "required",
      details: [
        "Apply for IEC from DGFT portal",
        "Register with local export promotion council",
        "Obtain GST registration",
        "Open current account with authorized dealer bank"
      ]
    },
    {
      title: "Product Classification",
      description: "Classify your products under correct HS Code",
      status: "important",
      details: [
        "Identify 8-digit HS Code for your products",
        "Check export restrictions and prohibitions",
        "Verify quality standards required",
        "Understand country-specific requirements"
      ]
    },
    {
      title: "Documentation",
      description: "Prepare all required export documents",
      status: "critical",
      details: [
        "Commercial Invoice",
        "Packing List",
        "Bill of Lading/Airway Bill",
        "Certificate of Origin",
        "Export License (if required)"
      ]
    },
    {
      title: "Customs Clearance",
      description: "Complete customs formalities and cargo movement",
      status: "required",
      details: [
        "File Shipping Bill in ICEGATE",
        "Submit documents to customs",
        "Physical examination (if required)",
        "Obtain Let Export Order (LEO)"
      ]
    }
  ];

  const commonDocuments = [
    {
      name: "Commercial Invoice",
      description: "Details of goods being exported with value and terms",
      required: true
    },
    {
      name: "Packing List",
      description: "Detailed list of contents in each package",
      required: true
    },
    {
      name: "Bill of Lading",
      description: "Contract between shipper and carrier",
      required: true
    },
    {
      name: "Certificate of Origin",
      description: "Certifies the country where goods were manufactured",
      required: false
    },
    {
      name: "Export License",
      description: "Required for restricted goods",
      required: false
    },
    {
      name: "Inspection Certificate",
      description: "Quality certification for specific products",
      required: false
    }
  ];

  const keyRegulations = [
    {
      category: "FEMA Regulations",
      points: [
        "Foreign exchange compliance for export proceeds",
        "Realization and repatriation of export proceeds",
        "Bank Realization Certificate (BRC) requirements"
      ]
    },
    {
      category: "GST Compliance",
      points: [
        "Zero-rated supply for exports",
        "Input tax credit claims",
        "Letter of Undertaking (LUT) filing"
      ]
    },
    {
      category: "Quality Standards",
      points: [
        "BIS certification for specific products",
        "International quality certifications",
        "Country-specific compliance requirements"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Export Guide</h1>
            <p className="text-xl text-gray-600">Step-by-step guide to start exporting from India</p>
          </div>

          {/* Export Process Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Export Process Steps</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        {step.title}
                      </CardTitle>
                      <Badge variant={step.status === "critical" ? "destructive" : "secondary"}>
                        {step.status}
                      </Badge>
                    </div>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Required Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonDocuments.map((doc, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{doc.name}</h3>
                          {doc.required && (
                            <Badge variant="destructive" className="text-xs">Required</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Regulations */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Regulations & Compliance</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {keyRegulations.map((regulation, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      {regulation.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {regulation.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Export Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Export Benefits & Incentives
              </CardTitle>
              <CardDescription>
                Government schemes and benefits available for exporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Financial Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Merchandise Exports from India Scheme (MEIS)</li>
                    <li>• Export promotion capital goods (EPCG) scheme</li>
                    <li>• Advance authorization scheme</li>
                    <li>• Duty drawback scheme</li>
                    <li>• Interest equalization scheme</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Operational Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Zero-rated GST on exports</li>
                    <li>• SEZ benefits and exemptions</li>
                    <li>• Export oriented units (EOU) scheme</li>
                    <li>• Software technology parks (STP) benefits</li>
                    <li>• Electronic hardware technology parks (EHTP)</li>
                  </ul>
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

export default ExportGuide;
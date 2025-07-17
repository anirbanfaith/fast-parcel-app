import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomsDocumentation = () => {
  const documentCategories = [
    {
      title: "Commercial Documents",
      icon: FileText,
      documents: [
        {
          name: "Commercial Invoice",
          description: "Invoice containing all commercial details of the shipment",
          required: true,
          format: "PDF",
          template: true
        },
        {
          name: "Packing List",
          description: "Detailed list of contents in each package",
          required: true,
          format: "PDF",
          template: true
        },
        {
          name: "Proforma Invoice",
          description: "Preliminary invoice for customs valuation",
          required: false,
          format: "PDF",
          template: true
        }
      ]
    },
    {
      title: "Shipping Documents",
      icon: FileText,
      documents: [
        {
          name: "Bill of Lading",
          description: "Contract between shipper and carrier for sea freight",
          required: true,
          format: "PDF",
          template: false
        },
        {
          name: "Airway Bill",
          description: "Contract between shipper and carrier for air freight",
          required: true,
          format: "PDF",
          template: false
        },
        {
          name: "Delivery Order",
          description: "Authorization for cargo release at destination",
          required: false,
          format: "PDF",
          template: false
        }
      ]
    },
    {
      title: "Certification Documents",
      icon: FileText,
      documents: [
        {
          name: "Certificate of Origin",
          description: "Certifies the country where goods were manufactured",
          required: false,
          format: "PDF",
          template: true
        },
        {
          name: "Quality Certificate",
          description: "Certifies product quality and standards compliance",
          required: false,
          format: "PDF",
          template: false
        },
        {
          name: "Fumigation Certificate",
          description: "Required for wooden packaging materials",
          required: false,
          format: "PDF",
          template: false
        }
      ]
    }
  ];

  const customsProcess = [
    {
      step: 1,
      title: "Document Preparation",
      description: "Prepare all required documents with accurate information",
      status: "active",
      tasks: [
        "Collect commercial documents",
        "Verify product classification (HS Code)",
        "Ensure compliance with destination country requirements",
        "Review documentation checklist"
      ]
    },
    {
      step: 2,
      title: "Customs Declaration",
      description: "Submit customs declaration through ICEGATE portal",
      status: "pending",
      tasks: [
        "File Shipping Bill electronically",
        "Upload supporting documents",
        "Pay applicable customs duties",
        "Submit for customs examination"
      ]
    },
    {
      step: 3,
      title: "Examination & Clearance",
      description: "Customs examination and clearance process",
      status: "pending",
      tasks: [
        "Physical/Documentary examination",
        "Query resolution (if any)",
        "Duty payment confirmation",
        "Obtain Let Export Order (LEO)"
      ]
    },
    {
      step: 4,
      title: "Cargo Movement",
      description: "Move cargo to port/airport for export",
      status: "pending",
      tasks: [
        "Cargo delivery to gateway",
        "Port/Airport formalities",
        "Loading supervision",
        "Vessel/Flight departure"
      ]
    }
  ];

  const complianceChecklist = [
    {
      category: "Product Compliance",
      items: [
        "Correct HS Code classification",
        "Export restrictions check",
        "Quality standards compliance",
        "Labeling requirements"
      ]
    },
    {
      category: "Documentation Compliance",
      items: [
        "All mandatory documents prepared",
        "Document consistency check",
        "Signatures and stamps verification",
        "Translation requirements (if any)"
      ]
    },
    {
      category: "Regulatory Compliance",
      items: [
        "IEC registration validity",
        "GST compliance",
        "FEMA regulations adherence",
        "Export license (if required)"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customs Documentation</h1>
            <p className="text-xl text-gray-600">Complete guide to customs documentation and clearance process</p>
          </div>

          {/* Document Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Required Documents by Category</h2>
            <div className="space-y-8">
              {documentCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className="h-5 w-5" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm">{doc.name}</h4>
                            <div className="flex gap-1">
                              {doc.required && (
                                <Badge variant="destructive" className="text-xs">Required</Badge>
                              )}
                              {doc.template && (
                                <Badge variant="secondary" className="text-xs">Template</Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">{doc.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Format: {doc.format}</span>
                            {doc.template && (
                              <Button size="sm" variant="outline" className="text-xs h-7">
                                <Download className="h-3 w-3 mr-1" />
                                Download
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customs Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Customs Clearance Process</h2>
            <div className="space-y-6">
              {customsProcess.map((process, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{process.title}</h3>
                          {process.status === "active" && (
                            <Clock className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{process.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {process.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compliance Checklist */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Compliance Checklist</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {complianceChecklist.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Need Help with Documentation?</CardTitle>
              <CardDescription>
                Our experts can help you prepare accurate documentation for smooth customs clearance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Get Expert Consultation</Button>
                <Button variant="outline">Download Document Templates</Button>
                <Button variant="outline">Check HS Code</Button>
                <Button variant="outline">Compliance Assessment</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomsDocumentation;
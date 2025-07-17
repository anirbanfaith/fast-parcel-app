import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Clock, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GSTRefund = () => {
  const refundTypes = [
    {
      type: "Zero-rated Supply Refund",
      description: "Refund for exports under LUT without payment of GST",
      applicability: "Exports without payment of GST",
      timeline: "2-3 months",
      eligibility: [
        "Valid IEC registration",
        "LUT filing compliance",
        "Export documents submission",
        "Bank realization certificate"
      ]
    },
    {
      type: "Deemed Export Refund",
      description: "Refund for supplies to SEZ units and other deemed exports",
      applicability: "Supplies to SEZ, EOU, etc.",
      timeline: "2-4 months",
      eligibility: [
        "Valid deemed export status",
        "Proper documentation",
        "Payment through banking channel",
        "Compliance with conditions"
      ]
    },
    {
      type: "Input Tax Credit Refund",
      description: "Refund of accumulated ITC due to inverted tax structure",
      applicability: "Manufacturing with inverted duty",
      timeline: "2-3 months",
      eligibility: [
        "Inverted tax structure",
        "Accumulated ITC balance",
        "Regular filing compliance",
        "Proper input credit documentation"
      ]
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: "Application Filing",
      description: "File refund application on GST portal",
      documents: [
        "Export invoice and shipping bill",
        "Bank realization certificate",
        "Transport documents",
        "GST returns filed"
      ]
    },
    {
      step: 2,
      title: "Application Review",
      description: "GST department reviews application and documents",
      documents: [
        "Verification of export documents",
        "Cross-checking with ICEGATE data",
        "Input credit validation",
        "Compliance history check"
      ]
    },
    {
      step: 3,
      title: "Provisional Assessment",
      description: "Provisional refund amount determination",
      documents: [
        "Preliminary assessment order",
        "Refund amount calculation",
        "Conditions for final approval",
        "Timeline for additional documents"
      ]
    },
    {
      step: 4,
      title: "Final Approval & Payment",
      description: "Final approval and refund credit to bank account",
      documents: [
        "Final refund order",
        "Bank account credit",
        "Refund payment advice",
        "Closure of application"
      ]
    }
  ];

  const requiredDocuments = [
    {
      category: "Export Documents",
      documents: [
        "Commercial invoice",
        "Shipping bill with LEO",
        "Bill of lading/Airway bill",
        "Export order/contract"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Bank realization certificate",
        "Foreign inward remittance certificate",
        "Export proceeds realization",
        "Bank statements"
      ]
    },
    {
      category: "GST Documents",
      documents: [
        "GST returns (GSTR-1, GSTR-3B)",
        "Input tax credit details",
        "Tax invoices for inputs",
        "LUT acknowledgment"
      ]
    }
  ];

  const tips = [
    {
      title: "Maintain Proper Records",
      description: "Keep all export-related documents organized and easily accessible",
      icon: FileText
    },
    {
      title: "Regular Compliance",
      description: "File GST returns on time to avoid refund processing delays",
      icon: Clock
    },
    {
      title: "Monitor Application Status",
      description: "Regularly check application status on GST portal",
      icon: CheckCircle
    },
    {
      title: "Respond to Queries Promptly",
      description: "Address any department queries within specified timelines",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">GST Refund for Exports</h1>
            <p className="text-xl text-gray-600">Complete guide to claim GST refunds on export transactions</p>
          </div>

          {/* Refund Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Types of GST Refunds</h2>
            <div className="space-y-6">
              {refundTypes.map((refund, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{refund.type}</CardTitle>
                        <CardDescription>{refund.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{refund.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Applicability</h4>
                        <p className="text-gray-600">{refund.applicability}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Eligibility Criteria</h4>
                        <ul className="space-y-2">
                          {refund.eligibility.map((criteria, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Refund Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Refund Process Timeline</h2>
            <div className="space-y-6">
              {refundProcess.map((process, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                        <p className="text-gray-600 mb-4">{process.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {process.documents.map((doc, docIndex) => (
                            <div key={docIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-gray-600">{doc}</span>
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

          {/* Required Documents */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Required Documents</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {requiredDocuments.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tips for Success */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tips for Successful Refund Claims</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <tip.icon className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Refund Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                GST Refund Calculator
              </CardTitle>
              <CardDescription>
                Calculate your potential GST refund amount
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  Our GST refund calculator will help you estimate your refund amount
                </p>
                <div className="flex justify-center gap-4">
                  <Button>Request Refund Assistance</Button>
                  <Button variant="outline">Consult GST Expert</Button>
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

export default GSTRefund;
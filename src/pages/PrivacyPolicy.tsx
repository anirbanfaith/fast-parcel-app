import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information you provide when creating an account or booking services",
        "Shipping and billing information for processing your orders",
        "Communication records when you contact our customer service",
        "Device and usage information when you visit our website or use our app",
        "Location data for tracking and delivery purposes",
        "Payment information processed through secure payment gateways"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "Process and fulfill your shipping orders and requests",
        "Provide customer support and respond to your inquiries",
        "Send order confirmations, tracking updates, and service notifications",
        "Improve our services and develop new features",
        "Comply with legal and regulatory requirements",
        "Prevent fraud and ensure platform security"
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We do not sell your personal information to third parties",
        "Sharing with service partners (carriers, customs agents) for order fulfillment",
        "Disclosure to government authorities when required by law",
        "Sharing with payment processors for transaction processing",
        "Business transfers in case of merger or acquisition",
        "Aggregated, non-personal data for analytics and research"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures for our systems",
        "Secure payment processing through PCI DSS compliant providers",
        "Employee training on data protection best practices",
        "Incident response procedures for potential data breaches"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: March 1, 2024</p>
            <p className="text-gray-600 mt-4">
              Fast Parcel is committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Access and Correction</h4>
                    <p className="text-gray-600">You can access and update your personal information through your account settings or by contacting us.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Portability</h4>
                    <p className="text-gray-600">You can request a copy of your personal data in a structured, machine-readable format.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deletion</h4>
                    <p className="text-gray-600">You can request deletion of your personal information, subject to legal and operational requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Communications</h4>
                    <p className="text-gray-600">You can opt out of marketing emails at any time using the unsubscribe link or through your account settings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">Required for basic website functionality and security.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Preference Cookies</h4>
                      <p className="text-sm text-gray-600">Remember your settings and preferences for a better experience.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  As a global logistics company, we may transfer your personal information to countries outside your jurisdiction for processing and storage. We ensure appropriate safeguards are in place, including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Adequacy decisions by relevant data protection authorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Standard contractual clauses approved by the European Commission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Binding corporate rules for intra-group transfers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <p><strong>Data Protection Officer</strong></p>
                      <p>Fast Parcel International Pvt. Ltd.</p>
                      <p>Email: privacy@fastparcel.in</p>
                      <p>Phone: +91 98765 43210</p>
                      <p>Address: 123 Export House, Andheri East, Mumbai 400069, India</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    We will respond to your inquiry within 30 days of receipt.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website and sending you 
                  an email notification if you have an account with us. Your continued use of our services after such 
                  changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>By accessing and using Fast Parcel's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Fast Parcel provides international shipping, logistics, customs clearance, and related services. Our services include but are not limited to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>International shipping and freight forwarding</li>
                  <li>Customs clearance and documentation</li>
                  <li>Warehousing and fulfillment services</li>
                  <li>GST refund assistance</li>
                  <li>Export consultation and compliance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Obligations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide accurate and complete information about your shipments</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Properly package goods according to international shipping standards</li>
                  <li>Pay all fees and charges in accordance with our pricing schedule</li>
                  <li>Not ship prohibited or restricted items</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Prohibited Items</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>The following items are prohibited from shipment:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Hazardous materials and dangerous goods</li>
                  <li>Illegal substances and contraband</li>
                  <li>Perishable items (unless specifically approved)</li>
                  <li>Live animals and plants</li>
                  <li>Weapons and ammunition</li>
                  <li>Items violating intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Liability and Insurance</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Fast Parcel's liability is limited to the declared value of the shipment, subject to our terms and conditions. We strongly recommend purchasing additional insurance for high-value items. Our maximum liability per shipment is ₹1,00,000 unless additional insurance is purchased.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Payment for services must be made in advance unless credit terms have been specifically arranged. We accept various payment methods including bank transfers, credit cards, and digital payments. All prices are subject to applicable taxes and duties.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Force Majeure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Fast Parcel shall not be liable for any delay or failure to perform resulting from causes beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government regulations, or carrier delays.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Any disputes arising from these terms shall be resolved through arbitration in Mumbai, India, in accordance with the Arbitration and Conciliation Act, 2015. The language of arbitration shall be English.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Fast Parcel reserves the right to modify these terms at any time. Users will be notified of significant changes via email or through our website. Continued use of our services constitutes acceptance of the modified terms.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>For questions about these Terms of Service, please contact us at:</p>
                <div className="mt-4">
                  <p><strong>Email:</strong> legal@fastparcel.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> Fast Parcel Logistics Pvt. Ltd., Mumbai, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
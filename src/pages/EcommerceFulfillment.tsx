import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Truck, CheckCircle, Users, Globe, BarChart3, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcommerceFulfillment = () => {
  const fulfillmentServices = [
    {
      title: "Inventory Management",
      description: "Smart storage solutions for your e-commerce business",
      features: ["Real-time inventory tracking", "Automated reorder alerts", "Multi-location storage", "Climate-controlled facilities"],
      icon: Package,
      pricing: "₹15/unit/month"
    },
    {
      title: "Order Processing",
      description: "Seamless integration with major platforms",
      features: ["Amazon, Flipkart integration", "Real-time order sync", "Automated picking & packing", "Quality control checks"],
      icon: ShoppingCart,
      pricing: "₹25/order"
    },
    {
      title: "Last Mile Delivery",
      description: "Reliable delivery across India and globally",
      features: ["Same-day delivery options", "Express shipping", "International delivery", "Real-time tracking"],
      icon: Truck,
      pricing: "₹35/shipment"
    }
  ];

  const platforms = [
    { name: "Amazon", logo: "🛒", integrated: true },
    { name: "Flipkart", logo: "🛍️", integrated: true },
    { name: "Shopify", logo: "🏪", integrated: true },
    { name: "WooCommerce", logo: "🌐", integrated: true },
    { name: "Magento", logo: "🔧", integrated: true },
    { name: "BigCommerce", logo: "📊", integrated: true }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "99.5% Accuracy",
      description: "Precise order fulfillment with minimal errors"
    },
    {
      icon: Zap,
      title: "Same Day Processing",
      description: "Orders processed within 2-4 hours of receipt"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Fulfill orders worldwide with reliable shipping"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Detailed insights on inventory and sales performance"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Fulfillment Services</h1>
            <p className="text-xl text-gray-600 mb-8">Scale your online business with our complete fulfillment solutions</p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Fulfillment</Button>
              <Button variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fulfillment Services</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {fulfillmentServices.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <Badge variant="secondary">{service.pricing}</Badge>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform Integrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Integrations</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {platforms.map((platform, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl mb-2">{platform.logo}</div>
                  <h3 className="font-medium text-sm">{platform.name}</h3>
                  <Badge variant="default" className="mt-2 text-xs">Integrated</Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Fulfillment?</h2>
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

          {/* Process Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Fulfillment Process</CardTitle>
              <CardDescription>How we handle your e-commerce orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold mb-2">Order Received</h4>
                  <p className="text-sm text-gray-600">Automatic order sync from your store</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold mb-2">Pick & Pack</h4>
                  <p className="text-sm text-gray-600">Items picked and carefully packaged</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold mb-2">Quality Check</h4>
                  <p className="text-sm text-gray-600">Final inspection before dispatch</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold mb-2">Ship & Track</h4>
                  <p className="text-sm text-gray-600">Shipped with real-time tracking</p>
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

export default EcommerceFulfillment;
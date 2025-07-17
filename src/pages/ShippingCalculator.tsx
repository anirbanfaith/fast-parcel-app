import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Package, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingCalculator = () => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    shipmentType: "",
    service: ""
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateShipping = () => {
    // Simulate shipping calculation
    const baseRate = 500;
    const weightMultiplier = parseFloat(formData.weight) * 50;
    const serviceMultiplier = formData.service === "express" ? 2 : 1;
    
    const total = (baseRate + weightMultiplier) * serviceMultiplier;
    
    setResult({
      cost: total,
      currency: "INR",
      estimatedDays: formData.service === "express" ? "2-3" : "5-7",
      service: formData.service === "express" ? "Express Air" : "Standard Ground"
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Cost Calculator</h1>
            <p className="text-xl text-gray-600">Get instant quotes for your international shipments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculate Shipping Cost
                </CardTitle>
                <CardDescription>
                  Enter your shipment details to get an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="origin">Origin Country</Label>
                    <Select onValueChange={(value) => handleInputChange("origin", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select origin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="destination">Destination Country</Label>
                    <Select onValueChange={(value) => handleInputChange("destination", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="weight">Package Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="length">Length (cm)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="Length"
                      value={formData.length}
                      onChange={(e) => handleInputChange("length", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="Width"
                      value={formData.width}
                      onChange={(e) => handleInputChange("width", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Height"
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="shipmentType">Shipment Type</Label>
                  <Select onValueChange={(value) => handleInputChange("shipmentType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="documents">Documents</SelectItem>
                      <SelectItem value="packages">Packages</SelectItem>
                      <SelectItem value="freight">Freight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service">Service Type</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                      <SelectItem value="express">Express (2-3 days)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateShipping} 
                  className="w-full"
                  disabled={!formData.origin || !formData.destination || !formData.weight || !formData.service}
                >
                  Calculate Shipping Cost
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Shipping Quote
                  </CardTitle>
                  <CardDescription>
                    Estimated cost for your shipment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ₹{result.cost.toLocaleString()}
                      </div>
                      <div className="text-gray-600">Total Shipping Cost</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Delivery Time</p>
                          <p className="text-gray-600">{result.estimatedDays} business days</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Service Type</p>
                          <p className="text-gray-600">{result.service}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold">Quote includes:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Pickup from your location</li>
                        <li>• Customs clearance</li>
                        <li>• Insurance coverage</li>
                        <li>• Real-time tracking</li>
                        <li>• Door-to-door delivery</li>
                      </ul>
                    </div>

                    <Button className="w-full">
                      Book This Shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {!result && (
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Fast Parcel?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Competitive Rates</h4>
                        <p className="text-gray-600 text-sm">Best-in-class pricing for international shipping</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Expert Documentation</h4>
                        <p className="text-gray-600 text-sm">Complete support for customs and export paperwork</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Global Network</h4>
                        <p className="text-gray-600 text-sm">Reliable delivery to 220+ countries worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Real-time Tracking</h4>
                        <p className="text-gray-600 text-sm">Monitor your shipment every step of the way</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingCalculator;
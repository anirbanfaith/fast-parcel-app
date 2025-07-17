import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Package, Calculator, ChevronDown } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics & Textiles");
  const [showDropdown, setShowDropdown] = useState(false);
  
  const productCategories = [
    { name: "Electronics & Textiles", baseRate: 245, handling: 35, documentation: 25 },
    { name: "Automotive Parts", baseRate: 180, handling: 40, documentation: 30 },
    { name: "Pharmaceuticals", baseRate: 320, handling: 50, documentation: 45 },
    { name: "Food & Beverages", baseRate: 150, handling: 25, documentation: 20 },
    { name: "Machinery", baseRate: 280, handling: 60, documentation: 35 },
    { name: "Chemicals", baseRate: 195, handling: 45, documentation: 40 }
  ];
  
  const currentCategory = productCategories.find(cat => cat.name === selectedCategory) || productCategories[0];
  const totalCost = currentCategory.baseRate + currentCategory.handling + currentCategory.documentation;
  return (
    <section className="bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 text-sm text-primary">
              Trusted by 100+ businesses worldwide
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Take Your Business
                <span className="block text-primary">Global</span>
                <span className="block">Without the Hassle</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Global Shipping for Indian Brands, Made Simple.
Scale your SME or D2C brand internationally with end-to-end logistics and supply chain support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="shadow-lg bg-primary text-white hover:bg-primary/90">
                <Package className="mr-2 h-5 w-5" />
                Track Your Shipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-gray-700 border-gray-300 hover:bg-gray-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">220+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5-7</div>
                <div className="text-sm text-gray-500">Days Average</div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-xl ml-auto">
            <div className="bg-gray-50 rounded-xl p-4 shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900">Shipment Cost Calculator</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-700">AI Powered</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">From Country</label>
                    <div className="bg-white rounded px-2 py-1.5 text-xs border border-gray-200">India 🇮🇳</div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">To Country</label>
                    <div className="bg-white rounded px-2 py-1.5 text-xs border border-gray-200">USA 🇺🇸</div>
                  </div>
                </div>
                
                <div className="relative">
                  <label className="text-xs text-gray-500 block mb-1">Product Category</label>
                  <div 
                    className="bg-white rounded px-2 py-1.5 text-xs border border-gray-200 cursor-pointer flex items-center justify-between"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span>{selectedCategory}</span>
                    <ChevronDown className="h-3 w-3 text-gray-400" />
                  </div>
                  
                  {showDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-40 overflow-y-auto">
                      {productCategories.map((category) => (
                        <div
                          key={category.name}
                          className="px-2 py-1.5 text-xs hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setShowDropdown(false);
                          }}
                        >
                          {category.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Calculator className="h-3 w-3 text-blue-600 mr-1" />
                    <h4 className="font-semibold text-blue-800 text-sm">Cost Breakdown</h4>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Base Shipping Rate</span>
                      <span className="font-medium text-gray-900">${currentCategory.baseRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Handling & Processing</span>
                      <span className="font-medium text-gray-900">${currentCategory.handling}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Documentation Fees</span>
                      <span className="font-medium text-gray-900">${currentCategory.documentation}</span>
                    </div>
                    <div className="border-t border-blue-200 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-blue-800">Total Estimated Cost</span>
                        <span className="text-blue-900">${totalCost}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                  <h4 className="font-semibold mb-1 text-green-800 text-sm">✅ Included Services:</h4>
                  <div className="space-y-0.5 text-xs">
                    <div className="text-gray-700">• Door-to-door pickup & delivery</div>
                    <div className="text-gray-700">• Customs clearance assistance</div>
                    <div className="text-gray-700">• Real-time tracking & updates</div>
                    <div className="text-gray-700">• Insurance coverage included</div>
                  </div>
                </div>
                
                <Button size="sm" className="w-full mt-3 bg-primary text-white hover:bg-primary/90 text-xs">
                  Get Instant Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

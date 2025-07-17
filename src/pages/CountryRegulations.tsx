import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Search, AlertTriangle, CheckCircle, FileText, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CountryRegulations = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const countries = [
    {
      name: "United States",
      code: "US",
      restrictions: "High",
      documentation: "Extensive",
      keyRegulations: [
        "FDA approval for food and medical products",
        "FCC certification for electronics",
        "DOT regulations for hazardous materials",
        "CPSC compliance for consumer products"
      ],
      prohibitedItems: [
        "Certain food items without FDA approval",
        "Ivory and endangered species products",
        "Counterfeit goods",
        "Narcotics and controlled substances"
      ],
      dutyInfo: "Varies by product category and origin country",
      specialRequirements: [
        "USFDA registration for food facilities",
        "ISF filing for ocean shipments",
        "AES filing for exports over $2,500"
      ]
    },
    {
      name: "United Kingdom",
      code: "UK",
      restrictions: "Medium",
      documentation: "Standard",
      keyRegulations: [
        "CE marking for applicable products",
        "UKCA marking post-Brexit",
        "MHRA approval for medical devices",
        "VAT registration requirements"
      ],
      prohibitedItems: [
        "Endangered species products",
        "Weapons and ammunition",
        "Counterfeit goods",
        "Certain agricultural products"
      ],
      dutyInfo: "UK Global Tariff applies",
      specialRequirements: [
        "EORI number for customs clearance",
        "XI EORI for Northern Ireland",
        "Customs declarations required"
      ]
    },
    {
      name: "European Union",
      code: "EU",
      restrictions: "High",
      documentation: "Extensive",
      keyRegulations: [
        "CE marking mandatory for regulated products",
        "REACH compliance for chemicals",
        "RoHS compliance for electronics",
        "GDPR for data-related products"
      ],
      prohibitedItems: [
        "Products without CE marking",
        "Endangered species products",
        "Certain chemicals under REACH",
        "Non-compliant food products"
      ],
      dutyInfo: "Common External Tariff applies",
      specialRequirements: [
        "EORI number registration",
        "AEO certification beneficial",
        "Product-specific certifications"
      ]
    },
    {
      name: "Australia",
      code: "AU",
      restrictions: "High",
      documentation: "Extensive",
      keyRegulations: [
        "ACMA compliance for electronics",
        "TGA approval for therapeutic goods",
        "APVMA registration for pesticides",
        "Biosecurity import conditions"
      ],
      prohibitedItems: [
        "Biological materials without permits",
        "Certain food items",
        "Weapons and ammunition",
        "Asbestos-containing products"
      ],
      dutyInfo: "Australian Customs Tariff applies",
      specialRequirements: [
        "Integrated Cargo System (ICS) lodgment",
        "Biosecurity permits for organic materials",
        "RCM marking for electrical products"
      ]
    }
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  const regulationCategories = [
    {
      title: "Product Safety Standards",
      icon: Shield,
      description: "Safety certifications and compliance requirements"
    },
    {
      title: "Environmental Regulations",
      icon: Globe,
      description: "Environmental compliance and sustainability requirements"
    },
    {
      title: "Import Documentation",
      icon: FileText,
      description: "Required documents for customs clearance"
    },
    {
      title: "Prohibited & Restricted Items",
      icon: AlertTriangle,
      description: "Items that cannot be imported or require special permits"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Country-Specific Regulations</h1>
            <p className="text-xl text-gray-600">Navigate international trade regulations and compliance requirements</p>
          </div>

          {/* Search and Filter */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find Country Regulations
              </CardTitle>
              <CardDescription>
                Search for specific country regulations or browse by region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country for details" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Country Overview */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {filteredCountries.map((country, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedCountry(country.code)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      {country.name}
                    </CardTitle>
                    <Badge variant={
                      country.restrictions === "High" ? "destructive" : 
                      country.restrictions === "Medium" ? "default" : "secondary"
                    }>
                      {country.restrictions} Risk
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Documentation:</span>
                      <span className="text-sm font-medium">{country.documentation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duty Structure:</span>
                      <span className="text-sm font-medium">Variable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Country Information */}
          {selectedCountryData && (
            <div className="space-y-6 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    {selectedCountryData.name} - Detailed Regulations
                  </CardTitle>
                  <CardDescription>
                    Comprehensive regulatory information for exporting to {selectedCountryData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Key Regulations
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountryData.keyRegulations.map((regulation, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {regulation}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        Prohibited Items
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountryData.prohibitedItems.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Duty Information</h4>
                    <p className="text-sm text-gray-600">{selectedCountryData.dutyInfo}</p>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3">Special Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCountryData.specialRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FileText className="h-4 w-4 text-primary" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Regulation Categories */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Regulation Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regulationCategories.map((category, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Need Regulatory Assistance?</CardTitle>
              <CardDescription>
                Our experts can help you navigate complex international regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Compliance Check</h4>
                  <p className="text-sm text-gray-600 mb-3">Verify your product compliance</p>
                  <button className="text-primary text-sm font-medium">Start Check</button>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Expert Consultation</h4>
                  <p className="text-sm text-gray-600 mb-3">Get personalized guidance</p>
                  <button className="text-primary text-sm font-medium">Book Call</button>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Documentation Service</h4>
                  <p className="text-sm text-gray-600 mb-3">Professional document preparation</p>
                  <button className="text-primary text-sm font-medium">Learn More</button>
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

export default CountryRegulations;
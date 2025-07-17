import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Track Shipment", path: "/track-shipment" },
    { name: "Shipping Calculator", path: "/shipping-calculator" }, 
    { name: "Export Guide", path: "/export-guide" },
    { name: "Customs Documentation", path: "/customs-documentation" },
    { name: "GST Refund", path: "/gst-refund" },
    { name: "Country Regulations", path: "/country-regulations" }
  ];

  const services = [
    { name: "Air Freight", path: "/air-freight" },
    { name: "Sea Freight", path: "/sea-freight" }, 
    { name: "Express Delivery", path: "/express-delivery" },
    { name: "E-commerce Fulfillment", path: "/ecommerce-fulfillment" },
    { name: "Customs Clearance", path: "/customs-clearance" },
    { name: "Warehousing", path: "/warehousing" }
  ];

  const support = [
    "Help Center",
    "Export Consultation",
    "Documentation Support",
    "Compliance Guide",
    "Contact Expert"
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Fast Parcel" className="h-8" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              India's leading international shipping partner. We help businesses scale globally with 
              expert documentation support, customs clearance, and reliable logistics to 220+ countries.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700">support@fastparcel.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700">Bengaluru • Kolkata</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Support</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024-25 Fast Parcel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/export-compliance" className="text-gray-500 hover:text-primary transition-colors">Export Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

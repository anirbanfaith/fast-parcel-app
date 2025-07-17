import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, Plane, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrack = () => {
    // Simulate tracking result
    setTrackingResult({
      trackingNumber: trackingNumber,
      status: "In Transit",
      estimatedDelivery: "March 15, 2024",
      currentLocation: "Mumbai, India",
      events: [
        { date: "2024-03-10", time: "14:30", location: "Mumbai, India", status: "Package picked up" },
        { date: "2024-03-11", time: "09:15", location: "Mumbai Hub", status: "Sorted at facility" },
        { date: "2024-03-12", time: "18:45", location: "Delhi Hub", status: "In transit" },
        { date: "2024-03-13", time: "22:00", location: "International Gateway", status: "Departed India" }
      ]
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Shipment</h1>
            <p className="text-xl text-gray-600">Enter your tracking number to get real-time updates on your package</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Enter Tracking Details
              </CardTitle>
              <CardDescription>
                Track your shipment using AWB number, reference number, or order ID
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter tracking number (e.g., FP1234567890)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTrack} disabled={!trackingNumber}>
                  Track Package
                </Button>
              </div>
            </CardContent>
          </Card>

          {trackingResult && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Tracking Number: {trackingResult.trackingNumber}</CardTitle>
                      <CardDescription>Current location: {trackingResult.currentLocation}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {trackingResult.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Estimated Delivery</p>
                        <p className="text-gray-600">{trackingResult.estimatedDelivery}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Current Location</p>
                        <p className="text-gray-600">{trackingResult.currentLocation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipment History</CardTitle>
                  <CardDescription>Track the journey of your package</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.events.map((event, index) => (
                      <div key={index} className="flex items-start gap-4 border-l-2 border-primary/20 pl-4 pb-4">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 -ml-6 border-2 border-white"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium">{event.status}</p>
                            <span className="text-sm text-gray-500">{event.time}</span>
                          </div>
                          <p className="text-gray-600">{event.location}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Ground Shipping</h3>
                </div>
                <p className="text-gray-600">Track your domestic and international ground shipments</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Express Air</h3>
                </div>
                <p className="text-gray-600">Real-time tracking for express air freight deliveries</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">E-commerce</h3>
                </div>
                <p className="text-gray-600">Dedicated tracking for e-commerce shipments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackShipment;
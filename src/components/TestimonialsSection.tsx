import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCraft Electronics",
      location: "Mumbai",
      text: "Fast Parcel helped us expand to 15 countries. Their documentation support saved us weeks of paperwork delays.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      company: "Organic Textiles Ltd",
      location: "Bangalore",
      text: "GST refunds processed in record time. Their customs expertise is unmatched for Indian exporters.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Handicrafts India",
      location: "Delhi",
      text: "From documentation to delivery - everything handled seamlessly. Our international sales tripled this year.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Indian Exporters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses across India are scaling globally with our expert logistics support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
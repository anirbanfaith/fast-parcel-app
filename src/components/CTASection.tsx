import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calculator, Shield } from "lucide-react";

const CTASection = () => {
  const features = [
    {
      icon: FileText,
      title: "Export Documentation",
      description: "AI-powered document generation and compliance checking"
    },
    {
      icon: Calculator,
      title: "Duty Calculator",
      description: "Accurate customs duty and tax calculations for 220+ countries"
    },
    {
      icon: Shield,
      title: "Compliance Guarantee",
      description: "100% compliance with international trade regulations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-brand-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Scale Globally?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 89+ Indian businesses already shipping worldwide with zero hassles. 
              Get expert documentation support and guaranteed compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="secondary" size="lg" className="shadow-lg">
                Start Free Export Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Schedule Expert Call
              </Button>
            </div>

            <div className="text-sm text-white/80">
              ⚡ Setup in minutes • 🚫 No setup fees • 📞 24/7 India support
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 rounded-lg p-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

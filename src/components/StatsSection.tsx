import { Globe, Users, CheckCircle, Headphones } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "SMEs Empowered",
      description: "Indian businesses trust us"
    },
    {
      icon: Globe,
      number: "220+",
      label: "Countries Served",
      description: "Global shipping network"
    },
    {
      icon: CheckCircle,
      number: "99.9%",
      label: "Delivery Success Rate",
      description: "Reliable performance"
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Customer Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that rely on Fast Parcel for their global shipping needs
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
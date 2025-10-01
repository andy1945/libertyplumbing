import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Hammer, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import electricalService from "@/assets/electrical-service.jpg";
import maintenanceService from "@/assets/maintenance-service.jpg";

export const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "We offer comprehensive plumbing solutions to keep your water systems running smoothly",
      items: [
        "Leak detection and repair",
        "Drain cleaning and unclogging",
        "Water heater installation & repairs",
      ],
      image: null,
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Keep your property safe and efficient with our expert electrical services:",
      items: [
        "Electrical wiring and rewiring",
        "Circuit breaker repairs and upgrades",
        "Outlet and switch installations",
      ],
      image: electricalService,
    },
    {
      icon: Hammer,
      title: "General Maintenances",
      description: "Our team provides a range of maintenance services to enhance and protect your property:",
      items: [
        "Handyman services",
        "Appliance installation",
        "Preventive maintenance",
      ],
      image: maintenanceService,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="h-1 w-12 bg-primary mb-4 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Philadelphia's <span className="text-primary">24/7</span> Plumbing & Electrical Experts
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Your trusted provider for <strong>Plumbing, Electrical, and General Maintenance services</strong> in Philadelphia, PA.{" "}
            <Link to="/contact" className="text-primary hover:underline font-semibold">
              Get a free Quote now!
            </Link>
          </p>
          <p className="text-muted-foreground mt-2">
            With years of experience and a passion for excellence, we are here to meet all your residential and commercial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <service.icon className="h-10 w-10 text-primary" />
                  <Link 
                    to="/services" 
                    className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </Link>
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

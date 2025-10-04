import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Banner from "@/components/Banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Hammer, Droplets, Lightbulb, Thermometer, Plug, Wrench as PipeIcon, Cog } from "lucide-react";

const ServicesPage = () => {
  const plumbingServices = [
    { icon: Droplets, name: "Leak Detection & Repair", description: "Advanced technology to find and fix leaks quickly" },
    { icon: Droplets, name: "Drain Cleaning", description: "Professional unclogging and drain maintenance" },
    { icon: Thermometer, name: "Water Heater Services", description: "Installation, repair, and maintenance" },
    { icon: Wrench, name: "Pipe Repair & Replacement", description: "Expert pipe work for all systems" },
    { icon: Droplets, name: "Sewer Line Services", description: "Inspection, cleaning, and repairs" },
    { icon: Wrench, name: "Fixture Installation", description: "Faucets, sinks, toilets, and more" },
  ];

  const electricalServices = [
    { icon: Zap, name: "Electrical Wiring", description: "New installations and rewiring services" },
    { icon: Lightbulb, name: "Lighting Installation", description: "Indoor and outdoor lighting solutions" },
    { icon: Plug, name: "Outlet & Switch Services", description: "Installation and repair of outlets and switches" },
    { icon: Zap, name: "Circuit Breaker Services", description: "Repairs, upgrades, and panel replacement" },
    { icon: Plug, name: "Electrical Inspections", description: "Safety inspections and code compliance" },
    { icon: Lightbulb, name: "Emergency Electrical", description: "24/7 emergency electrical services" },
  ];

  const maintenanceServices = [
    { icon: Hammer, name: "Handyman Services", description: "General repairs and maintenance" },
    { icon: Cog, name: "Appliance Installation", description: "Professional installation of home appliances" },
    { icon: Hammer, name: "Preventive Maintenance", description: "Regular maintenance to prevent issues" },
    { icon: Cog, name: "Commercial Services", description: "Maintenance for commercial properties" },
    { icon: Hammer, name: "Home Improvements", description: "Small renovations and upgrades" },
    { icon: Cog, name: "Emergency Repairs", description: "Fast response to urgent maintenance needs" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Banner 
          title="Our Services"
          subtitle="Comprehensive plumbing, electrical, and maintenance solutions for your home or business"
        />

        {/* Plumbing Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Plumbing Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From minor repairs to major installations, our licensed plumbers handle all your plumbing needs with expertise and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {plumbingServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Electrical Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our certified electricians ensure your electrical systems are safe, efficient, and up to code.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {electricalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">General Maintenance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Keep your property in top condition with our comprehensive maintenance services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {maintenanceServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
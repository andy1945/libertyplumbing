import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "All our technicians are fully licensed and certified professionals.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Over 15 years of combined experience in plumbing and electrical services.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Emergency services available around the clock, every day of the year.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties and guarantees.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Liberty Plumbing</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Your trusted partner for all plumbing and electrical needs in Philadelphia, PA
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, Liberty Plumbing and Electricals has been serving the Philadelphia community with dedication and excellence. What started as a small family-owned business has grown into one of the most trusted names in plumbing and electrical services.
                </p>
                <p>
                  Our commitment to quality workmanship, transparent pricing, and exceptional customer service has earned us the trust of thousands of residential and commercial clients throughout Philadelphia and surrounding areas.
                </p>
                <p>
                  We believe in doing the job right the first time, using only the highest quality materials and the latest techniques. Our team of licensed professionals undergoes continuous training to stay updated with the latest industry standards and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide reliable, high-quality plumbing and electrical services that exceed customer expectations while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and respected plumbing and electrical service provider in Philadelphia, known for our unwavering commitment to quality, customer satisfaction, and community service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

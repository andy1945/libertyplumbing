import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, TrendingUp, Award, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for advancement and professional development programs.",
    },
    {
      icon: Award,
      title: "Competitive Pay",
      description: "Industry-leading compensation packages with performance bonuses.",
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Ongoing training and certification support to enhance your skills.",
    },
  ];

  const openPositions = [
    {
      title: "Licensed Plumber",
      type: "Full-time",
      description: "Experienced plumber needed for residential and commercial projects. Must have valid state license and 3+ years experience.",
    },
    {
      title: "Master Electrician",
      type: "Full-time",
      description: "Seeking master electrician with strong troubleshooting skills. Commercial experience preferred. Valid license required.",
    },
    {
      title: "Apprentice Plumber",
      type: "Full-time",
      description: "Entry-level position for motivated individuals looking to start a career in plumbing. Training provided.",
    },
    {
      title: "Service Technician",
      type: "Full-time",
      description: "General maintenance technician for residential service calls. Experience with plumbing, electrical, or HVAC preferred.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Build your career with Philadelphia's leading plumbing and electrical service provider
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Why Work With Liberty?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're more than just a company—we're a family. We invest in our team members' success and wellbeing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for you
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <Link to="/contact">
                        <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">
                  Send your resume and cover letter through our contact page or email
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our team to discuss your experience and career goals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Start Your Career</h3>
                <p className="text-sm text-muted-foreground">
                  Begin your journey with comprehensive onboarding and training
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

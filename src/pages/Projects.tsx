import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Banner from "@/components/Banner";
import { Briefcase, Building, Calendar, Wrench } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Building,
      title: "Commercial Plumbing Installation",
      description: "Complete plumbing system installation for a new downtown office building. The project included restrooms, kitchens, and a rooftop drainage system.",
      date: "June 2023",
      category: "Commercial",
    },
    {
      icon: Wrench,
      title: "Residential Repiping Project",
      description: "Full copper repiping for a historic home in the city center, ensuring safe and reliable water supply for years to come.",
      date: "March 2023",
      category: "Residential",
    },
    {
      icon: Briefcase,
      title: "Emergency Sewer Line Repair",
      description: "Emergency repair of a collapsed sewer line for a multi-family residential complex, completed within 24 hours to minimize disruption.",
      date: "January 2023",
      category: "Emergency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Banner
          title="Our Projects"
          subtitle="A showcase of our quality workmanship and diverse capabilities"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Recent Projects
              </h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-3 gap-8 items-center"
                  >
                    <div className="md:col-span-1">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={`https://source.unsplash.com/400x300/?plumbing,${index}`}
                          alt={project.title}
                          className="absolute h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.date}</span>
                        <span className="mx-2">|</span>
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{project.category}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
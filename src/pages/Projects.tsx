import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import electrical1 from "@/assets/projects/plumbing-1.png";
import bathroomlight from "@/assets/projects/bathroomlight.png";

import electrical2Before from "@/assets/projects/plumbing-1.png";
import plumbing3Before from "@/assets/projects/bathroomtube.png";
import electrical3Before from "@/assets/projects/plumbing-1.png";
import washanddryer from "@/assets/projects/washanddryer.png";
import plumbing1 from "@/assets/projects/plumbing-1.png";
import plumbing2 from "@/assets/projects/plumbing-1.png";
import electrical2 from "@/assets/projects/plumbing-1.png";
import plumbing3 from "@/assets/projects/plumbing-1.png";
import electrical3 from "@/assets/projects/plumbing-1.png";
import { Droplet, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import bannerBg from "@/assets/bunner.jpg";
import basementwalloutlet from "@/assets/projects/basementwalloutlet.png";
import ceilingfan from "@/assets/projects/ceilingfan.png";
import totalreirebefore from "@/assets/projects/totalreirebefore.png";
import totalreireafter from "@/assets/projects/totalreireafter.png";
import servicebefore from "@/assets/projects/servicebefore.png";
import serviceafter from "@/assets/projects/serviceafter.png";
import servicemeter from "@/assets/projects/servicemeter.png";
import firedetector from "@/assets/projects/firedetector.png";
import kitchenupgrade from "@/assets/projects/kitchenupgrade.png";
import kitchenromodel from "@/assets/projects/kitchenromodel.png";
import kitcheninstallation from "@/assets/projects/kitcheninstallation.png";
import kitchentileafter from "@/assets/projects/kitchentileafter.png";
import bathroomtubbefore from "@/assets/projects/bathroomtubbefore.png";
import bathroomtubafter from "@/assets/projects/bathroomtubafter.png";

type ProjectCategory = "all" | "plumbing" | "electrical";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "plumbing" | "electrical";
  image: string;
  beforeImage?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bathroom Light Installation",
    description:
      "We installed a new modern bathroom light fixture that brightens the space, enhances safety, and adds a clean, elegant look. The new setup ensures proper illumination and energy efficiency, perfect for everyday comfort and functionality.",
    category: "electrical",
    image: electrical1,
  },
  {
    id: 1,
    title: "Bathroom Mirror Lighting",
    description:
      "Installed a stylish LED mirror light, adding both function and beauty to the bathroom. The installation provides clear, glare-free lighting ideal for grooming and makeup application while elevating the room’s ambiance.",
    category: "electrical",
    image: bathroomlight,
  },
  {
    id: 3,
    title: "Washer & Dryer GFCI Installation",
    description:
      "Upgraded laundry room safety with GFCI-protected outlets for washer and dryer units. This ensures protection against electrical shocks and compliance with NEC safety standards in moisture-prone areas.",
    category: "electrical",
    image: washanddryer,
  },
  {
    id: 4,
    title: "Basement Wall Outlets",
    description:
      "Installed multiple wall outlets in the basement to support general-purpose use and provide safe, code-compliant power distribution for appliances and tools.",
    category: "electrical",
    image: basementwalloutlet,
  },
  {
    id: 5,
    title: "Ceiling Fan Installation",
    description:
      "Installed a ceiling fan with integrated lighting to improve air circulation and comfort while maintaining energy efficiency and style in the living area.",
    category: "electrical",
    image: ceilingfan,
  },
  {
    id: 6,
    title: "200-Amp Total Rewire & Panel Upgrade",
    description:
      "This project involved a full electrical rewire of an older home, replacing outdated circuits with new 12-gauge wiring, grounded outlets, and a 32-space 200-amp main panel. The upgrade significantly improved safety, reliability, and capacity for modern appliances.",
    category: "electrical",
    image: totalreireafter,
    beforeImage: totalreirebefore,
  },
  {
    id: 7,
    title: "Service Meter Replacement",
    description:
      "Replaced an outdated service meter (see bottom of the photo) with a new, high-capacity model, including proper grounding and bonding. The new meter ensures accurate power measurement, reduced fire risk, and full compliance with utility and NEC regulations.",
    category: "electrical",
    image: serviceafter,
    beforeImage: servicebefore,
  },
  {
    id: 8,
    title: "Service Meter and Grounding Installation",
    description:
      "We installed a new service meter along with a proper grounding system to ensure accurate energy monitoring and enhanced electrical safety. The upgrade provides stable power delivery, reduces the risk of electrical faults, and meets modern NEC compliance standards for residential service connections.",
    category: "electrical",
    image: servicemeter,
  },
  {
    id: 9,
    title: "Fire Detector & Basement Outlets Installation",
    description:
      "Installed interconnected smoke detectors and ceiling-mounted outlets in the basement to enhance fire safety and provide convenient power access for home equipment.",
    category: "electrical",
    image: firedetector,
  },
  {
    id: 10,
    title: "Kitchen Upgrade",
    description:
      "Modernized a residential kitchen with new sink fixtures, improved plumbing connections, and updated supply lines, combining function and style to create a reliable and sleek workspace.",
    category: "plumbing",
    image: kitchenupgrade,
  },
  {
    id: 11,
    title: "Kitchen Remodel",
    description:
      "Complete kitchen remodel including replacement of fixtures, installation of new plumbing lines, and finishing touches for a clean, modern appearance that improves water efficiency and usability.",
    category: "plumbing",
    image: kitchenromodel,
  },
  {
    id: 12,
    title: "Kitchen Tile Installation",
    description:
      "Installed elegant, water-resistant tiles in the kitchen area to protect surfaces from moisture and add a durable, easy-to-clean finish that complements the home’s aesthetic.",
    category: "plumbing",
    image: kitchentileafter,
    beforeImage: kitcheninstallation,
  },
  {
    id: 13,
    title: "Bathroom Tub & Tile Installation",
    description:
      "Replaced the old bathtub and wall tiles with new, high-quality materials. The new setup enhances comfort, waterproofing, and design, creating a fresh and relaxing bathroom environment.",
    category: "plumbing",
    image: bathroomtubafter,
    beforeImage: bathroomtubbefore,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section
          className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Projects
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              From concept to completion: explore our portfolio of
              transformative plumbing and electrical projects
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => setFilter("plumbing")}
                variant={filter === "plumbing" ? "default" : "outline"}
                className="transition-all"
              >
                <Droplet className="mr-2 h-4 w-4" />
                Plumbing
              </Button>
              <Button
                onClick={() => setFilter("electrical")}
                variant={filter === "electrical" ? "default" : "outline"}
                className="transition-all"
              >
                <Zap className="mr-2 h-4 w-4" />
                Electrical
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    {project.beforeImage ? (
                      <Carousel className="w-full h-full">
                        <CarouselContent>
                          <CarouselItem>
                            <div className="relative h-64">
                              <img
                                src={project.image}
                                alt={`${project.title} - After`}
                                className="w-full h-full object-cover cursor-pointer bg-muted/50"
                                onClick={() => setSelectedImage(project.image)}
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                                After
                              </div>
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative h-64">
                              <img
                                src={project.beforeImage}
                                alt={`${project.title} - Before`}
                                className="w-full h-full object-cover cursor-pointer bg-muted/50"
                                onClick={() =>
                                  setSelectedImage(project.beforeImage!)
                                }
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                Before
                              </div>
                            </div>
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer bg-muted/50"
                          onClick={() => setSelectedImage(project.image)}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </>
                    )}
                    <Badge
                      className={`absolute top-4 right-4 ${
                        project.category === "plumbing"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {project.category === "plumbing" ? (
                        <>
                          <Droplet className="mr-1 h-3 w-3" /> Plumbing
                        </>
                      ) : (
                        <>
                          <Zap className="mr-1 h-3 w-3" /> Electrical
                        </>
                      )}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Full Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl w-full p-0 border-0">
          <img
            src={selectedImage || ""}
            alt="Full size view"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;

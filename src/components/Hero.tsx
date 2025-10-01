import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroPlumbing from "@/assets/hero-plumbing.jpg";

const slides = [
  {
    title: "We Provide Quality Plumbing Services",
    description: "We are a company providing a wide range of maintenance and many other services needed to make your life comfortable and happy. Our high-class experts fix any malfunction.",
    buttonText: "Contact us",
  },
  {
    title: "Electrical Services & maintenance",
    description: "We provide you with the system that helps to sustain you with electricity in all the seasons throughout the year.",
    buttonText: "Request for a free quote!",
  },
  {
    title: "Expert Advice from our Experienced Staff",
    description: "Our company offers a complete range of aftercare products and services and we are set up to deliver a service of high quality for high volume.",
    buttonText: "Request for a free quote!",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPlumbing})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            <div className="border-l-4 border-accent pl-6 bg-background/95 p-8 rounded-r-lg shadow-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                {slides[currentSlide].description}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {slides[currentSlide].buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

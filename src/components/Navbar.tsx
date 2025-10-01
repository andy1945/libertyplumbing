import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact us", path: "/contact", badge: "Request!" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm md:text-base">
        24/7 Emergency Plumbing & Electrical – Call +1 (267) 688-8612 Anytime!
      </div>

      {/* Main Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Contact Info */}
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logoIcon} alt="Liberty Plumbing" className="h-16 w-16" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-primary">LIBERTY</h1>
                <p className="text-xs text-muted-foreground">PLUMBING AND ELECTRICALS</p>
              </div>
            </Link>

            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Phone className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Call Us: +1 (267) 688-8612</p>
                  <p className="text-xs text-muted-foreground">Monday–Saturday, 8:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Mail us for help:</p>
                  <p className="text-xs text-muted-foreground">info@libertyplumbing.us</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Liberty Plumbing and Electricals,</p>
                  <p className="text-xs text-muted-foreground">Philadelphia, PA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t">
            <div className="flex items-center justify-between py-4">
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm font-medium hover:text-primary transition-colors relative"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="absolute -top-2 -right-12 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/contact" className="hidden md:block">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request for a free Quote! →
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 border-t">
                <ul className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm font-medium hover:text-primary transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                        Request for a free Quote!
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

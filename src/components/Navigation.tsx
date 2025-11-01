import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const facialServices = [
    { name: "Rolora Facial Glow™", path: "/services/facial-glow", description: "Your signature glow" },
    { name: "Rolora Sculpt", path: "/services/sculpt", description: "Get snatched" },
    { name: "Timeless Lift", path: "/services/timeless-lift", description: "Lift. Firm. Defy time." },
    { name: "Rolora Reset", path: "/services/reset", description: "Peel. Reveal. Reset." },
    { name: "Express Sculpt", path: "/services/express-sculpt", description: "Glow + go" },
  ];

  const additionalServices = [
    { name: "Enhancements", path: "/services/enhancements", description: "Perfect your glow" },
    { name: "Rolora Flow™", path: "/services/body-rolling", description: "Body rolling therapy" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            Rolora
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
              Locations
            </Link>
            
            <button 
              className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => scrollToSection('services')}
            >
              Treatments
            </button>
            
            <Link 
              to="/gallery"
              className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              Results
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
              Log In
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="uppercase tracking-wide font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              <Link to="/" className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <Link 
                to="/special-offer"
                className="block py-2 text-sm text-accent font-semibold hover:text-accent/80 transition-smooth flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Special Offer
                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">New</span>
              </Link>
              
              <Link 
                to="/about"
                className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-2">
                  Facial Services
                </p>
                {facialServices.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block pl-3 py-1 text-xs text-foreground hover:text-accent transition-smooth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-2">
                  Additional Services
                </p>
                {additionalServices.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block pl-3 py-1 text-xs text-foreground hover:text-accent transition-smooth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link 
                to="/gallery"
                className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-3 pb-2">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full"
                  size="sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

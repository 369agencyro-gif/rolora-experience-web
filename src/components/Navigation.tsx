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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-semibold">
            Rolora
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-smooth">
              Home
            </Link>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-smooth"
            >
              About
            </button>

            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-smooth">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-card rounded-2xl shadow-elegant border border-border p-8 animate-fade-in">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Facial Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Facial Rituals
                      </h3>
                      <div className="space-y-3">
                        {facialServices.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.path}
                            className="block group"
                          >
                            <div className="flex items-start gap-2">
                              <div className="mt-1 w-4 h-4 border border-accent/30 rounded flex-shrink-0 group-hover:bg-accent/10 transition-smooth" />
                              <div>
                                <p className="font-medium text-foreground group-hover:text-accent transition-smooth">
                                  {service.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Premium Experiences
                      </h3>
                      <div className="space-y-3">
                        {additionalServices.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.path}
                            className="block group"
                          >
                            <div className="flex items-start gap-2">
                              <div className="mt-1 w-4 h-4 border border-accent/30 rounded flex-shrink-0 group-hover:bg-accent/10 transition-smooth" />
                              <div>
                                <p className="font-medium text-foreground group-hover:text-accent transition-smooth">
                                  {service.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-primary text-primary-foreground rounded-xl p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-2 leading-tight">
                          Experience Luxury. Embrace Serenity.
                        </h3>
                        <p className="text-sm opacity-90 mb-4">
                          Begin your transformation journey with our signature treatments.
                        </p>
                      </div>
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => scrollToSection('contact')}
                      >
                        Book Now →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Gallery
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Contact
            </button>
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection('contact')}>
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
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="space-y-4">
              <Link to="/" className="block py-2 text-foreground hover:text-accent transition-smooth">
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
              >
                About
              </button>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Facial Services
                </p>
                {facialServices.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block pl-4 py-2 text-sm text-foreground hover:text-accent transition-smooth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Additional Services
                </p>
                {additionalServices.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block pl-4 py-2 text-sm text-foreground hover:text-accent transition-smooth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
              >
                Contact
              </button>
              
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full mt-4"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

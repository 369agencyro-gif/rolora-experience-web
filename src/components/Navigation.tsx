import { useState } from "react";
import { Link } from "react-router-dom";
import BookingButton from "@/components/BookingButton";
import { Menu, X, ChevronDown } from "lucide-react";
import roloraLogo from "@/assets/rolora-logo.png";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const offers = [{
    name: "First Glow · $99",
    path: "/special-offer",
    description: "New client exclusive facial"
  }, {
    name: "Glow + Flow Duo · $139",
    path: "/glow-flow-offer",
    description: "Facial + body rolling combo"
  }];
  const facialServices = [{
    name: "Rolora Facial Glow™",
    path: "/services/facial-glow",
    description: "Your signature glow"
  }, {
    name: "Rolora Sculpt",
    path: "/services/sculpt",
    description: "Get snatched"
  }, {
    name: "Timeless Lift",
    path: "/services/timeless-lift",
    description: "Lift. Firm. Defy time."
  }, {
    name: "Rolora Reset",
    path: "/services/reset",
    description: "Peel. Reveal. Reset."
  }, {
    name: "Express Sculpt",
    path: "/services/express-sculpt",
    description: "Glow + go"
  }, {
    name: "Enhancements",
    path: "/services/enhancements",
    description: "Perfect your glow"
  }];
  const bodyRollers = [{
    name: "Rolora Flow™",
    path: "/services/body-rolling",
    description: "Body rolling therapy"
  }];
  const headSpa = [{
    name: "Rolora Head Spa",
    path: "/services/head-spa",
    description: "Scalp & relaxation ritual"
  }, {
    name: "Sculpt + Scalp Reset™",
    path: "/services/sculpt-scalp-reset",
    description: "Lift. Stimulate. Reset."
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={roloraLogo} alt="Rolora" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Offers Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm uppercase tracking-wide relative">
                    Offers
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {offers.map(offer => <li key={offer.name}>
                          <NavigationMenuLink asChild>
                            <Link to={offer.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{offer.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {offer.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Treatments Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm uppercase tracking-wide">
                    Treatments
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground px-3">Facial Services</p>
                        {facialServices.map(service => <li key={service.name}>
                            <NavigationMenuLink asChild>
                              <Link to={service.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground px-3">Body Rollers</p>
                        {bodyRollers.map(service => <li key={service.name}>
                            <NavigationMenuLink asChild>
                              <Link to={service.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground px-3">Head Spa</p>
                        {headSpa.map(service => <li key={service.name}>
                            <NavigationMenuLink asChild>
                              <Link to={service.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>)}
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/gallery" className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity">
              Results
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            
            <BookingButton className="uppercase tracking-wide font-semibold">
              Book Now
            </BookingButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden pb-4 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-1">
              <Link to="/" className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <Link to="/about" className="block py-1.5 text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Offers Section */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  Offers
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                </p>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {offers.map((offer, idx) => <Link key={idx} to={offer.path} className="block pl-2 py-1 text-xs text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                      {offer.name}
                    </Link>)}
                </div>
              </div>
              
              {/* Facial Services Section */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Facial Services
                </p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 mt-1">
                  {facialServices.map((service, idx) => <Link key={idx} to={service.path} className="block pl-2 py-0.5 text-xs text-foreground hover:text-accent transition-smooth truncate" onClick={() => setMobileMenuOpen(false)}>
                      {service.name}
                    </Link>)}
                </div>
              </div>

              {/* Body & Head Spa Row */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Body Rollers
                  </p>
                  {bodyRollers.map((service, idx) => <Link key={idx} to={service.path} className="block pl-2 py-0.5 text-xs text-foreground hover:text-accent transition-smooth mt-1" onClick={() => setMobileMenuOpen(false)}>
                      {service.name}
                    </Link>)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Head Spa
                  </p>
                  {headSpa.map((service, idx) => <Link key={idx} to={service.path} className="block pl-2 py-0.5 text-xs text-foreground hover:text-accent transition-smooth mt-1" onClick={() => setMobileMenuOpen(false)}>
                      {service.name}
                    </Link>)}
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex gap-4 pt-2">
                <Link to="/gallery" className="text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link to="/contact" className="text-sm text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
              
              <div className="pt-3 pb-1">
                <BookingButton className="w-full" size="sm">
                  Book Now
                </BookingButton>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
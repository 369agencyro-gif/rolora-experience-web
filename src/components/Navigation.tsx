import { useState } from "react";
import { Link } from "react-router-dom";
import BookingButton from "@/components/BookingButton";
import { Menu, X, ChevronDown } from "lucide-react";
import roloraLogo from "@/assets/rolora-logo.png";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
              <Link to="/" className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <Link to="/about" className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              <Accordion type="multiple" className="w-full">
                {/* Offers Section */}
                <AccordionItem value="offers" className="border-b-0">
                  <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline hover:text-accent">
                    <span className="flex items-center gap-2">
                      Offers
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="space-y-1 pl-3">
                      {offers.map((offer, idx) => (
                        <Link 
                          key={idx} 
                          to={offer.path} 
                          className="block py-1.5 text-sm text-foreground/80 hover:text-accent transition-smooth" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {offer.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Facial Services Section */}
                <AccordionItem value="facial" className="border-b-0">
                  <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline hover:text-accent">
                    Facial Services
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="space-y-1 pl-3">
                      {facialServices.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.path} 
                          className="block py-1.5 text-sm text-foreground/80 hover:text-accent transition-smooth" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Body Rollers Section */}
                <AccordionItem value="body" className="border-b-0">
                  <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline hover:text-accent">
                    Body Rollers
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="space-y-1 pl-3">
                      {bodyRollers.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.path} 
                          className="block py-1.5 text-sm text-foreground/80 hover:text-accent transition-smooth" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Head Spa Section */}
                <AccordionItem value="headspa" className="border-b-0">
                  <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline hover:text-accent">
                    Head Spa
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="space-y-1 pl-3">
                      {headSpa.map((service, idx) => (
                        <Link 
                          key={idx} 
                          to={service.path} 
                          className="block py-1.5 text-sm text-foreground/80 hover:text-accent transition-smooth" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to="/gallery" className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/contact" className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
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
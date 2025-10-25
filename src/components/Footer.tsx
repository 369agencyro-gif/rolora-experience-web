const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      <div className="relative container px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-display font-bold mb-3 text-primary-foreground">Rolora</h3>
              <p className="text-primary-foreground/80 text-base leading-relaxed">
                Where luxury meets tranquility
              </p>
            </div>
            
            {/* Quick links */}
            <div className="text-center">
              <h4 className="text-lg font-display font-semibold mb-4 text-primary-foreground">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <a href="/#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  About
                </a>
                <a href="/#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Services
                </a>
                <a href="/#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Gallery
                </a>
                <a href="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Contact
                </a>
              </nav>
            </div>
            
            {/* Contact info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-display font-semibold mb-4 text-primary-foreground">Get in Touch</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Book an Appointment
                </a>
                <p className="text-primary-foreground/70 text-xs">
                  Experience luxury wellness
                </p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-primary-foreground/20 mb-8" />
          
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground/70">
              © {new Date().getFullYear()} Rolora. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Crafted with care for your wellbeing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

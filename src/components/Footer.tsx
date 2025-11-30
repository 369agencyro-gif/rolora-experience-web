import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import BookingButton from "./BookingButton";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wide mb-6 text-lg text-primary">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/rolora-facial-glow" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Rolora Facial Glow™
                </Link>
              </li>
              <li>
                <Link to="/rolora-sculpt" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Rolora Sculpt™
                </Link>
              </li>
              <li>
                <Link to="/body-rolling" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Rolora Flow™
                </Link>
              </li>
              <li>
                <Link to="/head-spa" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Rolora Head Spa™
                </Link>
              </li>
              <li>
                <Link to="/enhancements" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Enhancements
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wide mb-6 text-lg text-primary">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/new-client-offers" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  New Client Offers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wide mb-6 text-lg text-primary">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70 text-sm">
                  Newport Beach, CA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:949-555-0123" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  (949) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@rolora.com" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  hello@rolora.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com/rolora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://facebook.com/rolora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wide mb-6 text-lg text-primary">GET STARTED</h4>
            <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
              Ready to experience the Rolora difference? Book your first treatment today.
            </p>
            <BookingButton 
              size="lg" 
              className="w-full mb-4"
            >
              BOOK NOW
            </BookingButton>
            <p className="text-xs text-foreground/60 italic">
              New clients: Try our $99 introductory facial
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} Rolora. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

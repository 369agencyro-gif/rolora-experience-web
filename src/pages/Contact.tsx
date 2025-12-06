import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container px-6">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We'd love to hear from you. Book your transformative experience today.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20 animate-fade-in">
              <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  2744 E Coast Hwy Suite 5<br />
                  Corona Del Mar, CA 92625
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Call Us</h3>
                <a href="tel:+19492913808" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  (949) 291-3808
                </a>
              </div>

              <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:info@roloraspa.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  info@roloraspa.com
                </a>
              </div>

              <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tue-Sat: 10AM-7PM<br />
                  Sun-Mon: By Appointment
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mb-16 animate-fade-in">
              <h3 className="font-display font-semibold text-2xl mb-6">Follow Our Journey</h3>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

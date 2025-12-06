import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import studioInterior from "@/assets/studio-interior.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import glowingFace from "@/assets/glowing-face.jpg";
import bodyRollingTreatment from "@/assets/body-rolling-treatment.webp";
import { Link } from "react-router-dom";
const About = () => {
  return <ServiceLayout>
      {/* Hero Section - INTRO */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img alt="Rolora Studio Corona del Mar" className="w-full h-full object-cover" src="/lovable-uploads/cee7b05f-d680-4ef4-87e5-4da529cfb90d.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1810] via-[#2A1810]/95 to-[#2A1810]/70" />
        </div>
        
        {/* Content */}
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4 md:mb-6">Corona del Mar</p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.15em] leading-[1] text-white mb-8">
              Modern Beauty.<br />
              Elevated Energy.
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/70 font-light max-w-2xl mx-auto mb-8">
              A curated space for advanced facials, body sculpting, and scalp treatments — where precision, technology, and energy converge.
            </p>
            
            <p className="text-base leading-relaxed text-white/60 max-w-xl mx-auto mb-10 border-t border-b border-white/10 py-6">
              Built on the belief that <span className="text-primary font-medium">glow is energy</span>, and <span className="text-primary font-medium">energy is beauty</span>.
            </p>

            <p className="text-2xl md:text-3xl font-display font-bold text-primary tracking-tight">
              Results that speak. Energy you feel.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — THE PHILOSOPHY */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-background">
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              THE PHILOSOPHY
            </h2>
            
            <p className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
              Glow is energy. Energy is beauty.
            </p>
            
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-foreground/80">
                We believe radiance begins beneath the surface.
              </p>
              <p className="text-lg leading-relaxed text-foreground/70">
                Each treatment is a fusion of structure, circulation, and intention — crafted to sculpt the skin, awaken definition, and restore flow.
              </p>
              <p className="text-lg leading-relaxed text-foreground/60 italic border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
                There's no "pampering." No filler words.<br />
                Only precision, balance, and results that speak before you do.
              </p>
              <p className="text-xl leading-relaxed font-medium text-foreground pt-4">
                Because when your energy is aligned, your glow becomes unstoppable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img alt="Glowing skin results" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/44b2ed18-9e25-4495-94c4-1ee48ad4e78c.jpg" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img alt="Rolora facial treatment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/fa861872-8377-428e-9adf-d23b744fd7e4.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — THE EXPERIENCE */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-center mb-8 text-primary">
              THE EXPERIENCE
            </h2>
            
            <p className="text-xl leading-relaxed text-center mb-12 text-foreground/80 max-w-3xl mx-auto">
              ROLORA embodies a new standard — where beauty feels powerful, intelligent, and alive.
            </p>
            
            <p className="text-lg text-center mb-8 text-foreground/70">
              Each session is designed with intention and flow:
            </p>
            
            <div className="grid gap-4 max-w-2xl mx-auto mb-12">
              <Link to="/services/facial-glow" className="group relative flex items-center gap-4 px-6 py-5 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-sm font-bold">01</span>
                </div>
                <span className="text-lg text-foreground/80 font-light tracking-wide">
                  <span className="font-bold text-foreground">Facials</span> contour and energize.
                </span>
              </Link>
              
              <Link to="/services/body-rolling" className="group relative flex items-center gap-4 px-6 py-5 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-sm font-bold">02</span>
                </div>
                <span className="text-lg text-foreground/80 font-light tracking-wide">
                  <span className="font-bold text-foreground">Body Rolling</span> detoxifies and sculpts.
                </span>
              </Link>
              
              <Link to="/services/head-spa" className="group relative flex items-center gap-4 px-6 py-5 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-sm font-bold">03</span>
                </div>
                <span className="text-lg text-foreground/80 font-light tracking-wide">
                  <span className="font-bold text-foreground">The Headspa</span> restores clarity and calm.
                </span>
              </Link>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground/60 italic">
                It's a curated journey of precision — designed to deliver results that are both seen and felt.
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold text-primary tracking-tight">
                Not a treatment. A method for the modern glow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={bodyRollingTreatment} alt="Body rolling treatment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3B2414]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-6 text-white">
              Ready to Experience Rolora?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Discover the modern glow. Book your first treatment today.
            </p>
            <BookingButton size="lg" className="px-12 py-6 text-sm uppercase font-bold tracking-wider">
              Book Your Experience
            </BookingButton>
          </div>
        </div>
      </section>
    </ServiceLayout>;
};
export default About;
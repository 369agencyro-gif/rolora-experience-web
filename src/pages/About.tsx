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
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">About Rolora</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-foreground">
                Modern Beauty.<br />
                <span className="text-primary">Elevated Energy.</span>
              </h1>
              
              <p className="text-lg leading-relaxed text-foreground/70 max-w-lg">
                A curated space for advanced facials, body sculpting, and scalp treatments — where precision, technology, and energy converge.
              </p>
              
              <div className="border-l-2 border-primary pl-6 py-2">
                <p className="text-base leading-relaxed text-foreground/80">
                  Built on the belief that <span className="font-semibold text-primary">glow is energy</span>, and <span className="font-semibold text-primary">energy is beauty</span>.
                </p>
              </div>

              <p className="text-xl md:text-2xl font-display font-bold text-foreground/90 tracking-tight">
                Results that speak. Energy you feel.
              </p>

              <BookingButton size="lg" className="px-10 py-5 text-sm uppercase font-bold tracking-wider">
                Book Your Experience
              </BookingButton>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img 
                  alt="Rolora Studio Corona del Mar" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/cee7b05f-d680-4ef4-87e5-4da529cfb90d.jpg" 
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — THE PHILOSOPHY */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
        
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
              <img src={glowingFace} alt="Glowing skin results" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={facialSculpting} alt="Rolora facial treatment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
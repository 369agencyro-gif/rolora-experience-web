import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import facialImage from "@/assets/service-facial.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import glowingSkin from "@/assets/glowing-skin.jpg";
import skincareProducts from "@/assets/skincare-products.jpg";
import Contact from "@/components/Contact";
import { Sparkles, Clock, Users, Award } from "lucide-react";

const RoloraFacialGlow = () => {
  return (
    <ServiceLayout>
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-6xl mb-4 block">✨</span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
                Rolora Facial Glow™
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6">$235</p>
              <p className="text-xl text-foreground italic mb-8">
                Your signature glow, defined by Rolora.
              </p>
            </div>

            <div className="mb-12 animate-fade-in rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={facialImage} 
                alt="Rolora Facial Glow treatment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A couture signature treatment blending dermaplaning, microdermabrasion, and tailored modalities for glowing skin.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This ritual refines texture, boosts luminosity, and deeply hydrates for a glass-skin finish that defines the Rolora experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4">What to Expect</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Dermaplaning for ultra-smooth texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Microdermabrasion to refine and polish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Deep hydration infusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Customized serum application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Glass-skin luminous finish</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-8">Treatment Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Radiant Glass Skin</h3>
                    <p className="text-muted-foreground">Achieve luminous, dewy skin with a flawless glass-skin finish that glows from within.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Refined Texture</h3>
                    <p className="text-muted-foreground">Smooth away imperfections and reveal baby-soft skin through expert exfoliation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instant Hydration</h3>
                    <p className="text-muted-foreground">Deep moisture infusion that plumps and revitalizes your complexion immediately.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Customized Care</h3>
                    <p className="text-muted-foreground">Tailored modalities selected specifically for your unique skin needs and goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section with Images */}
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-12">Your Journey to Glow</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={skincareProducts} alt="Premium skincare products" className="w-full h-[300px] object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Step 1: Consultation & Cleanse</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We begin with a thorough skin analysis to understand your unique needs. A gentle double cleanse prepares your skin for the transformative treatments ahead.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium botanical cleansers remove impurities while maintaining your skin's natural moisture barrier.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4">Step 2: Exfoliation & Refinement</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Expert dermaplaning removes vellus hair and dead skin cells, instantly revealing smoother, brighter skin beneath.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Microdermabrasion follows to polish your complexion, refining texture and enhancing product absorption for maximum results.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant order-1 md:order-2">
                  <img src={facialRoom} alt="Luxury treatment room" className="w-full h-[300px] object-cover" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-elegant">
                  <img src={glowingSkin} alt="Glowing radiant skin results" className="w-full h-[300px] object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Step 3: Hydration & Glow Infusion</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Customized serums rich in hyaluronic acid, vitamins, and antioxidants are carefully infused into your skin.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A luxurious hydrating mask seals in moisture, leaving you with that coveted dewy, glass-skin finish.
                  </p>
                </div>
              </div>
            </div>

            {/* Who Is It For */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold text-center mb-6">Perfect For</h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>Anyone seeking the signature Rolora glow and luminous skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>Dull, tired skin in need of revitalization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>Uneven texture or fine lines requiring smoothing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>Pre-event preparation for camera-ready skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>Regular maintenance for sustained radiance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to Experience Your Signature Glow?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Discover why Rolora Facial Glow™ is our most beloved treatment. Your radiant transformation awaits.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg shadow-elegant"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Facial Glow
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default RoloraFacialGlow;

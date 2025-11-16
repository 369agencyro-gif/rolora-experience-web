import ServiceLayout from "@/components/ServiceLayout";
import BookingButton from "@/components/BookingButton";
import aboutImage from "@/assets/about-image.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import Contact from "@/components/Contact";

const Enhancements = () => {
  return (
    <ServiceLayout>
      {/* Hero Section - Two Column Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-none overflow-hidden h-[500px] lg:h-[700px] lg:sticky lg:top-24">
              <img 
                src={aboutImage} 
                alt="Rolora Enhancements"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                  ENHANCEMENTS
                </h1>
                
                <div className="inline-block px-5 py-2 bg-accent text-primary-foreground rounded-none mb-8">
                  <span className="text-sm font-black uppercase tracking-widest">Customize Your Glow</span>
                </div>

                <p className="text-xl leading-relaxed mb-8">
                  Elevate your facial ritual with targeted boosters designed to enhance results, refine texture, and perfect your glow. Most clients add 1–2 enhancements for a truly customized Rolora finish.
                </p>

                <BookingButton 
                  size="lg"
                  className="w-full md:w-auto px-16 py-7 text-base uppercase font-black tracking-widest rounded-none"
                >
                  Book Now
                </BookingButton>
              </div>

              {/* $50 Enhancements */}
              <div className="border-t-2 border-foreground pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black uppercase tracking-widest">$50 Add-Ons</h2>
                  <span className="text-3xl font-black">$50</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Red Light Therapy</h3>
                    <p className="text-muted-foreground">Boosts collagen, calms inflammation, and enhances radiance.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Extractions</h3>
                    <p className="text-muted-foreground">Deep pore cleansing to detoxify and clarify congested skin.</p>
                  </div>
                </div>
              </div>

              {/* $60 Enhancements */}
              <div className="border-t-2 border-foreground pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black uppercase tracking-widest">$60 Add-Ons</h2>
                  <span className="text-3xl font-black">$60</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Dermaplaning</h3>
                    <p className="text-muted-foreground">Refines texture and removes peach fuzz for a smooth, glassy finish.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Oxygen Boost</h3>
                    <p className="text-muted-foreground">Brightens and refreshes dull, tired skin.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Microdermabrasion</h3>
                    <p className="text-muted-foreground">Gently polishes and smooths for instant luminosity.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">PureLift Sculpt</h3>
                    <p className="text-muted-foreground">Targets facial contours with lifting stimulation for a snatched finish.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Neck Lifting</h3>
                    <p className="text-muted-foreground">Targeted RF / sculpting massage to define and firm the neck, jawline, and décolletage.</p>
                  </div>
                </div>
              </div>

              {/* $100 Enhancements */}
              <div className="border-t-2 border-foreground pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black uppercase tracking-widest">$100 Add-Ons</h2>
                  <span className="text-3xl font-black">$100</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Hydra Infusion</h3>
                    <p className="text-muted-foreground">Deep hydration infusion that plumps and restores moisture balance.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Radiance Peel</h3>
                    <p className="text-muted-foreground">Refines texture and reveals brighter, more even skin tone.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2 uppercase">Firming Lift (RF or Ultrasound)</h3>
                    <p className="text-muted-foreground">Tightens and firms for lifted, youthful contours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={facialRoom} 
            alt="Treatment Room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[500px] overflow-hidden bg-muted flex items-center justify-center p-12">
          <div className="max-w-md">
            <h3 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
              CUSTOMIZE YOUR GLOW
            </h3>
            <p className="text-xl mb-8">
              Add enhancements to any facial for a personalized Rolora experience.
            </p>
            <BookingButton 
              size="lg"
              className="w-full px-12 py-7 text-base uppercase font-black tracking-widest rounded-none"
            >
              Book Your Treatment
            </BookingButton>
          </div>
        </div>
      </section>

      <Contact />
    </ServiceLayout>
  );
};

export default Enhancements;

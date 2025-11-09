

import { Button } from "@/components/ui/button";
import glowingSkin from "@/assets/glowing-skin.jpg";
import facialSculpting from "@/assets/facial-sculpting.jpg";
import serviceBody from "@/assets/service-body.jpg";

const SignatureExperience = () => {
  const transformations = [
    {
      image: glowingSkin,
      caption: "Emma after Chemical Peel"
    },
    {
      image: facialSculpting,
      caption: "Jennifer after The Really Good Facial™, Radio Frequency"
    },
    {
      image: serviceBody,
      caption: "Thi Thi after The Really Good Facial™"
    }
  ];

  const scrollToGallery = () => {
    const gallerySection = document.querySelector('[id*="gallery"]');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm md:text-base font-medium uppercase tracking-wider mb-12">
            REAL SKIN TRANSFORMATIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {transformations.map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before half */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt="Before treatment"
                        className="w-full h-full object-cover brightness-90 contrast-95"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                        BEFORE
                      </div>
                    </div>
                    
                    {/* After half */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt="After treatment"
                        className="w-full h-full object-cover brightness-110 contrast-105"
                      />
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-foreground/80">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>

          <Button 
            onClick={scrollToGallery}
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase font-bold tracking-wider px-8 py-6 text-sm"
          >
            SEE MORE RESULTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperience;

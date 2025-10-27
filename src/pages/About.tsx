import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import bodyRollingMachine from "@/assets/body-rolling-machine.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const [isRolling, setIsRolling] = useState(false);
  const rollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRolling(true);
        }
      },
      { threshold: 0.3 }
    );

    if (rollingRef.current) {
      observer.observe(rollingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Client-Centered Care",
      description: "Every treatment is tailored to your unique skin journey and wellness goals"
    },
    {
      title: "Excellence in Craft",
      description: "Years of training and continuous innovation in facial sculpting techniques"
    },
    {
      title: "Expert Team",
      description: "Licensed aestheticians with specialized training in advanced skin treatments"
    },
    {
      title: "Results-Driven",
      description: "Proven methodologies that deliver visible, lasting transformations"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Rolora Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>
          
          <div className="relative z-10 container px-6 h-full flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
              <span className="text-white/70 uppercase tracking-[0.3em] text-xs font-light mb-6 block">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wider mb-6">
                About ROLORA SPA
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 font-light tracking-wide">
                Where ancient beauty wisdom meets cutting-edge technology
              </p>
            </div>
          </div>
        </section>

        {/* Story Section with Hover Effects */}
        <section className="py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div 
                  className="group relative animate-fade-in"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <img 
                      src={studioInterior}
                      alt="Rolora Studio Interior"
                      className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-smooth" />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <div className="flex justify-start mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-8 text-muted-foreground/90">
                    The ROLORA SPA Vision
                  </h2>
                  <div className="space-y-6 text-base text-muted-foreground/80 leading-relaxed tracking-wide">
                    <p>
                      Founded with a passion for transformative beauty and holistic wellness, 
                      Rolora has become a sanctuary for those seeking more than just a facial—
                      an experience that honors your skin, your time, and your journey.
                    </p>
                    <p>
                      Our approach combines expert facial sculpting techniques with innovative 
                      body rolling therapy, creating a comprehensive beauty ritual that addresses 
                      both aesthetics and well-being.
                    </p>
                    <p className="text-muted-foreground/90 font-light italic text-sm">
                      Every treatment is an art. Every client is a masterpiece.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rolling Technology Section */}
        <section 
          ref={rollingRef}
          className="py-32 bg-secondary/30 relative overflow-hidden"
        >
          {/* Animated Rolling Background */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`absolute h-32 w-full border-t-2 border-accent ${
                  isRolling ? "animate-roll" : ""
                }`}
                style={{
                  top: `${i * 25}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          <div className="container px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="flex justify-center mb-6">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-4 text-muted-foreground/90">
                  Revolutionary Technology
                </h2>
                <p className="text-base text-muted-foreground/70 max-w-3xl mx-auto tracking-wide">
                  Experience the power of Rolora Flow™ body rolling therapy
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div 
                    className={`relative overflow-hidden rounded-3xl ${
                      isRolling ? "animate-roll-reveal" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={bodyRollingMachine}
                      alt="Body Rolling Machine"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent group-hover:from-accent/40 transition-smooth" />
                    
                    {/* Rotating Overlay Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-48 h-48 border-4 border-accent/30 rounded-full ${
                        isRolling ? "animate-spin-slow" : ""
                      }`} />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-smooth -z-10" />
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex justify-start mb-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30"></div>
                    </div>
                    <h3 className="text-xl font-serif font-light mb-2 text-muted-foreground/90">
                      Deep Tissue Release
                    </h3>
                    <p className="text-sm text-muted-foreground/70 tracking-wide">
                      Penetrates deep into muscle tissue to release tension and improve circulation
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex justify-start mb-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30"></div>
                    </div>
                    <h3 className="text-xl font-serif font-light mb-2 text-muted-foreground/90">
                      Lymphatic Drainage
                    </h3>
                    <p className="text-sm text-muted-foreground/70 tracking-wide">
                      Stimulates natural detoxification and reduces inflammation for a sculpted look
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex justify-start mb-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30"></div>
                    </div>
                    <h3 className="text-xl font-serif font-light mb-2 text-muted-foreground/90">
                      Holistic Wellness
                    </h3>
                    <p className="text-sm text-muted-foreground/70 tracking-wide">
                      Combines physical therapy with relaxation for complete body rejuvenation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Values Section with Cards */}
        <section className="py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="flex justify-center mb-6">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider mb-4 text-muted-foreground/90">
                  Our Values
                </h2>
                <p className="text-base text-muted-foreground/70 tracking-wide">
                  The principles that guide every treatment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-light mb-3 text-muted-foreground/90 tracking-wide">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground/70 leading-relaxed tracking-wide">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wider mb-8 text-muted-foreground/90">
                Ready to Transform?
              </h2>
              <p className="text-base text-muted-foreground/70 mb-12 max-w-2xl mx-auto tracking-wide">
                Experience the Rolora difference. Book your signature treatment today 
                and discover the art of true beauty.
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="px-10 py-4 rounded-full bg-accent text-accent-foreground font-light text-sm tracking-wider hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                Book Your Experience
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes roll {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes roll-reveal {
          0% {
            opacity: 0;
            transform: rotateY(-90deg);
          }
          100% {
            opacity: 1;
            transform: rotateY(0deg);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-roll {
          animation: roll 3s linear infinite;
        }

        .animate-roll-reveal {
          animation: roll-reveal 1s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 60px rgba(var(--accent-rgb), 0.3);
        }
      `}</style>
    </>
  );
};

export default About;
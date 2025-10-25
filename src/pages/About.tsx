import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Heart, Award, Users, Target, Zap } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import bodyRollingMachine from "@/assets/body-rolling-machine.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRolling, setIsRolling] = useState(false);
  const rollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      icon: Heart,
      title: "Client-Centered Care",
      description: "Every treatment is tailored to your unique skin journey and wellness goals"
    },
    {
      icon: Award,
      title: "Excellence in Craft",
      description: "Years of training and continuous innovation in facial sculpting techniques"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed aestheticians with specialized training in advanced skin treatments"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Proven methodologies that deliver visible, lasting transformations"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section with Parallax */}
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`
            }}
          >
            <img 
              src={heroImage}
              alt="Rolora Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>
          
          <div className="relative z-10 container px-6 h-full flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
                <span className="text-accent font-semibold uppercase tracking-widest">Our Story</span>
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-semibold mb-6">
                About Rolora
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
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
                  <h2 className="text-5xl md:text-6xl font-display font-semibold mb-8">
                    The Rolora Vision
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
                    <p className="text-accent font-semibold">
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
                <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
                  Revolutionary Technology
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-2">
                        Deep Tissue Release
                      </h3>
                      <p className="text-muted-foreground">
                        Penetrates deep into muscle tissue to release tension and improve circulation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-2">
                        Lymphatic Drainage
                      </h3>
                      <p className="text-muted-foreground">
                        Stimulates natural detoxification and reduces inflammation for a sculpted look
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-2">
                        Holistic Wellness
                      </h3>
                      <p className="text-muted-foreground">
                        Combines physical therapy with relaxation for complete body rejuvenation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-background">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
                  Meet Our Team
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experts dedicated to your transformation
                </p>
              </div>

              <div className="relative group">
                <div className="overflow-hidden rounded-3xl">
                  <img 
                    src={teamPhoto}
                    alt="Rolora Team"
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <p className="text-2xl md:text-3xl font-display leading-relaxed">
                      Our team of licensed aestheticians brings together decades of experience 
                      in facial sculpting, skin analysis, and therapeutic body work.
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
                <h2 className="text-5xl md:text-6xl font-display font-semibold mb-6">
                  Our Values
                </h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide every treatment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-10 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth rounded-3xl" />
                      
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-smooth mb-6 group-hover:scale-110 transform duration-500">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        
                        <h3 className="text-3xl font-display font-semibold mb-4">
                          {value.title}
                        </h3>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-pulse" />
                      </div>
                    </div>
                  );
                })}
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
              <h2 className="text-5xl md:text-7xl font-display font-semibold mb-8">
                Ready to Transform?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Experience the Rolora difference. Book your signature treatment today 
                and discover the art of true beauty.
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="group px-12 py-6 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:shadow-glow transition-all duration-500 hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Book Your Experience</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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
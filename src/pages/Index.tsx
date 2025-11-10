import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import SignatureFacialSection from "@/components/SignatureFacialSection";
import TreatmentExplorer from "@/components/TreatmentExplorer";
import SignatureExperience from "@/components/SignatureExperience";
import WhyRolora from "@/components/WhyRolora";
import WhatToExpect from "@/components/WhatToExpect";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const AnimatedSection = ({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      {children}
    </div>;
};
const Index = () => {
  return <>
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <StatsSection />
        <AnimatedSection delay={100}>
          <SignatureFacialSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <TreatmentExplorer />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <SignatureExperience />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <WhyRolora />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <WhatToExpect />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Membership />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Contact />
        </AnimatedSection>
        <Footer />
      </main>
    </>;
};
export default Index;
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignatureExperience from "@/components/SignatureExperience";
import WhyRolora from "@/components/WhyRolora";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <SignatureExperience />
        <About />
        <Services />
        <WhyRolora />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;

import Navigation from "./Navigation";
import Footer from "./Footer";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceLayout;

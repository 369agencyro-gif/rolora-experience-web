const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-semibold mb-2">Rolora</h3>
            <p className="text-sm opacity-80">Where luxury meets tranquility</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Rolora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

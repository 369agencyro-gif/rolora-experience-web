const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Links */}
          <div className="flex flex-wrap gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-sm">SUPPORT</h4>
              <a href="/#contact" className="text-sm hover:underline block">FAQ</a>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-sm">ABOUT</h4>
              <a href="/#about" className="text-sm hover:underline block">About Us</a>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-sm">SOCIAL</h4>
              <a href="#" className="text-sm hover:underline block">TikTok</a>
            </div>
          </div>
          
          {/* Right side - Sign up CTA */}
          <div className="text-center md:text-right">
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Sign Up To Unlock Your<br />$99 Facial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

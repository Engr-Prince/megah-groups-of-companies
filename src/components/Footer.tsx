import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold megah-gradient-text">MEGAH</span>
            </div>
            <p className="text-muted-foreground">
              African tech innovation at its finest. Building the future with cutting-edge solutions.
            </p>
            <p className="text-sm font-semibold megah-gradient-text">
              "Think Big. Grow MEGAH"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/team" className="block text-muted-foreground hover:text-foreground transition-colors">
                Our Team
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Web & App Development</p>
              <p className="text-muted-foreground">Startup Consulting</p>
              <p className="text-muted-foreground">Document Processing</p>
              <p className="text-muted-foreground">MegaConnect Platform</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 mb-4">
              <p className="text-muted-foreground">Douala, Cameroon</p>
              <p className="text-muted-foreground">megahprince82@gmail.com</p>
              <p className="text-muted-foreground">+237 675859441</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MEGAH Group of Companies. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 megah-btn-primary rounded-full p-3 shadow-lg"
        size="icon"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;
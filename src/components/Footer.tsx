import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import megahLogo from "@/assets/megah-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={megahLogo} 
                alt="MEGAH Group of Companies" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <p className="text-sm font-semibold megah-gradient-text">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.aboutUs')}
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.services')}
              </Link>
              <Link to="/team" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.ourTeam')}
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.testimonials')}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.servicesTitle')}</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">{t('footer.webAppDev')}</p>
              <p className="text-muted-foreground">{t('footer.startupConsulting')}</p>
              <p className="text-muted-foreground">{t('footer.documentProcessing')}</p>
              <p className="text-muted-foreground">{t('footer.megaconnectPlatform')}</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.connect')}</h3>
            <div className="space-y-2 mb-4">
              <p className="text-muted-foreground">{t('footer.location')}</p>
              <a 
                href="mailto:megahgroupsofcompanies@gmail.com" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.emailPrimary')}
              </a>
              <a 
                href="mailto:megahprince82@gmail.com" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.emailSecondary')}
              </a>
              <a 
                href="tel:+237675859441" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.phone')}
              </a>
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
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t('footer.termsConditions')}
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t('footer.privacyPolicy')}
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

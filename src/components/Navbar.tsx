import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Globe, ChevronDown } from "lucide-react";
import megahLogo from "@/assets/megah-logo.png";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.team'), path: "/team" },
    { name: t('nav.support'), path: "/support" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const switchLanguage = (lang: 'EN' | 'FR') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 megah-glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={megahLogo} 
              alt="MEGAH Group of Companies" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="hover:bg-white/10 flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{language}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-md shadow-lg overflow-hidden z-50 min-w-[80px]">
                  <button
                    onClick={() => switchLanguage("EN")}
                    className="w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLanguage("FR")}
                    className="w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    FR
                  </button>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-white/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 megah-glass border-b border-white/10 p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="hover:bg-white/10 flex items-center space-x-1"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                {isLangOpen && (
                  <div className="absolute bottom-full right-0 mb-1 bg-background border border-border rounded-md shadow-lg overflow-hidden z-50 min-w-[80px]">
                    <button
                      onClick={() => switchLanguage("EN")}
                      className="w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => switchLanguage("FR")}
                      className="w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      FR
                    </button>
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-white/10"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
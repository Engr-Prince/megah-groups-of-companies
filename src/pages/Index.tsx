import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Users, Globe, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 megah-hero-bg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins">
              {t('hero.title')}{" "}
              <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="megah-btn-primary px-8 py-3 text-lg">
                <Link to="/services">
                  {t('hero.exploreServices')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="megah-btn-glass px-8 py-3 text-lg text-white border-white/30">
                <Link to="/contact">
                  {t('hero.contactUs')}
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="megah-glass rounded-full p-4">
              <Code className="h-8 w-8 text-megah-green" />
            </div>
          </div>
          <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="megah-glass rounded-full p-4">
              <Globe className="h-8 w-8 text-megah-blue" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <div className="megah-glass rounded-full p-4">
              <Zap className="h-8 w-8 text-megah-yellow" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('mission.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('mission.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="megah-card-hover border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('mission.innovation')}</h3>
                <p className="text-muted-foreground">
                  {t('mission.innovationDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="megah-card-hover border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('mission.community')}</h3>
                <p className="text-muted-foreground">
                  {t('mission.communityDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="megah-card-hover border-2 border-megah-blue/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('mission.globalImpact')}</h3>
                <p className="text-muted-foreground">
                  {t('mission.globalImpactDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">{t('services.title')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="megah-glass rounded-xl p-6 text-center megah-card-hover">
              <Code className="h-12 w-12 text-megah-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('services.webDev')}</h3>
              <p className="text-white/70 text-sm">{t('services.webDevDesc')}</p>
            </div>
            
            <div className="megah-glass rounded-xl p-6 text-center megah-card-hover">
              <Users className="h-12 w-12 text-megah-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('services.consulting')}</h3>
              <p className="text-white/70 text-sm">{t('services.consultingDesc')}</p>
            </div>
            
            <div className="megah-glass rounded-xl p-6 text-center megah-card-hover">
              <Globe className="h-12 w-12 text-megah-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('services.documents')}</h3>
              <p className="text-white/70 text-sm">{t('services.documentsDesc')}</p>
            </div>
            
            <div className="megah-glass rounded-xl p-6 text-center megah-card-hover">
              <Zap className="h-12 w-12 text-megah-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('services.platform')}</h3>
              <p className="text-white/70 text-sm">{t('services.platformDesc')}</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="megah-btn-primary px-8 py-3 text-lg">
              <Link to="/services">
                {t('services.viewAll')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('cta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('cta.description')}
          </p>
          <Button asChild className="megah-btn-primary px-12 py-4 text-lg">
            <Link to="/contact">
              {t('cta.getStarted')} <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

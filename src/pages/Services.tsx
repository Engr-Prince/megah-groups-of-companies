import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, FileText, Link as LinkIcon, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('servicesPage.s1Title'),
      description: t('servicesPage.s1Desc'),
      features: [
        t('servicesPage.s1f1'),
        t('servicesPage.s1f2'),
        t('servicesPage.s1f3'),
        t('servicesPage.s1f4'),
        t('servicesPage.s1f5'),
        t('servicesPage.s1f6')
      ],
      gradient: "from-primary to-accent"
    },
    {
      icon: Users,
      title: t('servicesPage.s2Title'),
      description: t('servicesPage.s2Desc'),
      features: [
        t('servicesPage.s2f1'),
        t('servicesPage.s2f2'),
        t('servicesPage.s2f3'),
        t('servicesPage.s2f4'),
        t('servicesPage.s2f5'),
        t('servicesPage.s2f6')
      ],
      gradient: "from-accent to-megah-red"
    },
    {
      icon: FileText,
      title: t('servicesPage.s3Title'),
      description: t('servicesPage.s3Desc'),
      features: [
        t('servicesPage.s3f1'),
        t('servicesPage.s3f2'),
        t('servicesPage.s3f3'),
        t('servicesPage.s3f4'),
        t('servicesPage.s3f5'),
        t('servicesPage.s3f6')
      ],
      gradient: "from-megah-blue to-megah-purple"
    },
    {
      icon: LinkIcon,
      title: t('servicesPage.s4Title'),
      description: t('servicesPage.s4Desc'),
      features: [
        t('servicesPage.s4f1'),
        t('servicesPage.s4f2'),
        t('servicesPage.s4f3'),
        t('servicesPage.s4f4'),
        t('servicesPage.s4f5'),
        t('servicesPage.s4f6')
      ],
      gradient: "from-megah-green to-megah-blue"
    }
  ];

  const process = [
    { step: "01", title: t('servicesPage.step1Title'), desc: t('servicesPage.step1Desc') },
    { step: "02", title: t('servicesPage.step2Title'), desc: t('servicesPage.step2Desc') },
    { step: "03", title: t('servicesPage.step3Title'), desc: t('servicesPage.step3Desc') },
    { step: "04", title: t('servicesPage.step4Title'), desc: t('servicesPage.step4Desc') }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('servicesPage.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('servicesPage.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('servicesPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 megah-btn-primary">
                    {t('servicesPage.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('servicesPage.processTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('servicesPage.processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('servicesPage.ctaTitle')}</h2>
          <p className="text-xl text-white/80 mb-8">
            {t('servicesPage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="megah-btn-primary px-8 py-3 text-lg">
              <Link to="/contact">
                {t('servicesPage.ctaStart')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="megah-btn-glass px-8 py-3 text-lg text-white border-white/30">
              <Link to="/team">
                {t('servicesPage.ctaMeet')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
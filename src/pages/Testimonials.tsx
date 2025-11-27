import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

// Import testimonial images
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import testimonialMarie from "@/assets/testimonial-marie.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialAmina from "@/assets/testimonial-amina.jpg";
import testimonialEmmanuel from "@/assets/testimonial-emmanuel.jpg";
import testimonialKwame from "@/assets/testimonial-kwame.jpg";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.t1Name'),
      role: t('testimonials.t1Role'),
      company: t('testimonials.t1Company'),
      rating: 5,
      text: t('testimonials.t1Text'),
      avatar: testimonialSarah
    },
    {
      name: t('testimonials.t2Name'),
      role: t('testimonials.t2Role'),
      company: t('testimonials.t2Company'),
      rating: 5,
      text: t('testimonials.t2Text'),
      avatar: testimonialDavid
    },
    {
      name: t('testimonials.t3Name'),
      role: t('testimonials.t3Role'),
      company: t('testimonials.t3Company'),
      rating: 5,
      text: t('testimonials.t3Text'),
      avatar: testimonialMarie
    },
    {
      name: t('testimonials.t4Name'),
      role: t('testimonials.t4Role'),
      company: t('testimonials.t4Company'),
      rating: 5,
      text: t('testimonials.t4Text'),
      avatar: testimonialJames
    },
    {
      name: t('testimonials.t5Name'),
      role: t('testimonials.t5Role'),
      company: t('testimonials.t5Company'),
      rating: 5,
      text: t('testimonials.t5Text'),
      avatar: testimonialAmina
    },
    {
      name: t('testimonials.t6Name'),
      role: t('testimonials.t6Role'),
      company: t('testimonials.t6Company'),
      rating: 5,
      text: t('testimonials.t6Text'),
      avatar: testimonialEmmanuel
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('testimonials.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('testimonials.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('testimonials.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/30"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-megah-yellow fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('testimonials.statsTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('testimonials.statsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">98%</div>
              <div className="text-muted-foreground font-medium">{t('testimonials.statSatisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">150+</div>
              <div className="text-muted-foreground font-medium">{t('testimonials.statHappyClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">200+</div>
              <div className="text-muted-foreground font-medium">{t('testimonials.statProjects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">15+</div>
              <div className="text-muted-foreground font-medium">{t('testimonials.statCountries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="megah-glass rounded-2xl p-8 md:p-12">
            <Quote className="h-16 w-16 text-megah-yellow mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white font-light mb-8 leading-relaxed">
              "{t('testimonials.featuredQuote')}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonialKwame} 
                alt={t('testimonials.featuredName')}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-megah-yellow/50"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-lg">{t('testimonials.featuredName')}</div>
                <div className="text-white/80">{t('testimonials.featuredRole')}</div>
                <div className="text-white/60 text-sm">{t('testimonials.featuredLocation')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('testimonials.ctaTitle')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('testimonials.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="megah-btn-primary px-8 py-3 text-lg bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              {t('testimonials.ctaStart')}
            </Link>
            <Link to="/contact" className="border border-primary text-primary px-8 py-3 text-lg rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
              {t('testimonials.ctaConsult')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
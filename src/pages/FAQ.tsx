import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      category: t('faq.categoryGeneral'),
      questions: [
        { question: t('faq.q1'), answer: t('faq.a1') },
        { question: t('faq.q2'), answer: t('faq.a2') },
        { question: t('faq.q3'), answer: t('faq.a3') },
      ]
    },
    {
      category: t('faq.categoryDevelopment'),
      questions: [
        { question: t('faq.q4'), answer: t('faq.a4') },
        { question: t('faq.q5'), answer: t('faq.a5') },
        { question: t('faq.q6'), answer: t('faq.a6') },
      ]
    },
    {
      category: t('faq.categoryMegaConnect'),
      questions: [
        { question: t('faq.q7'), answer: t('faq.a7') },
        { question: t('faq.q8'), answer: t('faq.a8') },
        { question: t('faq.q9'), answer: t('faq.a9') },
      ]
    },
    {
      category: t('faq.categoryStartup'),
      questions: [
        { question: t('faq.q10'), answer: t('faq.a10') },
        { question: t('faq.q11'), answer: t('faq.a11') },
        { question: t('faq.q12'), answer: t('faq.a12') },
      ]
    },
    {
      category: t('faq.categoryDocuments'),
      questions: [
        { question: t('faq.q13'), answer: t('faq.a13') },
        { question: t('faq.q14'), answer: t('faq.a14') },
        { question: t('faq.q15'), answer: t('faq.a15') },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('faq.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('faq.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('faq.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 megah-gradient-text">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem 
                    key={questionIndex} 
                    value={`item-${categoryIndex}-${questionIndex}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('faq.stillHaveQuestions')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('faq.stillHaveQuestionsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="megah-card-hover border-2 border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('faq.liveChat')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('faq.liveChatDesc')}
                </p>
                <Button className="megah-btn-primary w-full">
                  {t('faq.startChat')}
                </Button>
              </CardContent>
            </Card>

            <Card className="megah-card-hover border-2 border-accent/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('faq.emailSupport')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('faq.emailSupportDesc')}
                </p>
                <Button asChild className="megah-btn-primary w-full">
                  <Link to="/contact">
                    {t('faq.sendEmail')}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="megah-card-hover border-2 border-megah-blue/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('faq.phoneSupport')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('faq.phoneSupportDesc')}
                </p>
                <Button className="megah-btn-primary w-full">
                  {t('faq.callNow')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('faq.exploreMore')}</h2>
          <p className="text-xl text-white/80 mb-8">
            {t('faq.exploreMoreDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="megah-btn-primary px-8 py-3 text-lg">
              <Link to="/services">
                {t('faq.viewAllServices')}
              </Link>
            </Button>
            <Button asChild variant="outline" className="megah-btn-glass px-8 py-3 text-lg text-white border-white/30">
              <Link to="/about">
                {t('faq.aboutMegah')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

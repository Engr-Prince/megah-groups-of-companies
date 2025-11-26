import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('about.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('about.heroCompany')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('about.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('about.storyTitle')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </div>
            <div className="megah-glass rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.foundedTitle')}</h3>
                    <p className="text-muted-foreground">{t('about.foundedDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.communityTitle')}</h3>
                    <p className="text-muted-foreground">{t('about.communityDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('about.standardsTitle')}</h3>
                    <p className="text-muted-foreground">{t('about.standardsDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('about.foundationTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.foundationDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="megah-card-hover border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('about.mission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="megah-card-hover border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('about.vision')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="megah-card-hover border-2 border-megah-blue/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('about.values')}</h3>
                <div className="text-left space-y-2 text-muted-foreground">
                  <p><strong>{t('about.valuesInnovation')}:</strong> {t('about.valuesInnovationDesc')}</p>
                  <p><strong>{t('about.valuesExcellence')}:</strong> {t('about.valuesExcellenceDesc')}</p>
                  <p><strong>{t('about.valuesIntegrity')}:</strong> {t('about.valuesIntegrityDesc')}</p>
                  <p><strong>{t('about.valuesCommunity')}:</strong> {t('about.valuesCommunityDesc')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('about.cultureTitle')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('about.cultureDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-megah-green" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('about.cultureInnovation')}</h3>
              <p className="text-white/80">
                {t('about.cultureInnovationDesc')}
              </p>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-megah-yellow" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('about.cultureLegacy')}</h3>
              <p className="text-white/80">
                {t('about.cultureLegacyDesc')}
              </p>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-megah-red" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('about.cultureEnergy')}</h3>
              <p className="text-white/80">
                {t('about.cultureEnergyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
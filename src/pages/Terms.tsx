import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('terms.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('terms.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('terms.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Terms & Privacy Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Terms of Service */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl megah-gradient-text">{t('terms.termsTitle')}</CardTitle>
              <p className="text-muted-foreground">{t('terms.lastUpdated')}</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.acceptance')}</h3>
                  <p>{t('terms.acceptanceText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.serviceDesc')}</h3>
                  <p>{t('terms.serviceDescText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.clientResp')}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>{t('terms.clientRespItems.0')}</li>
                    <li>{t('terms.clientRespItems.1')}</li>
                    <li>{t('terms.clientRespItems.2')}</li>
                    <li>{t('terms.clientRespItems.3')}</li>
                    <li>{t('terms.clientRespItems.4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.paymentTerms')}</h3>
                  <p>{t('terms.paymentTermsText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.intellectualProperty')}</h3>
                  <p>{t('terms.intellectualPropertyText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.liability')}</h3>
                  <p>{t('terms.liabilityText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.termination')}</h3>
                  <p>{t('terms.terminationText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.governingLaw')}</h3>
                  <p>{t('terms.governingLawText')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl megah-gradient-text">{t('terms.privacyTitle')}</CardTitle>
              <p className="text-muted-foreground">{t('terms.lastUpdated')}</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.infoCollect')}</h3>
                  <p>{t('terms.infoCollectIntro')}</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>{t('terms.infoCollectItems.0')}</li>
                    <li>{t('terms.infoCollectItems.1')}</li>
                    <li>{t('terms.infoCollectItems.2')}</li>
                    <li>{t('terms.infoCollectItems.3')}</li>
                    <li>{t('terms.infoCollectItems.4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.infoUse')}</h3>
                  <p>{t('terms.infoUseIntro')}</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>{t('terms.infoUseItems.0')}</li>
                    <li>{t('terms.infoUseItems.1')}</li>
                    <li>{t('terms.infoUseItems.2')}</li>
                    <li>{t('terms.infoUseItems.3')}</li>
                    <li>{t('terms.infoUseItems.4')}</li>
                    <li>{t('terms.infoUseItems.5')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.infoSharing')}</h3>
                  <p>{t('terms.infoSharingIntro')}</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>{t('terms.infoSharingItems.0')}</li>
                    <li>{t('terms.infoSharingItems.1')}</li>
                    <li>{t('terms.infoSharingItems.2')}</li>
                    <li>{t('terms.infoSharingItems.3')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.dataSecurity')}</h3>
                  <p>{t('terms.dataSecurityText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.yourRights')}</h3>
                  <p>{t('terms.yourRightsIntro')}</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>{t('terms.yourRightsItems.0')}</li>
                    <li>{t('terms.yourRightsItems.1')}</li>
                    <li>{t('terms.yourRightsItems.2')}</li>
                    <li>{t('terms.yourRightsItems.3')}</li>
                    <li>{t('terms.yourRightsItems.4')}</li>
                    <li>{t('terms.yourRightsItems.5')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.cookies')}</h3>
                  <p>{t('terms.cookiesText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.internationalTransfers')}</h3>
                  <p>{t('terms.internationalTransfersText')}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('terms.contactUs')}</h3>
                  <p>{t('terms.contactUsIntro')}</p>
                  <div className="mt-2">
                    <p><strong>Email:</strong> {t('terms.contactEmail')}</p>
                    <p><strong>Address:</strong> {t('terms.contactAddress')}</p>
                    <p><strong>Phone:</strong> {t('terms.contactPhone')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-2 border-megah-blue/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold megah-gradient-text mb-4">{t('terms.policyUpdates')}</h3>
              <p className="text-muted-foreground">{t('terms.policyUpdatesText')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
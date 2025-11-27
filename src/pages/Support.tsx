import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Building, ArrowRight, CheckCircle, Mail, Phone, Copy, CreditCard, Smartphone, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";

const partnershipSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(200, "Organization name must be less than 200 characters").optional(),
  supportType: z.string().min(1, "Please select a support type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

const Support = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PartnershipFormData>({
    name: "",
    email: "",
    organization: "",
    supportType: "",
    message: "",
  });

  const supportOptions = [
    {
      icon: Heart,
      title: "Individual Sponsorship",
      description: "Support our mission with personal contributions",
      benefits: [
        "Recognition on our website",
        "Quarterly impact reports",
        "Early access to events",
        "MEGAH branded merchandise"
      ],
      minAmount: "$25",
      gradient: "from-megah-red to-accent"
    },
    {
      icon: Building,
      title: "Corporate Partnership",
      description: "Partner with us to drive innovation across Africa",
      benefits: [
        "Brand visibility in our programs",
        "CSR reporting assistance",
        "Talent pipeline access",
        "Custom partnership packages"
      ],
      minAmount: "$500",
      gradient: "from-primary to-megah-blue"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our community of supporters and advocates",
      benefits: [
        "Networking opportunities",
        "Mentorship programs",
        "Skills development workshops",
        "Community recognition"
      ],
      minAmount: "Free",
      gradient: "from-megah-green to-megah-yellow"
    }
  ];

  const impactStats = [
    { number: "100+", label: "Developers Trained" },
    { number: "25+", label: "Startups Mentored" },
    { number: "50+", label: "Projects Delivered" },
    { number: "5000+", label: "Lives Impacted" }
  ];

  const paymentMethods = [
    {
      icon: Smartphone,
      title: "MTN Mobile Money",
      details: "675859441",
      description: "Send via MTN MoMo",
      gradient: "from-megah-yellow to-megah-red"
    },
    {
      icon: Building2,
      title: "Bank Transfer (India Bank)",
      details: "80 88 83 15 37",
      accountName: "TABINYOR PRINCE EMMANUEL AGBOR",
      ifsc: "IDIB000R551",
      description: "Direct bank transfer to India Bank",
      gradient: "from-primary to-megah-blue"
    }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = partnershipSchema.parse(formData);

      // Single call to edge function handles both database and emails
      const { data, error } = await supabase.functions.invoke('send-partnership-notification', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          organization: validatedData.organization,
          supportType: validatedData.supportType,
          message: validatedData.message,
        }
      });

      if (error) throw error;

      toast({
        title: "Inquiry Submitted! ✅",
        description: "Thank you! We'll get back to you within 24-48 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        supportType: "",
        message: "",
      });
    } catch (error) {
      console.error('Submission error:', error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('support.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('support.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('support.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('support.impactTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('support.impactDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('support.paymentTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('support.paymentDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${method.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-background/50 rounded-lg p-4 mb-4 space-y-2">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                      <p className="text-2xl font-bold megah-gradient-text">
                        {method.details}
                      </p>
                    </div>
                    {method.accountName && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                        <p className="text-sm font-semibold text-foreground">
                          {method.accountName}
                        </p>
                      </div>
                    )}
                    {method.ifsc && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">IFSC Code</p>
                        <p className="text-lg font-bold text-foreground">
                          {method.ifsc}
                        </p>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={() => copyToClipboard(method.details, "Account Number")}
                    className="w-full megah-btn-primary"
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copy Account Number
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('support.supportTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support option that aligns with your goals and capacity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${option.gradient}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <p className="text-muted-foreground">{option.description}</p>
                  <div className="text-3xl font-bold megah-gradient-text mt-4">
                    {option.minAmount}+
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Direct Contact */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t('support.contactTitle')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('support.contactDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="megah-glass rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-megah-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('support.emailUs')}</h3>
              <p className="text-white/80 mb-4">megahprince82@gmail.com</p>
              <Button 
                className="megah-btn-primary"
                onClick={() => window.location.href = 'mailto:megahprince82@gmail.com'}
              >
                {t('support.emailUs')}
              </Button>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <Phone className="h-12 w-12 text-megah-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('support.callUs')}</h3>
              <p className="text-white/80 mb-4">+237 675859441</p>
              <Button 
                className="megah-btn-primary"
                onClick={() => window.location.href = 'tel:+237675859441'}
              >
                {t('support.callUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;

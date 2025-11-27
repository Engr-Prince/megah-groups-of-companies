import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  validateName, 
  validateMessage,
  RateLimiter 
} from "@/lib/security";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const rateLimiter = new RateLimiter();

  // Handle success redirect from Web3Forms
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      toast({
        title: "Message Sent Successfully!",
        description: "We've received your message and will get back to you within 24 hours.",
      });
      // Clean up URL
      window.history.replaceState({}, '', '/contact');
    }
  }, [toast]);

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Validate required fields
    const firstNameValidation = validateName(formData.firstName, 'First name');
    if (!firstNameValidation.isValid) {
      errors.firstName = firstNameValidation.errors[0];
    }

    const lastNameValidation = validateName(formData.lastName, 'Last name');
    if (!lastNameValidation.isValid) {
      errors.lastName = lastNameValidation.errors[0];
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.errors[0];
    }

    if (formData.phone) {
      const phoneValidation = validatePhone(formData.phone);
      if (!phoneValidation.isValid) {
        errors.phone = phoneValidation.errors[0];
      }
    }

    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.isValid) {
      errors.message = messageValidation.errors[0];
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Rate limiting check
    if (!rateLimiter.canAttempt('contact-form', 3, 60000)) {
      e.preventDefault();
      toast({
        title: "Too many attempts",
        description: "Please wait before submitting again.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) {
      e.preventDefault();
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      
      toast({
        title: "Please check the form",
        description: "Some fields need your attention. Check the highlighted fields below.",
        variant: "destructive",
      });
      return;
    }

    // Show brief loading state - form will redirect to Web3Forms
    setIsSubmitting(true);
    
    // Reset after 5 seconds if redirect doesn't happen (e.g., in preview iframe)
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('contact.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('contact.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('contact.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl megah-gradient-text">{t('contact.sendMessage')}</CardTitle>
                  <p className="text-muted-foreground">
                    {t('contact.formDesc')}
                  </p>
                </CardHeader>
                <CardContent>
                  <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Web3Forms hidden fields */}
                    <input type="hidden" name="access_key" value="bc39fe5b-e02c-4b05-9b5d-dde9be7c3b39" />
                    <input type="hidden" name="subject" value="New Contact Form Submission - MEGAH" />
                    <input type="hidden" name="from_name" value="MEGAH Contact Form" />
                    <input type="hidden" name="redirect" value={`${window.location.origin}/contact?success=true`} />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    {/* Hidden field to combine first + last name for Web3Forms */}
                    <input type="hidden" name="name" value={`${formData.firstName} ${formData.lastName}`} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">{t('contact.firstName')} *</Label>
                        <Input 
                          id="firstName"
                          name="first_name"
                          placeholder="John" 
                          className={`mt-1 ${formErrors.firstName ? 'border-destructive' : ''}`}
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          maxLength={50}
                          required
                        />
                        {formErrors.firstName && (
                          <p className="text-sm text-destructive mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {formErrors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t('contact.lastName')} *</Label>
                        <Input 
                          id="lastName"
                          name="last_name"
                          placeholder="Doe" 
                          className={`mt-1 ${formErrors.lastName ? 'border-destructive' : ''}`}
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          maxLength={50}
                          required
                        />
                        {formErrors.lastName && (
                          <p className="text-sm text-destructive mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {formErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">{t('contact.email')} *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email" 
                          placeholder="john@example.com" 
                          className={`mt-1 ${formErrors.email ? 'border-destructive' : ''}`}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          maxLength={254}
                          required
                        />
                        {formErrors.email && (
                          <p className="text-sm text-destructive mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">{t('contact.phone')}</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          placeholder="+237 XXX XXX XXX" 
                          className={`mt-1 ${formErrors.phone ? 'border-destructive' : ''}`}
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          maxLength={20}
                        />
                        {formErrors.phone && (
                          <p className="text-sm text-destructive mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">{t('contact.company')}</Label>
                        <Input 
                          id="company"
                          name="company"
                          placeholder="Your company name" 
                          className="mt-1"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">{t('contact.service')}</Label>
                        <select 
                          id="service"
                          name="service"
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                        >
                          <option value="">{t('contact.selectService')}</option>
                          <option value="web-development">{t('contact.webDevelopment')}</option>
                          <option value="startup-consulting">{t('contact.startupConsulting')}</option>
                          <option value="document-processing">{t('contact.documentProcessing')}</option>
                          <option value="megaconnect">{t('contact.megaconnect')}</option>
                          <option value="other">{t('contact.other')}</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">{t('contact.budget')}</Label>
                      <select 
                        id="budget"
                        name="budget"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      >
                        <option value="">{t('contact.selectBudget')}</option>
                        <option value="under-1k">{t('contact.under1k')}</option>
                        <option value="1k-5k">{t('contact.budget1k5k')}</option>
                        <option value="5k-10k">{t('contact.budget5k10k')}</option>
                        <option value="10k-25k">{t('contact.budget10k25k')}</option>
                        <option value="25k-plus">{t('contact.budget25kPlus')}</option>
                        <option value="discuss">{t('contact.discuss')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">{t('contact.message')} *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder={t('contact.messagePlaceholder')}
                        className={`mt-1 min-h-[150px] ${formErrors.message ? 'border-destructive' : ''}`}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        maxLength={2000}
                        required
                      />
                      <div className="flex justify-between mt-1">
                        {formErrors.message && (
                          <p className="text-sm text-destructive flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {formErrors.message}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground ml-auto">
                          {formData.message.length}/2000
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">{t('contact.timeline')}</Label>
                      <select 
                        id="timeline"
                        name="timeline"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                      >
                        <option value="">{t('contact.selectTimeline')}</option>
                        <option value="asap">{t('contact.asap')}</option>
                        <option value="1-month">{t('contact.oneMonth')}</option>
                        <option value="2-3-months">{t('contact.twoThree')}</option>
                        <option value="6-months">{t('contact.sixMonths')}</option>
                        <option value="flexible">{t('contact.flexible')}</option>
                      </select>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full megah-btn-primary py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.sendBtn')} 
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Office Location */}
              <Card className="megah-card-hover border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('contact.officeLocation')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact.officeAddress')}<br />
                        {t('contact.city')}<br />
                        {t('contact.region')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="megah-card-hover border-2 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('contact.phone')}</h3>
                      <p className="text-muted-foreground">
                        +237 675859441<br />
                        +237 675859441 (WhatsApp)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="megah-card-hover border-2 border-megah-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('contact.email')}</h3>
                      <p className="text-muted-foreground">
                        info@megahconsult.com<br />
                        support@megahconsult.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="megah-card-hover border-2 border-megah-yellow/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-megah-yellow to-megah-green rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t('contact.businessHours')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact.weekdays')}: 8:00 AM - 6:00 PM<br />
                        {t('contact.saturday')}: 9:00 AM - 2:00 PM<br />
                        {t('contact.sunday')}: {t('contact.closed')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t('contact.followUs')}</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1FTdNP8Kbi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    <a href="https://www.linkedin.com/company/megahconsult/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Youtube className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold megah-gradient-text mb-4">{t('contact.findUs')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('contact.findUsDesc')}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
            <Map />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('contact.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+237675859441">
              <Button size="lg" className="megah-btn-primary px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" /> {t('contact.callNow')}
              </Button>
            </a>
            <a href="mailto:info@megahconsult.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" /> {t('contact.emailUs')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

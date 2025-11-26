import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimiter.canAttempt('contact-form', 3, 60000)) {
      toast({
        title: "Too many attempts",
        description: "Please wait before submitting again.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
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
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Contact <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's start the conversation today.
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
                  <CardTitle className="text-3xl megah-gradient-text">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
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
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
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
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
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
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input 
                          id="company" 
                          placeholder="Your company name" 
                          className="mt-1"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <select 
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web & App Development</option>
                          <option value="startup-consulting">Startup Consulting</option>
                          <option value="document-processing">Document Processing</option>
                          <option value="megaconnect">MegaConnect Platform</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">Project Budget Range</Label>
                      <select 
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-plus">$25,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
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
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <select 
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full megah-btn-primary py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} 
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
                      <h3 className="text-lg font-semibold mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        MEGAH Group of Companies<br />
                        Douala, Cameroon<br />
                        Central Africa
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
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
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
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        megahprince82@gmail.com<br />
                        megahprince82@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="megah-card-hover border-2 border-megah-green/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-megah-green rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-primary">*Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="megah-card-hover border-2 border-megah-yellow/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Douala, Cameroon's economic capital
            </p>
          </div>
          
          <div className="bg-muted rounded-xl overflow-hidden">
            <Map />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join the hundreds of successful businesses that trust MEGAH with their technology needs.
          </p>
          <Button className="megah-btn-primary px-12 py-4 text-lg">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
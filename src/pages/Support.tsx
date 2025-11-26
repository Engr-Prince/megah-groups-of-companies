import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Building, ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Support & <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Sponsorship</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join us in building the future of African technology. Your support empowers the next generation of innovators.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how your support creates real change in African tech communities
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

      {/* Support Options */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Ways to Support</h2>
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
                  <Button className="w-full megah-btn-primary">
                    Choose This Option <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Partner With Us</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can work together to create meaningful impact
            </p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your organization" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="support-type">Support Type</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select support type</option>
                      <option value="individual">Individual Sponsorship</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="community">Community Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your interest in supporting MEGAH and how you'd like to get involved..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full megah-btn-primary py-3 text-lg">
                  Send Partnership Inquiry <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch Directly</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Prefer a direct conversation? Reach out to our partnerships team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="megah-glass rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-megah-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/80 mb-4">megahprince82@gmail.com</p>
              <Button className="megah-btn-primary">
                Send Email
              </Button>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <Phone className="h-12 w-12 text-megah-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">+237 675859441</p>
              <Button className="megah-btn-primary">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
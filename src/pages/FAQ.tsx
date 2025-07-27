import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does MEGAH Group of Companies offer?",
          answer: "MEGAH specializes in four main areas: Web & Mobile App Development, Startup Consulting & Mentorship, Document Processing for travel and business needs, and our MegaConnect internship and job platform. We provide comprehensive technology solutions tailored to African markets."
        },
        {
          question: "Where is MEGAH located and which countries do you serve?",
          answer: "We're headquartered in Douala, Cameroon, but we serve clients across Africa and globally. Our services are available in French and English, and we have experience working with clients in over 15 African countries."
        },
        {
          question: "How can I contact MEGAH for my project?",
          answer: "You can reach us through our contact page, email us at info@megahgroup.com, call us at +237 XXX XXX XXX, or visit our office in Douala. We offer free initial consultations to discuss your project needs."
        }
      ]
    },
    {
      category: "Development Services",
      questions: [
        {
          question: "What technologies do you use for web and app development?",
          answer: "We use modern, industry-standard technologies including React, React Native, Node.js, Python, and cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your specific project requirements and scalability needs."
        },
        {
          question: "How long does it typically take to develop a web application?",
          answer: "Project timelines vary based on complexity, but simple websites take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes! We offer comprehensive support packages including bug fixes, security updates, feature enhancements, and technical support. Our maintenance plans are tailored to your specific needs and budget."
        }
      ]
    },
    {
      category: "MegaConnect Platform",
      questions: [
        {
          question: "What is MegaConnect and how does it work?",
          answer: "MegaConnect is our job and internship platform that connects African talent with opportunities across the continent and globally. Job seekers create profiles, employers post positions, and our AI-powered matching system connects the right talent with the right opportunities."
        },
        {
          question: "Do you provide internships at MEGAH?",
          answer: "Yes! We offer internship programs for students and recent graduates in software development, UI/UX design, project management, and digital marketing. Our internships provide hands-on experience with real projects and mentorship from industry professionals."
        },
        {
          question: "How can companies hire talent through MegaConnect?",
          answer: "Companies can create employer accounts on MegaConnect, post job openings, and access our talent pool. We also offer recruitment services where our team helps identify and vet candidates based on your specific requirements."
        }
      ]
    },
    {
      category: "Startup Consulting",
      questions: [
        {
          question: "What type of startup consulting do you provide?",
          answer: "We offer comprehensive startup consulting including business model development, technical architecture planning, market research, funding strategy, team building guidance, and go-to-market strategy. We work with startups from idea stage to scale-up phase."
        },
        {
          question: "Do you help with funding and investor connections?",
          answer: "Yes, we assist with funding strategy, pitch deck development, and have connections with investors focused on African startups. While we can't guarantee funding, we help prepare startups to be investment-ready and make strategic introductions."
        },
        {
          question: "Can you help validate my business idea?",
          answer: "Absolutely! Market validation is crucial for startup success. We conduct market research, competitor analysis, customer interviews, and prototype testing to validate your business idea before significant investment in development."
        }
      ]
    },
    {
      category: "Document Services",
      questions: [
        {
          question: "What document processing services do you offer?",
          answer: "We assist with visa applications, business registration documents, legal documentation, translation services, apostille and authentication services, and other travel-related paperwork. Our team understands the complexities of African and international documentation requirements."
        },
        {
          question: "How quickly can you process documents?",
          answer: "Processing times vary by document type and destination country. Simple translations take 1-3 days, while visa applications can take 1-4 weeks depending on the embassy requirements. We offer express processing for urgent requests."
        },
        {
          question: "Do you handle documents for all countries?",
          answer: "We primarily specialize in documents for African countries and major international destinations including USA, Canada, Europe, and Asia. For specific country requirements, please contact us to confirm our services in your target destination."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Frequently Asked <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business grow
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
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team is here to help. Reach out through any of these channels for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="megah-card-hover border-2 border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers from our support team
                </p>
                <Button className="megah-btn-primary w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="megah-card-hover border-2 border-accent/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                <p className="text-muted-foreground mb-6">
                  Detailed responses within 24 hours
                </p>
                <Button asChild className="megah-btn-primary w-full">
                  <Link to="/contact">
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="megah-card-hover border-2 border-megah-blue/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our experts
                </p>
                <Button className="megah-btn-primary w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Explore More</h2>
          <p className="text-xl text-white/80 mb-8">
            Learn more about our services and how we can help your business succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="megah-btn-primary px-8 py-3 text-lg">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="megah-btn-glass px-8 py-3 text-lg text-white border-white/30">
              <Link to="/about">
                About MEGAH
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
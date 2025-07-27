import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mbeki",
      role: "CEO, TechStart Africa",
      company: "Lagos, Nigeria",
      rating: 5,
      text: "MEGAH transformed our startup vision into reality. Their technical expertise and understanding of the African market made all the difference. We couldn't have asked for better partners.",
      avatar: "👩🏽‍💼"
    },
    {
      name: "David Kone",
      role: "Founder, AgriTech Solutions",
      company: "Abidjan, Côte d'Ivoire",
      rating: 5,
      text: "The mentorship program at MEGAH gave us the strategic guidance we needed. From business model validation to technical architecture, they supported us every step of the way.",
      avatar: "👨🏿‍💻"
    },
    {
      name: "Marie Nguema",
      role: "Product Manager",
      company: "Libreville, Gabon",
      rating: 5,
      text: "Their document processing service made my visa application seamless. Professional, efficient, and reliable. MEGAH truly understands the needs of African professionals.",
      avatar: "👩🏾‍💼"
    },
    {
      name: "James Ochieng",
      role: "Software Developer",
      company: "Nairobi, Kenya",
      rating: 5,
      text: "I found my dream job through MegaConnect! The platform's focus on African talent and global opportunities is exactly what our continent needs. Highly recommended!",
      avatar: "👨🏿‍💻"
    },
    {
      name: "Amina Hassan",
      role: "Startup Founder",
      company: "Dakar, Senegal",
      rating: 5,
      text: "MEGAH's web development team created a stunning platform for our e-commerce business. Their attention to detail and commitment to excellence exceeded our expectations.",
      avatar: "👩🏽‍💼"
    },
    {
      name: "Emmanuel Togo",
      role: "Business Consultant",
      company: "Douala, Cameroon",
      rating: 5,
      text: "Working with MEGAH has been transformative for our consultancy. Their technical solutions and local market knowledge helped us scale across three countries.",
      avatar: "👨🏾‍💼"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Client <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Testimonials</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from the entrepreneurs, developers, and businesses we've helped grow across Africa
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
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.avatar}
                    </div>
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
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">150+</div>
              <div className="text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">200+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold megah-gradient-text mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Countries Served</div>
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
              "MEGAH doesn't just deliver projects; they deliver dreams. Their deep understanding of African markets combined with world-class technical expertise makes them the perfect partner for any ambitious venture."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-3xl">
                👨🏿‍💼
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">Dr. Kwame Asante</div>
                <div className="text-white/80">Director, African Innovation Hub</div>
                <div className="text-white/60 text-sm">Accra, Ghana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create your success story together. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="megah-btn-primary px-8 py-3 text-lg bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-primary text-primary px-8 py-3 text-lg rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
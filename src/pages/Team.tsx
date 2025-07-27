import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import princePic from "@/assets/team-prince.jpg";
import janePic from "@/assets/team-jane.jpg";
import johnPic from "@/assets/team-john.jpg";
import lindaPic from "@/assets/team-linda.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Tabinyor Prince Emmanuel",
      role: "Co-Founder & Lead Developer",
      image: princePic,
      bio: "Visionary leader with expertise in full-stack development and innovative solutions. Passionate about empowering African tech talent.",
      specialties: ["React", "Node.js", "Cloud Architecture", "Startup Strategy"],
      social: {
        github: "#",
        linkedin: "#",
        email: "prince@megahgroup.com"
      }
    },
    {
      name: "Jane Doe",
      role: "Project Manager",
      image: janePic,
      bio: "Expert project coordinator ensuring seamless delivery of complex tech solutions. Specializes in agile methodologies and team leadership.",
      specialties: ["Agile/Scrum", "Team Leadership", "Client Relations", "Process Optimization"],
      social: {
        github: "#",
        linkedin: "#",
        email: "jane@megahgroup.com"
      }
    },
    {
      name: "John Smith",
      role: "UI/UX Designer",
      image: johnPic,
      bio: "Creative designer crafting beautiful and intuitive user experiences. Expert in modern design systems and user-centered design.",
      specialties: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
      social: {
        github: "#",
        linkedin: "#",
        email: "john@megahgroup.com"
      }
    },
    {
      name: "Linda Kay",
      role: "Marketing Lead",
      image: lindaPic,
      bio: "Strategic marketing professional driving growth and brand awareness. Specialist in digital marketing and community building.",
      specialties: ["Digital Marketing", "Brand Strategy", "Content Creation", "Community Building"],
      social: {
        github: "#",
        linkedin: "#",
        email: "linda@megahgroup.com"
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Our <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the passionate innovators driving Africa's tech revolution
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Mail className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The values and principles that unite our team in building extraordinary solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and embrace new technologies to create groundbreaking solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                Our diverse expertise combines to deliver solutions greater than the sum of our parts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Every project receives our full attention to detail and commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/80 mb-8">
            Ready to be part of Africa's tech revolution? We're always looking for talented individuals to join our team.
          </p>
          <Button className="megah-btn-primary px-8 py-3 text-lg">
            View Open Positions
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
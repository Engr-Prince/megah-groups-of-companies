import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Facebook, Instagram, Award, FileCheck, Star, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import megahCeoPic from "@/assets/megah-ceo.jpg";
import queenPic from "@/assets/team-queen.jpg";
import preciousPic from "@/assets/team-precious.jpg";
import clophasPic from "@/assets/team-clophas.jpg";

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: "Megah T.E.Prince",
      role: t('team.founderRole'),
      image: megahCeoPic,
      bio: t('team.ceoBio'),
      specialties: [
        t('team.fullStackDev'),
        t('team.digitalInnovation'),
        t('team.pastorMinistry'),
        t('team.writingContent'),
        t('team.graphicsDesign')
      ],
      social: {
        github: "#",
        linkedin: "#",
        email: "megahprince82@gmail.com"
      },
      isCeo: true
    },
    {
      name: "Miss Ndi Queen Onella",
      role: "Marketing Lead",
      image: queenPic,
      bio: "Strategic marketing professional driving growth and brand awareness. Specialist in digital marketing and community building.",
      specialties: ["Digital Marketing", "Brand Strategy", "Content Creation", "Community Building"],
      social: {
        facebook: "#",
        instagram: "#",
        email: "queen@megahgroup.com"
      }
    },
    {
      name: "Miss Angel Precious",
      role: "UI/UX Designer",
      image: preciousPic,
      bio: "Creative designer crafting beautiful and intuitive user experiences. Expert in modern design systems and user-centered design.",
      specialties: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        email: "precious@megahgroup.com"
      }
    },
    {
      name: "Mr. Nanje Clophas",
      role: "Project Manager",
      image: clophasPic,
      bio: "Expert project coordinator ensuring seamless delivery of complex tech solutions. Specializes in agile methodologies and team leadership. Also a skilled Python developer.",
      specialties: ["Agile/Scrum", "Team Leadership", "Python Development", "Process Optimization"],
      social: {
        facebook: "#",
        instagram: "#",
        email: "clophas@megahgroup.com"
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {t('team.heroTitle')} <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">{t('team.heroHighlight')}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('team.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CEO Featured Card */}
          {teamMembers.filter(m => m.isCeo).map((member, index) => (
            <Card key={index} className="megah-card-hover border-2 border-primary/30 overflow-hidden mb-12 shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm font-semibold mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">{member.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {member.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">{t('team.specialties')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-foreground rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                        <Mail className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.filter(m => !m.isCeo).map((member, index) => (
              <Card key={index} className="megah-card-hover border-2 border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-64 object-cover ${member.name === "Miss Ndi Queen Onella" ? "object-[center_15%]" : member.name === "Miss Angel Precious" ? "object-[center_20%]" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">{t('team.specialties')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {member.social.facebook && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Facebook className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.instagram && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.email && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognitions Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 megah-gradient-text">
              {t('team.achievementsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('team.achievementsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Projects Delivered */}
            <Card className="megah-card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-megah-primary via-megah-secondary to-megah-accent flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{t('team.projectsDelivered')}</h3>
                <p className="text-muted-foreground text-center">
                  {t('team.projectsDeliveredDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Certified Professionals */}
            <Card className="megah-card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-megah-secondary via-megah-accent to-megah-primary flex items-center justify-center mb-4 mx-auto">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{t('team.certifiedPros')}</h3>
                <p className="text-muted-foreground text-center">
                  {t('team.certifiedProsDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Industry Recognition */}
            <Card className="megah-card-hover animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-megah-accent via-megah-primary to-megah-secondary flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{t('team.industryRecognition')}</h3>
                <p className="text-muted-foreground text-center">
                  {t('team.industryRecognitionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Client Satisfaction */}
            <Card className="megah-card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-megah-primary via-megah-accent to-megah-secondary flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{t('team.clientSatisfaction')}</h3>
                <p className="text-muted-foreground text-center">
                  {t('team.clientSatisfactionDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">{t('team.valuesDriveTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('team.valuesDriveSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('team.innovationFirst')}</h3>
              <p className="text-muted-foreground">
                {t('team.innovationFirstDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('team.collaboration')}</h3>
              <p className="text-muted-foreground">
                {t('team.collaborationDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('team.excellence')}</h3>
              <p className="text-muted-foreground">
                {t('team.excellenceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('team.joinTitle')}</h2>
          <p className="text-xl text-white/80 mb-8">
            {t('team.joinSubtitle')}
          </p>
          <Button className="megah-btn-primary px-8 py-3 text-lg">
            {t('team.viewPositions')}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
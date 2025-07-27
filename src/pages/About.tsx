import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Award, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            About <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">MEGAH</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Building the future of African technology, one innovation at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  MEGAH Group of Companies was born from a vision to transform Africa's technological landscape. 
                  Founded in the vibrant city of Douala, Cameroon, we emerged from the understanding that 
                  Africa's greatest asset is its people and their unlimited potential for innovation.
                </p>
                <p>
                  Our journey began with a simple belief: that with the right tools, mentorship, and 
                  opportunities, African entrepreneurs and developers can compete globally while solving 
                  local challenges. Today, we stand as a testament to that belief.
                </p>
                <p>
                  From our headquarters in Douala, we've expanded our reach across Cameroon and beyond, 
                  empowering startups, training the next generation of tech leaders, and building 
                  solutions that matter to our communities.
                </p>
              </div>
            </div>
            <div className="megah-glass rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Founded in Cameroon</h3>
                    <p className="text-muted-foreground">Rooted in African excellence and innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community First</h3>
                    <p className="text-muted-foreground">Building solutions that empower our people</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                    <p className="text-muted-foreground">World-class solutions with local understanding</p>
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
            <h2 className="text-4xl font-bold mb-6 megah-gradient-text">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="megah-card-hover border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize the African tech landscape by providing world-class technology solutions, 
                  fostering innovation, and empowering the next generation of African tech leaders.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="megah-card-hover border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's leading technology company, recognized globally for innovation, 
                  excellence, and our contribution to the continent's digital transformation.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="megah-card-hover border-2 border-megah-blue/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Values</h3>
                <div className="text-left space-y-2 text-muted-foreground">
                  <p><strong>Innovation:</strong> Pushing boundaries with creative solutions</p>
                  <p><strong>Excellence:</strong> Delivering quality in everything we do</p>
                  <p><strong>Integrity:</strong> Building trust through transparency</p>
                  <p><strong>Community:</strong> Growing together as one Africa</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Innovation, Legacy, and Energy - the three pillars that define the MEGAH spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-megah-green" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-white/80">
                We constantly push the boundaries of what's possible, turning bold ideas into 
                reality through cutting-edge technology and creative problem-solving.
              </p>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-megah-yellow" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Legacy</h3>
              <p className="text-white/80">
                Every project we undertake is designed to leave a lasting positive impact on 
                our communities and contribute to Africa's technological advancement.
              </p>
            </div>

            <div className="megah-glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-megah-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-megah-red" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Energy</h3>
              <p className="text-white/80">
                Our youthful spirit and passion for technology drive us to work with enthusiasm, 
                creativity, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
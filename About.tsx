import { GraduationCap, Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passionate Learner",
      description: "Constantly exploring new technologies and best practices in web development."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Detail-Oriented",
      description: "Focused on creating pixel-perfect, user-friendly interfaces with clean code."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Adapter",
      description: "Quick to learn new frameworks and adapt to different development environments."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Fresh Perspective",
      description: "Bringing modern approaches and innovative solutions to development challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-bold font-space-grotesk gradient-text mb-4">
              About Me
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              A passionate developer ready to contribute fresh ideas and energy to your team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-responsive-xl font-semibold text-foreground">
                  Hi! I'm <span className="text-primary">[Your Name]</span>
                </h3>
                <p className="text-responsive-base text-muted-foreground leading-relaxed">
                  I'm a recent graduate with a strong foundation in web development and a passion for creating 
                  exceptional digital experiences. While I may be new to the industry, I bring enthusiasm, 
                  modern skills, and a fresh perspective to every project.
                </p>
                <p className="text-responsive-base text-muted-foreground leading-relaxed">
                  My journey in tech started with curiosity and has evolved into a dedicated pursuit of 
                  excellence in frontend development. I believe that great user experiences come from 
                  understanding both the technical and human sides of technology.
                </p>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 rounded-xl bg-gradient-surface">
                  <div className="text-2xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-surface">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies Learned</div>
                </div>
              </div>
            </div>

            {/* Right column - Highlights grid */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="group hover-lift bg-card border-card-border transition-all duration-300 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-accent font-medium">
              <span>Ready to contribute and grow with your team</span>
              <Heart className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
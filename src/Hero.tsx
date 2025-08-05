import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={avatarPlaceholder}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 shadow-xl hover-glow transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-responsive-3xl font-bold font-space-grotesk">
              <span className="block text-secondary mb-2">Hello, I'm</span>
              <span className="gradient-text">Your Name Here</span>
            </h1>
            <p className="text-responsive-xl text-muted-foreground max-w-2xl mx-auto">
              Aspiring <span className="text-accent font-semibold">Frontend Developer</span> passionate about creating 
              beautiful, functional web experiences. Ready to bring fresh ideas and dedication to your team.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 font-semibold px-8 py-3 rounded-xl shadow-lg hover-lift"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-xl hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-primary transition-all duration-300 hover-lift group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-accent transition-all duration-300 hover-lift group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-surface hover:bg-secondary transition-all duration-300 hover-lift group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-secondary-foreground" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-primary transition-all duration-300 hover-lift group"
            >
              <FileText className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

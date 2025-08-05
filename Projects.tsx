import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectPlaceholder from "@/assets/project-placeholder.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Name 1",
      description: "Brief description of your project. Explain what it does, what problem it solves, and what technologies you used to build it. This shows your practical application of skills.",
      image: projectPlaceholder,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1-demo.netlify.app",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Project Name 2",
      description: "Another project description highlighting different skills and technologies. Focus on unique features, challenges overcome, and lessons learned during development.",
      image: projectPlaceholder,
      technologies: ["React", "JavaScript", "CSS3", "REST API"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2-demo.netlify.app",
      featured: true,
      status: "Completed"
    },
    {
      id: 3,
      title: "Project Name 3",
      description: "A third project showcasing additional capabilities. Describe the project scope, your role, and the impact or results achieved.",
      image: projectPlaceholder,
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3-demo.netlify.app",
      featured: false,
      status: "Completed"
    },
    {
      id: 4,
      title: "Project Name 4",
      description: "Current or recent project you're working on. Explain the goals, current progress, and what you're planning to implement next.",
      image: projectPlaceholder,
      technologies: ["React", "TypeScript", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "",
      featured: false,
      status: "In Progress"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-bold font-space-grotesk gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work demonstrating practical application of skills and passion for development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className={`group hover-lift bg-card border-card-border overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:grid lg:grid-cols-2 lg:gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <h3 className="text-responsive-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <Star className="h-5 w-5 text-accent fill-current" />
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-primary/20 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-gradient-primary hover:opacity-90"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <div className="text-center mb-12">
                <h3 className="text-responsive-xl font-semibold text-foreground mb-4">
                  Other Projects
                </h3>
                <p className="text-muted-foreground">
                  Additional work showcasing different skills and experiments
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <Card key={project.id} className="group hover-lift bg-card border-card-border overflow-hidden">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-primary/20 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

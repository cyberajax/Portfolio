import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90, color: "bg-gradient-to-r from-orange-500 to-red-500" },
        { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
        { name: "React", level: 80, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 75, color: "bg-gradient-to-r from-blue-600 to-blue-800" },
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design & Styling",
      skills: [
        { name: "Tailwind CSS", level: 85, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
        { name: "Responsive Design", level: 90, color: "bg-gradient-to-r from-green-500 to-blue-500" },
        { name: "UI/UX Principles", level: 70, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "Figma", level: 65, color: "bg-gradient-to-r from-purple-600 to-purple-800" },
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 70, color: "bg-gradient-to-r from-green-600 to-green-800" },
        { name: "Git/GitHub", level: 80, color: "bg-gradient-to-r from-gray-600 to-gray-800" },
        { name: "REST APIs", level: 75, color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
        { name: "MongoDB", level: 60, color: "bg-gradient-to-r from-green-500 to-green-700" },
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 85, color: "bg-gradient-primary" },
        { name: "Team Collaboration", level: 90, color: "bg-gradient-accent" },
        { name: "Quick Learning", level: 95, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
        { name: "Communication", level: 85, color: "bg-gradient-to-r from-blue-500 to-purple-500" },
      ]
    }
  ];

  const technologies = [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
    "Node.js", "Express", "MongoDB", "Git", "GitHub", "Figma", "VS Code",
    "Responsive Design", "REST APIs", "JSON", "NPM", "Webpack", "Vite"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-bold font-space-grotesk gradient-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of modern technologies and skills acquired through dedicated learning and hands-on projects
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover-lift bg-card border-card-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Badge Cloud */}
          <div className="text-center">
            <h3 className="text-responsive-lg font-semibold text-foreground mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border border-border"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learning journey note */}
          <div className="mt-16 text-center">
            <p className="text-responsive-base text-muted-foreground italic">
              "Always learning, always growing. These skills represent my current foundation, 
              and I'm excited to expand them further in a professional environment."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
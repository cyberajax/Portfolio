import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      location: "City, State",
      duration: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      description: "Specialized in software development, data structures, algorithms, and web technologies. Completed coursework in database management, software engineering, and computer networks.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Led final year project on web application development",
        "Active member of Computer Science Society"
      ],
      relevant_courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks"
      ]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Your School Name",
      location: "City, State",
      duration: "2018 - 2020",
      grade: "Percentage: 85%",
      description: "Focused on Mathematics and Computer Science. Built a strong foundation in logical thinking and problem-solving.",
      achievements: [
        "School topper in Computer Science",
        "Participated in National Science Olympiad",
        "Organized school tech fest"
      ],
      relevant_courses: [
        "Mathematics",
        "Computer Science",
        "Physics",
        "English"
      ]
    }
  ];

  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-RWD-2023",
      skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
      verified: true
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-JSADS-2023",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures"],
      verified: true
    },
    {
      title: "React Developer Course",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-REACT-2024",
      skills: ["React", "React Hooks", "State Management", "Component Design"],
      verified: true
    },
    {
      title: "Git and GitHub Essentials",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-GIT-2023",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      verified: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-2xl font-bold font-space-grotesk gradient-text mb-4">
              Education & Certifications
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning through certifications and courses
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-responsive-xl font-semibold text-foreground mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="group hover-lift bg-card border-card-border">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-muted-foreground">
                          <span className="font-medium text-accent">{edu.institution}</span>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {edu.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {edu.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-medium text-foreground mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <Award className="mr-2 h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h5 className="font-medium text-foreground mb-3">Relevant Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant_courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="border-primary/20 text-primary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-responsive-xl font-semibold text-foreground mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-accent" />
              Certifications & Courses
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="group hover-lift bg-card border-card-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <p className="text-accent font-medium mt-1">{cert.issuer}</p>
                      </div>
                      {cert.verified && (
                        <Badge variant="default" className="bg-accent text-accent-foreground">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Completed: {cert.date}</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-foreground mb-2">Skills Gained</h6>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs border-accent/20 text-accent">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Journey Note */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-surface border-card-border">
              <CardContent className="p-8">
                <h4 className="text-responsive-lg font-semibold text-foreground mb-4">
                  Continuous Learning Journey
                </h4>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Education doesn't stop at graduation. I'm committed to staying current with 
                  industry trends and continuously expanding my skillset through online courses, 
                  tutorials, and hands-on projects. My goal is to become a lifelong learner 
                  and valuable team member.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
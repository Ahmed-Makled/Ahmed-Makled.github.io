import { Building2, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Team Lead",
      company: "Roboost",
      location: "Cairo, Egypt",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading frontend development team in building scalable logistics and delivery management platform.",
      achievements: [
        "Led team of 5+ developers in modernizing legacy Angular applications",
        "Improved application performance by 40% through code optimization",
        "Implemented Mac Tool Integration for seamless delivery tracking",
        "Established coding standards and best practices across the team",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS", "Jest"]
    },
    {
      title: "Senior Frontend Developer",
      company: "Queen Tech Solutions",
      location: "Cairo, Egypt", 
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed AI-powered SaaS applications with focus on advanced mapping and data visualization.",
      achievements: [
        "Built Skopenow platform with advanced mapping capabilities using Mapbox",
        "Developed real-time data visualization dashboards",
        "Implemented complex search and filtering mechanisms",
        "Optimized bundle size reducing load times by 35%",
        "Collaborated with AI team to integrate machine learning models"
      ],
      technologies: ["Angular", "Mapbox GL JS", "D3.js", "WebSocket", "Material UI"]
    },
    {
      title: "Frontend Developer",
      company: "Mostaql",
      location: "Remote",
      period: "2019 - 2020", 
      type: "Contract",
      description: "Developed freelancing platform features and improved user experience across multiple projects.",
      achievements: [
        "Built responsive user interfaces for freelancing marketplace",
        "Implemented payment integration systems",
        "Developed project management dashboard",
        "Enhanced mobile responsiveness across platform",
        "Reduced bounce rate by 25% through UX improvements"
      ],
      technologies: ["Angular", "Bootstrap", "SASS", "REST APIs", "PWA"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through innovative companies, building scalable solutions and leading high-performing teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="card-glow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
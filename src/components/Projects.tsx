import { ExternalLink, Github, MapPin, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Roboost Mac Tool Integration",
      description: "Advanced delivery tracking system with real-time location monitoring and route optimization for logistics operations.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "TypeScript", "Mapbox GL JS", "WebSocket", "NgRx"],
      features: [
        "Real-time vehicle tracking with 99.9% uptime",
        "Advanced route optimization algorithms",
        "Comprehensive delivery analytics dashboard",
        "Multi-platform mobile and web support"
      ],
      status: "Production",
      impact: "30% improvement in delivery efficiency",
      type: "Enterprise SaaS"
    },
    {
      title: "Skopenow Intelligence Platform",
      description: "AI-powered SaaS platform for data analysis and visualization with advanced mapping capabilities and machine learning integration.",
      image: "/api/placeholder/600/400", 
      technologies: ["Angular", "D3.js", "Mapbox GL JS", "Python APIs", "Material UI"],
      features: [
        "Interactive data visualization dashboards",
        "Advanced geospatial analysis tools",
        "AI-powered pattern recognition",
        "Custom mapping solutions with Leaflet.js"
      ],
      status: "Production",
      impact: "40% faster data analysis workflows",
      type: "AI-Powered SaaS"
    },
    {
      title: "Mostaql Freelance Marketplace",
      description: "Modern freelancing platform with project management, payment processing, and enhanced user experience features.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Bootstrap", "SASS", "PWA", "Payment APIs"],
      features: [
        "Responsive project management interface",
        "Integrated payment processing system",
        "Advanced search and filtering mechanisms",
        "Progressive Web App capabilities"
      ],
      status: "Production",
      impact: "25% reduction in user bounce rate",
      type: "Marketplace Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing scalable solutions that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-muted to-muted/50 min-h-[300px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <MapPin className="w-10 h-10 text-white" />}
                      {index === 1 && <Zap className="w-10 h-10 text-white" />}
                      {index === 2 && <Github className="w-10 h-10 text-white" />}
                    </div>
                    <p className="text-muted-foreground">
                      Project Screenshot
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {project.title}
                          </h3>
                          <div className="flex gap-2 mb-4">
                            <Badge variant="secondary">{project.type}</Badge>
                            <Badge 
                              variant={project.status === "Production" ? "default" : "outline"}
                              className="bg-green-600 text-white"
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-foreground text-sm">Business Impact</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{project.impact}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button size="lg" className="btn-hero">
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
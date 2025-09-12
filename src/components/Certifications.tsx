import { Award, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Certifications = () => {
  const education = [
    {
      institution: "Information Technology Institute (ITI)",
      program: "Advanced Web Development Program",
      period: "2018 - 2019",
      type: "Professional Training",
      description: "Intensive 9-month program covering full-stack web development with focus on Angular and modern JavaScript frameworks.",
      skills: ["Angular", "Node.js", "MongoDB", "RESTful APIs"],
      status: "Completed"
    },
    {
      institution: "National Telecommunication Institute (NTI)",
      program: "Frontend Development Specialization",
      period: "2019",
      type: "Specialization",
      description: "Specialized training in advanced frontend technologies, responsive design, and performance optimization techniques.",
      skills: ["Advanced CSS", "JavaScript ES6+", "Performance Optimization", "Accessibility"],
      status: "Completed"
    },
    {
      institution: "Udacity",
      program: "Frontend Web Developer Nanodegree",
      period: "2018",
      type: "Online Certification",
      description: "Comprehensive program covering modern frontend development practices, project-based learning, and industry best practices.",
      skills: ["React", "JavaScript", "Web APIs", "Testing"],
      status: "Certified"
    }
  ];

  const certifications = [
    {
      title: "Angular Expert Certification",
      issuer: "Google Developers",
      issued: "2023",
      credentialId: "ANG-EXP-2023-001",
      type: "Professional",
      description: "Advanced certification demonstrating expertise in Angular framework, including advanced patterns and best practices."
    },
    {
      title: "TypeScript Advanced Developer",
      issuer: "Microsoft",
      issued: "2022", 
      credentialId: "TS-ADV-2022-456",
      type: "Technical",
      description: "Certification in advanced TypeScript patterns, decorators, and enterprise application development."
    },
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      issued: "2022",
      credentialId: "AWS-DEV-2022-789",
      type: "Cloud",
      description: "Certification in AWS services, serverless architecture, and cloud-based application development."
    },
    {
      title: "Performance Optimization Specialist",
      issuer: "Web Performance Working Group",
      issued: "2021",
      credentialId: "PERF-SPEC-2021-123",
      type: "Specialized",
      description: "Advanced certification in web performance optimization, Core Web Vitals, and application monitoring."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through formal education and professional certifications 
            to stay at the forefront of web development.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Training</h3>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {edu.program}
                      </h4>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge variant="secondary">{edu.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Key Skills Acquired</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-primary/30 text-primary">
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

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-glow group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-primary font-semibold">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {cert.type}
                      </Badge>
                      <p className="text-muted-foreground text-sm">{cert.issued}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 px-3">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Continuous Learning
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Staying current with the latest technologies and best practices through 
            conferences, workshops, and online learning platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Angular Conference 2023", "Frontend Masters", "Pluralsight Pro",
              "Google I/O Extended", "AWS Summit", "Performance.now()",
              "JSConf", "AngularConnect"
            ].map((event, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                {event}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
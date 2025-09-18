import { Award, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Certifications = () => {
  const education = [
    {
      institution: "Information Technology Institute (ITI)",
      program: "Intensive Training Program - Front-end and Cross Platform Development",
      period: "September 2021 - December 2021",
      type: "Professional Training",
      description: "Intensive 3-month program covering modern frontend development and cross-platform mobile development with focus on practical skills and industry best practices.",
      skills: ["Frontend Development", "Cross Platform Development", "JavaScript", "Mobile Development"],
      status: "Completed"
    },
    {
      institution: "National Telecommunication Institute (NTI)",
      program: "Web Development using Node JS and Angular",
      period: "June 2021 - July 2021",
      type: "NanoDegree",
      description: "Connect-intensive NanoDegree program focusing on full-stack web development using Node.js backend and Angular frontend technologies.",
      skills: ["Node.js", "Angular", "Full-Stack Development", "RESTful APIs"],
      status: "Completed"
    },
    {
      institution: "National Telecommunication Institute (NTI)", 
      program: "Web Development using PHP, MySQL and Laravel",
      period: "August 2021 - September 2021",
      type: "NanoDegree",
      description: "Connect-intensive NanoDegree program covering server-side development with PHP, database management with MySQL, and modern web applications using Laravel framework.",
      skills: ["PHP", "MySQL", "Laravel", "Database Management"],
      status: "Completed"
    },
    {
      institution: "Udacity",
      program: "Front End Development Professional",
      period: "2021",
      type: "Nanodegree Program",
      description: "Comprehensive nanodegree program covering modern frontend development practices, responsive design, and JavaScript frameworks with project-based learning approach.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      status: "Completed"
    },
    {
      institution: "National Telecommunication Institute (NTI)",
      program: "Web Design",
      period: "February 2021 - March 2021", 
      type: "NanoDegree",
      description: "Connect-intensive NanoDegree program focusing on web design principles, user interface design, and modern web design techniques.",
      skills: ["Web Design", "UI Design", "Design Principles", "User Experience"],
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Certificate Freelancing",
      issuer: "Professional Development",
      issued: "2021",
      credentialId: "FREELANCE-CERT-2021", 
      type: "Professional",
      description: "Professional certification in freelancing best practices, client management, project delivery, and independent work methodologies."
    },
    {
      title: "JavaScript",
      issuer: "Web Development Authority",
      issued: "2021", 
      credentialId: "JS-CERT-2021",
      type: "Technical",
      description: "Certification demonstrating proficiency in JavaScript programming language, including modern ES6+ features and web application development."
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

        {/* Education & Professional Development Section */}
        <div>
     
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {/* Education Programs */}
            {education.map((edu, index) => (
              <Card key={`edu-${index}`} className="card-professional">
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

            {/* Professional Certifications */}
            {certifications.map((cert, index) => (
              <Card key={`cert-${index}`} className="card-glow group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-primary" />
                        <h4 className="text-lg font-bold text-foreground">
                          {cert.title}
                        </h4>
                      </div>
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
                  
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
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
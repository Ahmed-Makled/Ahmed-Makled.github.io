import { Users, Award, BookOpen, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export const Community = () => {
  const activities = [
    {
      title: "Angular Track Lead",
      organization: "Information Technology Institute (ITI) - Smart Village",
      location: "Smart Village, Cairo",
      period: "2025",
      type: "Mentoring",
      description: "Led Angular track for Java developers, responsible for curriculum design, assignment preparation, and student evaluation.",
      achievements: [
        "Designed and prepared comprehensive Angular assignments and labs",
        "Conducted code reviews and technical evaluations for students",
        "Provided one-on-one mentoring for students facing technical challenges",
        "Helped bridge the gap between Java backend and Angular frontend development",
        "Supported student career transition into full-stack development"
      ],
      technologies: ["Angular", "TypeScript", "JavaScript", "Teaching", "Mentoring"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Market Representative",
      organization: "Information Technology Institute (ITI) - Aswan Branch",
      location: "Aswan, Egypt",
      period: "2024",
      type: "Industry Expert",
      description: "Served as market representative for graduation project discussions, evaluating Front-End and Cross Platform Mobile Development projects from industry perspective.",
      achievements: [
        "Evaluated graduation projects focusing on real-world market viability",
        "Provided industry perspective on business models and target users",
        "Assessed value propositions and monetization strategies of student projects",
        "Guided discussions on scalability and technical feasibility",
        "Helped bridge academic learning with industry requirements",
        "Mentored students on launching products in competitive markets"
      ],
      technologies: ["Project Evaluation", "Business Strategy", "Market Analysis", "Mentoring"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Community & Mentoring
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the developer community through education, mentoring, and industry guidance 
            to help shape the next generation of frontend developers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="timeline-item">
                <Card className="card-glow">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                            {activity.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {activity.title}
                          </h3>
                        </div>
                        <p className="text-primary font-semibold">{activity.organization}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span>{activity.period}</span>
                        </div>
                        <div className="text-muted-foreground text-sm">{activity.location}</div>
                        <Badge variant="secondary">{activity.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {activity.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.technologies.map((tech, i) => (
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

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 max-w-4xl mx-auto">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Commitment to Developer Education
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in giving back to the developer community by sharing knowledge and real-world 
              industry insights. Working with ITI students has been incredibly rewarding, seeing talented 
              individuals transform their ideas into market-viable applications. These experiences remind 
              me of my own journey and reinforce the importance of bridging the gap between academic 
              learning and industry demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
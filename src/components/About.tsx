import { Award, Code2, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Leading frontend teams to deliver exceptional user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Expert",
      description: "Optimizing applications for maximum speed and efficiency"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Building scalable, maintainable codebases with best practices"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SaaS Solutions",
      description: "Architecting AI-powered SaaS applications for business growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Frontend Team Lead with expertise in Angular and modern web technologies.
            I specialize in building high-performance, scalable applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Transforming Ideas into Digital Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With extensive experience at Roboost, Queen Tech Solutions, and Mostaql, I've led teams 
                in developing cutting-edge web applications. Based in El Mansoura, Ad Daqahliyah, Egypt, 
                my passion lies in creating clean, efficient code that not only meets business requirements 
                but exceeds performance expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of modern web technologies to solve real-world problems. 
                Whether it's optimizing application performance, implementing complex mapping solutions 
                with Mapbox and Leaflet.js, or architecting scalable SaaS platforms, I bring both 
                technical expertise and leadership skills to every project.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Core Principles</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Performance-first development approach
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Clean, maintainable code architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Collaborative team leadership
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Continuous learning and innovation
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-professional group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
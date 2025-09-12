import { Code2, Database, Globe, Palette, Settings, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript (ES6+)"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "State Management", 
      icon: <Settings className="w-5 h-5" />,
      skills: ["NgRx", "RxJS", "Redux", "Akita", "Zustand"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mapping & Visualization",
      icon: <Globe className="w-5 h-5" />,
      skills: ["Mapbox GL JS", "Leaflet.js", "D3.js", "Chart.js", "Three.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-5 h-5" />,
      skills: ["Tailwind CSS", "SCSS/SASS", "Material UI", "Bootstrap", "CSS-in-JS"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Performance & Tools",
      icon: <Zap className="w-5 h-5" />,
      skills: ["Webpack", "Vite", "Jest", "Cypress", "Lighthouse Optimization"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const coreSkills = [
    { name: "Angular", level: 95, category: "Expert" },
    { name: "TypeScript", level: 90, category: "Expert" },
    { name: "RxJS", level: 88, category: "Expert" },
    { name: "Mapbox GL JS", level: 85, category: "Advanced" },
    { name: "Performance Optimization", level: 92, category: "Expert" },
    { name: "Team Leadership", level: 88, category: "Advanced" },
    { name: "Leaflet.js", level: 80, category: "Advanced" },
    { name: "Web Architecture", level: 90, category: "Expert" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in modern web technologies, with a focus on Angular ecosystem, 
            mapping solutions, and scalable architecture.
          </p>
        </div>

        {/* Core Skills Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Git/GitHub", "Docker", "AWS", "Firebase", "Figma", "Adobe XD",
              "Jira", "Confluence", "Postman", "Chrome DevTools", "PWA",
              "WebSocket", "Service Workers", "Micro-frontends"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
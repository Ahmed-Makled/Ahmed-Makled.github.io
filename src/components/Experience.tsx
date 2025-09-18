import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Team Lead",
      company: "Roboost",
      website: "http://roboost.ai/",
      location: "Cairo, Egypt",
      period: "January 2025 - Present",
      type: "Full-time",
      description: "Leading a frontend team, focusing on scalable architecture using Angular. Spearheading development of the main Roboost system and new enterprise projects including 'Sira' - a comprehensive customer feedback management platform.",
      achievements: [
        "Leading frontend team development, focusing on scalable architecture for Roboost system and new projects",
        "Developed 'Sira' - a new comprehensive customer feedback and survey management platform alongside the main Roboost system, featuring analytics dashboards",
        "Implemented multi-role authentication, real-time data visualization, and automated reporting systems",
        "Reduced page load time by 60% through performance optimization strategies",
        "Enhanced code quality by implementing code reviews and best practices",
        "Collaborated closely with product and design teams to deliver high-impact features",
        "Utilized modern Angular features including zoneless change detection and reactive programming with RxJS"
      ],
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Tailwind CSS", "Docker", "Highcharts", "ngx-bootstrap", "Vite", "Git"],
      projects: [
        {
          name: "Sira",
          description: "Comprehensive customer feedback and survey management platform featuring analytics dashboards, multi-role authentication, real-time data visualization, and automated reporting systems"
        }
      ]
    },
    {
      title: "Frontend Engineer",
      company: "BlueZones",
      location: "Cairo, Egypt",
      period: "January 2025 - Present",
      type: "Freelance Contract",
      description: "Building and optimizing patient-facing and admin-facing web applications across BlueZones system (Angular) and BlueZones website (Next.js). Focused on performance, scalable architecture, and smooth developer experience.",
      achievements: [
        "Shipped scalable feature modules and shared UI utilities in BlueZones system to improve reuse and velocity",
        "Improved performance with route-level code splitting, image optimization, and caching; reduced initial load and improved Core Web Vitals",
        "Standardized code quality via linting, strict TypeScript configs, and PR review checklists",
        "Implemented robust state management patterns (RxJS/NgRx-style facades in Angular; server components/hooks in Next.js)",
        "Collaborated with backend on API contracts and error handling to streamline integration and observability",
        "Enhanced UX with accessibility-minded components, responsive layouts, and consistent design tokens"
      ],
      technologies: ["Angular", "Next.js", "React", "TypeScript", "RxJS", "SCSS", "Tailwind CSS", "Jest", "SWR", "React Query", "Vercel"]
    },
    {
      title: "Senior Frontend Developer",
      company: "Queen Tech Solutions",
      website: "https://queentechsolutions.net/",
      location: "Cairo, Egypt", 
      period: "February 2024 - December 2024",
      type: "Full-time",
      description: "Worked as a Senior Frontend Developer on Skopenow — an Open Source Intelligence (OSINT) platform that automates the collection and analysis of publicly available information for investigative use.",
      achievements: [
        "Built Skopenow platform — an OSINT platform for automated data collection",
        "Contributed to scalable and maintainable Angular applications",
        "Focused on performance optimization and advanced UI components", 
        "Delivered seamless user experience for investigators and analysts",
        "Worked with advanced data visualization and mapping components"
      ],
      technologies: ["Angular", "TypeScript", "Advanced UI Components", "Data Visualization"],
      projects: [
        {
          name: "Skopenow",
          url: "https://www.skopenow.com/",
          description: "Open Source Intelligence (OSINT) platform for automated data collection and analysis for investigative use"
        }
      ]
    },
    {
      title: "Frontend Developer",
      company: "Al Forsan",
      location: "Cairo, Egypt",
      period: "2024",
      type: "Project-based Contract",
      description: "Developing and maintaining a modern web application with focus on performance and user experience through project-based freelance contract, providing ongoing development and feature updates as needed.",
      achievements: [
        "Built responsive web application using modern frontend technologies",
        "Implemented component-based architecture for better maintainability",
        "Optimized application performance and loading times",
        "Collaborated with cross-functional teams to deliver user-centric features",
        "Maintained high code quality through best practices and testing",
        "Provided ongoing development support for new features and updates"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Angular", "TypeScript", "Responsive Design", "Modern Build Tools", "Git", "Performance Optimization"]
    },
    {
      title: "Frontend Developer",
      company: "Roboost",
      website: "http://roboost.ai/",
      location: "Cairo, Egypt",
      period: "February 2022 - February 2024", 
      type: "Full-time",
      description: "Built and maintained Roboost's web platform — an AI-powered solution for optimizing last-mile delivery operations.",
      achievements: [
        "Developed responsive and scalable Angular applications with focus on performance",
        "Collaborated with product managers and backend teams for customer-centric features",
        "Implemented reusable components and design patterns for maintainability",
        "Participated in code reviews and continuous improvement initiatives",
        "Developed custom browser extension (Mac Tool Integration) for client integrations",
        "Contributed to strategic integrations with major clients like McDonald's"
      ],
      technologies: ["Angular", "TypeScript", "RxJS", "Browser Extensions", "REST APIs"],
      projects: [
        {
          name: "Real-Time Order Tracking System",
          description: "Built a real-time order tracking web application with Angular 19, featuring interactive maps, live delivery updates, customer feedback collection, and multi-language support. Utilized TypeScript, RxJS, Leaflet.js, and responsive design principles."
        },
        {
          name: "Browser Extension Developer - Roboost Order Management Integration",
          description: "Developed a comprehensive browser extension for McDonald's order management system integration, featuring automated data scraping, real-time API communication, and dynamic UI updates. Built with vanilla JavaScript and Chrome Extension APIs, the extension processes order data from web tables, synchronizes with backend services, and provides live status updates with rider information. Implemented robust error handling, caching mechanisms, and hotkey controls for enhanced user workflow efficiency."
        },
        {
          name: "Roboost System Frontend",
          description: "A comprehensive logistics and delivery management platform built with Angular 20+, leveraging the latest framework features for performance and maintainability. Built with standalone Angular components, signals for reactive state, modern control flow, and OnPush change detection for optimal performance. Features modular, scalable UI with 40+ feature modules, advanced user/order/trip management, real-time dashboards and analytics. Implemented automated versioning, multi-stage Docker builds, production-ready NGINX deployment, and CI/CD pipelines with GitHub Actions. Maintained strict code quality via ESLint, Prettier, and SonarCloud with extensive developer documentation."
        },
        {
          name: "Roboost Website",
          description: "Developed the official Roboost corporate website and landing page featuring modern responsive design, company information, service offerings, and client testimonials. Built with Angular, implementing SEO optimization, fast loading times, and engaging user interface to showcase Roboost's AI-powered delivery solutions and attract potential clients."
        }
      ]
    },
    {
      title: "Frontend Developer (Freelance)",
      company: "Independent Contractor",
      location: "Remote",
      period: "March 2021",
      type: "Freelance",
      description: "Providing comprehensive freelance frontend development services across multiple platforms including Mostaql.com marketplace and direct client projects, specializing in responsive web development and modern JavaScript frameworks.",
      achievements: [
        "Developed responsive websites using HTML5, CSS3, JavaScript and jQuery",
        "Built applications using AngularJS and modern frontend frameworks",
        "Created multi-device compatible solutions with responsive design patterns",
        "Delivered Gold Golio project with integrated customer feedback system",
        "Enhanced user experience across various client projects on Mostaql platform",
        "Successfully managed multiple client relationships and project timelines",
        "Multi-tasked across different functions to meet deadlines and expectations"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Angular", "Responsive Design"],
      projects: [
        {
          name: "Gold Golio",
          url: "https://www.goldgolio.com",
          description: "Customer feedback and gold trading platform with responsive design"
        },
        {
          name: "LocalizationNerds",
          description: "Professional translation company website featuring multilingual support, service portfolio, and client management system"
        }
      ]
    },
    {
      title: "Technical Support Specialist",
      company: "Higher Institute of Engineering and Technology in New Damietta",
      location: "Egypt, New Damietta",
      period: "October 2018 - July 2019", 
      type: "Full-time",
      description: "Provided comprehensive technical support to students and faculty, maintaining computer systems and software installations.",
      achievements: [
        "Helped students install and configure various software programs",
        "Identified and implemented hardware and software solutions",
        "Troubleshot and resolved complex technical issues",
        "Diagnosed and repaired computer system faults",
        "Resolved network connectivity and configuration issues",
        "Installed and configured hardware and software systems",
        "Prepared accurate and timely technical reports"
      ],
      technologies: ["Windows OS", "Hardware Troubleshooting", "Network Administration", "Software Installation"]
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
                          {exp.website ? (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-primary/80 transition-colors flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="font-semibold">{exp.company}</span>
                          )}
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

                    {/* Projects section (only for freelancing) */}
                    {exp.projects && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Featured Projects</h4>
                        <div className="space-y-3">
                          {exp.projects.map((project, i) => (
                            <div key={i} className="bg-muted/30 rounded-lg p-4 border border-border">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                                </div>
                               
                              </div>
                              
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
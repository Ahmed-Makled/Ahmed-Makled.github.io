import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text glitch" data-text="Ahmed Makled">
              Ahmed Makled
            </span>
          </h1>

          {/* Professional headline */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Frontend Team Lead
              </span>
              <span className="text-border">|</span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-semibold">
                Angular Expert
              </span>
              <span className="text-border">|</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Scalable SaaS Architect
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Passionate about building high-performance web applications with clean architecture.
            Leading teams to deliver scalable SaaS solutions that drive business growth.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline-glow text-lg px-8 py-4"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://linkedin.com/in/ahmedmakled"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ahmedmakled"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:ahmed@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
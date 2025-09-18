import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/3 to-transparent animate-gradient-pulse" />
      
      {/* Elegant overlay pattern with animation */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-slow-drift" />
        <div className="absolute inset-0 professional-pattern animate-pattern-float" />
      </div>
      
      {/* Enhanced floating elements with varied animations */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/30 rounded-full animate-orbital"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${15 + (i * 7) + Math.random() * 25}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Animated geometric elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-accent/10 rounded-full animate-counter-rotate" />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 border border-primary/5 rounded-full animate-scale-pulse" />
      
      {/* Moving light rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-light-ray" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-light-ray-delayed" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-light-ray-slow" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 left-1/5 w-4 h-4 border border-primary/20 rotate-45 animate-diamond-float" />
        <div className="absolute top-3/5 right-1/5 w-6 h-6 border border-accent/15 animate-square-drift" />
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-primary/10 rounded-full animate-bubble-rise" />
        <div className="absolute top-2/3 right-2/5 w-8 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-line-sweep" />
      </div>

      {/* Spiraling elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`spiral-${i}`}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-spiral"
            style={{
              left: `${50}%`,
              top: `${50}%`,
              animationDuration: `${12 + i * 3}s`,
              animationDelay: `${i * 2}s`,
              transform: `rotate(${i * 60}deg)`,
            }}
          />
        ))}
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 border border-primary/5 rounded-full animate-ring-pulse-1" />
        <div className="absolute w-80 h-80 border border-accent/5 rounded-full animate-ring-pulse-2" />
        <div className="absolute w-64 h-64 border border-primary/3 rounded-full animate-ring-pulse-3" />
      </div>

      {/* Morphing blob shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 right-1/6 w-24 h-24 bg-primary/5 rounded-full animate-blob-morph filter blur-xl" />
        <div className="absolute bottom-1/4 left-1/8 w-32 h-32 bg-accent/5 rounded-full animate-blob-drift filter blur-xl" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/3 rounded-full animate-blob-float filter blur-lg" />
      </div>

      {/* Traveling waves */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-accent/10 animate-wave-travel" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-accent/10 via-primary/15 to-transparent animate-wave-travel-reverse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Professional Introduction */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <span className="text-primary font-light text-sm md:text-base tracking-[0.2em] uppercase">
                 Hello, I'm
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          {/* Enhanced Main heading with professional styling */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight">
              <span className="block mb-2">
                <span className="professional-name-style">Ahmed</span>
              </span>
              <span className="block">
                <span className="professional-name-style font-bold">Makled</span>
              </span>
            </h1>
            
            {/* Subtitle with elegant typography */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Senior Frontend Engineer 
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm md:text-base text-muted-foreground/80 font-light tracking-wider">
                  Angular Specialist • SaaS Architecture • Team Leadership
                </span>
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Professional Description */}
          <div className="mb-12 md:mb-16">
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto font-light">
              Crafting exceptional digital experiences through innovative frontend solutions. 
              <br className="hidden md:block" />
              Specialized in scalable architecture and high-performance applications.
            </p>
          </div>

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
              href="https://github.com/ahmed-makled"
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
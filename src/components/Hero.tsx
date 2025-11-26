import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroProfile from "@/assets/hero_1.jpg"; // Import the image here

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          {/* Profile Picture Section */}
          <div className="relative w-80 h-80 mx-auto mb-8 rounded-full overflow-hidden border-4 border-background/50 shadow-2xl">
            <img 
              src={heroProfile} // Use the imported variable here
              alt="Barathkrishna Satheeshkumar" 
              className="object-cover w-full h-full"
            />
          </div>

          <div className="inline-block px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border">
            <span className="text-sm font-medium text-foreground">Engineer • Researcher • Explorer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Hi! I'm Barath
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Incoming Software Integration Engineer @ Applied Intuition<br />
            MS in Mechanical Engineering @ Carnegie Mellon University<br />
            B.Tech in Mechanical Engineering @ IIT Bombay
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="shadow-medium hover:shadow-strong transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-subtle hover:shadow-medium transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/barathkrishna777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-secondary transition-all shadow-subtle hover:shadow-medium"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/barathkrishnas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-secondary transition-all shadow-subtle hover:shadow-medium"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:barathkrishna1201@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-secondary transition-all shadow-subtle hover:shadow-medium"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
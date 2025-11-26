import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroProfile from "@/assets/hero_1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      
      <div className="container relative z-10 px-6 py-32 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in zoom-in-95 duration-1000">
          
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

          {/* Glassmorphism Card for Intro */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/20 text-primary-foreground border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide uppercase">Engineer • Researcher • Explorer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi! I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] animate-gradient">Barath</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Building the future of autonomous systems at <span className="font-semibold text-white">Applied Intuition</span>
              <br className="hidden md:block" />
              MS in Mechanical Engineering @ <span className="font-semibold text-white">Carnegie Mellon</span>
              <br className="hidden md:block" />
              BTech in Mechanical Engineering @ <span className="font-semibold text-white">IIT Bombay</span>.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 min-w-[160px] h-12 text-base"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white min-w-[160px] h-12 text-base backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            <SocialLink href="https://github.com/barathkrishna777" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com/in/barathkrishnas" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="mailto:barathkrishna1201@gmail.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce duration-2000 text-white/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
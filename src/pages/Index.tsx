import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { TravelHighlights } from "@/components/TravelHighlights";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
      {/* 1. Hero: The "Hook" - Photo & Headline */}
      <Hero />
      
      <div className="relative z-20 bg-background">
        
        {/* 2. Education: Essential Personal Context */}
        <Education />
        
        <Separator className="container opacity-30" />

        {/* 3. Experience: The Core Story (Timeline) */}
        <Experience />

        {/* 4. Skills: Capabilities */}
        <Skills />

        {/* 5. Featured Projects: Teaser for technical work */}
        <div className="bg-muted/20">
          <FeaturedProjects />
        </div>

        {/* 6. Travel: Visual Personality */}
        <TravelHighlights />

        {/* 7. Contact */}
        <Contact />
      </div>
      
      <footer className="py-12 bg-card border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Barathkrishna Satheeshkumar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/barathkrishna777" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/barathkrishnas" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:barathkrishna1201@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
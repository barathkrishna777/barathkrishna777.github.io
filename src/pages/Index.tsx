import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { TravelHighlights } from "@/components/TravelHighlights";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
      {/* 1. Hero: The "Hook" - Photo & Headline */}
      <Hero />
      
      <div className="relative z-20 bg-background">
        
        {/* 2. Current Role: Quick highlight */}
        <section className="py-12 container px-6">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <Briefcase className="w-5 h-5 text-primary" />
               Current Focus
             </h2>
             <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <div>
                      <h3 className="text-xl font-bold text-foreground">Incoming Software Integration Engineer</h3>
                      <p className="text-primary text-lg font-medium">Applied Intuition</p>
                   </div>
                   <div className="text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      Mountain View, CA
                   </div>
                </div>
             </Card>
           </div>
        </section>

        <Separator className="container opacity-30" />
        
        {/* 3. Education: Essential Personal Context (Compact Version) */}
        <Education />
        
        {/* 4. Featured Projects: Teaser for technical work */}
        <div className="bg-muted/20">
          <FeaturedProjects />
        </div>

        {/* 5. Travel: Visual Personality */}
        <TravelHighlights />

        {/* 6. Contact */}
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
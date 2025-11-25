import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Travel from "@/components/Travel";
import Contact from "@/components/Contact";
import { TravelHighlights } from "@/components/TravelHighlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Hero />
      
      <div className="relative z-20 bg-background">
        <Education />
        <Experience />
        
        {/* Divider */}
        <div className="container px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Projects />
        <Skills />
        
        {/* New Gallery Component showing Japan photos */}
        <TravelHighlights />
        
        {/* Keep original travel component for list view of other places */}
        <div className="py-12 bg-muted/10">
          <div className="container px-6">
            <h3 className="text-2xl font-bold text-center mb-8">More Destinations</h3>
            <Travel />
          </div>
        </div>

        <Contact />
      </div>
      
      <footer className="py-8 bg-card border-t border-border">
        <div className="container px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Barathkrishna Satheeshkumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
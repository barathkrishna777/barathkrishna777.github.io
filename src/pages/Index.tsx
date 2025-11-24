import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Travel from "@/components/Travel";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Travel />
      <Contact />
      
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

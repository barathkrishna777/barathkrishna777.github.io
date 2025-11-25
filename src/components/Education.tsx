import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-12">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-full bg-background/50">May 2026</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">MS in Mechanical Engineering Research</h3>
                  <p className="text-primary font-medium text-sm mt-1">Carnegie Mellon University</p>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-medium text-foreground mb-1">Focus:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Optimal Control, Planning for Robotics, Deep Learning</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
              <div className="space-y-4">
                 <div className="flex items-start justify-between">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-full bg-background/50">May 2022</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">B.Tech in Mechanical Engineering</h3>
                  <p className="text-primary font-medium text-sm mt-1">IIT Bombay</p>
                </div>

                <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-medium text-foreground mb-1">Focus:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Control of Nonlinear Dynamical Systems, Microprocessors</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
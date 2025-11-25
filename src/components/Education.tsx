import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Master of Science in Mechanical Engineering Research</h3>
                  <p className="text-primary font-medium">Carnegie Mellon University</p>
                  <p className="text-sm text-muted-foreground">Pittsburgh, PA • May 2026 • GPA: 4.00/4.00</p>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-foreground mb-1">Coursework:</p>
                    <p className="text-sm text-muted-foreground">Optimal Control, Planning for Robotics, Deep Learning, Robot Dynamics</p>
                    <p className="text-sm text-muted-foreground mt-1">Teaching Assistant: Planning for Robotics, Mechatronics Design, Trustworthy AI</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Technology in Mechanical Engineering</h3>
                  <p className="text-primary font-medium">Indian Institute of Technology Bombay</p>
                  <p className="text-sm text-muted-foreground">Mumbai, India • May 2022</p>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-foreground mb-1">Coursework:</p>
                    <p className="text-sm text-muted-foreground">Control of Nonlinear Dynamical Systems, Microprocessors & Automatic Control, Linear & Nonlinear Systems</p>
                  </div>
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

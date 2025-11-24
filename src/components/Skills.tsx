import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Shield } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCategory) => (
  <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: ["C++", "Python", "MATLAB", "Julia", "CMake", "CUDA", "PyTorch", "ROS 1/2", "Git", "Jenkins", "LaTeX"]
    },
    {
      title: "Simulation & Modeling",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ["Gazebo", "MuJoCo", "Isaac Gym", "PyBullet", "Simpack", "ANSYS", "SolidWorks", "Fusion 360", "AutoCAD", "Carmaker"]
    },
    {
      title: "Systems & Safety",
      icon: <Shield className="w-5 h-5 text-primary" />,
      skills: ["Functional Safety", "ASPICE", "SOTIF", "Requirements Definition", "Jama Connect", "Lucidchart", "JIRA", "Confluence"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Tools and technologies I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Zap } from "lucide-react";

interface ProjectProps {
  title: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const ProjectCard = ({ title, period, description, icon }: ProjectProps) => (
  <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-accent mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "Hierarchical Motion Planning",
      period: "Jan 2025 – May 2025",
      description: [
        "Designed hierarchical planner combining Dijkstra-based task-space search and configuration-space sampling",
        "Reduced planning cost by 53%, time by 35%, and vertex count by >50% compared to RRT",
        "Achieved near-optimal trajectories with 70% fewer samples than RRT*"
      ],
      icon: <Code2 className="w-5 h-5 text-primary" />
    },
    {
      title: "RL-Adaptive MPC Control for Quadrupeds",
      period: "Jan 2025 – May 2025",
      description: [
        "Integrated L1 adaptive control into RL-based controller for enhanced robustness",
        "Achieved 4× jump distance under doubled payload mass in sim-to-sim transfer tests",
        "Validated on Go1 quadruped in MuJoCo and Isaac Gym for high-dynamic tasks"
      ],
      icon: <Cpu className="w-5 h-5 text-primary" />
    },
    {
      title: "FSAE / IIT Bombay Racing",
      period: "Feb 2019 – Jul 2022",
      description: [
        "Led team of 110 members to design electric race car, achieving 8th place at Formula Student UK 2022",
        "Engineered planetary gearbox with 24% weight reduction while maintaining performance",
        "Revamped dynamics models, cutting lap-time simulation time by 75%"
      ],
      icon: <Zap className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Research and engineering projects in robotics, autonomous systems, and vehicle dynamics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

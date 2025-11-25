import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Zap, ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Hierarchical Motion Planning",
    period: "Jan 2025 – May 2025",
    category: "Robotics",
    description: [
      "Designed hierarchical planner combining Dijkstra-based task-space search and configuration-space sampling",
      "Reduced planning cost by 53%, time by 35%, and vertex count by >50% compared to RRT",
      "Achieved near-optimal trajectories with 70% fewer samples than RRT*"
    ],
    icon: <Code2 className="w-6 h-6" />,
    tech: ["C++", "Path Planning", "Algorithms"]
  },
  {
    title: "RL-Adaptive MPC Control for Quadrupeds",
    period: "Jan 2025 – May 2025",
    category: "Control Systems",
    description: [
      "Integrated L1 adaptive control into RL-based controller for enhanced robustness",
      "Achieved 4× jump distance under doubled payload mass in sim-to-sim transfer tests",
      "Validated on Go1 quadruped in MuJoCo and Isaac Gym for high-dynamic tasks"
    ],
    icon: <Cpu className="w-6 h-6" />,
    tech: ["Python", "Reinforcement Learning", "MuJoCo"]
  },
  {
    title: "FSAE / IIT Bombay Racing",
    period: "Feb 2019 – Jul 2022",
    category: "Vehicle Dynamics",
    description: [
      "Led team of 110 members to design electric race car, achieving 8th place at Formula Student UK 2022",
      "Engineered planetary gearbox with 24% weight reduction while maintaining performance",
      "Revamped dynamics models, cutting lap-time simulation time by 75%"
    ],
    icon: <Zap className="w-6 h-6" />,
    tech: ["SolidWorks", "ANSYS", "Simulink"]
  },
  {
    title: "Bosch EV Simulation Challenge",
    period: "Jan 2021 – Apr 2021",
    category: "Simulation",
    description: [
      "Led a team of 5 to conceptualize the powertrain of an electric two-wheeler to meet a set of performance benchmarks",
      "Conducted the energy and efficiency calculations for a standard drive cycle with a target range of 85km"
    ],
    icon: <Zap className="w-6 h-6" />,
    tech: ["MATLAB", "Simulink", "Powertrain"]
  },
  {
    title: "Security Surveillance Using Two Agents",
    period: "Dec 2020 – Feb 2021",
    category: "Algorithms",
    description: [
      "Ideated a novel control algorithm to navigate agents on special annular trajectories eliminating dependency on the initial position",
      "Implemented the algorithm on unicycle subjects to validate the annular trajectories for surveillance of large areas"
    ],
    icon: <Zap className="w-6 h-6" />,
    tech: ["Python", "Control Theory", "Multi-Agent"]
  },
  {
    title: "Eikonikos – 3D Scanner",
    period: "May 2019 – Jul 2019",
    category: "Hardware",
    description: [
      "Fabricated a device for generating 3D models with 1 mm precision, using time-of-flight sensors and 3-D printed ABS components",
      "Implemented a lead screw mechanism with 1 mm vertical actuation precision, maintaining alignment within 1° for a sensor platform"
    ],
    icon: <Zap className="w-6 h-6" />,
    tech: ["Embedded Systems", "3D Printing", "Sensors"]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 animate-in fade-in duration-500">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Projects</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of my engineering work, research, and technical experiments.
              </p>
            </div>
            <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/barathkrishna777', '_blank')}>
              <Github className="w-4 h-4" /> Github Profile
            </Button>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 md:p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                          <Badge variant="secondary" className="hidden sm:inline-flex">{project.category}</Badge>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">{project.period}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {project.description.map((item, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 block" />
                          {item}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-background/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
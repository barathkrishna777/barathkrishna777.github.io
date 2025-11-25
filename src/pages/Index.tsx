import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Hierarchical Motion Planning",
    category: "Robotics • Algorithms",
    description: "Designed hierarchical planner combining Dijkstra-based task-space search and configuration-space sampling, reducing planning cost by 53%.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    tags: ["C++", "Motion Planning", "RRT*"]
  },
  {
    title: "RL-Adaptive MPC Control",
    category: "Control Systems • AI",
    description: "Integrated L1 adaptive control into RL-based controller for quadrupeds, achieving 4× jump distance under payload.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    tags: ["Python", "Reinforcement Learning", "MPC"]
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into my technical portfolio.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="hidden md:flex gap-2 group">
              View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Link to="/projects" key={index} className="block group">
              <Card className="h-full p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    {project.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/projects">
            <Button variant="outline" className="w-full gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const ExperienceItem = ({ company, role, location, period, description, isLast }: ExperienceItemProps) => (
  <div className="relative pl-8 md:pl-0">
    {/* Timeline Line for Desktop */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
    
    <div className={`md:flex items-start justify-between gap-10 group ${isLast ? '' : 'mb-12'}`}>
      
      {/* Left Side (Date & Location) - Desktop */}
      <div className="hidden md:block w-1/2 text-right pr-10 pt-2">
        <div className="inline-flex items-center gap-2 text-primary font-semibold mb-1">
          <Calendar className="w-4 h-4" />
          {period}
        </div>
        <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm">
          <MapPin className="w-3 h-3" />
          {location}
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-2 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]" />

      {/* Timeline Line for Mobile */}
      <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-border -translate-x-[5px] ml-[7px]"></div>

      {/* Right Side (Content) */}
      <div className="md:w-1/2 md:pl-10">
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{role}</h3>
            <p className="text-lg font-medium text-foreground/80">{company}</p>
            
            {/* Mobile Only Date/Loc */}
            <div className="md:hidden flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {period}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
            </div>
          </div>
          
          <ul className="space-y-2.5">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground/90 flex gap-3 leading-relaxed">
                <span className="text-primary mt-1.5 text-xs">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Biorobotics Lab, Carnegie Mellon University",
      role: "Robotics Engineer - Capacitor Recycling Robot",
      location: "Pittsburgh, PA",
      period: "Aug 2025 – Present",
      description: [
        "Developed an end-to-end robotic system for automated Tantalum Capacitor removal from PCBs, achieving <1s duty cycle",
        "Built a real-time vision pipeline with YOLO-OBB, OCR, and PCB corner tracking for sub-mm localization",
        "Integrated UR5e manipulator with custom air-chisel end-effector and ROS 2 MoveIt motion planning"
      ]
    },
    {
      company: "PlusAI",
      role: "Systems Engineering Intern",
      location: "Santa Clara, CA",
      period: "May 2025 – Aug 2025",
      description: [
        "Designed GUI-based tool to quantitatively score highway merging scenarios, improving AV performance evaluation",
        "Validated scoring tool across 144 simulation scenarios, achieving 81% classification accuracy and 78% recall",
        "Developed centralized framework for performance metrics management and standardized reporting"
      ]
    },
    {
      company: "MattLab, Carnegie Mellon University",
      role: "Robotics Software Engineer",
      location: "Pittsburgh, PA",
      period: "Aug 2024 – May 2025",
      description: [
        "Engineered aggressive trajectory-tracking strategies for autonomous robots in high-speed scenarios",
        "Integrated control barrier functions and regularization techniques to improve speeds from 3.5 m/s to 6 m/s"
      ]
    },
    {
      company: "Jaguar Land Rover",
      role: "Graduate Vehicle Dynamics Engineer",
      location: "Bengaluru, India",
      period: "Jul 2022 – Jul 2024",
      description: [
        "Developed Roll Stability Control Simulation Tool, reducing simulation time from 1.5 hrs to 3 mins",
        "Built Simulink-to-Carmaker plugin generation tool for rapid virtual testing"
      ]
    },
    {
      company: "Bajaj Auto Ltd.",
      role: "Summer Intern",
      location: "Pune, India",
      period: "May 2021 – Jul 2021",
      description: [
        "Developed a Python based GUI to import, compare and manipulate noise data from different vehicle sources",
        "Implemented critical features like input filtering and plot overlays, reducing man-hours spent on simulations by 20%"
      ]
    },
    {
      company: "Raptee Energy Inc.",
      role: "Vehicle Dynamics Intern",
      location: "Chennai, India",
      period: "Apr 2020 – Jul 2020",
      description: [
        "Developed traction control system for electric bikes, enhancing control by 25% and acceleration by 15%",
        "Optimized suspension parameters, ABS & Hill-Climb systems, leveraging a self-devised transient model constructed on Simulink"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              My career path in robotics and autonomous systems
            </p>
          </div>
          
          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                {...exp} 
                isLast={index === experiences.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
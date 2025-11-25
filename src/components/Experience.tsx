import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceItem = ({ company, role, location, period, description }: ExperienceItemProps) => (
  <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">{role}</h3>
          <p className="text-primary font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">{location} • {period}</p>
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
    </div>
  </Card>
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
        "Integrated UR5e manipulator with custom air-chisel end-effector and ROS 2 MoveIt motion planning",
        "Designed scene-flow-based PCB corner tracker resilient to occlusions for continuous closed-loop operation"
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
        "Developed centralized framework for performance metrics management and standardized reporting",
        "Conducted detailed coverage analysis, expanding simulation set by ~67% with SOTIF (ISO 21448) alignment"
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
        "Built Simulink-to-Carmaker plugin generation tool for rapid virtual testing",
        "Performed comprehensive evaluations to benchmark steering feel, ride comfort, and handling performance"
      ]
    },
    {
      company: "Raptee Energy Inc.",
      role: "Vehicle Dynamics Intern",
      location: "Chennai, India",
      period: "Apr 2020 – Jul 2020",
      description: [
        "Developed traction control system for electric bikes, enhancing control by 25% and acceleration by 15%",
        "Optimized suspension parameters, ABS & Hill-Climb systems using transient model in Simulink"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Building autonomous systems and pushing the boundaries of robotics
            </p>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

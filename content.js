window.BK = {
  email: "barathkrishna1201@gmail.com",
  github: "https://github.com/barathkrishna777",
  linkedin: "https://linkedin.com/in/barathkrishnas",
  resume: "assets/Barath_Satheeshkumar_Resume.pdf",
  work: [
    { n: "01", title: "Autonomous PCB Recycling Robot", org: "Apple-sponsored research · CMU Biorobotics Lab", year: "2025–26", stat: "<1s", statLabel: "extraction duty cycle", desc: "Co-designed a robot that finds and pneumatically extracts tantalum capacitors from circuit boards. Real-time vision with YOLO-OBB, OCR and stereo PCB tracking through occlusion; sub-millimeter localization; UR5e planning and control in ROS 2 + MoveIt.", tags: ["ROS 2", "MoveIt", "YOLO-OBB", "UR5e", "Multi-GPU training"], media: "", video: "media/pcb_demo.mp4", ph: "pcb robot — extraction video" },
    { n: "02", title: "Action-Informed Estimation and Planning", org: "ICRA 2026 · Boston Dynamics Spot", year: "2025", stat: "85%", statLabel: "closed-loop success, vs 35% open-loop", desc: "Mode-based proprioceptive contact estimation that keeps Spot working when vision is occluded, paired with action-conditioned replanning.", tags: ["Spot", "State estimation", "Replanning"], media: "", ph: "spot — occluded manipulation" },
    { n: "03", title: "Flow-CS-PIBT", org: "Learned multi-agent pathfinding", year: "2025", stat: "1,000", statLabel: "agents planned collision-free", desc: "A 16.7M-parameter rectified-flow GNN that guides collision-free planning. Trained by imitation on 1.2M samples from 3,359 expert trajectories; 64.6% all-agent success across 8 maps vs 60.5% for PIBT.", tags: ["PyTorch Geometric", "Rectified flow", "MAPF"], media: "", ph: "mapf rollout — 1,000 agents" },
    { n: "04", title: "Quadruped Jumping, RL + Adaptive MPC", org: "Carnegie Mellon", year: "2025", stat: "8×", statLabel: "jump distance under payload", desc: "Adaptive MPC in the low-level loop of a CAJun-based jumping system, with an RL policy trained against it for robustness to payload changes and better sim-to-real transfer.", tags: ["Reinforcement learning", "Adaptive MPC", "Isaac Gym", "MuJoCo"], media: "media/dog_tracer.gif", ph: "" },
    { n: "05", title: "IIT Bombay Racing", org: "Team Captain · Formula Student", year: "2019–22", stat: "8th", statLabel: "overall, Formula Student UK 2022", desc: "Captained a 110+ member team. Redesigned the planetary gearbox with CAD, FEA and CFD for a 24% weight cut, and made the vehicle dynamics model 75% faster.", tags: ["Vehicle dynamics", "FEA", "CFD"], media: "", ph: "race car — fs uk 2022" }
  ],
  exp: [
    { co: "Tesla", role: "Software Integration Engineer, Vehicle Firmware", loc: "Palo Alto, CA", when: "Jun 2026 — Now", now: true, pts: ["Designed and deployed an ASIL-D longitudinal acceleration safety monitor with active intervention on a safety processor, plus a displacement monitor that prevents creep and rollback.", "Validated through unit, system and SIL tests and offline replay spanning 10M+ driving hours, then in-car.", "Wrote test and validation plans for the backup longitudinal controller, aligned with ISO 26262 and SOTIF."] },
    { co: "CMU Biorobotics Lab", role: "Robotics Research Engineer", loc: "Pittsburgh, PA", when: "Aug 2025 — May 2026", pts: ["Built an Apple-sponsored autonomous PCB recycling robot, from mechanism design to perception and motion planning."] },
    { co: "PlusAI", role: "Systems Engineering Intern, Autonomous Trucks", loc: "Santa Clara, CA", when: "May — Aug 2025", pts: ["Built a scenario difficulty scoring tool: 81% accuracy, 78% recall across 144 simulated scenarios.", "Grew replay regression coverage by over 80% through replay review and trace analysis."] },
    { co: "CMU MattLab", role: "Robotics Software Engineer", loc: "Pittsburgh, PA", when: "Aug 2024 — May 2025", pts: ["Aggressive trajectory tracking with control barrier functions, taking robots from 3.5 to 6 m/s."] },
    { co: "Jaguar Land Rover", role: "Graduate Vehicle Dynamics Engineer", loc: "Bengaluru, India", when: "Jul 2022 — Jul 2024", pts: ["Automated Simulink-to-CarMaker integration and shipped a roll stability simulation tool, cutting runtime from 90 to 3 minutes."] }
  ],
  earlier: [
    { co: "Bajaj Auto", role: "Summer Intern", when: "2021" },
    { co: "Raptee Energy", role: "Vehicle Dynamics Intern", when: "2020" }
  ],
  edu: [
    { school: "Carnegie Mellon University", deg: "M.S. Mechanical Engineering (Research)", when: "2026", focus: "Optimal control, planning, robot learning" },
    { school: "IIT Bombay", deg: "B.Tech. Mechanical Engineering", when: "2022", focus: "Nonlinear control, microprocessors" }
  ],
  skills: [
    { k: "Learning", v: ["Python", "C++", "PyTorch", "PyTorch Geometric", "Reinforcement learning", "Rectified flow"] },
    { k: "Robotics", v: ["ROS 2", "MoveIt", "Adaptive MPC", "Motion planning", "Proprioceptive estimation", "Isaac Gym", "MuJoCo"] },
    { k: "Perception & systems", v: ["YOLO-OBB", "OCR", "Real-time sensing", "Embedded software", "ISO 26262", "SOTIF", "Git", "CMake"] }
  ]
};

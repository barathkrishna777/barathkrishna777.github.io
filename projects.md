# Projects

Here’s a selection of projects showcasing my work in robotics, planning, and control:

---

## T-Cap Recycling Robot (CMU Biorobotics Lab, 2025–Present)
Automated recovery of Tantalum Capacitors from electronic waste using vision-guided manipulation and high-speed motion planning.
- Developed an automated system to recover Tantalum Capacitors from electronic waste, improving sustainability and reducing hazardous manual labor.
- Led the design of an end-to-end perception and manipulation pipeline enabling <1 s duty cycle per extracted component.
- Built a real-time vision stack (YOLO-OBB, OCR, PCB corner/edge tracking) for sub-millimeter 3D localization.
- Integrated a UR5e robot with a custom air-chisel end-effector via ROS 2 + MoveIt for safe, high-speed extraction.
- Designed a scene-flow–based PCB tracker resilient to tool occlusions and PCB variability, supporting continuous closed-loop operation.

---

## Hierarchical Motion Planning (CMU, 2025)
Hierarchical planner for high-DoF arms that combines task-space search with sampling-based planning to reduce cost and computation time.
- Addressed efficient trajectory generation for high-DoF robot arms operating in cluttered environments.
- Combined Dijkstra-based task-space search with configuration-space sampling to reduce search overhead.
- Achieved 53% lower planning cost and 35% faster solve times, using 70% fewer samples than RRT* while maintaining near-optimal paths.
[GitHub Repo](https://github.com/barathkrishna777/Hierarchical-Planning-for-n-DoF-Arms)

---

## RL-Adaptive MPC for Quadrupeds (CMU, 2025)
Robust locomotion controller for quadrupeds that blends L1 adaptive control with reinforcement learning.
- Integrated L1 adaptive control with RL to improve robustness under changing payload and terrain.
- Demonstrated 4× increase in jump distance under doubled payload mass, with improved stability.
- Validated on the Unitree Go1 in MuJoCo and Isaac Gym simulation environments.  
[Repo](https://github.com/Nike353/RL-AFQP/tree/master)

---

## MMPUG - Graduate Researcher (CMU, 2024–2025)
Nonlinear control research for high-speed autonomous robots using control barrier functions and regularization.
- Researched control strategies for high-speed autonomous ground robots in the MMPUG / MattLab group.
- Used control barrier functions and regularization to improve safety and stability at higher speeds.
- Increased operating speed from 3.5 m/s → 6 m/s while maintaining safe behavior.

---

## Formula Student – IIT Bombay Racing (2019–2022)
End-to-end EV race car development as part of a 110-member Formula Student team.
- Led a 110-member student team to design, build, and race an electric formula-style car.
- Engineered a lightweight planetary gearbox with 24% mass reduction at comparable performance.
- Revamped vehicle dynamics and simulation pipelines, reducing computation time by 75%.
- Helped the team place 8th at Formula Student UK 2022.
[Team Website](https://www.iitbracing.org/)

---

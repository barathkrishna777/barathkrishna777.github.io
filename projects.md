<section id="projects" class="projects">
  <h1 class="projects-title">Projects</h1>
  <p class="projects-intro">
    A selection of projects highlighting my work in robotics, motion planning, and control.
  </p>

  <div class="projects-grid">

    <!-- T-Cap Recycling Robot -->
    <article class="project-card">
      <div class="project-image">
        <!-- Placeholder: add /assets/img/tcap-recycling-robot.jpg -->
        <img src="/assets/img/tcap-recycling-robot.jpg"
             alt="T-Cap Recycling Robot at CMU Biorobotics Lab">
      </div>
      <div class="project-content">
        <h2 class="project-name">T-Cap Recycling Robot</h2>
        <p class="project-meta">CMU Biorobotics Lab · 2025–Present</p>
        <p class="project-summary">
          Automated recovery of Tantalum Capacitors from electronic waste using vision-guided
          manipulation and high-speed motion planning.
        </p>
        <ul class="project-points">
          <li>Developed an automated system to recover Tantalum Capacitors from electronic waste, improving sustainability and reducing hazardous manual labor.</li>
          <li>Led the design of an end-to-end perception and manipulation pipeline enabling
              <strong>&lt;1 s duty cycle</strong> per extracted component.</li>
          <li>Built a real-time vision stack (YOLO-OBB, OCR, PCB corner/edge tracking) for
              <strong>sub-millimeter 3D localization</strong>.</li>
          <li>Integrated a UR5e robot with a custom air-chisel end-effector via ROS 2 + MoveIt for safe, high-speed extraction.</li>
          <li>Designed a scene-flow–based PCB tracker resilient to tool occlusions and PCB variability, supporting continuous closed-loop operation.</li>
        </ul>
      </div>
    </article>

    <!-- Hierarchical Motion Planning -->
    <article class="project-card">
      <div class="project-image">
        <!-- Placeholder: add /assets/img/hierarchical-motion-planning.jpg -->
        <img src="/assets/img/hierarchical-motion-planning.jpg"
             alt="Hierarchical motion planning for high-DoF robotic arms">
      </div>
      <div class="project-content">
        <h2 class="project-name">Hierarchical Motion Planning</h2>
        <p class="project-meta">Carnegie Mellon University · 2025</p>
        <p class="project-summary">
          Hierarchical planner for high-DoF arms that combines task-space search with sampling-based planning
          to reduce cost and computation time.
        </p>
        <ul class="project-points">
          <li>Addressed efficient trajectory generation for high-DoF robot arms operating in cluttered environments.</li>
          <li>Combined Dijkstra-based task-space search with configuration-space sampling to reduce search overhead.</li>
          <li>Achieved <strong>53% lower planning cost</strong> and <strong>35% faster solve times</strong>, using
              <strong>70% fewer samples</strong> than RRT* while maintaining near-optimal paths.</li>
        </ul>
        <a class="project-link"
           href="https://github.com/barathkrishna777/Hierarchical-Planning-for-n-DoF-Arms"
           target="_blank" rel="noopener noreferrer">
          View GitHub Repo
        </a>
      </div>
    </article>

    <!-- RL-Adaptive MPC for Quadrupeds -->
    <article class="project-card">
      <div class="project-image">
        <!-- Placeholder: add /assets/img/rl-adaptive-mpc-quadruped.jpg -->
        <img src="/assets/img/rl-adaptive-mpc-quadruped.jpg"
             alt="Quadruped robot using RL-Adaptive MPC">
      </div>
      <div class="project-content">
        <h2 class="project-name">RL-Adaptive MPC for Quadrupeds</h2>
        <p class="project-meta">Carnegie Mellon University · 2025</p>
        <p class="project-summary">
          Robust locomotion controller for quadrupeds that blends L1 adaptive control with reinforcement learning.
        </p>
        <ul class="project-points">
          <li>Integrated <strong>L1 adaptive control</strong> with RL to improve robustness under changing payload and terrain.</li>
          <li>Demonstrated <strong>4× increase in jump distance</strong> under doubled payload mass, with improved stability.</li>
          <li>Validated on the Unitree Go1 in MuJoCo and Isaac Gym simulation environments.</li>
        </ul>
        <a class="project-link"
           href="https://github.com/Nike353/RL-AFQP/tree/master"
           target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    </article>

    <!-- MMPUG – Graduate Researcher -->
    <article class="project-card">
      <div class="project-image">
        <!-- Placeholder: add /assets/img/mmpug-research.jpg -->
        <img src="/assets/img/mmpug-research.jpg"
             alt="High-speed autonomous ground robot research at CMU">
      </div>
      <div class="project-content">
        <h2 class="project-name">MMPUG – Graduate Researcher</h2>
        <p class="project-meta">Carnegie Mellon University · 2024–2025</p>
        <p class="project-summary">
          Nonlinear control research for high-speed autonomous robots using control barrier functions and regularization.
        </p>
        <ul class="project-points">
          <li>Researched control strategies for high-speed autonomous ground robots in the MMPUG / MattLab group.</li>
          <li>Used control barrier functions and regularization to improve safety and stability at higher speeds.</li>
          <li>Increased operating speed from <strong>3.5 m/s → 6 m/s</strong> while maintaining safe behavior.</li>
        </ul>
      </div>
    </article>

    <!-- Formula Student – IIT Bombay Racing -->
    <article class="project-card">
      <div class="project-image">
        <!-- Placeholder: add /assets/img/iitb-racing-formula-student.jpg -->
        <img src="/assets/img/iitb-racing-formula-student.jpg"
             alt="IIT Bombay Racing electric formula student car">
      </div>
      <div class="project-content">
        <h2 class="project-name">Formula Student – IIT Bombay Racing</h2>
        <p class="project-meta">IIT Bombay · 2019–2022</p>
        <p class="project-summary">
          End-to-end EV race car development as part of a 110-member Formula Student team.
        </p>
        <ul class="project-points">
          <li>Led a <strong>110-member</strong> student team to design, build, and race an electric formula-style car.</li>
          <li>Engineered a lightweight planetary gearbox with <strong>24% mass reduction</strong> at comparable performance.</li>
          <li>Revamped vehicle dynamics and simulation pipelines, reducing computation time by <strong>75%</strong>.</li>
          <li>Helped the team place <strong>8th at Formula Student UK 2022</strong>.</li>
        </ul>
        <a class="project-link"
           href="https://www.iitbracing.org/"
           target="_blank" rel="noopener noreferrer">
          Team Website
        </a>
      </div>
    </article>

  </div>
</section>

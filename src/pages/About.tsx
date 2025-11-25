import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Education />
      <Skills />
    </div>
  );
};

export default About;
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Career = () => {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in duration-500">
      <div className="container px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Career Journey</h1>
          <p className="text-xl text-muted-foreground">My professional experience and technical projects.</p>
        </div>
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Career;
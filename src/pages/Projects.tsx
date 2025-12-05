import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src="/cartoonpic.png"
                  alt="Angus headshot"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">AI Agents Showcase</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span className="font-bold">Hi, I'm Angus. Welcome to my portfolio.</span>
                  <br />
                  <br />
                  I specialize in turning the promise of AI into practical, reliable business tools. Below, you'll find a collection of agents I've engineered to solve real-world problem tackling everything from prompt engineering and RAG solutions to complex workflow automation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <ProjectsGrid showTitle={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

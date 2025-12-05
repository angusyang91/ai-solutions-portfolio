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
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Each project represents a unique challenge in enterprise AI—from eliminating hallucinations to automating complex workflows. Click any card to explore the full case study.
              </p>
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

import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, Zap } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="h-full glass-card rounded-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-border">
                <div className="flex-1 pr-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/30">
                      {project.number}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-3xl mx-auto space-y-10">
                  {/* Problem Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-destructive/10">
                        <Target className="w-5 h-5 text-destructive" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        The Problem
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {project.problem}
                    </p>
                  </section>

                  {/* Solution Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Lightbulb className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        The Solution
                      </h3>
                    </div>
                    <ul className="space-y-4 pl-12">
                      {project.solution.map((item, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Impact Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        The Impact
                      </h3>
                    </div>
                    <div className="pl-12">
                      <p className="text-lg font-medium text-foreground bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border-l-2 border-green-500">
                        {project.impact}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

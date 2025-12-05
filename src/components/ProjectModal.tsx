import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, Zap, Image, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  
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
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="h-full bg-card rounded-2xl overflow-hidden flex flex-col border border-border shadow-xl">
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
                          className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-primary/50 hover:decoration-primary"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
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
                      <div className="p-2 rounded-lg bg-emerald-100">
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        The Impact
                      </h3>
                    </div>
                    <div className="pl-12">
                      <p className="text-lg font-medium text-foreground bg-gradient-to-r from-emerald-50 to-transparent p-4 rounded-lg border-l-2 border-emerald-500">
                        {project.impact}
                      </p>
                    </div>
                  </section>

                  {/* Screenshots Section */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Image className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          Screenshots
                        </h3>
                      </div>
                      <div className="pl-12">
                        <div className={`grid gap-6 ${
                          project.screenshots.length === 1 
                            ? 'grid-cols-1' 
                            : project.screenshots.length === 2 
                            ? 'grid-cols-1 md:grid-cols-2' 
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}>
                          {project.screenshots.map((screenshot, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedScreenshot(screenshot)}
                              className="rounded-lg overflow-hidden border border-border bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                              <img
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-64 object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* ROI Section */}
                  {project.roi && (
                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.roi.title || "ROI"}
                        </h3>
                      </div>
                      <div className="pl-12">
                        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 md:p-8">
                          {project.roi.metrics && project.roi.metrics.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                              {project.roi.metrics.map((metric, index) => (
                                <div key={index} className="flex items-start gap-4">
                                  <div className="p-3 rounded-xl bg-emerald-100">
                                    {metric.label.toLowerCase().includes('hour') || metric.label.toLowerCase().includes('time') ? (
                                      <Clock className="w-6 h-6 text-emerald-600" />
                                    ) : metric.label.toLowerCase().includes('dollar') || metric.label.toLowerCase().includes('$') || metric.label.toLowerCase().includes('annual') ? (
                                      <DollarSign className="w-6 h-6 text-emerald-600" />
                                    ) : (
                                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                                    )}
                                  </div>
                                  <div>
                                    <div className="text-3xl font-bold text-emerald-700">{metric.value}</div>
                                    <div className="text-sm text-emerald-600">{metric.label}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {project.roi.description && (
                            <div>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.roi.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedScreenshot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedScreenshot(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              >
                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={selectedScreenshot}
                  alt="Full size screenshot"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

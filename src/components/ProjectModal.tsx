import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, Zap, Image, TrendingUp, Clock, DollarSign, ChevronLeft, ChevronRight, Terminal, Copy, Check, AlertTriangle, Brain, GitBranch, MessageSquare, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const metaPrompt = `You are a Prompt Engineering Expert Agent. Your role is to transform basic user requests into robust, well-engineered prompts optimized for LLM performance.

When a user provides input, follow this process:

1. ANALYZE THE REQUEST
   - Identify the core task & domain
   - Note ambiguities

2. MAKE INFORMED ASSUMPTIONS
   - Target audience, output format, tone, style

3. CONSTRUCT THE ENHANCED PROMPT
   - Clear role definition ("You are a...")
   - Specific task description
   - Output format requirements
   - Few-shot examples

4. OUTPUT FORMAT
   a) Assumptions list
   b) The enhanced prompt
   c) Suggested refinements`;

  const handleCopy = () => {
    navigator.clipboard.writeText(metaPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedScreenshotIndex === null || !project || !project.screenshots) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && selectedScreenshotIndex > 0) {
        setSelectedScreenshotIndex(selectedScreenshotIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedScreenshotIndex < project.screenshots.length - 1) {
        setSelectedScreenshotIndex(selectedScreenshotIndex + 1);
      } else if (e.key === 'Escape') {
        setSelectedScreenshotIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshotIndex, project]);
  
  if (!project) return null;

  const isPromptArchitect = project.id === "prompt-architect";

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
                {isPromptArchitect ? (
                  <div className="max-w-5xl mx-auto space-y-10">
                    {/* Prompt Engineering Guidance Section */}
                    <section>
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">Prompt Engineering Guidance</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                          A collection of system prompts and optimization strategies I use to build robust AI agents.
                        </p>
                      </div>

                      {/* The Agent (Terminal Style) */}
                      <div className="mb-16">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold flex items-center gap-2 text-foreground">
                            <Terminal className="w-5 h-5 text-primary" />
                            The Prompt Refining Agent
                          </h4>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">System Message</span>
                        </div>
                        
                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                          <div className="bg-slate-800 px-4 py-2 flex justify-between items-center border-b border-slate-700">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500" />
                              <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <button 
                              onClick={handleCopy}
                              className="text-xs flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                            >
                              {copied ? <Check size={14} /> : <Copy size={14} />}
                              {copied ? 'Copied!' : 'Copy Prompt'}
                            </button>
                          </div>
                          <pre className="p-6 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                            {metaPrompt}
                          </pre>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground italic">
                          * This agent acts as a middleware layer to sanitize and upgrade user intent before it reaches the execution model.
                        </p>
                      </div>

                      {/* Try it Button and Writer Iframe */}
                      <div className="mb-12">
                        <button
                          onClick={() => setShowIframe(!showIframe)}
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
                        >
                          {showIframe ? "Hide" : "Try it"}
                        </button>
                        
                        {showIframe && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 rounded-xl overflow-hidden border border-border shadow-lg"
                          >
                            <iframe
                              src="https://embed.writer.com/chat/sE_PdZrEzfoA4ZHEz7yHOcrpnRCL4p3R-c78tSv7pv4"
                              className="w-full"
                              style={{ height: "700px" }}
                              allow="clipboard-read; clipboard-write"
                              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                              title="Writer Agent"
                            />
                          </motion.div>
                        )}
                      </div>

                      <hr className="my-12 border-border" />

                      {/* Optimization Techniques Grid */}
                      <div>
                        <h4 className="text-2xl font-bold mb-8 text-foreground">Optimization Techniques</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Card 1: Iterative Context */}
                          <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                              <Layers size={20} />
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground">Iterative Context Gathering</h5>
                            <p className="text-muted-foreground text-sm mb-4">
                              Prevents hallucination by forcing the model to stop and ask questions before generating a solution.
                            </p>
                            <div className="bg-muted p-3 rounded border border-border text-xs font-mono text-muted-foreground">
                              "Before writing... ask me clarifying questions regarding audience, format, and tone."
                            </div>
                          </div>

                          {/* Card 2: Chain of Thought */}
                          <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                              <Brain size={20} />
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground">Chain-of-Thought (CoT)</h5>
                            <p className="text-muted-foreground text-sm mb-4">
                              Improves reasoning capabilities by explicitly instructing the model to "show its work."
                            </p>
                            <div className="bg-muted p-3 rounded border border-border text-xs font-mono text-muted-foreground">
                              "Let's think step-by-step: 1. Analyze... 2. Consider... 3. Synthesize..."
                            </div>
                          </div>

                          {/* Card 3: Few-Shot Learning */}
                          <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                              <GitBranch size={20} />
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground">Few-Shot Learning</h5>
                            <p className="text-muted-foreground text-sm mb-4">
                              Providing static examples (shots) to guide the model on pattern matching and output structure.
                            </p>
                            <ul className="text-xs space-y-2 text-muted-foreground">
                              <li className="flex gap-2"><span className="font-bold">Input:</span> The cat sat... <span className="font-bold">Output:</span> on the mat</li>
                              <li className="flex gap-2"><span className="font-bold">Input:</span> The dog ran... <span className="font-bold">Output:</span> through the park</li>
                            </ul>
                          </div>

                          {/* Card 4: The Incentive Trick */}
                          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                              <AlertTriangle size={100} className="text-amber-500" />
                            </div>
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold">
                                <AlertTriangle size={18} />
                                <h5>The "Incentive" Trick</h5>
                              </div>
                              <p className="text-amber-900 text-sm mb-3 font-medium">
                                Controversial Technique
                              </p>
                              <p className="text-amber-800 text-xs mb-4 leading-relaxed">
                                While some users threaten fines or offer tips ($1M) to the model, this often yields inconsistent results. 
                                <br /><br />
                                <strong>Better approach:</strong> Focus on "stakes" rather than money. "This is critical for production deployment" works better than "I will tip you."
                              </p>
                            </div>
                          </div>

                          {/* Card 5: Role Playing */}
                          <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4 text-pink-600">
                              <MessageSquare size={20} />
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground">Persona & Role-Playing</h5>
                            <p className="text-muted-foreground text-sm mb-4">
                              Assigning a specific persona reduces the search space of the model's training data.
                            </p>
                            <div className="bg-muted p-3 rounded border border-border text-xs font-mono text-muted-foreground">
                              "You are a senior software architect with 15 years experience in distributed systems..."
                            </div>
                          </div>

                          {/* Card 6: Structured Output */}
                          <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                              <Terminal size={20} />
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground">Structured Output (JSON)</h5>
                            <p className="text-muted-foreground text-sm mb-4">
                              Essential for programmatic usage of LLM outputs. Enforce schemas strictly.
                            </p>
                            <div className="bg-muted p-3 rounded border border-border text-xs font-mono text-muted-foreground">
                              {`{ "analysis": "...", "confidence": 0.95 }`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                ) : (
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
                                onClick={() => setSelectedScreenshotIndex(index)}
                                className="rounded-lg overflow-hidden border border-border bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50"
                              >
                                <img
                                  src={screenshot}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  className="w-full h-64 object-cover"
                                  onError={(e) => {
                                    console.error(`Failed to load image: ${screenshot}`);
                                    e.currentTarget.style.display = 'none';
                                  }}
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
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedScreenshotIndex !== null && project.screenshots && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedScreenshotIndex(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              >
                <button
                  onClick={() => setSelectedScreenshotIndex(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                {/* Left Navigation Button */}
                {project.screenshots.length > 1 && selectedScreenshotIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedScreenshotIndex(selectedScreenshotIndex - 1);
                    }}
                    className="absolute left-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                )}

                {/* Right Navigation Button */}
                {project.screenshots.length > 1 && selectedScreenshotIndex < project.screenshots.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedScreenshotIndex(selectedScreenshotIndex + 1);
                    }}
                    className="absolute right-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                )}

                <motion.img
                  key={selectedScreenshotIndex}
                  initial={{ scale: 0.9, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0.9, opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  src={project.screenshots[selectedScreenshotIndex]}
                  alt={`${project.title} screenshot ${selectedScreenshotIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Screenshot Counter */}
                {project.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm z-10">
                    {selectedScreenshotIndex + 1} / {project.screenshots.length}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

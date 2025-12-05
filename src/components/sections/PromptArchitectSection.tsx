import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Content isolated for easy editing
const PROMPT_ARCHITECT_CONTENT = {
  sectionNumber: "05",
  title: "The Prompt Architect",
  tagline: "Transforming vague requests into sophisticated system prompts.",
  description: "An AI agent that elevates basic user intent into detailed, production-ready prompts with proper structure, guardrails, and context.",
  beforeExample: {
    label: "User Input",
    content: "Make me a marketing bot."
  },
  afterExample: {
    label: "Agent Output",
    content: `You are an expert Marketing Content Strategist AI assistant. Your primary role is to help users create compelling marketing content across multiple channels.

## Core Capabilities:
- Generate social media posts optimized for each platform
- Write email marketing campaigns with A/B test variants
- Create blog post outlines with SEO recommendations
- Develop ad copy for PPC campaigns

## Tone & Voice Guidelines:
- Maintain brand consistency across all outputs
- Adapt formality based on target platform
- Use data-driven language when citing statistics

## Guardrails:
- Never make unsubstantiated claims
- Always include CTAs in promotional content
- Flag potentially sensitive topics for review
- Cite sources when referencing industry data

## Output Format:
Structure all responses with clear headers, bullet points for key takeaways, and actionable next steps.`
  }
};

const PromptArchitectSection = () => {
  const { sectionNumber, title, tagline, description, beforeExample, afterExample } = PROMPT_ARCHITECT_CONTENT;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-primary">{sectionNumber}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            {tagline}
          </p>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {description}
          </p>

          {/* Split Screen Comparison */}
          <div className="grid md:grid-cols-2 gap-4 relative">
            {/* Before - Simple Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border border-border overflow-hidden h-full"
            >
              <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {beforeExample.label}
                </span>
              </div>
              <div className="p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-2xl text-muted-foreground italic">
                    "{beforeExample.content}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>

            {/* After - Detailed Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-full"
            >
              <div className="p-4 border-b border-slate-700 bg-slate-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {afterExample.label}
                </span>
              </div>
              <div className="p-6 overflow-auto max-h-[400px]">
                <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {afterExample.content}
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex md:hidden items-center justify-center py-4">
            <ArrowRight className="w-6 h-6 text-primary rotate-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptArchitectSection;

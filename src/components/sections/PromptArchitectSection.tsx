import React, { useState } from 'react';
import { Terminal, Copy, Check, AlertTriangle, Brain, GitBranch, MessageSquare, Layers } from 'lucide-react';

const PromptArchitectSection = () => {
  const [copied, setCopied] = useState(false);

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

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto p-8 font-sans">
        
        {/* HEADER SECTION */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Prompt Engineering Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of system prompts and optimization strategies I use to build robust AI agents.
          </p>
        </header>

        {/* FEATURE: THE AGENT (Terminal Style) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground">
              <Terminal className="w-5 h-5 text-primary" />
              The Prompt Refining Agent
            </h3>
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

        <hr className="my-12 border-border" />

        {/* BEST PRACTICES GRID */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Optimization Techniques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Iterative Context */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Layers size={20} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-foreground">Iterative Context Gathering</h4>
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
              <h4 className="text-lg font-bold mb-2 text-foreground">Chain-of-Thought (CoT)</h4>
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
              <h4 className="text-lg font-bold mb-2 text-foreground">Few-Shot Learning</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Providing static examples (shots) to guide the model on pattern matching and output structure.
              </p>
              <ul className="text-xs space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="font-bold">Input:</span> The cat sat... <span className="font-bold">Output:</span> on the mat</li>
                <li className="flex gap-2"><span className="font-bold">Input:</span> The dog ran... <span className="font-bold">Output:</span> through the park</li>
              </ul>
            </div>

            {/* Card 4: The Incentive Trick (Special Formatting) */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle size={100} className="text-amber-500" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold">
                  <AlertTriangle size={18} />
                  <h4>The "Incentive" Trick</h4>
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
              <h4 className="text-lg font-bold mb-2 text-foreground">Persona & Role-Playing</h4>
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
              <h4 className="text-lg font-bold mb-2 text-foreground">Structured Output (JSON)</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Essential for programmatic usage of LLM outputs. Enforce schemas strictly.
              </p>
              <div className="bg-muted p-3 rounded border border-border text-xs font-mono text-muted-foreground">
                {`{ "analysis": "...", "confidence": 0.95 }`}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptArchitectSection;

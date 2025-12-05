export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string[];
  impact: string;
  tags: string[];
  screenshots?: string[];
  link?: string;
  roi?: {
    title?: string;
    metrics?: Array<{ label: string; value: string }>;
    description?: string;
  };
}

export const projects: Project[] = [
  {
    id: "automated-provisioning-engine",
    number: "01",
    title: "The Automated Agent Builder",
    link: "https://docs.google.com/spreadsheets/d/1-X8MrAKXi76lDLb7v9q51wFd-gJxj191MZ7_imXYqQs/edit?gid=580152572#gid=580152572",
    tagline: "Reducing Customer Onboarding from Weeks to Minutes via Batch Agent Generation.",
    problem: "Enterprise customers faced a 2+ week bottleneck manually implementing 'use cases,' struggling to translate business needs into technical prompts.",
    solution: [
      "Built a 'Refiner Agent' using heuristic automation to expand vague inputs into structured prompts without human intervention.",
      "Chained into a 'JSON Converter' to format outputs for the Writer platform.",
      "Orchestrated via Google Apps Script to batch-process 50+ rows from Google Sheets directly to the API."
    ],
    impact: "Enabled 'Zero-to-Value' sessions where customers deploy 10+ live agents in a single onboarding call.",
    tags: ["Agent Orchestration", "Automation", "Enterprise"],
    screenshots: ["/DCO1.png", "/DCO2.png", "/DCO3.png"],
    roi: {
      description: "Implementation moves from Weeks to Days"
    }
  },
  {
    id: "strictly-grounded-support-expert",
    number: "02",
    title: "The Strictly Grounded Support Expert",
    tagline: "Eliminating Hallucinations in Technical Support via Domain-Bounded Knowledge Graphs.",
    problem: "Standard LLMs failed at context-specific support queries (e.g., 'What are the RBAC limits?'), often retrieving generic or competitor info from the open web.",
    solution: [
      "Implemented a Knowledge Graph to ingest fragmented internal docs (Wikis, API docs).",
      "Enforced 'Strict Domain Bounding' to prevent open-web access, ensuring answers come only from verified internal data."
    ],
    impact: "Achieved 100% answer grounding, allowing vague user queries to yield precise, documentation-backed answers.",
    tags: ["Knowledge Graphs", "RAG", "Technical Support"],
    roi: {
      title: "ROI Calculator",
      metrics: [
        { label: "minutes saved per day", value: "200" },
        { label: "annual impact (labor costs only)", value: "~$17,333" }
      ],
      description: "100% Answer grounding—allowing vague user queries to yield precise, documentation-backed answers."
    }
  },
  {
    id: "agent-blueprint-generator",
    number: "03",
    title: "The Agent Blueprint Generator",
    tagline: "Accelerating Agent Development via Meta-Programming.",
    problem: "Building sophisticated agents required a steep learning curve of visual UI tools + complex Python API integration.",
    solution: [
      "Meta-Programming: An agent that generates fully importable JSON configuration files for new agents.",
      "Co-Pilot: A 'Python Skill' that writes the specific syntax needed for advanced features like Tool Calling."
    ],
    impact: "Democratized technical agent building, reducing 'Idea to Demo' time by hours.",
    tags: ["Meta-Programming", "Developer Tools", "Python"],
    roi: {
      metrics: [
        { label: "of Innovation Time Gained", value: "78 Hours" },
        { label: "Before", value: "2 Weeks" },
        { label: "After", value: "2 Hours" }
      ],
      description: "What takes 2 weeks manually now takes 2 hours."
    }
  },
  {
    id: "life-sciences-ocr-lab",
    number: "04",
    title: "The Life Sciences OCR Lab",
    tagline: "Automating Medical Transcription with Human-in-the-Loop Validation.",
    problem: "A manual, two-person data entry process for handwritten doctor notes was causing massive delays in a Life Sciences workflow.",
    solution: [
      "Multimodal Agent: Ingests images of handwritten notes.",
      "Structured Output: Maps messy handwriting directly to a clean JSON schema (patient_name, etc.) for the system of record.",
      "Workflow Shift: AI takes the 'First Pass,' changing the human role from Data Entry to Review/Verification."
    ],
    impact: "Exponential increase in document throughput and accuracy.",
    tags: ["Multimodal AI", "OCR", "Life Sciences"],
    screenshots: ["/OCR1.png", "/OCR2.png"],
    roi: {
      title: "ROI Highlight",
      metrics: [
        { label: "hours/year saved", value: "300" }
      ],
      description: "AI takes the 'First Pass,' changing the human role from Data Entry to Review/Verification."
    }
  },
  {
    id: "prompt-architect",
    number: "05",
    title: "The Prompt Architect",
    tagline: "Transforming vague requests into sophisticated system prompts.",
    problem: "Users struggled to create production-ready prompts with proper structure, guardrails, and context from basic intent.",
    solution: [
      "An AI agent that elevates basic user intent into detailed, production-ready prompts.",
      "Generates prompts with proper structure, guardrails, and context automatically.",
      "Transforms simple requests like 'Make me a marketing bot' into comprehensive system prompts with tone guidelines, capabilities, and safety measures."
    ],
    impact: "Democratized prompt engineering, enabling non-technical users to create sophisticated AI agent configurations.",
    tags: ["Prompt Engineering", "Meta-Programming", "Developer Tools"]
  }
];

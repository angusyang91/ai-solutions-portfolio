import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

const BlueprintGeneratorSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-primary">03</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Agent Blueprint Generator
            </h2>
          </div>
          
          {/* Hero Stat */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-card rounded-2xl border border-border p-6 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text">78 Hours</div>
                <div className="text-muted-foreground">of Innovation Time Gained</div>
              </div>
            </motion.div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Accelerating agent development via meta-programming. Focus on the Opportunity Cost: 
            what takes 2 weeks manually now takes 2 hours.
          </p>

          {/* Time Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Before</span>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">2 Weeks</div>
              <p className="text-sm text-muted-foreground">
                Steep learning curve of visual UI tools + complex Python API integration
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-primary/5 rounded-xl border border-primary/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider text-primary">After</span>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">2 Hours</div>
              <p className="text-sm text-muted-foreground">
                Meta-programming generates fully importable JSON configs with Python skill co-pilot
              </p>
            </motion.div>
          </div>

          {/* Solution Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">How It Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Meta-Programming:</strong> An agent that generates fully importable JSON configuration files for new agents.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Co-Pilot:</strong> A "Python Skill" that writes the specific syntax needed for advanced features like Tool Calling.</span>
              </li>
            </ul>
            <p className="text-muted-foreground pt-4">
              <strong className="text-foreground">Impact:</strong> Democratized technical agent building, reducing "Idea to Demo" time by hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintGeneratorSection;

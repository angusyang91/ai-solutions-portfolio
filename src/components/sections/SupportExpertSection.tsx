import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp } from "lucide-react";

const SupportExpertSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-primary">02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Strictly Grounded Support Expert
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Eliminating hallucinations in technical support via domain-bounded knowledge graphs. 
            Handling the "ABC" Use Case—nuanced queries that require precise, verified answers.
          </p>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Standard LLMs failed at context-specific support queries (e.g., "What are the RBAC limits?"), 
              often retrieving generic or competitor info from the open web.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">The Solution</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                Implemented a Knowledge Graph to ingest fragmented internal docs (Wikis, API docs).
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                Enforced "Strict Domain Bounding" to prevent open-web access, ensuring answers come only from verified internal data.
              </li>
            </ul>
          </div>

          {/* ROI Calculator Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              ROI Calculator
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">200</div>
                    <div className="text-sm text-muted-foreground">minutes saved per day</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">~$17,333</div>
                    <div className="text-sm text-muted-foreground">annual impact (labor costs only)</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">Achievement</div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Answer grounding—allowing vague user queries to yield precise, documentation-backed answers.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportExpertSection;

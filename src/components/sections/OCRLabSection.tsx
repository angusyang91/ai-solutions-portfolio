import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const OCRLabSection = () => {
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
            <span className="text-sm font-medium text-primary">04</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Life Sciences OCR Lab
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Automating medical transcription with human-in-the-loop validation. 
            Demonstrating accuracy and parsing for handwritten clinical notes.
          </p>

          {/* Before/After Visual Storyboard */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Before: Raw Input
                </span>
              </div>
              <div className="p-4">
                <img 
                  src="/OCR1.png" 
                  alt="Handwritten lab note" 
                  className="w-full h-64 object-cover rounded-lg border border-border"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Handwritten doctor notes requiring manual two-person data entry
                </p>
              </div>
            </motion.div>

            {/* Arrow for desktop */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="p-4 border-b border-border bg-emerald-50">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  After: Structured Output
                </span>
              </div>
              <div className="p-4">
                <img 
                  src="/OCR2.png" 
                  alt="Structured UI with parsed fields" 
                  className="w-full h-64 object-cover rounded-lg border border-border"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Clean JSON schema mapping (patient_name, etc.) ready for system of record
                </p>
              </div>
            </motion.div>
          </div>

          {/* ROI Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">ROI Highlight</h3>
                <p className="text-muted-foreground">
                  AI takes the "First Pass," changing the human role from Data Entry to Review/Verification.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-100">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-700">300</div>
                  <div className="text-sm text-emerald-600">hours/year saved</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Badge variant="outline" className="badge-success">
                Error Reduction Through Automation
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OCRLabSection;

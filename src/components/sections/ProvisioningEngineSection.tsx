import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const ProvisioningEngineSection = () => {
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
            <span className="text-sm font-medium text-primary">01</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Automated Provisioning Engine
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Don't build agents one by one. Our engine loops through your existing Google Sheets, 
            turning rows of data into fully functional agents instantly.
          </p>

          {/* Visual Storyboard */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Step 1: Trigger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step 1: The Trigger
                </span>
              </div>
              <div className="p-4">
                <img 
                  src="/DCO1.png" 
                  alt="Google Sheets data input" 
                  className="w-full h-48 object-cover rounded-lg border border-border"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Zoomed-in view of source Google Sheet with use case data
                </p>
              </div>
            </motion.div>

            {/* Step 2: The Brain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step 2: The Brain
                </span>
              </div>
              <div className="p-4">
                <div className="code-block rounded-lg overflow-hidden">
                  <img 
                    src="/DCO2.png" 
                    alt="JSON configuration output" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Structured JSON configuration for agent deployment
                </p>
              </div>
            </motion.div>

            {/* Step 3: The Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step 3: The Result
                </span>
              </div>
              <div className="p-4">
                <img 
                  src="/DCO3.png" 
                  alt="Final agent dashboard" 
                  className="w-full h-48 object-cover rounded-lg border border-border"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  Fully deployed agent ready for customer use
                </p>
              </div>
            </motion.div>
          </div>

          {/* Key Highlight Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="px-6 py-3 text-base font-semibold badge-success border-2"
            >
              Implementation moves from Weeks to Days
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvisioningEngineSection;

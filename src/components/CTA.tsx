import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-yellow opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/10 mb-6">
              <Zap className="w-4 h-4 text-dark" />
              <span className="text-sm font-semibold text-dark">Start Free Today</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-dark mb-4">
              Ready to Transform Your Preparation?
            </h2>
            <p className="text-lg text-dark/80 max-w-2xl mx-auto mb-8">
              Join 50,000+ students who are already using PrepCalm to achieve their 
              dreams while maintaining their mental well-being.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/onboarding">
                <Button variant="dark" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-sm text-dark/60">No credit card required</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

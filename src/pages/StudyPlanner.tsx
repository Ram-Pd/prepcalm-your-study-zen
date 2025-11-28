import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExamSelector } from "@/components/planner/ExamSelector";
import { WeeklyTimeline } from "@/components/planner/WeeklyTimeline";
import { SyllabusProgress } from "@/components/planner/SyllabusProgress";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";

const StudyPlanner = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>("jee-mains");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Study <span className="text-primary">Planner</span>
                </h1>
                <p className="text-muted-foreground">
                  Your personalized roadmap to success
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Regenerate Plan
                </Button>
                <Button variant="default" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Optimize
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <ExamSelector selected={selectedExam} onSelect={setSelectedExam} />
              <SyllabusProgress />
            </motion.div>

            {/* Right Column - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <WeeklyTimeline />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyPlanner;

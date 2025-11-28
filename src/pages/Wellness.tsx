import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MoodTracker } from "@/components/wellness/MoodTracker";
import { BreathingExercise } from "@/components/wellness/BreathingExercise";
import { MotivationalQuote } from "@/components/wellness/MotivationalQuote";
import { StressMeter } from "@/components/dashboard/StressMeter";
import { Moon, Sun, Droplets, Activity } from "lucide-react";

const wellnessStats = [
  { icon: Moon, label: "Sleep", value: "7.5h", status: "Good" },
  { icon: Activity, label: "Activity", value: "4,200", status: "Steps" },
  { icon: Droplets, label: "Water", value: "6/8", status: "Glasses" },
  { icon: Sun, label: "Breaks", value: "3/4", status: "Taken" },
];

const Wellness = () => {
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Mental <span className="text-primary">Wellness</span>
            </h1>
            <p className="text-muted-foreground">
              A calm mind is a powerful mind. Take care of yourself.
            </p>
          </motion.div>

          {/* Wellness Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {wellnessStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-card-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <MoodTracker />
              <StressMeter level={35} />
              <MotivationalQuote />
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <BreathingExercise />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wellness;

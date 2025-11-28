import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TodaysPlan } from "@/components/dashboard/TodaysPlan";
import { StressMeter } from "@/components/dashboard/StressMeter";
import { QuickTools } from "@/components/dashboard/QuickTools";
import { ProgressChart } from "@/components/dashboard/ProgressChart";
import { Calendar, Target, Flame, Clock } from "lucide-react";

const stats = [
  { icon: Flame, label: "Day Streak", value: "12", color: "text-warning" },
  { icon: Target, label: "Goals Met", value: "8/10", color: "text-success" },
  { icon: Clock, label: "Study Hours", value: "42h", color: "text-info" },
  { icon: Calendar, label: "Days Left", value: "156", color: "text-primary" },
];

const Dashboard = () => {
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
              Welcome back, <span className="text-primary">Aspirant</span>!
            </h1>
            <p className="text-muted-foreground">
              Let's make today count. Your dream is within reach.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-card-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <TodaysPlan />
              <ProgressChart />
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <StressMeter level={45} />
              <QuickTools />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

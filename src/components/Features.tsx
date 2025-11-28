import { motion } from "framer-motion";
import { BookOpen, Brain, Heart, MessageCircle, Calendar, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Study Planner",
    description: "AI-powered schedules that adapt to your pace and syllabus coverage for JEE & NEET.",
  },
  {
    icon: Brain,
    title: "Stress Management",
    description: "Daily check-ins, breathing exercises, and personalized wellness recommendations.",
  },
  {
    icon: MessageCircle,
    title: "Mentor Support",
    description: "Connect with experienced mentors who've been through the same journey.",
  },
  {
    icon: Calendar,
    title: "Revision Cycles",
    description: "Spaced repetition algorithms ensure you never forget what you've learned.",
  },
  {
    icon: Heart,
    title: "Wellness Check-ins",
    description: "Track your mood, sleep, and stress levels to maintain peak performance.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize your growth with detailed charts and insights on your preparation.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to{" "}
            <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PrepCalm combines cutting-edge technology with proven wellness practices 
            to support your entire exam preparation journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

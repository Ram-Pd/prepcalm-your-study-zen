import { motion } from "framer-motion";
import { Wind, Calendar, MessageCircle, Coffee, Brain, Music } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { icon: Wind, label: "Breathe", color: "bg-info/20 text-info", href: "/wellness" },
  { icon: Calendar, label: "Planner", color: "bg-primary/20 text-primary", href: "/planner" },
  { icon: MessageCircle, label: "Mentor", color: "bg-success/20 text-success", href: "/community" },
  { icon: Coffee, label: "Break", color: "bg-warning/20 text-warning", href: "#" },
  { icon: Brain, label: "Focus", color: "bg-accent/20 text-accent", href: "#" },
  { icon: Music, label: "Relax", color: "bg-destructive/20 text-destructive", href: "#" },
];

export const QuickTools = () => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-4 text-card-foreground">
        Quick Tools
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={tool.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, BookOpen, Brain, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  subject: string;
  duration: string;
  completed: boolean;
  icon: React.ElementType;
}

const tasks: Task[] = [
  { id: "1", title: "Organic Chemistry - Reactions", subject: "Chemistry", duration: "2 hrs", completed: true, icon: Brain },
  { id: "2", title: "Calculus - Integration", subject: "Mathematics", duration: "1.5 hrs", completed: true, icon: Calculator },
  { id: "3", title: "Mechanics - Rotational Motion", subject: "Physics", duration: "2 hrs", completed: false, icon: BookOpen },
  { id: "4", title: "Biology - Cell Division", subject: "Biology", duration: "1 hr", completed: false, icon: Brain },
];

export const TodaysPlan = () => {
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Today's Plan
        </h3>
        <span className="text-sm text-muted-foreground">
          {completedCount}/{tasks.length} completed
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 rounded-full bg-muted overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
        />
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
              task.completed
                ? "bg-primary/10 border border-primary/20"
                : "bg-muted/50 border border-border hover:border-primary/30"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              task.completed ? "bg-primary" : "bg-muted"
            )}>
              <task.icon className={cn(
                "w-5 h-5",
                task.completed ? "text-primary-foreground" : "text-muted-foreground"
              )} />
            </div>

            <div className="flex-1">
              <p className={cn(
                "font-medium",
                task.completed ? "text-card-foreground line-through opacity-60" : "text-card-foreground"
              )}>
                {task.title}
              </p>
              <p className="text-sm text-muted-foreground">{task.subject}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {task.duration}
              </div>
              {task.completed ? (
                <CheckCircle2 className="w-6 h-6 text-primary" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

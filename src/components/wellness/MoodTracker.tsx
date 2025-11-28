import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const moods = [
  { emoji: "😊", label: "Great", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😔", label: "Low", value: 2 },
  { emoji: "😰", label: "Stressed", value: 1 },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-2 text-card-foreground">
        How are you feeling today?
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Track your mood to help us personalize your experience
      </p>

      <div className="flex justify-between gap-2">
        {moods.map((mood) => (
          <motion.button
            key={mood.value}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood.value)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 flex-1",
              selectedMood === mood.value
                ? "bg-primary/20 border-2 border-primary"
                : "bg-muted/50 border-2 border-transparent hover:border-border"
            )}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className={cn(
              "text-xs font-medium",
              selectedMood === mood.value ? "text-primary" : "text-muted-foreground"
            )}>
              {mood.label}
            </span>
          </motion.button>
        ))}
      </div>

      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20"
        >
          <p className="text-sm text-card-foreground">
            {selectedMood >= 4
              ? "That's wonderful! Keep up the great energy! 🌟"
              : selectedMood === 3
              ? "It's okay to have neutral days. Small steps matter!"
              : "We're here for you. Consider trying a breathing exercise."}
          </p>
        </motion.div>
      )}
    </div>
  );
};

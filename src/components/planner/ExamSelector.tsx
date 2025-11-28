import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const exams = [
  { id: "jee-mains", name: "JEE Mains", description: "Engineering entrance exam" },
  { id: "jee-advanced", name: "JEE Advanced", description: "Top engineering institutes" },
  { id: "neet", name: "NEET", description: "Medical entrance exam" },
];

interface ExamSelectorProps {
  selected: string | null;
  onSelect: (examId: string) => void;
}

export const ExamSelector = ({ selected, onSelect }: ExamSelectorProps) => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-2 text-card-foreground">
        Select Your Exam
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        We'll customize your study plan based on your target exam
      </p>

      <div className="space-y-3">
        {exams.map((exam) => (
          <motion.button
            key={exam.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(exam.id)}
            className={cn(
              "w-full text-left p-4 rounded-xl transition-all duration-300",
              selected === exam.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:bg-muted border border-border"
            )}
          >
            <p className={cn(
              "font-semibold",
              selected === exam.id ? "text-primary-foreground" : "text-card-foreground"
            )}>
              {exam.name}
            </p>
            <p className={cn(
              "text-sm",
              selected === exam.id ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
              {exam.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

import { motion } from "framer-motion";

interface StressMeterProps {
  level: number; // 0-100
}

export const StressMeter = ({ level }: StressMeterProps) => {
  const getStressColor = () => {
    if (level <= 30) return "bg-success";
    if (level <= 60) return "bg-primary";
    return "bg-destructive";
  };

  const getStressLabel = () => {
    if (level <= 30) return "Calm & Focused";
    if (level <= 60) return "Moderate Stress";
    return "High Stress - Take a Break";
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-4 text-card-foreground">
        Stress Level
      </h3>
      
      <div className="relative h-4 rounded-full bg-muted overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute inset-y-0 left-0 rounded-full ${getStressColor()}`}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{getStressLabel()}</span>
        <span className="font-display font-bold text-2xl text-card-foreground">{level}%</span>
      </div>

      {level > 60 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
        >
          <p className="text-sm text-destructive">
            Consider taking a 5-minute breathing break
          </p>
        </motion.div>
      )}
    </div>
  );
};

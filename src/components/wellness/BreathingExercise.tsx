import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Phase = "inhale" | "hold" | "exhale" | "rest";

const phases: { name: Phase; duration: number; label: string }[] = [
  { name: "inhale", duration: 4, label: "Breathe In" },
  { name: "hold", duration: 4, label: "Hold" },
  { name: "exhale", duration: 4, label: "Breathe Out" },
  { name: "rest", duration: 2, label: "Rest" },
];

export const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration);
  const [cycles, setCycles] = useState(0);

  const currentPhase = phases[currentPhaseIndex];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          if (nextIndex === 0) setCycles((c) => c + 1);
          return phases[nextIndex].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, currentPhaseIndex]);

  const reset = () => {
    setIsActive(false);
    setCurrentPhaseIndex(0);
    setTimeLeft(phases[0].duration);
    setCycles(0);
  };

  const getCircleScale = () => {
    if (currentPhase.name === "inhale") return 1.3;
    if (currentPhase.name === "exhale") return 0.8;
    return 1;
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-2 text-card-foreground">
        4-4-4-2 Breathing
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        A calming technique to reduce anxiety and improve focus
      </p>

      {/* Breathing Circle */}
      <div className="flex flex-col items-center justify-center py-8">
        <motion.div
          animate={{ scale: isActive ? getCircleScale() : 1 }}
          transition={{ duration: currentPhase.duration, ease: "easeInOut" }}
          className="relative w-48 h-48 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhase.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-display text-xl font-semibold text-primary"
              >
                {currentPhase.label}
              </motion.p>
            </AnimatePresence>
            <p className="text-4xl font-display font-bold text-card-foreground mt-2">
              {timeLeft}
            </p>
          </div>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground">
          Cycles completed: <span className="font-semibold text-primary">{cycles}</span>
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant={isActive ? "outline" : "default"}
          size="lg"
          onClick={() => setIsActive(!isActive)}
          className="gap-2"
        >
          {isActive ? (
            <>
              <Pause className="w-5 h-5" /> Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5" /> Start
            </>
          )}
        </Button>
        <Button variant="outline" size="lg" onClick={reset}>
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

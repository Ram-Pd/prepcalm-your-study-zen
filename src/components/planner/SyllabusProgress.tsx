import { motion } from "framer-motion";

const subjects = [
  { name: "Physics", progress: 65, color: "bg-info" },
  { name: "Chemistry", progress: 72, color: "bg-success" },
  { name: "Mathematics", progress: 58, color: "bg-primary" },
  { name: "Biology", progress: 45, color: "bg-warning" },
];

export const SyllabusProgress = () => {
  const overallProgress = Math.round(
    subjects.reduce((acc, s) => acc + s.progress, 0) / subjects.length
  );

  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Syllabus Progress
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-primary">{overallProgress}%</span>
          <span className="text-sm text-muted-foreground">Overall</span>
        </div>
      </div>

      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-card-foreground">{subject.name}</span>
              <span className="text-sm text-muted-foreground">{subject.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${subject.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full rounded-full ${subject.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

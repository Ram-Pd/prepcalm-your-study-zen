import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  day: string;
  date: string;
  topics: { name: string; subject: string; duration: string; completed: boolean }[];
}

const weekData: TimelineItem[] = [
  {
    day: "Mon",
    date: "Dec 2",
    topics: [
      { name: "Thermodynamics", subject: "Physics", duration: "2h", completed: true },
      { name: "Organic Reactions", subject: "Chemistry", duration: "2h", completed: true },
    ],
  },
  {
    day: "Tue",
    date: "Dec 3",
    topics: [
      { name: "Integration", subject: "Maths", duration: "2h", completed: true },
      { name: "Cell Biology", subject: "Biology", duration: "1.5h", completed: false },
    ],
  },
  {
    day: "Wed",
    date: "Dec 4",
    topics: [
      { name: "Optics", subject: "Physics", duration: "2h", completed: false },
      { name: "Coordination Compounds", subject: "Chemistry", duration: "1.5h", completed: false },
    ],
  },
  {
    day: "Thu",
    date: "Dec 5",
    topics: [
      { name: "Probability", subject: "Maths", duration: "2h", completed: false },
      { name: "Genetics", subject: "Biology", duration: "2h", completed: false },
    ],
  },
  {
    day: "Fri",
    date: "Dec 6",
    topics: [
      { name: "Revision Day", subject: "All Subjects", duration: "4h", completed: false },
    ],
  },
];

export const WeeklyTimeline = () => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-6 text-card-foreground">
        This Week's Schedule
      </h3>

      <div className="space-y-4">
        {weekData.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: dayIndex * 0.1 }}
            className="relative"
          >
            {/* Timeline Line */}
            {dayIndex < weekData.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-border" />
            )}

            <div className="flex gap-4">
              {/* Day Indicator */}
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex flex-col items-center justify-center text-xs font-semibold",
                  day.topics.every(t => t.completed)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}>
                  <span>{day.day}</span>
                  <span className="text-[10px] opacity-70">{day.date.split(" ")[1]}</span>
                </div>
              </div>

              {/* Topics */}
              <div className="flex-1 space-y-2 pb-4">
                {day.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg",
                      topic.completed
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-muted/50 border border-border"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {topic.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className={cn(
                          "font-medium text-sm",
                          topic.completed ? "text-card-foreground line-through opacity-60" : "text-card-foreground"
                        )}>
                          {topic.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{topic.subject}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {topic.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

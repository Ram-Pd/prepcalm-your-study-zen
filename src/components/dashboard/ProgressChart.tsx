import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", hours: 4, stress: 30 },
  { day: "Tue", hours: 6, stress: 45 },
  { day: "Wed", hours: 5, stress: 35 },
  { day: "Thu", hours: 7, stress: 55 },
  { day: "Fri", hours: 6, stress: 40 },
  { day: "Sat", hours: 8, stress: 60 },
  { day: "Sun", hours: 4, stress: 25 },
];

export const ProgressChart = () => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-display text-lg font-semibold mb-6 text-card-foreground">
        Weekly Progress
      </h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(50, 100%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(50, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(0, 0%, 50%)"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(0, 0%, 50%)"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(0, 0%, 8%)", 
                border: "1px solid hsl(0, 0%, 20%)",
                borderRadius: "8px",
                color: "hsl(0, 0%, 98%)"
              }}
            />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="hsl(50, 100%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorHours)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Study Hours</span>
        </div>
      </div>
    </div>
  );
};

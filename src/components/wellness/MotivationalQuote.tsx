import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
  },
];

export const MotivationalQuote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const quote = quotes[currentIndex];

  return (
    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-8 h-8 text-primary opacity-50" />
        <Button variant="ghost" size="icon" onClick={nextQuote}>
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-display text-xl font-medium text-card-foreground mb-4 leading-relaxed">
          "{quote.text}"
        </p>
        <p className="text-sm text-primary font-semibold">— {quote.author}</p>
      </motion.div>
    </div>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Brain, Target, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    icon: Brain,
    title: "Reduce Academic Pressure",
    description: "PrepCalm helps you manage stress and anxiety while preparing for competitive exams like JEE and NEET.",
  },
  {
    icon: Target,
    title: "Personalized Study Planners",
    description: "Get AI-powered study schedules tailored to your learning pace, strengths, and exam timeline.",
  },
  {
    icon: Users,
    title: "Mentor Support",
    description: "Connect with experienced mentors who guide you through your preparation journey.",
  },
  {
    icon: Heart,
    title: "Mental Wellness Check-ins",
    description: "Regular wellness assessments and breathing exercises to keep your mind healthy and focused.",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slideVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                {(() => {
                  const Icon = slides[currentSlide].icon;
                  return <Icon className="w-12 h-12 text-primary" />;
                })()}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-md mx-auto mb-12">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={currentSlide === 0 ? "invisible" : ""}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>

            <Button variant="hero" size="lg" onClick={nextSlide} className="group">
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Skip Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip onboarding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

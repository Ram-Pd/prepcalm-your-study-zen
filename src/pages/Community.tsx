import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, BookOpen, Trophy, Star, ArrowRight } from "lucide-react";

const mentors = [
  {
    name: "Dr. Anita Gupta",
    specialty: "Physics & IIT-JEE",
    experience: "15+ years",
    rating: 4.9,
    students: "2,500+",
  },
  {
    name: "Prof. Rajesh Kumar",
    specialty: "Chemistry & NEET",
    experience: "12+ years",
    rating: 4.8,
    students: "1,800+",
  },
  {
    name: "Ms. Priya Menon",
    specialty: "Mathematics",
    experience: "10+ years",
    rating: 4.9,
    students: "2,100+",
  },
];

const resources = [
  { title: "Managing Exam Anxiety", category: "Mental Health", reads: "12.5K" },
  { title: "Effective Study Techniques", category: "Study Tips", reads: "8.2K" },
  { title: "JEE Success Story: From 50%ile to 99%ile", category: "Success Story", reads: "15.8K" },
  { title: "Time Management for Aspirants", category: "Productivity", reads: "9.1K" },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Community & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-muted-foreground">
              Connect with mentors and access valuable learning resources
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Users, label: "Active Students", value: "50K+" },
              { icon: MessageCircle, label: "Mentors", value: "200+" },
              { icon: BookOpen, label: "Resources", value: "1,500+" },
              { icon: Trophy, label: "Success Stories", value: "5,000+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-card border border-border text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-display text-2xl font-bold text-card-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Mentors Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Featured Mentors
              </h2>
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-primary">
                        {mentor.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">{mentor.name}</p>
                      <p className="text-sm text-muted-foreground">{mentor.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-muted-foreground">{mentor.experience}</span>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="w-4 h-4 fill-primary" />
                      {mentor.rating}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {mentor.students} students mentored
                  </p>

                  <Button variant="outline" className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Connect
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Resources Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Popular Resources
              </h2>
              <Button variant="ghost" className="gap-2">
                Browse All <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-card-foreground">{resource.title}</p>
                    <p className="text-sm text-muted-foreground">{resource.category}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{resource.reads} reads</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;

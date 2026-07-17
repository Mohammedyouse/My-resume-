import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const COURSEWORK = [
  "Data Structures & Algorithms",
  "DBMS",
  "OS",
  "Computer Networks",
  "AI",
  "Machine Learning",
  "Discrete Mathematics",
  "Theory of Computation",
  "Cloud Computing",
  "Distributed Systems",
  "Software Engineering"
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none -z-10"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
              {/* Crest Placeholder */}
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                <FaGraduationCap className="w-10 h-10" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Bachelor of Computer Science and Engineering
                </h3>
                <h4 className="text-xl text-primary font-medium mb-4">
                  Symbiosis Institute of Technology
                </h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-foreground/50" />
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-foreground/50" />
                    <span>Expected Graduation: 2027</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {COURSEWORK.map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

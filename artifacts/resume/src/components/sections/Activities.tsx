import { motion } from 'framer-motion';
import { FaUserPlus, FaUsers, FaChalkboardTeacher, FaBookReader, FaProjectDiagram } from 'react-icons/fa';

const ACTIVITIES = [
  {
    title: "Project Based Learning (PBL)",
    description: "Projects and Presentations",
    icon: <FaProjectDiagram className="w-5 h-5" />
  },
  {
    title: "Teamwork & Collaboration",
    description: "Project Collaboration",
    icon: <FaUsers className="w-5 h-5" />
  },
  {
    title: "Technical Seminars",
    description: "Presentations and Seminars",
    icon: <FaChalkboardTeacher className="w-5 h-5" />
  },
  {
    title: "Self-Learning",
    description: "Data Science, AI, and Business Analytics",
    icon: <FaBookReader className="w-5 h-5" />
  },
  {
    title: "Academic Participation",
    description: "Academic and technical projects",
    icon: <FaUserPlus className="w-5 h-5" />
  }
];

export function Activities() {
  return (
    <section className="py-20 bg-background relative z-10 border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Activities & Leadership</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border px-6 py-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors flex-1 min-w-[280px] max-w-[400px]"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                {activity.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{activity.title}</h3>
                <p className="text-muted-foreground text-xs">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

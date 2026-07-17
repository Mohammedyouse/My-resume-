import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const PROJECTS = [
  {
    title: "Carbon Emission Analysis & Business Carbon Savings Simulator",
    description: "Analyzed carbon emissions and simulated business carbon cost savings to demonstrate financial benefits of sustainable practices.",
    tech: ["Python", "Data Analysis", "Data Visualization"],
    github: "https://github.com/Mohammedyouse",
    demo: "#",
    gradient: "from-teal-500/20 to-emerald-500/20"
  },
  {
    title: "Prediction of Mental Health of Teenagers",
    description: "Machine learning model to predict mental health conditions based on behavioral and survey data.",
    tech: ["Python", "Machine Learning", "scikit-learn"],
    github: "https://github.com/Mohammedyouse",
    demo: "#",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "StudyAssistant – Student Productivity Platform",
    description: "Platform to help students manage time, tasks, and academic progress effectively.",
    tech: ["Python", "Web Development"],
    github: "https://github.com/Mohammedyouse",
    demo: "#",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Python Games Development",
    description: "Snake game and elevator simulation game focused on logic building and problem-solving.",
    tech: ["Python", "Game Development"],
    github: "https://github.com/Mohammedyouse",
    demo: "#",
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                {/* Abstract decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                  <FaGithub className="w-8 h-8 text-foreground/80" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.demo}>
                      <FaExternalLinkAlt className="w-3.5 h-3.5" /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

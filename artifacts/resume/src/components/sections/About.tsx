import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science and Engineering student with a strong interest in Data Science, Artificial Intelligence, and data-driven decision-making. Experienced in academic and personal projects including machine learning, data analysis, and software development. Motivated to pursue a Master's degree in Data Science and work on technology-driven solutions that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex-1">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To leverage my skills in Data Science and AI to build impactful solutions that support data-driven decision-making in organizations and communities, while continuously growing as a software engineer and researcher.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Languages</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Arabic</span>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Native</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium text-foreground">English</span>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full text-right">Professional Working</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

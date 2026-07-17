import { motion } from 'framer-motion';
import { SiPython, SiCplusplus, SiC, SiJavascript, SiHtml5, SiMysql, SiGit, SiGithub } from 'react-icons/si';
import { FaJava, FaChartBar, FaBrain, FaDatabase, FaServer, FaUsers, FaLightbulb, FaClock, FaComments, FaCss3Alt } from 'react-icons/fa';

const SKILLS_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <FaServer className="text-primary w-5 h-5" />,
    skills: [
      { name: "Python", icon: <SiPython className="w-5 h-5" /> },
      { name: "SQL", icon: <SiMysql className="w-5 h-5" /> },
      { name: "C", icon: <SiC className="w-5 h-5" /> },
      { name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
      { name: "Java", icon: <FaJava className="w-5 h-5" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
      { name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
      { name: "CSS", icon: <FaCss3Alt className="w-5 h-5" /> },
    ]
  },
  {
    title: "Data Science",
    icon: <FaChartBar className="text-primary w-5 h-5" />,
    skills: [
      { name: "Machine Learning", icon: <FaBrain className="w-5 h-5" /> },
      { name: "Data Analysis", icon: <FaChartBar className="w-5 h-5" /> },
      { name: "Data Visualization", icon: <FaChartBar className="w-5 h-5" /> },
    ]
  },
  {
    title: "Computer Science",
    icon: <FaDatabase className="text-primary w-5 h-5" />,
    skills: [
      { name: "Data Structures", icon: null },
      { name: "Algorithms", icon: null },
      { name: "DBMS", icon: <FaDatabase className="w-5 h-5" /> },
      { name: "Operating Systems", icon: null },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <SiGit className="text-primary w-5 h-5" />,
    skills: [
      { name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
      { name: "Excel", icon: null },
    ]
  },
  {
    title: "Soft Skills",
    icon: <FaUsers className="text-primary w-5 h-5" />,
    skills: [
      { name: "Communication", icon: <FaComments className="w-5 h-5" /> },
      { name: "Negotiation", icon: null },
      { name: "Problem Solving", icon: <FaLightbulb className="w-5 h-5" /> },
      { name: "Teamwork", icon: <FaUsers className="w-5 h-5" /> },
      { name: "Time Management", icon: <FaClock className="w-5 h-5" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SKILLS_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className={`bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col ${
                index === SKILLS_CATEGORIES.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg shadow-sm text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill.icon && <span className="text-muted-foreground">{skill.icon}</span>}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

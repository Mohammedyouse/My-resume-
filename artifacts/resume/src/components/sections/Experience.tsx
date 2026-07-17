import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaStore } from 'react-icons/fa';

const EXPERIENCES = [
  {
    title: "ERP Accountant",
    company: "Al-Mutakamel Accounting System (Yemen Soft)",
    icon: <FaBuilding className="w-5 h-5" />,
    description: "Used ERP accounting system managing sales, purchases, journal entries, AR/AP, inventory, and financial transactions.",
    responsibilities: [
      "Recorded transactions, managed invoices, tracked inventory, and handled financial records.",
      "Developed skills in accounting systems, business operations, and enterprise software."
    ]
  },
  {
    title: "Sales and Shop Assistant",
    company: "Bookstore & Mobile Services Shop",
    icon: <FaStore className="w-5 h-5" />,
    description: "Provided school supplies, accessories, and mobile services to local customers.",
    responsibilities: [
      "Developed customer service, communication, sales, and basic business management skills."
    ]
  },
  {
    title: "Sales Representative and Goods Distributor",
    company: "Local Market Distribution",
    icon: <FaBriefcase className="w-5 h-5" />,
    description: "Product distribution and sales in local markets.",
    responsibilities: [
      "Responsible for selling products, collecting payments, and communicating with customers and shop owners.",
      "Developed negotiation, communication, and business skills."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center text-primary z-10 shadow-sm">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className={`bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative ${
                    index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                  }`}>
                    {/* Timeline Dot (Mobile) */}
                    <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {exp.icon}
                    </div>

                    <h3 className="text-xl font-display font-bold text-foreground mb-1">{exp.title}</h3>
                    <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

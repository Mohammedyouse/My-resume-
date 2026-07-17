import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const CERTIFICATIONS = [
  "CCNA – Introduction to Networks",
  "CCNA – Switching, Routing and Wireless Essentials",
  "Introduction to Machine Learning",
  "Data Visualization",
  "Python Programming",
  "Web Development (HTML, CSS, JavaScript, Bootstrap) – Infosys Internship",
  "House Price Prediction using Linear Regression",
  "Fundamentals of Operating Systems"
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {index < 2 ? <FaAward className="w-5 h-5" /> : <FaCertificate className="w-5 h-5" />}
              </div>
              
              <h3 className="font-medium text-foreground text-sm leading-snug group-hover:text-primary transition-colors">
                {cert}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

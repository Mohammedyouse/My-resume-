import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background shadow-xl bg-card flex items-center justify-center overflow-hidden mx-auto">
            <span className="text-4xl md:text-5xl font-display font-bold text-primary">MY</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground mb-4">
            Mohammed Yousef <br className="hidden md:block" />
            <span className="text-primary">Saeed Alhajj</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
            Computer Science & Engineering Student <span className="text-primary mx-2">|</span> AI Engineer & Intelligent Systems Developer
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 italic">
            "Turning data into decisions and code into solutions."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto font-medium rounded-full px-8" asChild>
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium rounded-full px-8" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center gap-6"
        >
          <a
            href="https://github.com/Mohammedyouse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:myousefyemen751@gmail.com"
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

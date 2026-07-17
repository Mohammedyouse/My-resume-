import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground text-sm font-bold font-display">
              MY
            </div>
            <span className="text-lg font-bold font-display">Mohammed Alhajj</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Mohammedyouse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors bg-muted rounded-full"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:myousefyemen751@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors bg-muted rounded-full"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors bg-muted rounded-full disabled opacity-50 cursor-not-allowed"
              aria-label="LinkedIn"
              title="LinkedIn profile not provided"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Mohammed Yousef Saeed Alhajj. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
}

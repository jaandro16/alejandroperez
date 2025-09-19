import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-card/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-muted-foreground'>
              © 2025 Alejandro Pérez. All rights reserved.
            </p>
          </div>

          <div className='flex space-x-6'>
            <a
              href='https://github.com/jaandro16'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors hover-lift'
            >
              <Github size={20} />
            </a>
            <a
              href='https://www.linkedin.com/in/alejandro-pérez-rentero-396033265'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors hover-lift'
            >
              <Linkedin size={20} />
            </a>
            <a
              href='mailto:jandroperezrentero12@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors hover-lift'
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

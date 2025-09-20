'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Download,
  Eye,
  FileText,
  ExternalLink,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const resumeData = {
  personal: {
    name: 'Alejandro Pérez Rentero',
    title: 'Junior Web Developer',
    location: 'Madrid, Spain',
    phone: '+34 673 809 547',
    email: 'jandroperezrentero12@gmail.com',
  },
  experience: [
    {
      title: 'Full-Stack Web Developer',
      company: 'Universidad Politécnica de Madrid',
      period: '2025',
      description:
        'Development of an integrated web platform within the Universidad Politécnica de Madrid system that enables autonomous management of educational resources and classroom reservations between users. Laravel, PostgreSQL',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Freelance',
      period: '2024-2025',
      description:
        'Development of a web application for a business managing orders, users and integrated administration panels for autonomous use of the platform by the business. Next.js, Tailwind CSS, PostgreSQL',
    },
  ],
  education: [
    {
      degree: 'Desarrollo de Aplicaciones Web',
      institution: 'IES Isidra de Guzmán',
      period: '2023 - 2025',
      description:
        'Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web',
    },
  ],
  skills: [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'C#',
    'HTML5',
    'CSS3',
    'Python',
    'Django',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
};

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setPdfUrl('/CV_AlejandroPerezRentero.pdf');

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_AlejandroPerezRentero.pdf';
    link.download = 'CV_AlejandroPerezRentero.pdf';
    link.click();
  };

  const handleViewFullscreen = () => {
    window.open('/CV_AlejandroPerezRentero.pdf', '_blank');
  };

  // Componente para la vista móvil del CV
  const MobileResumeView = () => (
    <div className='space-y-6'>
      {/* Header Personal Info */}
      <Card className='bg-primary/5 border-primary/20'>
        <CardContent className='p-6 text-center'>
          <div className='w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
            <User className='text-primary' size={40} />
          </div>
          <h2 className='text-2xl font-bold text-white mb-2'>
            {resumeData.personal.name}
          </h2>
          <p className='text-primary font-medium mb-4'>
            {resumeData.personal.title}
          </p>

          <div className='space-y-2 text-sm text-muted-foreground'>
            <div className='flex items-center justify-center gap-2'>
              <MapPin size={16} />
              <span>{resumeData.personal.location}</span>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Mail size={16} />
              <span>{resumeData.personal.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className='bg-card border-border'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-white'>
            <Code size={20} className='text-primary' />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-2'>
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20'
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className='bg-card border-border'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-white'>
            <Briefcase size={20} className='text-primary' />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className='border-l-2 border-primary/30 pl-4'>
              <h3 className='font-semibold text-white'>{exp.title}</h3>
              <p className='text-primary font-medium'>{exp.company}</p>
              <p className='text-sm text-muted-foreground mb-2'>{exp.period}</p>
              <p className='text-sm text-muted-foreground'>{exp.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className='bg-card border-border'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-white'>
            <GraduationCap size={20} className='text-primary' />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          {resumeData.education.map((edu, index) => (
            <div key={index} className='border-l-2 border-primary/30 pl-4'>
              <h3 className='font-semibold text-white'>{edu.degree}</h3>
              <p className='text-primary font-medium'>{edu.institution}</p>
              <p className='text-sm text-muted-foreground mb-2'>{edu.period}</p>
              <p className='text-sm text-muted-foreground'>{edu.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'>
        <CardContent className='p-6 text-center'>
          <FileText className='mx-auto mb-4 text-primary' size={40} />
          <h3 className='text-lg font-semibold text-white mb-2'>
            Complete Resume
          </h3>
          <p className='text-muted-foreground mb-4 text-sm'>
            Download the full PDF version for complete details
          </p>
          <div className='grid grid-cols-2 gap-3'>
            <Button onClick={handleDownload} size='sm' className='w-full'>
              <Download className='mr-2' size={16} />
              Download
            </Button>
            <Button
              onClick={handleViewFullscreen}
              variant='outline'
              size='sm'
              className='w-full'
            >
              <ExternalLink className='mr-2' size={16} />
              View PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            Resume
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8'>
            {isMobile
              ? 'View my resume in an optimized mobile format below, or download the PDF version.'
              : 'Download my complete resume or view it directly below. Always updated with my latest experience and skills.'}
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              onClick={handleDownload}
              className='bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow'
            >
              <Download className='mr-2' size={20} />
              Download PDF
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift bg-transparent'
              onClick={() =>
                document
                  .getElementById('resume-preview')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Eye className='mr-2' size={20} />
              View Below
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          id='resume-preview'
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {isMobile ? (
            // Vista móvil optimizada
            <MobileResumeView />
          ) : (
            // Vista desktop con PDF
            <Card className='bg-card border-border overflow-hidden'>
              <CardHeader className='bg-primary/5 border-b border-border'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                  <div className='flex items-center'>
                    <FileText className='text-primary mr-2' size={24} />
                    <CardTitle className='text-xl sm:text-2xl text-center sm:text-left'>
                      CV - Alejandro Pérez Rentero
                    </CardTitle>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Button
                      size='sm'
                      variant='outline'
                      onClick={handleViewFullscreen}
                      className='text-xs'
                    >
                      <ExternalLink size={14} className='mr-1' />
                      Full View
                    </Button>
                    <Button
                      size='sm'
                      variant='outline'
                      onClick={handleDownload}
                      className='text-xs'
                    >
                      <Download size={14} className='mr-1' />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='p-0'>
                <div className='w-full relative'>
                  {pdfUrl && (
                    <iframe
                      src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=FitH`}
                      className='w-full border-0 h-[800px]'
                      title='CV - Alejandro Pérez Rentero'
                      loading='lazy'
                    />
                  )}

                  <noscript>
                    <div className='text-center py-12'>
                      <FileText className='mx-auto h-12 w-12 text-muted-foreground mb-4' />
                      <p className='text-muted-foreground mb-4'>
                        Your browser doesn't support PDF preview.
                      </p>
                      <Button onClick={handleDownload} variant='outline'>
                        <Download className='mr-2' size={16} />
                        Download PDF Instead
                      </Button>
                    </div>
                  </noscript>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Desktop tips */}
          {!isMobile && (
            <div className='mt-4 p-4 bg-muted/30 rounded-lg text-center'>
              <p className='text-sm text-muted-foreground'>
                💡 Use Ctrl+Scroll to zoom • Click and drag to pan • Use
                fullscreen mode for better reading
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p className='text-muted-foreground mb-6'>
            Interested in my profile? Let's discuss how I can contribute to your
            team.
          </p>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 text-primary-foreground hover-lift w-full sm:w-auto'
            asChild
          >
            <a href='mailto:jandroperezrentero12@gmail.com'>Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

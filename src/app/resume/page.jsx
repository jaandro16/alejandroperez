'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, FileText, ExternalLink } from 'lucide-react';

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    setIsVisible(true);
    // Construir la URL del PDF
    setPdfUrl('/CV_AlejandroPerezRentero.pdf');
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
            Download my complete resume or view it directly below. Always
            updated with my latest experience and skills.
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
            {/* <Button
              size='lg'
              variant='outline'
              className='border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift bg-transparent'
              onClick={handleViewFullscreen}
            >
              <ExternalLink className='mr-2' size={20} />
              View Fullscreen
            </Button> */}
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

        {/* PDF Preview */}
        <div
          id='resume-preview'
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Card className='bg-card border-border overflow-hidden'>
            <CardHeader className='bg-primary/5 border-b border-border'>
              <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex items-center'>
                  <FileText className='text-primary mr-2' size={24} />
                  <CardTitle className='text-2xl'>
                    CV - Alejandro Pérez Rentero
                  </CardTitle>
                </div>

                {/* PDF Controls */}
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
              <div className='w-full'>
                {pdfUrl && (
                  <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    className='w-full h-[800px] border-0'
                    title='CV - Alejandro Pérez Rentero'
                    loading='lazy'
                  />
                )}

                {/* Fallback para navegadores que no soportan iframe con PDF */}
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

          {/* Alternative download section for mobile or unsupported browsers */}
          <div className='mt-4 p-4 bg-muted/30 rounded-lg text-center md:hidden'>
            <p className='text-sm text-muted-foreground mb-2'>
              Having trouble viewing the PDF?
            </p>
            <div className='flex flex-col sm:flex-row gap-2 justify-center'>
              <Button size='sm' onClick={handleDownload} variant='outline'>
                <Download className='mr-2' size={16} />
                Download PDF
              </Button>
              <Button
                size='sm'
                onClick={handleViewFullscreen}
                variant='outline'
              >
                <ExternalLink className='mr-2' size={16} />
                Open in New Tab
              </Button>
            </div>
          </div>
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
            className='bg-primary hover:bg-primary/90 text-primary-foreground hover-lift'
            asChild
          >
            <a href='mailto:jandroperezrentero12@gmail.com'>Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

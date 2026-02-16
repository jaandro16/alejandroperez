'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Calendar, Terminal, Shield } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadBadges = async () => {
      try {
        const res = await fetch('/api/credly/badges');
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || 'Failed to load badges.');
        }

        if (isMounted) {
          setCertifications(data.badges || []);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadBadges();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <AnimatedSection className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            Certifications
          </h1>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Professional certifications and badges that validate my expertise in
            cybersecurity, cloud computing, and information technology. Each
            badge links to its Credly verification.
          </p>
        </AnimatedSection>

        {/* Certifications Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {loading && (
            <AnimatedSection>
              <p className='text-muted-foreground'>Loading certifications...</p>
            </AnimatedSection>
          )}

          {error && !loading && (
            <AnimatedSection>
              <p className='text-red-400'>{error}</p>
            </AnimatedSection>
          )}

          {!loading &&
            !error &&
            certifications.map((cert, index) => (
              <AnimatedSection key={cert.id} delay={index * 100}>
                <a
                  href={cert.credlyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full'
                >
                  <Card className='group h-full bg-card border-border hover:border-primary/30 transition-all duration-500 hover-lift overflow-hidden cursor-pointer'>
                    <CardContent className='p-6 flex flex-col h-full'>
                      {/* Badge image area */}
                      <div className='flex justify-center mb-6'>
                        <div className='relative w-32 h-32 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500'>
                          {cert.badgeImage ? (
                            <img
                              src={cert.badgeImage}
                              alt={cert.name}
                              className='w-24 h-24 object-contain'
                              loading='lazy'
                            />
                          ) : (
                            <Award className='text-primary' size={56} />
                          )}
                          <div className='absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors' />
                        </div>
                      </div>

                      {/* Content */}
                      <div className='flex-1'>
                        <div className='text-center mb-4'>
                          <h3 className='text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors'>
                            {cert.name}
                          </h3>
                          <p className='text-primary text-sm font-medium mb-1'>
                            {cert.issuer}
                          </p>

                          {cert.date && (
                            <div className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
                              <Calendar size={12} />
                              <span>{cert.date}</span>
                            </div>
                          )}
                        </div>

                        {/* Skills */}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className='flex flex-wrap gap-2 justify-center'>
                            {cert.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant='secondary'
                                className='text-xs'
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ))}
        </div>

        {/* Info callout */}
        <AnimatedSection className='text-center' delay={400}>
          <div className='p-6 rounded-xl bg-card border border-border max-w-2xl mx-auto'>
            <Terminal className='text-primary mx-auto mb-3' size={24} />
            <p className='text-muted-foreground text-sm leading-relaxed'>
              All certifications are verifiable through Credly. Click on any
              badge to view its authenticity and detailed metadata. More
              certifications coming soon as I continue expanding my
              cybersecurity expertise.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

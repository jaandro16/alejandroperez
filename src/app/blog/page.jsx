'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Terminal,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    slug: 'elimina-tus-deepfakes',
    title: 'Cómo eliminar fotos íntimas deepfakes de internet',
    excerpt:
      'Guía práctica paso a paso para localizar, reportar y eliminar deepfakes de ti en internet. Descubre las herramientas, plataformas y estrategias legales para proteger tu privacidad y recuperar el control de tu imagen.',
    date: '2026-02-17',
    readTime: '3 min',
    category: 'Cybersecurity',
    tags: ['Deepfakes', 'Privacy', 'Digital Safety', 'OSINT'],
    isNew: true,
  },
];

const categories = ['All', 'Web Security'];

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
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

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <AnimatedSection className='text-center mb-16'>
          {/* <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
            <Terminal size={14} className='text-primary' />
            <span className='text-sm text-primary font-mono'>cat /blog/*</span>
          </div> */}
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            Blog
          </h1>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Articles in Spanish about cybersecurity, secure development, and
            everything I learn along the way. Written to share knowledge and
            help the community.
          </p>
        </AnimatedSection>

        {/* Article */}
        <div className='mb-10'>
          {articles.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 80}>
              <Link href={`/blog/${article.slug}`}>
                <Card className='group bg-card/50 border-border hover:border-primary/30 transition-all duration-500 hover-lift cursor-pointer overflow-hidden'>
                  <CardContent className='p-6 sm:p-8'>
                    <div className='flex flex-col gap-4'>
                      {/* Top row: category + NEW badge + date */}
                      <div className='flex items-center justify-between flex-wrap gap-2'>
                        <div className='flex items-center gap-2'>
                          <Badge
                            variant='outline'
                            className='text-[10px] px-2 py-0.5 border-primary/40 text-primary'
                          >
                            {article.category}
                          </Badge>
                          {article.isNew && (
                            <span className='px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground animate-pulse'>
                              NEW
                            </span>
                          )}
                        </div>
                        <div className='flex items-center gap-4 text-xs text-muted-foreground'>
                          <span className='inline-flex items-center gap-1'>
                            <Calendar size={12} />
                            {formatDate(article.date)}
                          </span>
                          <span className='inline-flex items-center gap-1'>
                            <Clock size={12} />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className='text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight'>
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className='text-muted-foreground text-sm leading-relaxed line-clamp-2'>
                        {article.excerpt}
                      </p>

                      {/* Bottom row: tags + read more */}
                      <div className='flex items-end justify-between flex-wrap gap-3'>
                        <div className='flex flex-wrap gap-1.5'>
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className='inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/30 px-2 py-0.5 rounded'
                            >
                              <Tag size={8} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className='inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all'>
                          Read more
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

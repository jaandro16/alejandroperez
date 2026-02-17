'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Terminal,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    slug: 'owasp-top-10-2025',
    title: 'OWASP Top 10 (2025): What Changed and Why It Matters',
    excerpt:
      'A deep dive into the updated OWASP Top 10 list for 2025. We explore the new entries, the reasoning behind the changes, and how to protect your web applications against these critical vulnerabilities.',
    date: '2026-02-10',
    readTime: '8 min',
    category: 'Web Security',
    tags: ['OWASP', 'Web Security', 'Vulnerabilities'],
    isNew: true,
  },
  {
    id: 2,
    slug: 'secure-ci-cd-pipelines',
    title: 'Building Secure CI/CD Pipelines: A SecDevOps Guide',
    excerpt:
      'Learn how to integrate security checks into your CI/CD pipeline from day one. This guide covers SAST, DAST, dependency scanning, and secret management in modern DevOps workflows.',
    date: '2026-02-03',
    readTime: '12 min',
    category: 'SecDevOps',
    tags: ['CI/CD', 'DevSecOps', 'Automation', 'Docker'],
    isNew: true,
  },
  {
    id: 3,
    slug: 'intro-to-dfir',
    title: 'Introduction to DFIR: Your First Incident Response Playbook',
    excerpt:
      'Getting started with Digital Forensics and Incident Response. We cover the fundamentals of evidence collection, chain of custody, and building your first IR playbook for small teams.',
    date: '2026-01-20',
    readTime: '10 min',
    category: 'DFIR',
    tags: ['Forensics', 'Incident Response', 'Blue Team'],
    isNew: false,
  },
  {
    id: 4,
    slug: 'burp-suite-essentials',
    title: 'Burp Suite Essentials: From Proxy to Professional Pentesting',
    excerpt:
      'Master the essential features of Burp Suite for web application penetration testing. Covers proxy setup, scanner configuration, intruder attacks, and repeater workflows.',
    date: '2026-01-10',
    readTime: '15 min',
    category: 'Pentesting',
    tags: ['Burp Suite', 'Pentesting', 'Web Apps', 'Tools'],
    isNew: false,
  },
  {
    id: 5,
    slug: 'linux-hardening-checklist',
    title: 'Linux Server Hardening: The Complete Checklist',
    excerpt:
      'A comprehensive checklist for hardening Linux servers. From SSH configuration and firewall rules to kernel parameters and audit logging, this guide has everything you need.',
    date: '2025-12-15',
    readTime: '11 min',
    category: 'Hardening',
    tags: ['Linux', 'Hardening', 'Sysadmin', 'Security'],
    isNew: false,
  },
  {
    id: 6,
    slug: 'react-xss-prevention',
    title: 'Preventing XSS in React Applications: A Developer Guide',
    excerpt:
      'Cross-site scripting remains one of the most common web vulnerabilities. Learn how React handles XSS by default and where you still need to be careful with dangerouslySetInnerHTML, URLs, and third-party libraries.',
    date: '2025-12-01',
    readTime: '7 min',
    category: 'Secure Development',
    tags: ['React', 'XSS', 'Frontend Security', 'JavaScript'],
    isNew: false,
  },
  {
    id: 7,
    slug: 'volatility-memory-forensics',
    title: 'Memory Forensics with Volatility: Analyzing RAM Dumps',
    excerpt:
      'Learn how to use Volatility framework for memory forensics. We cover acquiring memory images, analyzing processes, network connections, and extracting artifacts from RAM dumps.',
    date: '2025-11-18',
    readTime: '14 min',
    category: 'DFIR',
    tags: ['Volatility', 'Memory Forensics', 'Malware Analysis'],
    isNew: false,
  },
  {
    id: 8,
    slug: 'sql-injection-deep-dive',
    title: 'SQL Injection Deep Dive: Beyond the Basics',
    excerpt:
      'Go beyond simple SQL injection. This article covers blind SQLi, time-based techniques, second-order injection, and advanced exploitation methods with real-world examples.',
    date: '2025-11-05',
    readTime: '13 min',
    category: 'Pentesting',
    tags: ['SQL Injection', 'Databases', 'Pentesting', 'OWASP'],
    isNew: false,
  },
];

const categories = [
  'All',
  'Web Security',
  'Pentesting',
  'SecDevOps',
  'DFIR',
  'Hardening',
  'Secure Development',
];

const ARTICLES_PER_PAGE = 4;

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Sort by date descending (most recent first)
  const sortedArticles = useMemo(
    () => [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  );

  const filteredArticles = useMemo(() => {
    let result = sortedArticles;

    if (selectedCategory !== 'All') {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q),
      );
    }

    return result;
  }, [sortedArticles, selectedCategory, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE),
  );
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <AnimatedSection className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
            <Terminal size={14} className='text-primary' />
            <span className='text-sm text-primary font-mono'>cat /blog/*</span>
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            Blog
          </h1>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Articles about cybersecurity, secure development, pentesting tools,
            and everything I learn along the way. Written to share knowledge and
            help the community.
          </p>
        </AnimatedSection>

        {/* Search & Filters */}
        <AnimatedSection className='mb-10' delay={100}>
          {/* Search bar */}
          <div className='relative mb-6'>
            <Search
              className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
              size={18}
            />
            <input
              type='text'
              placeholder='Search articles by title, content, or tags...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-11 pr-4 py-3 rounded-xl bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs'
                aria-label='Clear search'
              >
                Clear
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className='flex flex-wrap gap-2'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Results count */}
        <AnimatedSection className='mb-6' delay={150}>
          <p className='text-sm text-muted-foreground'>
            {filteredArticles.length === 0
              ? 'No articles found matching your search.'
              : `Showing ${(currentPage - 1) * ARTICLES_PER_PAGE + 1}-${Math.min(currentPage * ARTICLES_PER_PAGE, filteredArticles.length)} of ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''}`}
          </p>
        </AnimatedSection>

        {/* Articles */}
        <div className='space-y-6 mb-10'>
          {paginatedArticles.map((article, index) => (
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

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <AnimatedSection className='text-center py-16'>
            <BookOpen
              className='mx-auto text-muted-foreground mb-4'
              size={48}
            />
            <h3 className='text-xl font-semibold mb-2 text-foreground'>
              No articles found
            </h3>
            <p className='text-muted-foreground text-sm'>
              Try adjusting your search query or selecting a different category.
            </p>
          </AnimatedSection>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <AnimatedSection className='flex items-center justify-center gap-2'>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className='p-2 rounded-lg bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed'
              aria-label='Previous page'
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className='p-2 rounded-lg bg-card/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed'
              aria-label='Next page'
            >
              <ChevronRight size={18} />
            </button>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
